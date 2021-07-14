// 管网运维接口
// 运维养护工作情况统计接口
function maintenanceWork(params, callback) {
	// console.log("请求的token",app.sessionId())
	var url = config.urls.baseUrl + 'ft-new-device/dataStatistics/maintenanceWork'
	// var url = "https://zhswtest.hdec.com/ecidi-cmp/ft-emergency/statistics/kpi/flood_protection/work_detail_statistics"
	// console.log("url:"+url)
	// console.log("params:"+JSON.stringify(params))
	$.ajax(url, {
		data: params,
		// data: "",
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token": app.sessionId(),
		},
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
		success: function(data) {
			// console.log("回调的",data)
			// app.hideLoader();
			if (dealingWithResponseCode(data)) {
				callback(data);

				// mui.alert(data.message)
			} else {
				// app.toast(data.message);
			}
		},
		error: function(xhr, type, errorThrown) {
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}
	});
}
// 养护管道统计接口
function pipeline(params, callback) {
	// console.log("请求的token",app.sessionId())
	var url = config.urls.baseUrl + 'ft-device/kpi/maintenance/statistics'
	// var url = "https://zhswtest.hdec.com/ecidi-cmp/ft-emergency/statistics/kpi/flood_protection/work_detail_statistics"
	// console.log("url:"+url)
	// console.log("params:"+JSON.stringify(params))
	$.ajax(url, {
		data: params,
		// data: "",
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token": app.sessionId(),
			// "X-Access-Token":'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjQ1MDM2NjYsInVzZXJuYW1lIjoibGluX3lyIn0.osjHYicfH-ahFoFcdO-LC2gky4j-2rPPFjnH4YdgUqc'
		},
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
		success: function(data) {
			// console.log("回调的",data)
			// app.hideLoader();
			if (dealingWithResponseCode(data)) {
				callback(data);

				// mui.alert(data.message)
			} else {
				// app.toast(data.message);
			}
		},
		error: function(xhr, type, errorThrown) {
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}
	});
}
// 巡检任务完成率统计接口
function xunjian(params, callback) {
	// console.log("请求的token",app.sessionId())
	var url = config.urls.baseUrl + 'ft-new-device/dataStatistics/onsite_finish_rate'
	// var url = "https://zhswtest.hdec.com/ecidi-cmp/ft-emergency/statistics/kpi/flood_protection/work_detail_statistics"
	// console.log("url:"+url)
	// console.log("params:"+JSON.stringify(params))
	$.ajax(url, {
		data: params,
		// data: "",
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token": app.sessionId(),
			// "X-Access-Token":'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjQ1MDM2NjYsInVzZXJuYW1lIjoibGluX3lyIn0.osjHYicfH-ahFoFcdO-LC2gky4j-2rPPFjnH4YdgUqc'
		},
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
		success: function(data) {
			// console.log("回调的",data)
			// app.hideLoader();
			if (dealingWithResponseCode(data)) {
				callback(data);

				// mui.alert(data.message)
			} else {
				// app.toast(data.message);
			}
		},
		error: function(xhr, type, errorThrown) {
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}
	});
}
// 养护指标接口
function conserve(params, callback) {
	// console.log("请求的token",app.sessionId())
	var url = config.urls.baseUrl + 'ft-device/kpi/maintenance/indicators'
	// var url = "https://zhswtest.hdec.com/ecidi-cmp/ft-emergency/statistics/kpi/flood_protection/work_detail_statistics"
	// console.log("url:"+url)
	// console.log("params:"+JSON.stringify(params))
	$.ajax(url, {
		data: params,
		// data: "",
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token": app.sessionId(),
			// "X-Access-Token":'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjQ1OTA5NDksInVzZXJuYW1lIjoiY2hlbmxvbmdmdSJ9.GpwsysYEbLXOemSrBlLUc2K-oZxfiY4flsnmbGyqp_8'
		},
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
		success: function(data) {
			// console.log("回调的",data)
			// app.hideLoader();
			if (dealingWithResponseCode(data)) {
				callback(data);

				// mui.alert(data.message)
			} else {
				// app.toast(data.message);
			}
		},
		error: function(xhr, type, errorThrown) {
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}
	});
}