var setMessageRead = function(id, callback) {
  var url = config.urls.baseUrl + config.actions.setMessageRead+"{anntId: '"+id+"'}";
  app.showLoader();
  $.ajax(url, {
    // data: param,
    dataType: 'json',
    type: 'get',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "X-Access-Token": app.sessionId()
    },
    timeout: config.settings.requestTimeOut,
    success: function(data) {
      app.hideLoader();
      if (dealingWithResponseCode(data)) {
        callback(data)
      } else {
        app.toast(data.message)
      }
    },
    error: function(data) {
      dealingWithErrorRequest(data);
      app.hideLoader();
      app.toast("请求失败，请稍后重试！")
    }
  })
}
