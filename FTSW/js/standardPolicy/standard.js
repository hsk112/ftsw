/**
 * 获取标准规范列表
 * @param param
 * @param callback
 */
var getStandardList = function (param,callback) {
    console.log("进入 getStandardList")
    var url = config.urls.baseUrl + config.actions.getStandardList;
    console.log("url:" + url);
    console.log(app.sessionId());
    console.log('param'+JSON.stringify(param))

    app.showLoader();

    $.ajax(url, {
        data:param,
        dataType: 'json', //服务器返回json格式数据
        type: 'GET', //HTTP请求类型
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Access-Token":app.sessionId()
        },
        timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
        success: function(data) {
            console.log("数据 返回")
            console.log("标准"+JSON.stringify(data))
            app.hideLoader();
            if (dealingWithResponseCode(data)) {
                callback(data);
            } else {
                app.toast(data.message);
            }
        },
        error: function(xhr, type, errorThrown) {
            console.log("xhr: " + xhr);
            console.log("xhr.status: " + xhr.status);
            console.log("xhr.statusText: " + xhr.statusText);
            console.log("xhr.responseText: " + xhr.responseText);
            dealingWithErrorRequest(errorThrown);
            app.hideLoader();
            return callback('网络异常,请稍后再试');
        }
    });

}

