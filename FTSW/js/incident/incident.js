//事件管理列表
var queryEventList  = function (param,callback) {
    var url = config.urls.baseUrl + config.actions.getsjkist;

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
            // console.log(JSON.stringify(data))
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
 * 编辑事件
 * @param strFormData
 * @param strAttachment
 * @param callback
 */
var editEvent = function(params,callback) {
    var url = config.urls.baseUrl + config.actions.editEvent;

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


function getWork(url,params,type,callback){
    // console.log(app.sessionId())
    // console.log(JSON.stringify(params))
      mui.ajax(url, {
          data: params,
          dataType: 'json', //服务器返回json格式数据
          type: type, //HTTP请求类型
          timeout: config.settings.requestTimeOut, //超时时间设置为10秒；    
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Access-Token":app.sessionId()
          },
          success: function(data) {
    //            console.log(JSON.stringify(data))
              app.hideLoader();
              if (dealingWithResponseCode(data)) {
                  callback(data);
                  // console.log(JSON.stringify(data))
              } else {
                  app.toast(data.message);
              }
          },
          error: function(xhr, type, errorThrown) {
              dealingWithErrorRequest(errorThrown);
              app.hideLoader();
              return callback('网络异常,请稍后再试');
              console.log(xhr, type, errorThrown)  
          }
      });
    }

