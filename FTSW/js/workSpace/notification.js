/**
 * 获取通知公告
 */
var getNotificationList = function(param, callback){
  console.log("进入 security getNotificationList")
  var url = config.urls.baseUrl + config.actions.getNotificationListAllProject;
  console.log("url:" + url);
  console.log(app.sessionId());
  console.log('param'+JSON.stringify(param))
  // pageNo=1&pageSize=10

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
      console.log("security 返回")
      console.log(JSON.stringify(data))
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

/**
 * 获取通知公告详情
 */
var getNotificationDetail = function (param, callback) {
  var url = config.urls.baseUrl + config.actions.getNotificationDetailProject;
  console.log(app.sessionId());
  console.log(url);
  console.log('param'+JSON.stringify(param))
  console.log('guid:'+param.guid);
  // pageNo=1&pageSize=10

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
      console.log("security 返回")
      console.log(JSON.stringify(data))
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

/**
 * 收藏通知公告
 */
var addNotificationFavorites = function (param, callback) {
  var url = config.urls.baseUrl + config.actions.addNotificationFavorites;
  console.log(app.sessionId());
  console.log(url);
  console.log('param'+JSON.stringify(param))
  // console.log('guid:'+param.guid);
  // pageNo=1&pageSize=10

  app.showLoader();

  $.ajax(url, {
    data:JSON.stringify(param), // POST 方法修改 1
    dataType: 'json', //服务器返回json格式数据
    type: 'post', //HTTP请求类型
    headers: {
      "Content-Type": "application/json", // POST 方法修改 2
      "X-Access-Token":app.sessionId()
    },
    timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
    success: function(data) {
      console.log("security 返回")
      console.log(JSON.stringify(data))
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

/**
 * 取消收藏 ,type： 1通知公告 ；2收藏列表；3通知公告详情
 */
// var deleteNotificationFavorites = function (param,type, callback) {
var deleteFavorites = function (param,type, callback) {

  var url = config.urls.baseUrl + config.actions.deleteNotificationFavorites;
  if(type == 2) {
    url = config.urls.baseUrl + config.actions.deleteFavorites;
  }

  console.log(app.sessionId());
  console.log(url);
  console.log('param'+JSON.stringify(param))
  // console.log('guid:'+param.guid);
  // pageNo=1&pageSize=10

  app.showLoader();

  $.ajax(url, {
    data: param, //JSON.stringify(param), // POST 方法修改 1
    dataType: 'json', //服务器返回json格式数据
    type: 'post', //HTTP请求类型
    headers: {
      "Content-Type": "application/x-www-form-urlencoded", // POST 方法修改 2
      "X-Access-Token":app.sessionId()
    },
    timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
    success: function(data) {
      console.log("security 返回")
      console.log(JSON.stringify(data))
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


/**
 * 获取通知公告详情附件
 */
var getNotificationAttachment = function (param, callback) {
  var url = config.urls.baseUrl + config.actions.getNotificationAttachment;
  console.log(app.sessionId());
  // pageNo=1&pageSize=10

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
      console.log("security 返回")
      console.log(JSON.stringify(data))
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

/**
 * 获取收藏列表
 */
var getFavoritesList = function(param, callback){
  var url = config.urls.baseUrl + config.actions.getFavoritesListAllProject;
  console.log("url:" + url);
  console.log(app.sessionId());
  console.log('param'+JSON.stringify(param))
  // pageNo=1&pageSize=10

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
      console.log("security 返回")
      console.log(JSON.stringify(data))
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
