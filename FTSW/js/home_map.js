//获取水闸信息
var getWaterGateInfo = function(guid,callback){
    var url = config.urls.baseUrl + config.actions.getWaterGateInfo;
    let param = {
        guid : guid
    }
    console.log('url'+url)
    console.log('param'+JSON.stringify(param))
    app.showLoader();
    $.ajax(url, {
        data:param,
        dataType: 'json', //服务器返回json格式数据
        type: 'get', //HTTP请求类型
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Access-Token":app.sessionId()
        },
        timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
        success: function(data) {
            app.hideLoader();
            if (dealingWithResponseCode(data)) {
                callback(data);
            } else {
                app.toast(data.message);
            }
        },
        error: function(xhr, type, errorThrown) {
            dealingWithErrorRequest(errorThrown);
            app.hideLoader();
            return callback('网络异常,请稍后再试');
        }
    });
}


//获取仓库信息
var getWhInfo = function(guid,callback){
    var url = config.urls.baseUrl + config.actions.getWhInfo;
    let param = {
        whId : guid
    }
    console.log('url'+url)
    console.log('param'+JSON.stringify(param))
    app.showLoader();
    $.ajax(url, {
        data:param,
        dataType: 'json', //服务器返回json格式数据
        type: 'get', //HTTP请求类型
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Access-Token":app.sessionId()
        },
        timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
        success: function(data) {
            app.hideLoader();
            if (dealingWithResponseCode(data)) {
                callback(data);
            } else {
                app.toast(data.message);
            }
        },
        error: function(xhr, type, errorThrown) {
            dealingWithErrorRequest(errorThrown);
            app.hideLoader();
            return callback('网络异常,请稍后再试');
        }
    });
}


//获取排放口信息
var getOutFallInfo = function(guid,callback){
    var url = config.urls.baseUrl + config.actions.getOutFallInfo;
    let param = {
        guid : guid
    }
    console.log('url'+url)
    console.log('param'+JSON.stringify(param))
    app.showLoader();
    $.ajax(url, {
        data:param,
        dataType: 'json', //服务器返回json格式数据
        type: 'get', //HTTP请求类型
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Access-Token":app.sessionId()
        },
        timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
        success: function(data) {
            app.hideLoader();
            if (dealingWithResponseCode(data)) {
                callback(data);
            } else {
                app.toast(data.message);
            }
        },
        error: function(xhr, type, errorThrown) {
            dealingWithErrorRequest(errorThrown);
            app.hideLoader();
            return callback('网络异常,请稍后再试');
        }
    });
}


//获取积水风险
var getFloodInfo = function(guid,callback){
    var url = config.urls.baseUrl + config.actions.getFloodInfo;
    let param = {
        guid : guid
    }
    console.log('url'+url)
    console.log('param'+JSON.stringify(param))
    app.showLoader();
    $.ajax(url, {
        data:param,
        dataType: 'json', //服务器返回json格式数据
        type: 'get', //HTTP请求类型
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Access-Token":app.sessionId()
        },
        timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
        success: function(data) {
            app.hideLoader();
            if (dealingWithResponseCode(data)) {
                callback(data);
            } else {
                app.toast(data.message);
            }
        },
        error: function(xhr, type, errorThrown) {
            dealingWithErrorRequest(errorThrown);
            app.hideLoader();
            return callback('网络异常,请稍后再试');
        }
    });
}

//泵站
var getPumpInfo = function(guid,callback){


    var url = config.urls.baseUrl + config.actions.getPumpInfo;
    let param = {
        guid : guid
    }
    console.log('url'+url)
    console.log('param'+JSON.stringify(param))
    app.showLoader();
    $.ajax(url, {
        data:param,
        dataType: 'json', //服务器返回json格式数据
        type: 'get', //HTTP请求类型
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Access-Token":app.sessionId()
        },
        timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
        success: function(data) {
            app.hideLoader();
            if (dealingWithResponseCode(data)) {
                callback(data);
            } else {
                app.toast(data.message);
            }
        },
        error: function(xhr, type, errorThrown) {
            dealingWithErrorRequest(errorThrown);
            app.hideLoader();
            return callback('网络异常,请稍后再试');
        }
    });
}


//污水水厂
var getSewtfInfo = function(guid,callback){


    var url = config.urls.baseUrl + config.actions.getSewtfInfo;
    let param = {
        guid : guid
    }
    console.log('url'+url)
    console.log('param'+JSON.stringify(param))
    app.showLoader();
    $.ajax(url, {
        data:param,
        dataType: 'json', //服务器返回json格式数据
        type: 'get', //HTTP请求类型
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Access-Token":app.sessionId()
        },
        timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
        success: function(data) {
            app.hideLoader();
            if (dealingWithResponseCode(data)) {
                callback(data);
            } else {
                app.toast(data.message);
            }
        },
        error: function(xhr, type, errorThrown) {
            dealingWithErrorRequest(errorThrown);
            app.hideLoader();
            return callback('网络异常,请稍后再试');
        }
    });
}



//获取监测数据信息
var getProcessLineDate =  function(guid,callback){
    var url = config.urls.baseUrl + config.actions.getProcessLineDate;
    let param = guid
    console.log('url'+url)
    console.log('param'+JSON.stringify(param))
    app.showLoader();
    $.ajax(url, {
        data:param,
        dataType: 'json', //服务器返回json格式数据
        type: 'get', //HTTP请求类型
        async:false,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Access-Token":app.sessionId()
        },
        timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
        success: function(data) {
            app.hideLoader();
            if (dealingWithResponseCode(data)) {
                callback(data);
            } else {
                app.toast(data.message);
            }
        },
        error: function(xhr, type, errorThrown) {
            dealingWithErrorRequest(errorThrown);
            app.hideLoader();
            return callback('网络异常,请稍后再试');
        }
    });
}


/**
 * 调大数据平台接口
 * @param params
 * @param callback
 */
var getBigData = function (params,callback) {

    app.showLoader();
    var _url = "http://zhswmax1.hdec.com:8005/data.v1.global_search?name="+params
    $.ajax(_url, {
        // data: params,
        dataType: 'json', //服务器返回json格式数据
        type: 'GET', //HTTP请求类型
        timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
        success: function(data) {
            app.hideLoader();
            callback(data);
        },
        error: function(xhr, type, errorThrown) {
            dealingWithErrorRequest(errorThrown);
            app.hideLoader();
            return callback('网络异常,请稍后再试');
        }
    });


}
