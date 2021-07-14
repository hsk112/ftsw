


//根据角色获取项目列表
var getProjectListByRole = function(param,isLoading,callback) {
	var url = config.urls.baseUrl + config.actions.getPrjInfoList//conversationList;

	if(isLoading){
		app.showLoader()
	}
	$.ajax(url, {
		data: param,
		dataType: 'json', //服务器返回json格式数据
		type: 'get',
		// async:false,//HTTP请求类型
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token": app.sessionId()
		},
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
		success: function(data) {
			app.hideLoader();
			if (dealingWithResponseCode(data)) {
				callback(data);
			} else {
				app.toast(data.message);
			}
		},
		error: function(xhr, type, errorThrown) {
			console.error(JSON.stringify(xhr));
			console.error(errorThrown);
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}
	});
}
// 模糊查询
var getPrjInformation = function(param,isLoading,callback) {
	var url = config.urls.baseUrl + config.actions.getPrjInformation//conversationList;

	if(isLoading){
		app.showLoader()
	}
	$.ajax(url, {
		data: param,
		dataType: 'json', //服务器返回json格式数据
		type: 'get',
		// async:false,//HTTP请求类型
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token": app.sessionId()
		},
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
		success: function(data) {
			app.hideLoader();
			if (dealingWithResponseCode(data)) {
				callback(data);
			} else {
				app.toast(data.message);
			}
		},
		error: function(xhr, type, errorThrown) {
			console.error(JSON.stringify(xhr));
			console.error(errorThrown);
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}
	});
}

//获取所有项目
var getPrjInformationList = function (param,callback) {

	var url = config.urls.baseUrl + config.actions.getPrjInformationList


	$.ajax(url, {
		data: param,
		dataType: 'json', //服务器返回json格式数据
		type: 'get',
		// async:false,//HTTP请求类型
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token": app.sessionId()
		},
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
		success: function(data) {
			app.hideLoader();
			if (dealingWithResponseCode(data)) {
				callback(data);
			} else {
				app.toast(data.message);
			}
		},
		error: function(xhr, type, errorThrown) {
			console.error(JSON.stringify(xhr));
			console.error(errorThrown);
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}
	});

}