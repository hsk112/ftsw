var getCkgd = function(param,callback) {
  var url = config.urls.baseUrl + config.actions.getMissionUncompletedListAllProject//conversationList;
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