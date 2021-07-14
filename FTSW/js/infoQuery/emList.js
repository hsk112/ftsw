var getEmList = function(pageNo, pageSize, callback) {
	var url = config.urls.baseUrl + config.actions.queryEmList;
	let param = {
		pageNo : pageNo,
		pageSize :pageSize
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

var getEmDetails = function(materialId, whId, callback) {
	var url = config.urls.baseUrl + config.actions.queryEmDetails;
	let param = {
		 materialId : materialId,
		 whId : whId
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

var getWhCondition = function(callback) {
	var url;
	let count = 0;
	url = config.urls.baseUrl + config.actions.queryAllWh;
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

var getTypeAndNameConditions = function(callback) {
	var url;
	let count = 0;
	url = config.urls.baseUrl + config.actions.queryMaterialByName;
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

var getListWithConditions = function(pageNo, pageSize, params, callback) {
	console.log(JSON.stringify(params))
	var url;
	let count = 0;
	let data = {
		pageNo: 1,
		pageSize:500
	}
	url = config.urls.baseUrl + config.actions.queryEmList + '?';
	let genKey = localStorage.getItem("pro__Current-GenKey");
	if (genKey) {
		var sm4 = new Sm4utils(JSON.parse(genKey).value);
		param._t = Date.parse(new Date()) / 1000;
		param = {
			data: sm4.encryptData_ECB(JSON.stringify(param))
		};
	}
	for (index in params) {
		let key = params[index].label;
		let value = params[index].value
		if (params[index].value != null) {
			if (count == 0) {
				data[key] = params[index].value;
				count++;
			} else {
				data[key] = params[index].value;
			}
		}
	}

	console.log("url", url)

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
		}
	})
}

var fuzzySearch = function(pageNo, pageSize, materialNameApp, callback) {
	var url = config.urls.baseUrl + config.actions.queryEmList;
	let param = {
		materialNameApp : materialNameApp
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
		},
	})
}

var getRanksByGuid = function(guid, callback) {
	var url = config.urls.baseUrl + config.actions.queryRanksById;
	let param = {
		guid : guid
	}

	app.showLoader();
	$.ajax(url, {
		data: param,
		dataType: 'json',
		type: 'get',
		headers: {
			'headers': 'application/x-www-form-urlencoded',
			'X-Access-Token': app.sessionId()
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

// queryRanksByType
var getRanksByType = function(guid, callback) {
    var url= config.urls.baseUrl + config.actions.queryRanksByType;
	let param = {
		ranksId : guid
	}

    app.showLoader();
    $.ajax(url, {
        data: param,
        dataType: 'json',
        type: 'get',
        headers: {
            'headers': 'application/x-www-form-urlencoded',
            'X-Access-Token': app.sessionId()
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

var getWhByGuid = function(guid, callback) {
	var url = config.urls.baseUrl + config.actions.queryWhById;
	let param = {
		whid : guid
	}

    app.showLoader();
    $.ajax(url, {
        data: param,
		dataType: 'json',
		type: 'get',
		headers: {
			'headers': 'application/x-www-form-urlencoded',
			'X-Access-Token': app.sessionId()
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

var getSanksByGuid = function(guid, callback) {
	var url = config.urls.baseUrl + config.actions.querySanksById;
	let param = {
		guid : guid
	}

    app.showLoader();
    $.ajax(url, {
        data: param,
		dataType: 'json',
		type: 'get',
		headers: {
			'headers': 'application/x-www-form-urlencoded',
			'X-Access-Token': app.sessionId()
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
