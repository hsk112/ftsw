// 通用表单详情
var getFormBaseNewDetail = function(param,callback) {
  var url = config.urls.baseUrl + config.actions.getMissionBaseFormDetail//conversationList;
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
    success: function(data) {
      console.log("getNormalFormSuc:"+JSON.stringify(data));
      app.hideLoader();
      if (dealingWithResponseCode(data)) {
        callback(data);
      } else {
        app.toast(data.message);
      }
    },
    error: function(xhr, type, errorThrown) {
      console.log("getNormalFormFailed:"+JSON.stringify(xhr));
      console.error(JSON.stringify(xhr));
      console.error(errorThrown);
      dealingWithErrorRequest(errorThrown);
      app.hideLoader();
      return callback('网络异常,请稍后再试');
    }
  });
}
// 获取文件
var findFilesByGroupId = function(param, callback) {
  var url = config.urls.baseUrl + config.actions.findFilesByGroupId;
  app.showLoader();
  console.log("param:" + JSON.stringify(param));
  console.log("url:" + url);
  $.ajax(url, {
    data: param,
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
      console.log("findFilesByGroupId:"+JSON.stringify(data));
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

// 获取子工单
var getMissionNormalFormItem = function(param, callback) {
  var url = config.urls.baseUrl + config.actions.getMissionNormalFormItem;
  app.showLoader();
  console.log("param:" + JSON.stringify(param));
  console.log("url:" + url);
  $.ajax(url, {
    data: param,
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
      console.log("getMissionNormalFormItem:"+JSON.stringify(data));
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
var getTaskCommentNormalForm = function(guid,callback){
  var url = config.urls.baseUrl + config.actions.getTaskComment;

  let param = {
    guid : guid
  }
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


//编辑工单
var eidtFormBaseOrder = function(param, callback) {
  var url = config.urls.baseUrl + config.actions.addSellSubWorkOrder;
  console.log(url);
  console.log(JSON.stringify(param))
  app.showLoader();
  $.ajax(url, {
    data: param,
    // data: "",
    dataType: 'json', //服务器返回json格式数据
    type: 'post', //HTTP请求类型
    headers: {
      // "Content-Type": "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
      "X-Access-Token": app.sessionId()
      // "X-Access-Token":config.urls.tempToken
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


//处理
var addTest = function(strFlowData,strFormData,strAttachment,callback){
  var url =  config.urls.baseUrl+'ft-wo/flowablePm/action'
  let param = {
    strFlowData : JSON.stringify(strFlowData),
    strFormData : JSON.stringify(strFormData),
    strAttachment : JSON.stringify(strAttachment)
  }
  // console.log('url'+url)
  // console.log('param'+JSON.stringify(param))
  app.showLoader();
  $.ajax(url, {
    data:param,
    dataType: 'json', //服务器返回json格式数据
    type: 'post', //HTTP请求类型
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "X-Access-Token":app.sessionId()
    },
    timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
    success: function(data) {
      // app.hideLoader();
      app.toast(data.message);
      plus.webview.currentWebview().opener().reload();
      app.showLoader()
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
