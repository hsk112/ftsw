
//查询日常巡检计划列表
var queryDailyCheck = function(param, callback) {
	var url = config.urls.baseUrl + config.actions.queryDailyCheck;

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

//查询安全检查列表
var querySecCheck = function(param, callback) {
	var url = config.urls.baseUrl + config.actions.querySecCheck;

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

//查询安全整改列表
var queryReform = function(param, callback) {
	var url = config.urls.baseUrl + config.actions.queryReform;

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
		guig : guid
	}
	app.showLoader();
	$.ajax(url, {
		data:param,
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
		guig : guid
	}
	app.showLoader();
	$.ajax(url, {
		data:param,
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
 * 新增日常巡检
 */
var addDailyInspection= function(strFormData,callback) {
	var url = config.urls.baseUrl + config.actions.addSDI;
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
 * 新增安全检查
 */
var addCheckForm= function(strFormData,callback) {
	var url = config.urls.baseUrl + config.actions.addCheckForm;
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
			console.log(JSON.stringify(data))
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
 * 新增安全整改
 */
var addSReform = function(strFormData,strAttachment,callback) {
	var url = config.urls.baseUrl + config.actions.addSReform;

	var params = {
		strFlowData: '{"api":"/process/startAndSubmit","processDefinitionKey":"safety_rectify","targetNodeId":null}',
		strFormData: JSON.stringify(strFormData),
		strAttachment: JSON.stringify(strAttachment)
		
	};
	
	// params.strFormData='{"prjCode":"prj79","projectId":"1f75cbfcec81e0ad193cc2a6bf93437d","projectName":"福田智慧水务平台项目","projectNumber":"FT2020001","superviceUnit":"100000033","superviceUnitFullname":"深圳市福田区财政局","buildUnit":"100000037","buildUnitFullname":"深圳市福田区审计事务中心","checkTime":"2020-12-25 15:52:05","rectifyUnitType":1,"checkUnit":"100000046","checkUnitFullname":"深圳市福田区南园街道办事处","checkTeam":"zhang_hx","supervisorOnduty":1,"managerOnduty":1,"chiefEngineerOnduty":1,"checkContent":"scxvcxv测试cxv","isStop":0,"rectifyTime":"2020-12-18 15:52:27","rectifyFile":"b6e5dfbfa1e54367b39cc9b2b4ea8dcb","inputerfullname":"张海新","inputPhone":"18643225559","inputDepartmentFullname":"深圳市福田区水务局.华东数字","inputDepartment":"100000060003","inputDate":"2020-12-17 15:51:35","notifymethod":["massage"],"investigater":"zhang_hx","rectifier":"zhang_hx","supervisor":"zhang_hx","constructorName":"zhang_hx","actualFinishTime":null,"projectQualityRectifyDetailList":[{"checkItemId":"a8e579b8616e570cafa47f94f096a904","problems":"▄█▀█●","problemPhoto":"5e82f25c-f555-4d03-aa6b-2f583079f33d","rectifyRequest":"vcbcvbcvb","rectifyPhoto":"","rectifyComment":"","checkItemName":"df->kiiuyj"}],"checkTeamFullname":"张海新","investigaterFullname":"张海新","rectifierFullname":"张海新","supervisorFullname":"张海新","constructiorFullname":"张海新"}'
	// params.strAttachment='[{"groupId":"b6e5dfbfa1e54367b39cc9b2b4ea8dcb","fileTokens":"","fieldName":"rectifyFile","tableName":"PROJECT_QUALITY_RECTIFY"}]'
	// params.strFlowData='{"api":"/process/startAndSubmit","processDefinitionKey":"project_quality_rectify","targetNodeId":null}'
	// params = JSON.stringify(params)
	console.log(url)
	// console.log(params.strFormData)
	// console.log(params.strAttachment)
	console.log(params)

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
 * 获取日常巡检信息
 */
var querySDI = function(guid,callback){
	var url = config.urls.baseUrl + config.actions.querySDI;
	
	let param = {
		guig : guid
	}
	app.showLoader();
	$.ajax(url, {
		data:param,
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
 * 获取安全检查信息
 */
var queryCheckForm = function(guid,callback){
	var url = config.urls.baseUrl + config.actions.queryCheckForm;
	
	let param = {
		guig : guid
	}
	app.showLoader();
	$.ajax(url, {
		data:param,
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
 * 获取安全整改信息
 */
var querySReform = function(guid,callback){
	var url = config.urls.baseUrl + config.actions.querySReform;
	
	let param = {
		guig : guid
	}
	app.showLoader();
	$.ajax(url, {
		data:param,
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
 * 获取安全整改检查项信息
 */
var queryCItem = function(guid,callback){
	var url = config.urls.baseUrl + config.actions.queryCItem;
	
	let param = {
		guig : guid
	}
	app.showLoader();
	$.ajax(url, {
		data:param,
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
 * 获取获取审批信息
 */
var getTaskComment = function(guid,callback){
	var url = config.urls.baseUrl + config.actions.getTaskComment;
	
	let param = {
		guig : guid
	}
	app.showLoader();
	$.ajax(url, {
		data:param,
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
 * 获取通知公告
 */
var getNotificationList = function(paramPageNo, paramPageSize, callback){
	console.log("进入 security getNotificationList")
	var url = config.urls.baseUrl + config.actions.getNotificationListAllProject;
	console.log("url:" + url);
	console.log(app.sessionId());
	// pageNo=1&pageSize=10
	let param = {
		pageNo: paramPageNo,
		pageSize: paramPageSize
	}
	app.showLoader();

	$.ajax(url, {
		data:param,
		dataType: 'json', //服务器返回json格式数据
		type: 'GET', //HTTP请求类型
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token":app.sessionId()
		},
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
		success: function(data) {
			console.log("security 返回")
			 console.log(JSON.stringify(data))
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
			console.log(JSON.stringify(errorThrown))
			console.log(JSON.stringify(type))
			console.log(JSON.stringify(xhr))

			return callback('网络异常,请稍后再试');
		}
	});
}