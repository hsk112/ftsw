class checkUpdate {
	constructor() {
		this.totalSize = 0;
		this.baifen = 0;
		this.wgtUrl = ''//存放最新版本地址
	}
	getAppInfo() {
		var that = this;
		mui.getJSON("manifest.json", null, function(list) {
			// console.log(JSON.stringify(list.version))		
			linkToCheck(list.version.name).then((res) => {	
				console.log(JSON.stringify(res.data.buildHaveNewVersion))
				if (res.data.buildHaveNewVersion) {
					//'103从后台传过来 版本号'
					mui.toast('不是最新版本,正在下载最新版本...');
					// plus.nativeUI.showWaiting("正在下载...")
					that.downLoadFn(res.data.downloadURL)
				}
				// else{
				// 	//最新版本
				// 	mui.toast('是最新版本')
				// }
			})
		});
		console.log('这里是获取app最新消息')
	};
	checkNewFn() {
		// var timer = setInterval(()=>{
		// 	this.baifen+=1;
		// 	$('#baifen').text(this.baifen);
		// 	$('.progress_background ').css('width',this.baifen+'%')
		// 	if(this.baifen>=100){
		// 		clearInterval(timer)
		// 	}
		// },500)
		// console.log('这里是检查是否最新版本');
		this.getAppInfo();
	};
	downLoadFn(wgtUrl) {		
		console.log('这里是下载最新版本方法',wgtUrl);
		var that = this;
		var task = plus.downloader.createDownload(wgtUrl, {}, function(download, status) { //安装到手机的目录
			if (status == 200) {
				plus.runtime.install(download.filename); // 安装下载的apk文件
			} else {
				mui.toast("下载更新失败！");
				plus.nativeUI.closeWaiting();
			}
		});
		
		//监听进度变化 
		task.addEventListener("statechanged", function(download, status) {
			// console.log(download);
			// console.log(status);
			switch (download.state) {
				case 2:
					plus.nativeUI.showWaiting("正在下载...");
					break;
				case 3:
					//进度条百分比 totalSize为总量，baifen为当前下载的百分比 获取到的totalSize 和baifen 可以在界面定义自己顶一个加载
					if (that.totalSize == 0) {
						that.totalSize = parseInt(download.totalSize);
					}
					if (parseInt(download.downloadedSize / that.totalSize * 100) != that.baifen) {
						that.baifen = parseInt(download.downloadedSize / that.totalSize * 100);
					};
					// console.log('正在下载'+that.baifen);
					
					break;
				case 4:
					mui.toast("下载完成");
					plus.nativeUI.closeWaiting();
					break;
			}
		});
		task.start();//下载
	}
}

function linkToCheck(version) {
	return new Promise((resolve, reject) => {
		var url = 'https://www.pgyer.com/apiv2/app/check'; //检查版本更新的接口地址 判断返回来的版本号是不是一致就行 然后还需要一个下载地址赋值给this.wgtUrl
		var params = {
			_api_key: 'e6fde444136ba84993392cc5d7ff953a',
			appKey: 'ab0eab8f8c44f7eb2707b560e8f9f37d',
			buildVersion: version
		}
		console.log(JSON.stringify(params))
		app.showLoader();
		$.ajax(url, {
			data: params,
			dataType: 'json', //服务器返回json格式数据
			type: 'POST',
			// async:false,//HTTP请求类型
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				"X-Access-Token": app.sessionId()
			},
			timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
			success: function(data) {
				// console.log(JSON.stringify(data))
				app.hideLoader();
				resolve(data)
			},
			error: function(xhr, type, errorThrown) {
				console.error(errorThrown);
				dealingWithErrorRequest(errorThrown);
				app.hideLoader();
				reject()
			}
		});
	})

};
