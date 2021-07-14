/**
 * 获取工单数据列表
 * @param param
 * @param callback
 */
var getWorkOrderDateList = function (params,callback) {


    console.log("进入工单数据列表js")
    var url = config.urls.baseUrl + config.actions.getCorrelationForm;
	console.log(url)
	console.log(JSON.stringify(params))
    app.showLoader();

    $.ajax(url, {
        data:params,
        dataType: 'json', //服务器返回json格式数据
        type: 'GET', //HTTP请求类型
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Access-Token":app.sessionId()
        },
        timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
        success: function(data) {
            console.log("数据 返回")
            console.log("标准"+JSON.stringify(data))
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

//时间转换
function format(Date){
	var Y = Date.getFullYear();
	var M = Date.getMonth() + 1;
		M = M < 10 ? '0' + M : M;// 不够两位补充0
	var D = Date.getDate();
		D = D < 10 ? '0' + D : D;
	var H = Date.getHours();
		H = H < 10 ? '0' + H : H;
	var Mi = Date.getMinutes();
		Mi = Mi < 10 ? '0' + Mi : Mi;
	var S = Date.getSeconds();
		S = S < 10 ? '0' + S : S;
		return Y + '-' + M + '-' + D + ' ' + H + ':' + Mi + ':' + S;
}


//新增

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



