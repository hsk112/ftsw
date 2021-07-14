// function getProject(url,param,callback){
//     console.log( url)
//     console.log(JSON.stringify(param))
	
//   mui.ajax(url, {
//       data: param,
//       dataType: 'json', //服务器返回json格式数据
//       type: 'post', //HTTP请求类型
//       timeout: config.settings.requestTimeOut, //超时时间设置为10秒；	
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//         "X-Access-Token":app.sessionId()
//       },
//       success: function(data) {
//           // console.log(JSON.stringify(data))
//           app.hideLoader();
//           if (dealingWithResponseCode(data)) {
//               callback(data);
//               // console.log(JSON.stringify(data))
//           } else {
//               app.toast(data.message);
//           }
//       },
//       error: function(xhr, type, errorThrown) {
//           dealingWithErrorRequest(errorThrown);
//           app.hideLoader();
          
//           return callback('网络异常,请稍后再试');
//           console.log(xhr, type, errorThrown)  
//       }
//   });
// }
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
 * 获取项目大事件
 * @param param  projectId
 * @param callback
 */
var getQueryDetailByGuid =  function(param,callback){

    var url = config.urls.baseUrl + config.actions.getQueryDetailByGuid;

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
}


var getProject = function(url,param,callback) {

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
var getReportDetailById = function(url,param,callback){
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