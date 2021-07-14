// 行政管理接口文件
// 行政审批情况统计接口
function statistics(params, callback) {
	// console.log("请求的token",app.sessionId())
	var url = config.urls.baseUrl + 'ft-emergency/statistics/kpi/administration/approve_happening_statistics'
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
// 水保检查统计接口
function happening(params, callback) {
	// console.log("请求的token",app.sessionId())
	var url = config.urls.baseUrl + 'ft-emergency/statistics/kpi/wsconservation/check_happening'
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