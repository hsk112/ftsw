// https://zhswtest.hdec.com/ecidi-cmp/ft-emergency/statistics/kpi/drain/work_happening排水监管工作
function getDrainage(url,params,callback){
	// console.log("url:"+url)
	$.ajax(url, {
		data: params,
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token": app.sessionId(),
		},
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
		success: function(data) {
			if (dealingWithResponseCode(data)) {
				callback(data);
			} else {
				
			}
		},
		error: function(xhr, type, errorThrown) {
			console.log(type)
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		},
		});
		}