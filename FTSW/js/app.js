
function needImage(param,callback) {
	var url = config.urls.baseUrl + config.actions.needImage;

	app.showLoader();
	mui.ajax(url, {
		data: param,
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token": app.sessionId(),
		},
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
		success: function(data) {
			app.hideLoader();
			if (dealingWithResponseCode(data)) {
				// //console.log(data);
				callback(data);
			} else {
				app.toast(data.message);
				// console.log(data.message)
			}
		},
		error: function(xhr, type, errorThrown) {
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}
	});
}
/**
 * @param {Object} $
 * @param {Object} owner
 * 封装基本的请求方式
 */
(function($, w, owner) {

	var openw = null;
	var ws = null;

	/**
	 * 用户登录
	 **/
	owner.login = function(loginInfo, callback) {
		callback = callback || $.noop;
		loginInfo = loginInfo || {};
		loginInfo.account = loginInfo.account || '';
		loginInfo.password = loginInfo.password || '';
		if (loginInfo.account.length < 1) {
			return callback('用户名不能为空');
		}
		if (loginInfo.password.length < 1) {
			return callback('密码不能为空');
		}
		if (loginInfo.imageCode && loginInfo.imageCode.length < 1) {
			return callback('验证码不能为空');
		}
		var url;
		var headers;
		var params = {};
		params.username = loginInfo.account;
		params.password = loginInfo.password;
		// params.isMobile = "true";
		if(loginInfo.imageCode) {
			params.imageCode = loginInfo.imageCode;
			params.key = loginInfo.key;
		}

		console.log(JSON.stringify(params));
		var backPubKey;
		var sm2Url = config.urls.baseUrl + config.actions.getciphertext;
		// console.log("url:"+sm2Url)
		owner.showLoader();
		$.ajax(sm2Url, {
			type: 'get', //HTTP请求类型
			timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
			success: function(data) {
				// console.log("success")
				let loginParams;
				console.log(sm2Url)
				console.log(JSON.stringify(data))
				if (data.result && data.result.data) {
					url = config.urls.baseUrl + config.actions.loginEncry;
					headers = {
						"Content-Type": "application/x-www-form-urlencoded",
						"from": 'gateway'
					};

					backPubKey = data.result.data;

					var genKey = aesUtil.genKey();
					localStorage.setItem('pro__Current-GenKey', JSON.stringify({ value: genKey }));
					// localStorage.setItem("pro__Current-GenKey", genKey);

					var sm4 = new Sm4utils(genKey);
					let loginParamsAes = sm4.encryptData_ECB(JSON.stringify(params));

					var genKeyRsa = '04' + sm2.doEncrypt(genKey, backPubKey, 0);

					loginParams = {
						backPub: backPubKey,
						sm4Key: genKeyRsa,
						data: loginParamsAes
					};
				} else {
					localStorage.removeItem("pro__Current-GenKey");
					url = config.urls.baseUrl + config.actions.login;
					headers = {
						"Content-Type": "application/json",
						"from": 'gateway'
					}
					loginParams = params;
				}
				console.log(JSON.stringify(loginParams));
				$.ajax(url, {
					data: loginParams,
					dataType: 'json', //服务器返回json格式数据
					type: 'post', //HTTP请求类型
					headers: headers,
					timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
					success: function(data) {
						owner.setState(null);
						owner.hideLoader();
                        // console.log(JSON.stringify(data))
						if (!data.success) {
							console.log(JSON.stringify(data))
							// if(data.message == '验证码已过期'){
							// 	return callback('验证码错误')
							// }else return
							callback(data.message);
						} else {

							let sm4Key = localStorage.getItem("pro__Current-GenKey");

							if (sm4Key) {
								var sm4Result = new Sm4utils(JSON.parse(sm4Key).value);
								let loginRes = sm4Result.decryptData_ECB(data.result)
								console.log(sm4Result)
								return owner.createState(JSON.parse(loginRes), loginInfo, callback);
							} else {
								localStorage.removeItem("pro__Current-GenKey");
								return owner.createState(data.result, loginInfo, callback);
							}
						}
					},
					error: function(xhr, type, errorThrown) {
						dealingWithErrorRequest(errorThrown);
						owner.hideLoader();
						return callback('网络异常,请稍后再试');
					}
				});
			},
			error: function(xhr, type, errorThrown) {
				owner.hideLoader();
				console.log(JSON.stringify(errorThrown))
				console.log(JSON.stringify(type))
				console.log(JSON.stringify(xhr))
				return callback('网络异常,请稍后再试');
			}
        });
	};

	/**
	 * 获取验证码
	 **/
	owner.getCode = function(dom, codeId, callback) {
		callback = callback || $.noop || '';
		owner.showLoader();
		var codeUrl = config.urls.baseUrl + config.actions.code;
		let params = { key: codeId };

		console.log("验证码："+codeUrl)
		console.log("params："+JSON.stringify(params))
		$.ajax(codeUrl, {
			data: params,
			type: 'get', //HTTP请求类型
			timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
			success: function(data) {
				if(data) {
					var imgData = data.result;
					dom.src = imgData;
					owner.hideLoader();
				} else {
					owner.hideLoader();
					return callback('无法获取验证码，请点击重新获取');
				}
			},
			error: function(xhr, type, errorThrown) {
				owner.hideLoader();
				return callback('无法获取验证码，请点击重新获取');
			}
		});
	}

	/**
	 * 修改密码
	 **/
	owner.updatePassword = function(accInfo, callback) {
		var opwd = accInfo.oldpassword || '';
		var pwd = accInfo.password || '';
		var cpwd = accInfo.checkPassword || '';

		if (opwd.length == 0) {
			owner.toast("旧密码输入有误");
			return;
		}

		if (pwd.length == 0) {
			owner.toast("密码不能为空");
			return;
		}

		if (pwd.length < 8) {
			owner.toast("密码最短需要 8 个字符");
			return;
		}

		if (pwd != cpwd) {
			owner.toast("密码两次输入不一致");
			return;
		}

		if (!CheckPassWord(pwd)) {
			owner.toast("密码必须包含字母和数字");
			return;
		}
		var url = config.urls.baseUrl + config.actions.updatePwd;
		var params = {
			id: owner.userInfo().id,
			username: owner.userInfo().username,
			oldpassword: opwd,
			password: pwd
		};

		owner.showLoader();
		$.ajax(url, {
			data: params,
			dataType: 'json', //服务器返回json格式数据
			type: 'post', //HTTP请求类型
			timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
			headers: {
				"Content-Type": "application/json",
				"X-Access-Token": owner.sessionId()
			},
			success: function(data) {
				// console.log(JSON.stringify(data))
				owner.hideLoader();
				if (dealingWithResponseCode(data)) {
					callback(data);
				} else {
					app.toast(data.message);
				}
			},
			error: function(xhr, type, errorThrown) {
				dealingWithErrorRequest(errorThrown);
				owner.hideLoader();
				return callback('用户名或密码错误');
			}
		});
	};

	owner.createState = function(result, loginInfo, callback) {
		var state = owner.getState();
		if (state == null) {
			state = {};
		}
		// console.log(result)
		state.account = loginInfo.account;
		state.userInfo = result.userInfo;
		state.corporationInfo = result.corporationInfo;
		state.depart = result.depart;
		state.sid = result.token;
		owner.setState(state);
		// console.log(JSON.stringify(state))
		return callback();
	};

	/**
	 * 获取当前状态
	 **/
	owner.getState = function() {
		var stateText = localStorage.getItem('$state') || "{}";

		return JSON.parse(stateText);
	};

	/**
	 * 设置当前状态
	 **/
	owner.setState = function(state) {
		state = state || {};
		localStorage.setItem('pro__Access-Token', JSON.stringify({ value: state.sid }));
		// console.log(localStorage.getItem('pro__Access-Token'))
		localStorage.setItem('$state', JSON.stringify(state));
		// if(state.sid) localStorage.setItem("pro__Current-GenKey",state.sid)
		// else localStorage.removeItem("pro__Current-GenKey")
	};

	/**
	 * 获取当前sessionID
	 **/
	owner.sessionId = function() {
		// 本地测试参数
		if (config.urls.tempToken) {
			return config.urls.tempToken;
		}
		// 本地测试参数
		var stateText = localStorage.getItem('$state') || "{}";
		if (stateText == "{}") {
			return ""
		} else {
			return JSON.parse(stateText).sid;
		}
	};

	/**
	 * 获取当前userInfo
	 **/
	owner.userInfo = function() {
		// 本地测试参数
		var stateText = localStorage.getItem('$state') || "{}";
		if (stateText == "{}") {
			return ""
		} else {
			return JSON.parse(stateText).userInfo;
		}
	};


	/**
	 * 获取当前depart
	 **/
	owner.depart = function() {
		// 本地测试参数
		var stateText = localStorage.getItem('$state') || "{}";
		if (stateText == "{}") {
			return ""
		} else {
			return JSON.parse(stateText).depart;
		}
	};
	/**
	 * 设置应用本地配置
	 **/
	owner.setSettings = function(settings) {
		settings = settings || {};
		localStorage.setItem('$settings', JSON.stringify(settings));
	}


	/**
	 * 获取应用本地配置
	 **/
	owner.getSettings = function() {
		var settingsText = localStorage.getItem('$settings') || "{}";
		return JSON.parse(settingsText);
	}

	/**
	 * 显示加载器
	 */
	owner.showLoaderWithMsg = function(msg) {
		if (mui.os.plus) {
			plus.nativeUI.showWaiting(msg);
		} else {
			mui.showLoading(msg, "div");
		}
	}

	/**
	 * 显示加载器
	 */
	owner.showLoader = function() {
		if (mui.os.plus) {
			plus.nativeUI.showWaiting("正在加载...");
		} else {
			mui.showLoading("正在加载...", "div");
		}

		setTimeout(function() {
			owner.hideLoader();
		}, 60 * 1000);
	}

	/**
	 * 隐藏加载器
	 */
	owner.hideLoader = function() {
		if (mui.os.plus) {
			plus.nativeUI.closeWaiting();
		} else {
			mui.hideLoading();
		}
	}

	/**
	 * 提示
	 */
	owner.toast = function(msg) {
		if (mui.os.plus) {
			plus.nativeUI.toast(msg);
		} else {
			mui.toast(msg, {
				duration: 'long',
				type: 'div'
			})
		}
	}


	//显示加载框
	$.showLoading = function(message, type) {
		if ($.os.plus && type !== 'div') {
			$.plusReady(function() {
				plus.nativeUI.showWaiting(message);
			});
		} else {
			var html = '';
			html += '<i class="mui-spinner mui-spinner-white"></i>';
			html += '<p class="text">' + (message || "数据加载中") + '</p>';

			//遮罩层
			var mask = document.getElementsByClassName("mui-show-loading-mask");
			if (mask.length == 0) {
				mask = document.createElement('div');
				mask.classList.add("mui-show-loading-mask");
				document.body.appendChild(mask);
				mask.addEventListener("touchmove", function(e) {
					e.stopPropagation();
					e.preventDefault();
				});
			} else {
				mask[0].classList.remove("mui-show-loading-mask-hidden");
			}
			//加载框
			var toast = document.getElementsByClassName("mui-show-loading");
			if (toast.length == 0) {
				toast = document.createElement('div');
				toast.classList.add("mui-show-loading");
				toast.classList.add('loading-visible');
				document.body.appendChild(toast);
				toast.innerHTML = html;
				toast.addEventListener("touchmove", function(e) {
					e.stopPropagation();
					e.preventDefault();
				});
			} else {
				toast[0].innerHTML = html;
				toast[0].classList.add("loading-visible");
			}
		}
	};

	//隐藏加载框
	$.hideLoading = function(callback) {
		if ($.os.plus) {
			$.plusReady(function() {
				plus.nativeUI.closeWaiting();
			});
		}
		var mask = document.getElementsByClassName("mui-show-loading-mask");
		var toast = document.getElementsByClassName("mui-show-loading");
		if (mask.length > 0) {
			mask[0].classList.add("mui-show-loading-mask-hidden");
		}
		if (toast.length > 0) {
			toast[0].classList.remove("loading-visible");
			callback && callback();
		}
	}

	owner.openPage = function(url, ws, extras) {
		// console.log("currentWebview: "+ url);
		// console.log("currentWebview: "+JSON.stringify(ws));
		// console.log("currentWebview: "+JSON.stringify(extras));
		// mui.openWindow({
		// 	url: url,
		// 	id: url,
		// 	createNew:true,
		// 	show: {
		// 		aniShow: 'pop-in',
		// 	}
		// });
		if (openw) { //避免多次打开同一个页面
			return null;
		}
		owner.showLoader();
		ws = ws || {};
		ws.scrollIndicator || (ws.scrollIndicator = 'none');
		ws.scalable || (ws.scalable = false);
		ws.backButtonAutoControl || (ws.backButtonAutoControl = 'close');
		ws.titleNView = ws.titleNView || {
			autoBackButton: true
		};
		// ws.titleNView.backgroundColor = '#337BFC';
		ws.titleNView.backgroundColor = '#354052';//标题栏颜色
		ws.titleNView.titleColor = '#FFFFFF';
		ws.closePage = ws.closePage || "false";
		openw = plus.webview.create(url, url, ws, extras);
		openw.addEventListener('loaded', function() {
			owner.hideLoader();
			openw.show("pop-in");
		}, false);
		openw.addEventListener('close', function() {
			openw = null;
		}, false);
		// if (ws.closePage) {
		// 	console.log("currentWebview: ", JSON.stringify(plus.webview.currentWebview().id));
		// 	// if ("view/commom/barcode_scan.html" == plus.webview.currentWebview().id) {
		// 		// setTimeout(function() {
		// 		// 	plus.webview.currentWebview().close('none');
		// 		// }, 3000);
		// 	// }
		// }
		return openw;
	}

	// 处理点击事件
	owner.createWithoutTitle = function(id, ws) {
		if (openw) { //避免多次打开同一个页面
			return null;
		}
		if (w.plus) {
			ws = ws || {};
			ws.scrollIndicator || (ws.scrollIndicator = 'none');
			ws.scalable || (ws.scalable = false);
			ws.backButtonAutoControl || (ws.backButtonAutoControl = 'close');
			openw = plus.webview.create(id, id, ws);
			openw.addEventListener('close', function() {
				openw = null;
			}, false);
			return openw;
		} else {
			w.open(id);
		}
		return null;
	}

	//64转file
	owner.baseImgFile = function(uid, base64, quality, callback) {
		quality = quality || 10;
		callback = callback || $.noop;
		var bitmap = new plus.nativeObj.Bitmap();
		// 从本地加载Bitmap图片
		bitmap.loadBase64Data(base64, function() {
			//    console.log('加载图片成功');
			bitmap.save("_doc/" + uid + ".jpg", {
				overwrite: true,
				quality: quality
			}, function(i) {
				callback(i);
				//    console.log('保存图片成功：'+JSON.stringify(i));
			}, function(e) {
				console.log('保存图片失败：' + JSON.stringify(e));
			});
		}, function(e) {
			console.log('加载图片失败：' + JSON.stringify(e));
		});
	}

}(mui, window, window.app = {}));
