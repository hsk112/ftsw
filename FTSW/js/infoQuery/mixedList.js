var getMixedList = function(pageNo, pageSize, callback) {
	var url;
	url = config.urls.baseUrl + config.actions.queryMixedList;
	let param = {
		 pageNo :pageNo,
		 pageSize: pageSize
	}
	app.showLoader();
	$.ajax(url, {
		data: param,
		dataType: 'json',
		type: 'get',
		headers: {
			// "Content-Type": "application/x-www-form-urlencoded",
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token": app.sessionId()
		},
		timeout: config.settings.requestTimeOut,
		success: function(data) {
			app.hideLoader();
			if (dealingWithResponseCode(data)) {
				callback(data);
			} else {
				app.toast(data.message)
			}
		},
		error: function(xhr, type, errorThrow) {
			dealingWithErrorRequest(errorThrow);
			app.hideLoader();
			app.toast("请求失败，请稍后重试")
		}
	})
}

var getMixedList2 = function(param, callback) {
    var url;
    url = config.urls.baseUrl + config.actions.queryMixedList;
    app.showLoader();
	console.log("hj-url:"+url)
	console.log("hj-param:"+JSON.stringify(param))
    $.ajax(url, {
        data: param,
        dataType: 'json',
        type: 'get',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Access-Token": app.sessionId()
        },
        timeout: config.settings.requestTimeOut,
        success: function(data) {
            app.hideLoader();
            if (dealingWithResponseCode(data)) {
                callback(data);
            } else {
                app.toast(data.message)
            }
        },
        error: function(xhr, type, errorThrow) {
            dealingWithErrorRequest(errorThrow);
            app.hideLoader();
            app.toast("请求失败，请稍后重试")
        }
    })
}

var getMixedListByAddress = function(pageNo, pageSize, address, callback) {
	var url = config.urls.baseUrl + config.actions.queryMixedList;

	var param = {
		pageNo : pageNo,
		pageSize : pageSize,
		inCommName :  address,
	}
	app.showLoader();
	$.ajax(url, {
		data: param,
		dataType: 'json',
		type: 'get',
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token": app.sessionId()
		},
		timeout: config.settings.requestTimeOut,
		success: function(data) {
			app.hideLoader();
			if (dealingWithResponseCode(data)) {
				callback(data);
			} else {
				app.toast(data.message)
			}
		},
		error: function(xhr, type, errorThrow) {
			dealingWithErrorRequest(errorThrow);
			app.hideLoader();
			app.toast("请求失败，请稍后重试")
		}
	})
}
