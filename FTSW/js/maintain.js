/*
 *  养护
 * */

/*参数*/
//bugSource   缺陷来源*

/**
 * 列表tabs 获取任务列表
 * @param {Object} callback
 * 页面in
 */



/**
 * 结果信息查询  InspectDetailQueryList
 * @param {Object} callback
 * 页面in
 */
var getInspectsaveInspectDetailBatch = function(param, callback) {
	var url = config.urls.baseUrl + config.actions.saveInspectDetailBatch;

	app.showLoader();
	$.ajax(url, {
		data: param,
		// data: "",
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		headers: {
			"Content-Type": "application/json",
			"X-Access-Token": app.sessionId()
			// "X-Access-Token":config.urls.tempToken
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
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}
	});
}




/**
 * 结果信息查询  InspectDetailQueryList
 * @param {Object} callback
 * 页面in
 */
var getInspectInspectDetailQueryList = function(param, callback) {
	var url = config.urls.baseUrl + config.actions.inspectDetailQueryList;

	app.showLoader();
	$.ajax(url, {
		data: param,
		// data: "",
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token": app.sessionId()
			// "X-Access-Token":config.urls.tempToken
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
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}
	});
}

/**
 * 获取任务列表  query
 * @param {Object} callback
 * 页面in
 */
var getMaintainTaskQueryList = function(param, callback) {
	var url = config.urls.baseUrl + config.actions.maintainTaskList;

	app.showLoader();
	$.ajax(url, {
        data: param,
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		headers: {
			"Content-Type": "application/json",
			"X-Access-Token": app.sessionId()
            // "X-Access-Token":config.urls.tempToken
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
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}
	});
}

/**
 * 获取任务根据guid
 * @param {Object} callback
 * 页面in
 */
var getInspectTaskQueryGuid = function(param, callback) {
	var url = config.urls.baseUrl + config.actions.InspectqueryByGuid;

	app.showLoader();
	$.ajax(url, {
		data: param,
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		headers: {
			// "Content-Type": "application/json",
			"X-Access-Token": app.sessionId()
			// "X-Access-Token":config.urls.tempToken
		},
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
		success: function(data) {
			app.hideLoader();
			if (dealingWithResponseCode(data)) {
				callback(data.result);
			} else {
				app.toast(data.message);
			}
		},
		error: function(xhr, type, errorThrown) {
			dealingWithErrorRequest(errorThrown)
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}
	});
}


/**
 * 获取任务列表
 * @param {Object} callback
 * 页面in
 */

var getMaintainTaskList = function(param, callback) {
	var url = config.urls.baseUrl + config.actions.maintainTaskList;
	
	console.log(JSON.stringify(param))
	app.showLoader();
	$.ajax(url, {
	    data: param,
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		headers: {
			"Content-Type": "application/json",
			"X-Access-Token": app.sessionId()
	        // "X-Access-Token":config.urls.tempToken
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
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}
	});
}

var getMaintainObj = function(guid, callback) {
	var url = config.urls.baseUrl + config.actions.queryMaintainByGuid;
	let param = {
		guid: guid
	}
	app.showLoader();
	mui.ajax(url, {
		data : param,
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		headers: {
			"Content-Type": "application/json",
			"X-Access-Token": app.sessionId()
			// "X-Access-Token":config.urls.tempToken
		},
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
		success: function(data) {
			// app.hideLoader();
			if (dealingWithResponseCode(data)) {
				// console.log(222)
				callback(data);
			} else {
				console.log(JSON.stringify(data))
				app.toast(data.message);
			}
		},
		error: function(xhr, type, errorThrown) {
			console.log(JSON.stringify(errorThrown))
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}
	});
}

var StatusStart = function(param, callback) {
	var url = config.urls.baseUrl + config.actions.maintainStart;

	app.showLoader();
	$.ajax(url, {
		data: param,
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		headers: {
			// "Content-Type": "application/json",
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
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}
	});
}
