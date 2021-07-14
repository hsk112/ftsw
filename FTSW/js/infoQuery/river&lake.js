var getRiverList = function(pageNo, pageSize, callback) {
	var url = config.urls.baseUrl + config.actions.queryAllRiverInfo;
	let param ={
		pageNo: pageNo,
		pageSize pageSize
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
		error: function(xhr, type, errorThrown) {
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			app.toast("请求失败，请稍后重试！")
		}
	})
}

var getRiverById = function(guid, callback) {
	var url = config.urls.baseUrl + config.actions.queryRiverById;
	let param ={
		guid: guid
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
		error: function(xhr, type, errorThrown) {
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			app.toast("请求失败，请稍后重试！")
		}
	})
}

var getLakeList = function(pageNo, pageSize, callback) {
	var url = config.urls.baseUrl + config.actions.queryAllLakeInfo;
	let param ={
		pageNo: pageNo,
		pageSize pageSize
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
		error: function(xhr, type, errorThrown) {
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			app.toast("请求失败，请稍后重试！")
		}
	})
}

var getLakeById = function(lkCode, callback) {
	var url = config.urls.baseUrl + config.actions.queryLakeByIde;
	let param ={
		lkCode: lkCode
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
		error: function(xhr, type, errorThrown) {
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			app.toast("请求失败，请稍后重试！")
		}
	})
}
