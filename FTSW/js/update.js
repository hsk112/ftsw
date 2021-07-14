function checkUpdating(needTip) {
	
	// 获取本地应用资源版本号
	var wgtVer = null;
	plus.runtime.getProperty(plus.runtime.appid, function(inf) {
		wgtVer = inf.version;
		//console.log("当前应用版本：" + wgtVer);
	});
	
	var checkUrl = config.urls.updateUrl+"version.json";
	if(needTip) {
		app.toast("正在检测更新...")
	}
	$.ajax(checkUrl, {
		data: {},
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
		cache: false, //这里
		ifModified: true, //这里
		success: function(data) {
			console.log(JSON.stringify(data))
			app.hideLoader();
			//console.log('检测更新请求成功：' + JSON.stringify(data));
			var newVer = data.version;
			if(versionCompare(newVer, wgtVer)) {
				var btnArr = data.forceUpdate == true ? ["确定"] : ["确定", "取消"];
				mui.confirm(data.content, data.title, btnArr, function(e) {
					if(e.index == 0) {
						downWgt();
					}   
				}, 'div');
				
			} else {
				if(needTip) { 
					app.toast('当前版本已是最新');
				}
			}
		},
		error: function(xhr, type, errorThrown) {
			app.hideLoader();
			//console.log('检测更新请求失败' + type + ' ' + xhr + " " + errorThrown);
		}
	});
}

function downWgt() {
	//console.log('downWgt');
	var wgtUrl = config.urls.updateUrl+"update.wgt";
	var w = plus.nativeUI.showWaiting("正在下载更新文件...");

	var options = {
		filename: "_doc/update/"
	};
	var dtask = plus.downloader.createDownload(wgtUrl, options, function(d, status) {
		if(status == 200) {
			//console.log("下载wgt成功：" + d.filename);
			mui.later(function() {
				installWgt(d.filename); // 安装wgt包  
			}, 1000)
		} else {
			//console.log("下载wgt失败！");
			app.toast("下载更新资源失败！");
		}
	});

	dtask.addEventListener("statechanged", function(task, status) {
		switch(task.state) {
			case 1: // 开始
				w.setTitle("开始下载...");
				break;
			case 2: // 已连接到服务器
				w.setTitle("已连接到服务器...");
				break;
			case 3:
				var a = task.downloadedSize / task.totalSize * 100;
				w.setTitle("已下载" + parseInt(a) + "%");
				break;
			case 4: // 下载完成
				w.setTitle("下载完成");
				w.close();
				break;
		}
	});
	dtask.start();
}

// 更新应用资源
function installWgt(path) {
	app.showLoaderWithMsg("安装更新文件...");
	plus.runtime.install(path, {}, function() {
		app.hideLoader();
		//console.log("安装wgt文件成功！");
		plus.runtime.restart();
	}, function(e) {
		app.hideLoader();
		app.toast("安装更新文件失败[" + e.code + "]：" + e.message);
	});
}

function versionCompare(v1, v2) {
	//去掉首尾空格
	v1 = v1.replace(/\s/g, '');
	v2 = v2.replace(/\s/g, '');
	//空检查
	if(!v1 || !v2) {
		return;
	}
	//版本比较，我们分为三个数组然后比较
	var arr1 = v1.split('.');
	var arr2 = v2.split('.');

	//console.log("v1:" + JSON.stringify(arr1));
	//console.log("v2:" + JSON.stringify(arr2));

	const arr1_0 = parseInt(arr1[0]);
	const arr1_1 = parseInt(arr1[1]);
	const arr1_2 = parseInt(arr1[2]);
	const arr2_0 = parseInt(arr2[0]);
	const arr2_1 = parseInt(arr2[1]);
	const arr2_2 = parseInt(arr2[2]);

	if(arr1_0 > arr2_0) {
		return true;
	} else if(arr1_0 == arr2_0) {
		if(arr1_1 > arr2_1) {
			return true;
		} else if(arr1_1 == arr2_1) {
			if(arr1_2 > arr2_2) {
				return true;
			} else if(arr1_2 == arr2_2) {
				return false;
			}
		}
	}
	return false;
}