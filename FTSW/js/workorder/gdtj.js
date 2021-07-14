
function getWork(url,params,callback){
	
	// console.log("url:"+url)
	// console.log("params:"+JSON.stringify(params))
	$.ajax(url, {
		data: params,
		// data: "",
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token": app.sessionId(),
		},
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
		success: function(data) {
			// app.hideLoader();
			if (dealingWithResponseCode(data)) {
				callback(data);
				// mui.alert(data.message)
			} else {
				// app.toast(data.message);
			}
		},
		error: function(xhr, type, errorThrown) {
			console.log(type)
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}

	/*
  mui.ajax(url, {
      data: params,
      dataType: 'json', //服务器返回json格式数据
      type: 'get', //HTTP请求类型
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
		  console.log(JSON.stringify(xhr))
          app.hideLoader();
          return callback('网络异常,请稍后再试');
          console.log(xhr, type, errorThrown)  
      }
   */
  });
}
// }
// var getGdglList = function(callback) {
//   var url = config.urls.baseUrl + config.actions.getDeviceType//conversationList;
//   app.showLoader()
//   $.ajax(url, {
//     // data: param,
//     dataType: 'json', //服务器返回json格式数据
//     type: 'POST',
//     // async:false,//HTTP请求类型
//     headers: {
//       // "Content-Type": "application/x-www-form-urlencoded",
//       "X-Access-Token": app.sessionId()
//     },
//     timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
//     success: function(data) {
//       app.hideLoader();
//       if (dealingWithResponseCode(data)) {
//         callback(data);
//       } else {
//         app.toast(data.message);
//       }
//     },
//     error: function(xhr, type, errorThrown) {
//       console.error(JSON.stringify(xhr));
//       console.error(errorThrown);
//       dealingWithErrorRequest(errorThrown);
//       app.hideLoader();
//       return callback('网络异常,请稍后再试');
//     }
//   });
// }
