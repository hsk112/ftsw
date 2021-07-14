var getRiverDirectories = function(riverName, pageNo, pageSize, callback) {
	var url = config.urls.baseUrl + config.actions.queryDirectories;
	let param = {
		pageNo : pageNo,
		pageSize :pageSize,
		riverType: 1,
		riverName: riverName
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
				callback(data)
			} else {
				app.toast(data.message)
			}
		},
		error: function(data) {
			dealingWithErrorRequest(data);
			app.hideLoader();
			app.toast("请求失败，请稍后重试！")
		}
	})
}

var getLakeDirectories = function(lakeName ,pageNo, pageSize, callback) {
	var url = config.urls.baseUrl + config.actions.queryDirectories;
	let param = {
		pageNo : pageNo,
		pageSize :pageSize,
		riverType: 2,
		lakeName: lakeName
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
				callback(data)
			} else {
				app.toast(data.message)
			}
		},
		error: function(data) {
			dealingWithErrorRequest(data);
			app.hideLoader();
			app.toast("请求失败，请稍后重试！")
		}
	})
}

var getRiverSelected = function(callback) {
	var url;
	url = config.urls.baseUrl + config.actions.queryRiverSelected;
	app.showLoader();
	$.ajax(url, {
		data: {},
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
				callback(data)
			} else {
				app.toast(data.message)
			}
		},
		error: function(data) {
			dealingWithErrorRequest(data);
			app.hideLoader();
			app.toast("请求失败，请稍后重试！")
		}
	})
}

var getLakeSelected = function(callback) {
	var url;
	url = config.urls.baseUrl + config.actions.queryLakeSelected;
	console.log("url",url)
	app.showLoader();
	$.ajax(url, {
		data: {},
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
				callback(data)
			} else {
				app.toast(data.message)
			}
		},
		error: function(data) {
			dealingWithErrorRequest(data);
			app.hideLoader();
			app.toast("请求失败，请稍后重试！")
		}
	})
}

var getLeaderByGuid = function(guid, callback) {
	var url = config.urls.baseUrl + config.actions.queryRiverByGuid;
	let param = {
		guid : guid
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
				callback(data)
			} else {
				app.toast(data.message)
			}
		},
		error: function(data) {
			dealingWithErrorRequest(data);
			app.hideLoader();
			app.toast("请求失败，请稍后重试！")
		}
	})
}


var fuzzySearch = function(pageNo, pageSize, params, type, callback) {
	var url = config.urls.baseUrl + config.actions.queryHHZfuzzy;
	let count = 0;
	let data = {
			streetName: params,
			riverType: type
		};
	let genKey = localStorage.getItem("pro__Current-GenKey");
	if (genKey) {		
		url = config.urls.baseUrl + config.actions.queryDEByGuid;
	}
	app.showLoader();
	$.ajax(url, {
		data: data,
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
		},
	})
}
