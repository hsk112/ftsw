
//查询日常教育计划列表
var queryDailyEdu = function(param, callback) {
	var url = config.urls.baseUrl + config.actions.queryDailyEdu;
console.log(JSON.stringify(param))
	app.showLoader();
	$.ajax(url, {
		data: param,
		dataType: 'json', //服务器返回json格式数据
		type: 'get',
		// async:false,//HTTP请求类型
		headers: {
			"Content-Type": "application/json",
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

//查询专项教育计划列表
var querySpecialEdu = function(param, callback) {
	var url = config.urls.baseUrl + config.actions.querySpecialEdu;

	app.showLoader();
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


/**
 * 获取日常教育计划信息
 */
var queryDEByGuid = function(guid,callback){
	var url = config.urls.baseUrl + config.actions.queryDEByGuid;
	let param = {
		guid: guid
	}
	app.showLoader();
	$.ajax(url, {
		data: param,
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token":app.sessionId()
		},
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；	
		success: function(data) {
			// console.log(JSON.stringify(data))
			app.hideLoader();
			if (dealingWithResponseCode(data)) {
				callback(data);
			} else {
				app.toast(data.message);
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
 * 获取专项教育计划信息
 */
var querySEByGuid = function(guid,callback){
	var url = config.urls.baseUrl + config.actions.querySEByGuid;
	
	let param = {
		guid: guid
	}
	app.showLoader();
	$.ajax(url, {
		data: param,
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token":app.sessionId()
		},
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；	
		success: function(data) {
			// console.log(JSON.stringify(data))
			app.hideLoader();
			if (dealingWithResponseCode(data)) {
				callback(data);
			} else {
				app.toast(data.message);
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
 * 新增日常教育计划
 */
var addDailyPlan = function(strFormData,callback) {
	var url = config.urls.baseUrl + config.actions.addDEPlan;
	var params = strFormData;

	app.showLoader();
	$.ajax(url, {
		data: params,
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token": app.sessionId()
		},
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；	
		success: function(data) {
			app.hideLoader();
			if (dealingWithResponseCode(data)) {
				console.log(JSON.stringify(data))
				callback(data);
			} else {
				console.log(JSON.stringify(data))
				app.toast(data.message);
			}
		},
		error: function(xhr, type, errorThrown) {
			console.log(JSON.stringify("error-----"))
			console.log(JSON.stringify(errorThrown))
			console.log(JSON.stringify(type))
			console.log(JSON.stringify(xhr))
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			app.toast("网络异常,请稍后再试");
		}
	});
}

/**
 * 新增专项教育计划
 */
var addSpecialPlan = function(strFormData,callback) {
	var url = config.urls.baseUrl + config.actions.addSEPlan;
	var params = strFormData;

	app.showLoader();
	$.ajax(url, {
		data: params,
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token": app.sessionId()
		},
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；	
		success: function(data) {
			app.hideLoader();
			if (dealingWithResponseCode(data)) {
				console.log(JSON.stringify(data))
				callback(data);
			} else {
				console.log(JSON.stringify(data))
				app.toast(data.message);
			}
		},
		error: function(xhr, type, errorThrown) {
			console.log(JSON.stringify("error-----"))
			console.log(JSON.stringify(errorThrown))
			console.log(JSON.stringify(type))
			console.log(JSON.stringify(xhr))
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			app.toast("网络异常,请稍后再试");
		}
	});
}