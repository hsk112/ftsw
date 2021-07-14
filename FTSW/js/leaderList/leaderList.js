// 河湖长名录接口接口
//查询接口 参数riverType：河道为1湖泊为2
function inquire(params, callback) {
	// console.log("请求的token",app.sessionId())
	var url = config.urls.baseUrl + 'ft-emergency/hhzDirectories/queryDirectoriesList'
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
// 查询所有河流
function allriver(params, callback) {
	console.log("请求的token",app.sessionId())
	var url = config.urls.baseUrl + 'ft-emergency/devicePsRiver/selectRiver'
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
// 查询所有街道列表
function listAdBase(params, callback) {
	console.log("请求的token",app.sessionId())
	var url = config.urls.baseUrl + 'ft-device/pull/down/listAdBase'
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
// 查询所有社区列表
function community(params, callback) {
	// console.log("请求的token",app.sessionId())
	var url = config.urls.baseUrl + 'ft-device/pull/down/listAdBase'
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
// 查询所有湖泊
function hhDropDown(params, callback) {
	console.log("请求的token",app.sessionId())
	var url = config.urls.baseUrl + 'ft-emergency/devicePsLakes/hhDropDown'
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
// 查询河湖长图片
function lookup(params, callback) {
	console.log("请求的token",app.sessionId())
	var url = config.urls.baseUrl + 'file/cmpFileGroup/findFilesByGroupId'
	// config.urls.baseUrl + 'sys/common/view/' + 'ecidi/8858e381d5504d1d9ec82b305b9a7bd5.jpg'
	// console.log("uuuuu",url)
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