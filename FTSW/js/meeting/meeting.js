// 会议列表
var getMeetingList = function(pageNo, pageSize, projectName, personId,callback) {
	var url = config.urls.baseUrl + config.actions.queryMeetingListById
	// url = config.urls.baseUrl + config.actions.queryMeetingListById +"?projectName=" + projectName +  "&pageNo=" + pageNo + "&pageSize=" + pageSize;
	//下面这条是增加了判断签到状态的时候替换掉上面
	// url = config.urls.baseUrl + config.actions.queryMeetingListById +"?projectName=" + projectName + "&personId=" + personId + "&pageNo=" + pageNo + "&pageSize=" + pageSize;
	// console.log(url)
    var param = {
        personId:personId,
        projectName:projectName,
        pageNo:pageNo,
        pageSize:pageSize
	};

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

// 新增会议
var addMeeting = function(param1, param2,callback) {
	var url;
	var param = {strFormData: JSON.stringify(param1), strAttachment: JSON.stringify(param2)}
	url = config.urls.baseUrl + config.actions.addMeeting;
	// console.log(url)
	
	app.showLoader();
	$.ajax(url, {
		data: param,
		dataType: 'json',
		type: 'post',
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

// 会议签到
var meetingSignIn = function(param, callback) {
	var url = config.urls.baseUrl + config.actions.signIn;

	app.showLoader();
	$.ajax(url, {
		data: param,
		dataType: 'json',
		type: 'post',
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token": app.sessionId()
		},
		timeout: config.settings.requestTimeOut,
		success: function(data) {
			console.log("res:"+JSON.stringify(data))
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

//根据名称查询会议
var meetSearchByName = function(param,callback){
    var url = config.urls.baseUrl + config.actions.meetSearchByName;

    // console.log(url)
    console.log("会议查询参数："+JSON.stringify(param))

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
            console.log("会议查询返回:"+JSON.stringify(data))
            app.hideLoader();
            if (dealingWithResponseCode(data)) {
                callback(data);
            } else {
                app.toast(data.message)
            }
        },
        error: function(xhr, type, errorThrow) {
			console.log("会议查询返回error")
            dealingWithErrorRequest(errorThrow);
            app.hideLoader();
            app.toast("请求失败，请稍后重试")
        }
    })
}