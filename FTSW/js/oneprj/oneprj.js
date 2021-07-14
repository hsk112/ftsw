//api
function getMonsContractPaymentInfo(param,callback){
	// console.log("-------")
	var url = config.urls.baseUrl + config.actions.getMonsContractPaymentInfo;
	// console.log(JSON.stringify(param))
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
}
function getProjectQualityResult(param,callback){
	var url = config.urls.baseUrl + config.actions.getProjectQualityResult;
	// var url =`http://zhswtest.ecidi.com/ecidi-cmp/ft-prjManage/projectattendencecheck/projectAttendenceCheck/add`;

	app.showLoader();
	$.ajax(url, {
		data: param,
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
			if(data){
				if (dealingWithResponseCode(data)) {
					callback(data);
					// mui.alert(data.message)
				} else {
					app.toast(data.message);
				}
			}
		},
		error: function(xhr, type, errorThrown) {
			// var res = xhr.responseText;
			// res=JSON.parse(res)
			// mui.alert(res.message)
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}
	});
}
function getSafetyQualityResult(param,callback){
	// console.log(app.sessionId())
	var url = config.urls.baseUrl + config.actions.getSafetyQualityResult;
	// console.log(url)
	// var url =`http://zhswtest.ecidi.com/ecidi-cmp/ft-prjManage/projectattendencecheck/projectAttendenceCheck/add`;

	app.showLoader();
	$.ajax(url, {
		data: param,
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
			if(data){
				if (dealingWithResponseCode(data)) {
					callback(data);
					// mui.alert(data.message)
				} else {
					app.toast(data.message);
				}
			}
		},
		error: function(xhr, type, errorThrown) {
			// var res = xhr.responseText;
			// res=JSON.parse(res)
			// mui.alert(res.message)
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}
	});
};
function getqueryLeastPlan(param,callback){
	//获取前期进度信息 
	// console.log(app.sessionId())
	var url = config.urls.baseUrl + config.actions.getqueryLeastPlan;

	app.showLoader();
	$.ajax(url, {
		data: param,
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
			// var res = xhr.responseText;
			// res=JSON.parse(res)
			// mui.alert(res.message)
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		} 
	});
}
function getProphaseStageInfoByPlanId(param,callback){
	//获取项目进度反馈信息
	// console.log(app.sessionId())
	var url = config.urls.baseUrl + config.actions.getProphaseStageInfoByPlanId;
	// console.log(url)
	// var url =`http://zhswtest.ecidi.com/ecidi-cmp/ft-prjManage/projectattendencecheck/projectAttendenceCheck/add`;

	app.showLoader();
	$.ajax(url, {
		data: param,
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
			// var res = xhr.responseText;
			// res=JSON.parse(res)
			// mui.alert(res.message)
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}
	});
}
function getLeastPlanByProjectId(param,callback){
	//获取施工计划信息
	// console.log(app.sessionId())
	var url = config.urls.baseUrl + config.actions.getLeastPlanByProjectId;
	// console.log(url)

	app.showLoader();
	$.ajax(url, { 
		data: param,
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
			// var res = xhr.responseText;
			// res=JSON.parse(res)
			// mui.alert(res.message)
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}
	});
}
function getProjectPackageScheduleByPlanId(param,callback){
	//获取项目进度反馈信息
	// console.log(app.sessionId())
	var url = config.urls.baseUrl + config.actions.getProjectPackageScheduleByPlanId;
	// console.log(url)
	// var url =`http://zhswtest.ecidi.com/ecidi-cmp/ft-prjManage/projectattendencecheck/projectAttendenceCheck/add`;

	app.showLoader();
	$.ajax(url, {
		data: param,
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
			// var res = xhr.responseText;
			// res=JSON.parse(res)
			// mui.alert(res.message)
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}
	});
}