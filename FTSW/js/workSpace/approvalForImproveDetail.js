//任务待办详情js
//获取待办详情审批流程信息
var getMissionProcessDetail = function (param, callback) {
  var url = config.urls.baseUrl + config.actions.getMissionUncompletedProcess//conversationList;
  app.showLoader();
  console.log("param:" + JSON.stringify(param));
  console.log("url:" + url);
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
//获取待办详情
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

// 获取安全整改表单详情
var getSafetyMissionFormDetail = function (param, callback) {
  var url = config.urls.baseUrl + config.actions.querySReform//conversationList;
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

// 获取安全整改表单详情
var getQualityMissionFormDetail = function (param, callback) {
  var url = config.urls.baseUrl + config.actions.queryQualityForm//conversationList;
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

// 获取安全整改检查项
var getMissionSafetyCheckItem = function (param, callback) {
  var url = config.urls.baseUrl + config.actions.getMissionSafetyCheckItem//conversationList;
  app.showLoader()
  console.log("param:" + JSON.stringify(param));
  console.log("url:" + url);
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
// 获取质量整改检查项
var getMissionQualityCheckItem = function (param, callback) {
  var url = config.urls.baseUrl + config.actions.getMissionQualityCheckItem//conversationList;
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
// 获取所有检查项
var getAllSafetyCheckItem = function(param, callback) {
  var url = config.urls.baseUrl + config.actions.getMissionAllSafetyCheckItem;
  app.showLoader();
  console.log("param:" + JSON.stringify(param));
  console.log("url:" + url);
  $.ajax(url, {
    data: param,
    async: false,
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
// 获取所有检查项
var getAllQualityCheckItem = function(param, callback) {
  var url = config.urls.baseUrl + config.actions.getMissionAllQualityCheckItem;
  app.showLoader();
  console.log("param:" + JSON.stringify(param));
  console.log("url:" + url);
  $.ajax(url, {
    data: param,
    async: false,
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
// 获取审批流程
var getMissionApprovalProcess = function(param, callback) {
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

// 提交检查项
var submitSafetyCheck = function(param, callback) {
  var url = config.urls.baseUrl + config.actions.submitSafetyCheck;
  app.showLoader();
  console.log("param:" + JSON.stringify(param));
  console.log("url:" + url);
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
      console.log("success:"+JSON.stringify(data));
      if (dealingWithResponseCode(data)) {
        callback(data);
      } else {
        app.toast(data.message)
      }
    },
    error: function(xhr, type, errorThrow) {
      console.log("failed:"+JSON.stringify(errorThrow));
      dealingWithErrorRequest(errorThrow);
      app.hideLoader();
      app.toast("请求失败，请稍后重试")
    }
  })
}
