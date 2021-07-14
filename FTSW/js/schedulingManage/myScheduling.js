// 查询
var getMyScheduling = function(param,callback) {
  var url = config.urls.baseUrl + config.actions.getSchedulingPlan//conversationList;
  console.log("getMyScheduling"+url);
  console.log("token:"+app.sessionId());
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
// 签到
var schedulingSign = function(param,callback) {
  var url = config.urls.baseUrl + config.actions.schedulingSignIn//conversationList;
  app.showLoader()
  $.ajax(url, {
    data: param,
    dataType: 'json', //服务器返回json格式数据
    type: 'post',
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
// 签退第一步-添加值班记录
var addSchedulingRecord = function(param,callback) {
  var url = config.urls.baseUrl + config.actions.addSchedulingDutyRecord//conversationList;
  app.showLoader()
  $.ajax(url, {
    data: param,
    dataType: 'json', //服务器返回json格式数据
    type: 'post',
    // async:false,//HTTP请求类型
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "X-Access-Token": app.sessionId()
    },
    timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
    success: function(data) {
      console.log("=====================================================签退第一步成功")
      console.log("签退第一步记录///////////////////////////////////////"+JSON.stringify(data))
      app.hideLoader();
      if (dealingWithResponseCode(data)) {
        callback(data);
      } else {
        app.toast(data.message);
      }
    },
    error: function(xhr, type, errorThrown) {
      console.log("=====================================================签退第一步失败")
      console.error(JSON.stringify(xhr));
      console.error(errorThrown);
      dealingWithErrorRequest(errorThrown);
      app.hideLoader();
      return callback('网络异常,请稍后再试');
    }
  });
}
