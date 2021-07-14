/**
 * 获取项目信息
 * @param param
 * @param callback
 */

var getProjectMap = function (param,callback) {

    var url = config.urls.baseUrl + config.actions.getProjectMap
    console.log('param'+JSON.stringify(param))

    $.ajax(url, {
        data: param,
        dataType: 'json', //服务器返回json格式数据
        type: 'get',
        // async:false,//HTTP请求类型
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Access-Token": app.sessionId()
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
            console.error(JSON.stringify(xhr));
            console.error(errorThrown);
            dealingWithErrorRequest(errorThrown);
            app.hideLoader();
            return callback('网络异常,请稍后再试');
        }
    });

}

/**
 * 获取某个项目消息
 * @param param
 * @param isLoading
 * @param callback
 */
var getProjectInfoByProId = function(param,callback) {
    var url = config.urls.baseUrl + config.actions.getPrjInfoList

    console.log(JSON.stringify(param))

    $.ajax(url, {
        data: param,
        dataType: 'json', //服务器返回json格式数据
        type: 'get',
        // async:false,//HTTP请求类型
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Access-Token": app.sessionId()
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
            console.error(JSON.stringify(xhr));
            console.error(errorThrown);
            dealingWithErrorRequest(errorThrown);
            app.hideLoader();
            return callback('网络异常,请稍后再试');
        }
    });
}

/**
 * 质量情况
 * @param param
 * @param callback
 */
var getProjectQualityResultData = function(param,callback){
    var url = config.urls.baseUrl + config.actions.getProjectQualityResult;
    console.log(app.sessionId())
    app.showLoader();
    $.ajax(url, {
        data: param,
        dataType: 'json', //服务器返回json格式数据
        type: 'GET', //HTTP请求类型
        headers: {
            // "Content-Type": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Access-Token": app.sessionId(),
        },
        timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
        success: function(data) {
            app.hideLoader();
            if(data){
                if (dealingWithResponseCode(data)) {
                    callback(data);
                } else {
                    app.toast(data.message);
                }
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
 * 安全情况
 * @param param
 * @param callback
 */
var getSafetyQualityResultData =   function(param,callback){

    var url = config.urls.baseUrl + config.actions.getSafetyQualityResult;


    app.showLoader();
    $.ajax(url, {
        data: param,
        dataType: 'json', //服务器返回json格式数据
        type: 'GET', //HTTP请求类型
        headers: {
            // "Content-Type": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Access-Token": app.sessionId(),
        },
        timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
        success: function(data) {
            app.hideLoader();
            if(data){
                if (dealingWithResponseCode(data)) {
                    callback(data);
                    // mui.alert(data.message)
                } else {
                    app.toast(data.message);
                }
            }
        },
        error: function(xhr, type, errorThrown) {
            dealingWithErrorRequest(errorThrown);
            app.hideLoader();
            return callback('网络异常,请稍后再试');
        }
    });
};

/**
 * 资金情况
 * @param param
 * @param callback
 */
var getMonsContractPaymentInfoData =  function(param,callback){

    var url = config.urls.baseUrl + config.actions.getMonsContractPaymentInfo;

    app.showLoader();
    $.ajax(url, {
        data: param,
        // data: "",
        dataType: 'json', //服务器返回json格式数据
        type: 'GET', //HTTP请求类型
        headers: {
            // "Content-Type": "application/json",
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
}

/**
 * 获取项目大事件
 * @param param
 * @param callback
 */
var getMonthMemoribiliaList =  function(param,callback){

    var url = config.urls.baseUrl + config.actions.getMonthMemoribiliaByProjectIdList;

    app.showLoader();
    $.ajax(url, {
        data: param,
        // data: "",
        dataType: 'json', //服务器返回json格式数据
        type: 'GET', //HTTP请求类型
        headers: {
            // "Content-Type": "application/json",
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
}





function getqueryLeastPlan(param,callback){
    //获取前期进度信息
    // console.log(app.sessionId())
    var url = config.urls.baseUrl + config.actions.getqueryLeastPlan;

    app.showLoader();
    $.ajax(url, {
        data: param,
        dataType: 'json', //服务器返回json格式数据
        type: 'GET', //HTTP请求类型
        headers: {
            // "Content-Type": "application/json",
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
            // var res = xhr.responseText;
            // res=JSON.parse(res)
            // mui.alert(res.message)
            dealingWithErrorRequest(errorThrown);
            app.hideLoader();
            return callback('网络异常,请稍后再试');
        }
    });
}

// getProjectQualityResult
// ft-prjManage/projectqualityrectify/projectQualityRectify/
