$(document).ready(function() {
	let weidata = {
		person: [{
				name: '刘羽西',
				state: 0, //0代表未打卡
				count: 3
			},
			{
				name: '何志光',
				state: 0, //0代表未打卡
				count: 1
			},
			{
				name: '贺喜喜',
				state: 0, //0代表未打卡
				count: 3
			},
		],
		total: 3
	};
	let yidata = {
		total: 3
	}
	// handleWei();
	// handleyi();
});
// api 方法
	function attendancelist(param, callback) {
		console.log(app.sessionId())
		var url = config.urls.baseUrl + config.actions.attendancelist;
	
		app.showLoader();
		$.ajax(url, {
			data: param,
			dataType: 'json', //服务器返回json格式数据
			type: 'GET', //HTTP请求类型
			headers: {
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
	attendancelist()
