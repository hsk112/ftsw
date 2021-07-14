/**
 * 获取通讯录
 */
var getAddressBookList = function(param, callback){
  console.log("进入 security getAddressBookList")
  var url = config.urls.baseUrl + config.actions.getAddressBookListAllProject;
  console.log("url:" + url);
  console.log(JSON.stringify(param));
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
      // console.log("security 返回")
     // console.log(JSON.stringify(data))
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
// 与列表是同一个接口 ，参数不一样： companyId 、personCode、username
var getAddressBookDetail = function (param, callback) {
  var url = config.urls.baseUrl + config.actions.getAddressBookDetailProject;
  console.log("url:" + url);
  console.log(app.sessionId());
  // pageNo=1&pageSize=10
  console.log(JSON.stringify(param))

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
      // console.log("security 返回")
     // console.log(JSON.stringify(data))
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

var findFilesByGroupIdAddrBook = function(param, callback){
  var url = config.urls.baseUrl + config.actions.findFilesByGroupId;

  console.log("url:" + url);
  console.log(JSON.stringify(param))
  app.showLoader();
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
