// 根据字典编码获取字典（问题类型）
var getProblemType = function(callback) {
  var url = config.urls.baseUrl + config.actions.getProblemType+"problem_type"//conversationList;
  app.showLoader()
  $.ajax(url, {
    // data: param,
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
// 获取设施类型
var getDeviceType1 = function(callback) {
  var url = config.urls.baseUrl + config.actions.getDeviceType//conversationList;
  app.showLoader()
  $.ajax(url, {
    // data: param,
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
// 获取相关工单
var getCorrelationForm = function(param,callback) {
  var url = config.urls.baseUrl + config.actions.getCorrelationForm//conversationList;

  console.log("相关工单Param："+JSON.stringify(param));
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
      console.log("相关工单成功==================================");
      app.hideLoader();
      if (dealingWithResponseCode(data)) {
        callback(data);
      } else {
        app.toast(data.message);
      }
    },
    error: function(xhr, type, errorThrown) {
      console.log("相关工单失败==================================");
      console.error(JSON.stringify(xhr));
      console.error(errorThrown);
      dealingWithErrorRequest(errorThrown);
      app.hideLoader();
      return callback('网络异常,请稍后再试');
    }
  });
}

//派发子工单
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
