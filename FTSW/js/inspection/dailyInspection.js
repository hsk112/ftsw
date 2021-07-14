//日常巡检列表
var getDailyInspectionList = function (param,callback) {

    var url = config.urls.baseUrl + config.actions.queryDailyCheck
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
 * 新增日常巡检
 */
var addDailyInspectionForm= function(strFormData,callback) {
    var url = config.urls.baseUrl + config.actions.addSDI;
    var params = strFormData;
    console.log(JSON.stringify(params))
    app.showLoader();
    $.ajax(url, {
        data: params,
        dataType: 'json', //服务器返回json格式数据
        type: 'post', //HTTP请求类型
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Access-Token": app.sessionId()
        },
        timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
        success: function(data) {
            app.hideLoader();
            if (dealingWithResponseCode(data)) {
                console.log(JSON.stringify(data))
                callback(data);
            } else {
                console.log(JSON.stringify(data))
                app.toast(data.message);
            }
        },
        error: function(xhr, type, errorThrown) {
            console.log(JSON.stringify("error-----"))
            console.log(JSON.stringify(errorThrown))
            console.log(JSON.stringify(type))
            console.log(JSON.stringify(xhr))
            dealingWithErrorRequest(errorThrown);
            app.hideLoader();
            app.toast("网络异常,请稍后再试");
        }
    });
}

/**
 * 新增安全检查
 */
var addSafetyInspectionForm= function(strFormData,callback) {
    var url = config.urls.baseUrl + config.actions.addCheckForm;
    var params = strFormData;

    app.showLoader();
    $.ajax(url, {
        data: params,
        dataType: 'json', //服务器返回json格式数据
        type: 'post', //HTTP请求类型
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Access-Token": app.sessionId()
        },
        timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
        success: function(data) {
            console.log(JSON.stringify(data))
            app.hideLoader();
            if (dealingWithResponseCode(data)) {
                console.log(JSON.stringify(data))
                callback(data);
            } else {
                console.log(JSON.stringify(data))
                app.toast(data.message);
            }
        },
        error: function(xhr, type, errorThrown) {
            console.log(JSON.stringify("error-----"))
            console.log(JSON.stringify(errorThrown))
            console.log(JSON.stringify(type))
            console.log(JSON.stringify(xhr))
            dealingWithErrorRequest(errorThrown);
            app.hideLoader();
            app.toast("网络异常,请稍后再试");
        }
    });
}



/**查询安全检查列表
 *
 */
var querySafetyInspectionForm = function(param, callback) {
    var url = config.urls.baseUrl + config.actions.querySecCheck;

    app.showLoader();
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

/**查询安全整改列表
 *
 */
var querySafetyRectificationForm = function(param, callback) {
    var url = config.urls.baseUrl + config.actions.queryReform;

    console.log(JSON.stringify(param))

    app.showLoader();
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
 * 获取待办详情
 * @param param
 * @param callback
 */
var getMissionDetail = function (param, callback) {
    var url = config.urls.baseUrl + config.actions.getMissionUncompletedDetail//conversationList;
    app.showLoader()
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
        success: function (data) {
            app.hideLoader();
            if (dealingWithResponseCode(data)) {
                callback(data);
            } else {
                app.toast(data.message);
            }
        },
        error: function (xhr, type, errorThrown) {
            console.error(JSON.stringify(xhr));
            console.error(errorThrown);
            dealingWithErrorRequest(errorThrown);
            app.hideLoader();
            return callback('网络异常,请稍后再试');
        }
    });
}


/**
 * 获取安全整改检查项信息
 */
var querySafetyInspectionItem = function(param,callback){
    var url = config.urls.baseUrl + config.actions.queryCItem;

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
            // console.log(JSON.stringify(data))
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
 * 获取获取审批信息
 */
// 获取审批流程
var getMissionApprovalProcessInfo = function(param, callback) {
    var url = config.urls.baseUrl + config.actions.getMissionApprovalProcess;
    app.showLoader();
    console.log("param:" + JSON.stringify(param));
    console.log("url:" + url);
    $.ajax(url, {
        data: param,
        // async: false,
        // data: "",
        dataType: 'json', //服务器返回json格式数据
        type: 'get', //HTTP请求类型
        headers: {
            // "Content-Type": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Access-Token": app.sessionId(),
            // "X-Access-Token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTg5Mjk1MDYsInVzZXJuYW1lIjoiY3doMDEifQ.f1H4CpN_us8XRDI-Nxdpfsw4Xc6eku1tVFmicLM1syw"
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


var findFilesByGroupIdNew = function(param, callback) {
    var url = config.urls.baseUrl + config.actions.findFilesByGroupId;

    app.showLoader();
    $.ajax(url, {
        data: param,
        // data: "",
        async:false,
        dataType: 'json', //服务器返回json格式数据
        type: 'get', //HTTP请求类型
        headers: {
            // "Content-Type": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Access-Token": app.sessionId(),
            // "X-Access-Token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTg5Mjk1MDYsInVzZXJuYW1lIjoiY3doMDEifQ.f1H4CpN_us8XRDI-Nxdpfsw4Xc6eku1tVFmicLM1syw"
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
 * 查询安全检查列表
 * @param param
 * @param callback
 */

var querySecCheckList = function(param, callback) {
    var url = config.urls.baseUrl + config.actions.querySecCheck;

    app.showLoader();
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
 * 新增安全整改
 */
var addSafetyRectificationform = function(strFormData,strAttachment,callback) {
    var url = config.urls.baseUrl + config.actions.addSReform;

    var params = {
        strFlowData: '{"api":"/process/startAndSubmit","processDefinitionKey":"safety_rectify","targetNodeId":null}',
        strFormData: JSON.stringify(strFormData),
        strAttachment: JSON.stringify(strAttachment)

    };

    console.log(url)
    console.log(params)

    app.showLoader();
    $.ajax(url, {
        data: params,
        dataType: 'json', //服务器返回json格式数据
        type: 'post', //HTTP请求类型
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
                console.log(JSON.stringify(data))
                app.toast(data.message);
            }
        },
        error: function(xhr, type, errorThrown) {
            console.log(JSON.stringify("error-----"))
            console.log(JSON.stringify(errorThrown))
            console.log(JSON.stringify(type))
            console.log(JSON.stringify(xhr))
            dealingWithErrorRequest(errorThrown);
            app.hideLoader();
            app.toast("网络异常,请稍后再试");
        }
    });
}

/**
 * 获取质量日常巡检列表信息
 * @param param
 * @param callback
 */

var getQualityDailyInspectionList = function (param,callback){

    var url = config.urls.baseUrl + config.actions.getDailyInspection;
    console.log(url)

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
};



/**
 * 新增质量日常巡检
 */
var addQualityDailyInspection= function(strFormData,callback) {
    var url = config.urls.baseUrl + config.actions.addQDI;
    var params = strFormData;
    console.log(url)
    console.log(JSON.stringify(params))

    app.showLoader();
    $.ajax(url, {
        data: params,
        dataType: 'json', //服务器返回json格式数据
        type: 'post', //HTTP请求类型
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Access-Token": app.sessionId()
        },
        timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
        success: function(data) {
            app.hideLoader();
            if (dealingWithResponseCode(data)) {
                console.log(JSON.stringify(data))
                callback(data);
            } else {
                console.log(JSON.stringify(data))
                app.toast(data.message);
            }
        },
        error: function(xhr, type, errorThrown) {
            console.log(JSON.stringify("error-----"))
            console.log(JSON.stringify(errorThrown))
            console.log(JSON.stringify(type))
            console.log(JSON.stringify(xhr))
            dealingWithErrorRequest(errorThrown);
            app.hideLoader();
            app.toast("网络异常,请稍后再试");
        }
    });
}


/**
 * 获取质量检查列表数据
 * @param param
 * @param callback
 */

var getDailyQualityCheckList = function (param,callback){
    // console.log(app.sessionId())
    var url = config.urls.baseUrl + config.actions.getDailyQualityCheck;
    // console.log(url)
    // var url =`http://zhswtest.ecidi.com/ecidi-cmp/ft-prjManage/projectattendencecheck/projectAttendenceCheck/add`;

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
};


/**
 * 获取质量整改列表
 * @param param
 * @param callback
 */
var getQualityRectifyList = function(param,callback){
    var url = config.urls.baseUrl + config.actions.getQualityRectify;
    // console.log(url)
    // var url =`http://zhswtest.ecidi.com/ecidi-cmp/ft-prjManage/projectattendencecheck/projectAttendenceCheck/add`;

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
};

/**
 * 获取质量整改检查项信息
 */
var queryQualityRecCheckItem = function(param,callback){
    var url = config.urls.baseUrl + config.actions.queryQualitycheckItem;
    console.log(url)
    app.showLoader();
    $.ajax(url, {
        data: param,
        dataType: 'json', //服务器返回json格式数据
        type: 'get', //HTTP请求类型
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Access-Token":app.sessionId()
        },
        timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
        success: function(data) {
            console.log('这里是citem回调')
            console.log(data)
            // console.log(JSON.stringify(data))
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


var addSafetyInspectionForm= function(strFormData,callback) {
    var url = config.urls.baseUrl + config.actions.addCheckForm;
    var params = strFormData;

    app.showLoader();
    $.ajax(url, {
        data: params,
        dataType: 'json', //服务器返回json格式数据
        type: 'post', //HTTP请求类型
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Access-Token": app.sessionId()
        },
        timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
        success: function(data) {
            console.log(JSON.stringify(data))
            app.hideLoader();
            if (dealingWithResponseCode(data)) {
                console.log(JSON.stringify(data))
                callback(data);
            } else {
                console.log(JSON.stringify(data))
                app.toast(data.message);
            }
        },
        error: function(xhr, type, errorThrown) {
            console.log(JSON.stringify("error-----"))
            console.log(JSON.stringify(errorThrown))
            console.log(JSON.stringify(type))
            console.log(JSON.stringify(xhr))
            dealingWithErrorRequest(errorThrown);
            app.hideLoader();
            app.toast("网络异常,请稍后再试");
        }
    });
}


/**
 * 新增质量检查
 */
var addQualityInspectionForm= function(strFormData,callback) {
    var url = config.urls.baseUrl + config.actions.addDailyQualityCheck;
    var params = strFormData;

    app.showLoader();
    $.ajax(url, {
        data: params,
        dataType: 'json', //服务器返回json格式数据
        type: 'post', //HTTP请求类型
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Access-Token": app.sessionId()
        },
        timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
        success: function(data) {
            console.log(JSON.stringify(data))
            app.hideLoader();
            if (dealingWithResponseCode(data)) {
                console.log(JSON.stringify(data))
                callback(data);
            } else {
                console.log(JSON.stringify(data))
                app.toast(data.message);
            }
        },
        error: function(xhr, type, errorThrown) {
            console.log(JSON.stringify("error-----"))
            console.log(JSON.stringify(errorThrown))
            console.log(JSON.stringify(type))
            console.log(JSON.stringify(xhr))
            dealingWithErrorRequest(errorThrown);
            app.hideLoader();
            app.toast("网络异常,请稍后再试");
        }
    });
}

/**
 * 查询质量检查列表
 * @param param
 * @param callback
 */

var getQualitySecCheck = function(param, callback) {
    var url = config.urls.baseUrl + config.actions.getDailyQualityCheck;

    app.showLoader();
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
};


/**
 * 新增质量整改
 */
var addQualityRectificationform = function(strFormData,strAttachment,callback) {
    var url = config.urls.baseUrl + config.actions.addtQualityRectify;

    var params = {
        strFlowData: '{"api":"/process/startAndSubmit","processDefinitionKey":"project_quality_rectify","targetNodeId":null}',
        strFormData: JSON.stringify(strFormData),
        strAttachment: JSON.stringify(strAttachment)

    };

    console.log(url)
    console.log(params)

    app.showLoader();
    $.ajax(url, {
        data: params,
        dataType: 'json', //服务器返回json格式数据
        type: 'post', //HTTP请求类型
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
                console.log(JSON.stringify(data))
                app.toast(data.message);
            }
        },
        error: function(xhr, type, errorThrown) {
            console.log(JSON.stringify("error-----"))
            console.log(JSON.stringify(errorThrown))
            console.log(JSON.stringify(type))
            console.log(JSON.stringify(xhr))
            dealingWithErrorRequest(errorThrown);
            app.hideLoader();
            app.toast("网络异常,请稍后再试");
        }
    });
}