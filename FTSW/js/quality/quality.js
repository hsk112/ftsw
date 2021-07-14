$(document).ready(function() {

});
// api
//获取日常巡检列表信息
function getDailyInspection (param,callback){
	// console.log(app.sessionId())
	var url = config.urls.baseUrl + config.actions.getDailyInspection;
	// console.log(url)

	app.showLoader();
	$.ajax(url, {
		data: param,
		// data: "",
		dataType: 'json', //服务器返回json格式数据
		type: 'GET', //HTTP请求类型
		headers: {
			// "Content-Type": "application/json",
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token": app.sessionId(),
		},
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
		success: function(data) {
			app.hideLoader();
			if (dealingWithResponseCode(data)) {
				callback(data);
				// mui.alert(data.message)
			} else {
				app.toast(data.message);
			}
		},
		error: function(xhr, type, errorThrown) {
			var res = xhr.responseText;
			res=JSON.parse(res)
			mui.alert(res.message)
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}
	});
};
//获取质量检查列表数据
function getDailyQualityCheck(param,callback){
	// console.log(app.sessionId())
	var url = config.urls.baseUrl + config.actions.getDailyQualityCheck;
	// console.log(url)
	// var url =`http://zhswtest.ecidi.com/ecidi-cmp/ft-prjManage/projectattendencecheck/projectAttendenceCheck/add`;

	app.showLoader();
	$.ajax(url, {
		data: param,
		// data: "",
		dataType: 'json', //服务器返回json格式数据
		type: 'GET', //HTTP请求类型
		headers: {
			// "Content-Type": "application/json",
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token": app.sessionId(),
		},
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
		success: function(data) {
			app.hideLoader();
			if (dealingWithResponseCode(data)) {
				callback(data);
				// mui.alert(data.message)
			} else {
				app.toast(data.message);
			}
		},
		error: function(xhr, type, errorThrown) {
			var res = xhr.responseText;
			res=JSON.parse(res)
			mui.alert(res.message)
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}
	});
};
function getQualityRectify(param,callback){
	var url = config.urls.baseUrl + config.actions.getQualityRectify;
	// console.log(url)
	// var url =`http://zhswtest.ecidi.com/ecidi-cmp/ft-prjManage/projectattendencecheck/projectAttendenceCheck/add`;

	app.showLoader();
	$.ajax(url, {
		data: param,
		// data: "",
		dataType: 'json', //服务器返回json格式数据
		type: 'GET', //HTTP请求类型
		headers: {
			// "Content-Type": "application/json",
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token": app.sessionId(),
		},
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
		success: function(data) {
			app.hideLoader();
			if (dealingWithResponseCode(data)) {
				callback(data);
				// mui.alert(data.message)
			} else {
				app.toast(data.message);
			}
		},
		error: function(xhr, type, errorThrown) {
			var res = xhr.responseText;
			res=JSON.parse(res)
			mui.alert(res.message)
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}
	});
};

/**
 * 新增日常巡检
 */
var addDailyInspection= function(strFormData,callback) {
	var url = config.urls.baseUrl + config.actions.addQDI;
	var params = strFormData;
	console.log(url)
	console.log(JSON.stringify(params))

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
	var url = config.urls.baseUrl + config.actions.addQualityCheck;
	var params = strFormData;
	console.log(url)
	console.log(JSON.stringify(params))

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
 * 获取日常巡检信息
 */
var queryQDI = function(guid,callback){
	var url = config.urls.baseUrl + config.actions.queryQDI;
	let param = {
		guid : guid
	}
	console.log(url)
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
 * 获取质量检查信息
 */
var queryQualityCheck = function(guid,callback){
	var url = config.urls.baseUrl + config.actions.queryQualityCheck;
	let param = {
		guid : guid
	}
	// console.log(url)
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
//查询质量检查列表
var getInspectionSecCheck = function(param, callback) {
	var url = config.urls.baseUrl + config.actions.getInspectionSecCheck;

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
};
//查询质量整改列表
// var queryReform = function(param, callback) {
// 	var url = config.urls.baseUrl + config.actions.queryReform;


// 	app.showLoader();
// 	￥.ajax(url, {
// 		data: param,
// 		dataType: 'json', //服务器返回json格式数据
// 		type: 'get',
// 		// async:false,//HTTP请求类型
// 		headers: {
// 			"Content-Type": "application/x-www-form-urlencoded",
// 			"X-Access-Token": app.sessionId()
// 		},
// 		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
// 		success: function(data) {
// 			app.hideLoader();
// 			if (dealingWithResponseCode(data)) {
// 				callback(data);
// 			} else {
// 				app.toast(data.message);
// 			}
// 		},
// 		error: function(xhr, type, errorThrown) {
// 			console.error(JSON.stringify(xhr));
// 			console.error(errorThrown);
// 			dealingWithErrorRequest(errorThrown);
// 			app.hideLoader();
// 			return callback('网络异常,请稍后再试');
// 		}
// 	});
// }
/**
 * 获取获取审批信息
 */
var getTaskComment = function(guid,callback){
	var url = config.urls.baseUrl + config.actions.getTaskComment;
	let param = {
		guid : guid
	}
	console.log(url)
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
};
/**
 * 获取质量整改检查项信息
 */
var queryQualitycheckItem = function(guid,callback){
	var url = config.urls.baseUrl + config.actions.queryQualitycheckItem;
	let param = {
		guid : guid
	}
	console.log(url)
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
			console.log('这里是citem回调')
			console.log(data)
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
 * 获取质量整改信息
 */
var queryQualityForm = function(guid,callback){
	var url = config.urls.baseUrl + config.actions.queryQualityForm;
	
	let param = {
		guid : guid
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