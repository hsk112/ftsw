// 防洪排涝接口
// 防洪排涝工作详情统计接口
function detail(params, callback) {
	// console.log("请求的token",app.sessionId())
	var url = config.urls.baseUrl + 'ft-emergency/statistics/kpi/flood_protection/work_detail_statistics'
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
// 年度防洪排涝及降雨统计接口
function statistics(params, callback) {
	// console.log("请求的token",app.sessionId())
	var url = config.urls.baseUrl + 'ft-emergency/statistics/kpi/flood_protection/event_count_statistics'
	// var url = "https://zhswtest.hdec.com/ecidi-cmp/ft-emergency/statistics/kpi/flood_protection/event_count_statistics"
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
			// "X-Access-Token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MjQ0MTUwODcsInVzZXJuYW1lIjoiQTAxYWRtaW4ifQ.-gRx3vp5rp2iCozyymqkZP9sU9ClofasZXizV5SYpIA"
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
// 仓库物资统计接口
function warehouse(params, callback) {
	// console.log("请求的token", app.sessionId())
	var url = config.urls.baseUrl + 'ft-emergency/statistics/kpi/flood_protection/warehouse_supplies_statistics'
	// var url = "https://zhswtest.hdec.com/ecidi-cmp/ft-emergency/statistics/kpi/flood_protection/warehouse_supplies_statistics"
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
// 专家统计图接口
function expert(params, callback) {
	// console.log("请求的token",app.sessionId())
	var url = config.urls.baseUrl + 'ft-emergency/expert/statisticalChart'
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
// 获取仓库物资统计下面的物资类型接口
function wztype(params, callback) {
	// console.log("请求的token",app.sessionId())
	var url = config.urls.baseUrl + 'sys/dict/getDictItems/EGY_MATERIAL_TYPE'
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
			// console.log("回调的",JSON.stringify(data))
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
// 超警戒水位次数统计（通过响应数据统计）
function heliusk(params, callback) {
	// console.log("请求的token",app.sessionId())
	var url = config.urls.baseUrl + 'ft-emergency/statistics/kpi/flood_protection/overWaterStage_statistics_bar'
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
			// console.log("回调的",JSON.stringify(data))
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
