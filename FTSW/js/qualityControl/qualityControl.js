// //质安监管js
// //根据角色获取项目列表
// var getProjectListByRole = function(param,isLoading,callback) {
//   var url = config.urls.baseUrl + config.actions.getQualityControlAllProject//conversationList;

//   if(isLoading){
//     app.showLoader()
//   }
//   $.ajax(url, {
//     data: param,
//     dataType: 'json', //服务器返回json格式数据
//     type: 'get',
//     // async:false,//HTTP请求类型
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
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
// 接口
function getProject(url,params,type,callback){
    console.log( url)
    console.log(JSON.stringify(params))
  mui.ajax(url, {
      data: params,
      dataType: 'json', //服务器返回json格式数据
      type: type, //HTTP请求类型
      timeout: config.settings.requestTimeOut, //超时时间设置为10秒；	
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-Access-Token":app.sessionId()
      },
      success: function(data) {
          // console.log(JSON.stringify(data))
          app.hideLoader();
          if (dealingWithResponseCode(data)) {
              callback(data);
              // console.log(JSON.stringify(data))
          } else {
              app.toast(data.message);
          }
      },
      error: function(xhr, type, errorThrown) {
          dealingWithErrorRequest(errorThrown);
          app.hideLoader();
          
          return callback('网络异常,请稍后再试');
          console.log(xhr, type, errorThrown)  
      }
  });
}

function getProjectPost(url,params,type,callback){
	console.log("url:"+url,'token:'+app.sessionId())
    mui.ajax(url, {
        data: params,
        dataType: 'json', //服务器返回json格式数据
        type: type, //HTTP请求类型
        timeout: config.settings.requestTimeOut, //超时时间设置为10秒；	
        headers: {
        // "Content-Type": "application/x-www-form-urlencoded",
          "Content-Type": "application/json",
          "X-Access-Token":app.sessionId()
        },
        success: function(data) {
            // console.log(JSON.stringify(data))
            app.hideLoader();
            if (dealingWithResponseCode(data)) {
                callback(data);
                // console.log(JSON.stringify(data))
            } else {
                app.toast(data.message);
            }
        },
        error: function(xhr, type, errorThrown) {
            dealingWithErrorRequest(errorThrown);
            app.hideLoader();
            return callback('网络异常,请稍后再试');
            console.log(xhr, type, errorThrown)  
        }
    });
  }

function getProjectSync(url,params,type,callback){
    mui.ajax(url, {
        data: params,
        dataType: 'json', //服务器返回json格式数据
        type: type, //HTTP请求类型
        async:false,
        timeout: config.settings.requestTimeOut, //超时时间设置为10秒；	
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "X-Access-Token":app.sessionId()
        },
        success: function(data) {
            // console.log(JSON.stringify(data))
            app.hideLoader();
            if (dealingWithResponseCode(data)) {
                callback(data);
                // console.log(JSON.stringify(data))
            } else {
                app.toast(data.message);
            }
        },
        error: function(xhr, type, errorThrown) {
            dealingWithErrorRequest(errorThrown);
            app.hideLoader();
            return callback('网络异常,请稍后再试');
            console.log(xhr, type, errorThrown)  
        }
    });
  }
  //日期选择器
  function getDatePicker(tapDom,applyDom){
    tapDom.on('tap',function(){
        var dtPicker = new mui.DtPicker({type:'date'}); 
        dtPicker.show(function (selectItems) { 
            var y = selectItems.y.text;  //获取选择的年
            var m = selectItems.m.text;  //获取选择的月
            var d = selectItems.d.text;  //获取选择的日
            var date = y + "-" + m + "-" + d ;
            console.log(date)
            applyDom.val(date)  
        }) 
    })
  }
  //选择器
  function getPicker(arr,object){
    var picker = new mui.PopPicker();
    picker.setData(arr);
    picker.show(function (selectItems) {
        object.val(selectItems[0].text)
    })
}
//查看图片
var queryPhoto = function (id, callback) {
	var url = config.urls.baseUrl + config.actions.queryPhoto;
	let param = {
		groupId : id
	}
	// app.showLoader();
	$.ajax(url, {
		data : param,
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
        async:false,
		headers: {
			"Content-Type": "application/json;charset=UTF-8",
			"X-Access-Token":app.sessionId()
		},
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
		success: function(data) {
			// app.hideLoader();
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
//随机生成groupId
function uuid () {
    var s= [];
    var hexDigits = '0123456789abcdef';
    for(var i =0;i<36;i++){
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10),1)
    }
    s[14] = '4';
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1)
    s[8] = s[13] = s[18] = s[23] = ''
    var uuid = s.join('')
    return uuid
}
