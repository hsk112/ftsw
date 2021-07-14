/*
 *   缺 陷
 * */

/*参数*/
//bugSource   缺陷来源*
//bugTitle    缺陷名称*
//objectDesc 对象类型（选）下拉  ->返回名称
//commName commId 小区（选）下拉
//bugTypeDesc 缺陷（枚举）（选）下拉
//bugType  缺陷类型* 下拉 bugTypeId
//bugLevel 缺陷等级* 下拉
//problemContent 问题(缺陷)描述（选）
//locationContent 位置描述(地点)（选）
//bugImage 缺陷图片（选）
//findBy  发现人* 下拉
//findTime 发现时间* 选择
//belongId  belongName负责单位* 下拉
//belongManager belongManagerName负责人* 下拉

// const pointCode = {
//     检查井: '040501',
//     雨水口: '040502',
//     跌水井: '040503',
//     水封井: '040504',
//     冲洗井: '040505',
//     排气井: '040506',
//     沉泥井: '040507',
//     泵井: '040508',
//     溢流井: '040509',
//     连接暗井: '040510',
//     排污装置: '040511',
//     倒虹井: '040512',
//     阀门: '040513',
//     暗沟地面岀口: '040514',
//     出口闸: '040515',
//     排水泵站: '040516',
//     化粪池: '040517',
//     隔油池: '040518',
//     沉淀池: '040519',
//     污水处理厂: '040520',
//     压力调节塔: '040521',
//     雨篦: '040522',
//     污篦: '040523',
//     小区污水处理站: '040524',
//     接户井: '040525',
//     闸阀井: '040526',
//     压力井: '040527',
//     拍门井: '040528',
//     截流井: '040529',
//     溢流堰: '040530',
//     调蓄设施: '040531',
//     排水户: '040532',
//     沉砂池: '040533',
//
//     // =======额外新增======
//     接驳井: '041001',
//     天面立管: '041002',
//     高区立管: '041003',
//     低区立管: '041004',
//     未知立管: '041005',
//     虚拟井: '041006',
//     接户管: '041007',
//     排放口: '041008',
//     合流井: '041009',
//     泄流井: '041010',
//     雨量站: '041012',
//     智慧井: '040111',
//     未知点: '042000',
//
//     // =======
//     一般管线点: '040601',
//     交叉点: '040602',
//     出水口: '040603',
//     进水口: '040604',
//     非探测区: '040605',
//     三通: '040606',
//     四通: '040607',
//     多通: '040608',
//     变径: '040609',
//     变材: '040610',
//     转折点: '040611',
//     变坡点: '040612',
//     预留口: '040613',
//     进出房点: '040614',
//     井边点: '040615',
//     偏心点: '040616',
//     起始点: '040617',
//     放水口: '040618',
// };

//设施编号用到
var codeJson =[{
    "value":1,
    "name": '雨水检查井',
    "code":'040501'
}, {
    "value":2,
    "name":'污水检查井',
    "code":'040501'
},{
    "value":3,
    "name":'雨水口',
    "code":'040502'
},{
    "value":4,
    "name":'雨水管渠',
    "code":''
},{
    "value":5,
    "name":'污水管渠',
    "code":''
},{
    "value":6,
    "name":'垃圾池',
    "code":''
},{
    "value":7,
    "name":'化粪池',
    "code":'040517'
},{
    "value":8,
    "name":'隔油池',
    "code":'040518'
}
];

// 管渠类型
var lineType = [
    {"value":1, "name":"雨污合流渠"},
    {"value":2, "name":"雨水管渠"},
    {"value":3, "name":"污水管渠"},
    {"value":4, "name":"截流渠"}
];

function getPointCode(objectType){
    for (var i in codeJson){
        var item = codeJson[i];
        if(objectType == item.value){
            return item.code;
        }
    }
    return '';
}

function getPointName(code){
    for (var i in codeJson){
        var item = codeJson[i];
        if(code == item.code){
            if (code == '040501') return '检查井';
            return item.name;
        }
    }
    return '未知类型';
}

function getLineType(type){
    for(var i in lineType){
        var item = lineType[i];
        if(type == item.value){
            return item.name;
        }
    }
    return '未知类型';
}

/**
 * 缺陷管理-添加
 * @param {Object} callback
 * 页面qx_manage.html
 */
var qxAdd = function(param, callback) {
	var url = config.urls.baseUrl + config.actions.addQx;

	app.showLoader();
	$.ajax(url, {
        data: param,
		// data: "",
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		headers: {
			// "Content-Type": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token": app.sessionId()
            // "X-Access-Token":config.urls.tempToken
		},
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
		success: function(data) {
			app.hideLoader();
			if (dealingWithResponseCode(data)) {
				callback(data);
			} else {
				app.toast(data.message);
                // console.log(data.message)
			}
		},
		error: function(xhr, type, errorThrown) {
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}
	});
}

/**
 * 缺陷管理-修改
 * 页面qx_edit.html
 */
var qxEdit = function(param,callback){
    var url = config.urls.baseUrl + config.actions.editQx;

    app.showLoader();
    $.ajax(url, {
        data: param,
        dataType: 'json', //服务器返回json格式数据
        type: 'post', //HTTP请求类型
        headers: {
            // "Content-Type": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Access-Token": app.sessionId()
            // "X-Access-Token":config.urls.tempToken
        },
        timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
        success: function(data) {
            app.hideLoader();
            if (dealingWithResponseCode(data)) {
                callback(data);
            } else {
                app.toast(data.message);
                // console.log(data.message)
            }
        },
        error: function(xhr, type, errorThrown) {
			dealingWithErrorRequest(errorThrown);
            app.hideLoader();
            return callback('网络异常,请稍后再试');
        }
    });
}

/**
 * 缺陷管理-删除
 */
var qxDel = function(guid,callback){
    var url = config.urls.baseUrl + config.actions.delQx;
    
	let param = {
		guid : guid
	}
	app.showLoader();
	$.ajax(url, {
		data:param,
        dataType: 'json', //服务器返回json格式数据
        type: 'post', //HTTP请求类型
        headers: {
            // "Content-Type": "application/json",
            "X-Access-Token": app.sessionId()
            // "X-Access-Token":config.urls.tempToken
        },
        timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
        success: function(data) {
            app.hideLoader();
            if (dealingWithResponseCode(data)) {
                callback(data);
            } else {
                app.toast(data.message);
                // console.log(data.message)
            }
        },
        error: function(xhr, type, errorThrown) {
			dealingWithErrorRequest(errorThrown);
            app.hideLoader();
			// app.toast('网络异常,请稍后再试')
            return callback('网络异常,请稍后再试');
        }
    });
}


/**
 * 获取缺陷来源√
 * ZHSW.DEVICE.BUG_SOURCE
 */

/**
 * 获取某个缺陷来源
 * @param sid
 * @returns {*}
 */
function getAQx_Source(sid,callback){
    //用枚举
    // ZHSW.DEVICE.BUG_SOURCE
    aSource('ZHSW.DEVICE.BUG_SOURCE',function (data) {

        if (206 != parseInt(data.code)) {
            app.toast(data.message);
            // console.log(data.message)
            return;
        }
        var resultJSON =[];
        for (var i = 0; i < data.result.length; i++) {
            var item = data.result[i];
            resultJSON.push({
                text: item.text,
                value: item.value
            })
        }
        if(sid ==""||sid ==null){
            callback("无来源");
            return ;
        }

        for(var i in resultJSON){
            if(sid == parseInt(resultJSON[i].value)){
                // console.log(resultJSON[i].text)
                callback(resultJSON[i].text);
                return;
            }
        }
        return ;
    })
}

var aSource = function(key, callback) {
    var url = config.urls.baseUrl + config.actions.getDictItems + "/" + key;
    var params = {};
    $.ajax(url, {
        data: '',
        dataType: 'json', //服务器返回json格式数据
        type: 'get', //HTTP请求类型
        // async:false, //同步
        headers: {
            "Content-Type": "application/json",
            "X-Access-Token": app.sessionId()
        },
        timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
        success: function(data) {
            if (dealingWithResponseCode(data)) {
                data.key = key;
                callback(data);
            } 
        },
        error: function(xhr, type, errorThrown) {
            dealingWithErrorRequest(errorThrown);
            app.hideLoader();
            return callback('网络异常,请稍后再试');
        }
    });
}

var getQxDeviceType111 = function(param,callback){
    //查接口
    var url = config.urls.baseUrl + config.actions.getDeviceType;

    // let param = {
    //     objectType : objectType
    // }
    app.showLoader();
    $.ajax(url, {
        data:param,
        dataType: 'json', //服务器返回json格式数据
        type: 'get', //HTTP请求类型
        // async:false,
        headers: {
            // "Content-Type": "application/json",//不要
            "X-Access-Token": app.sessionId()
            // "X-Access-Token":config.urls.tempToken
        },
        timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
        success: function(data) {
            app.hideLoader();
            if (dealingWithResponseCode(data)) {
                // //console.log(data);
                callback(data);
            } else {
                app.toast(data.message);
                // console.log(data.message)
            }
        },
        error: function(xhr, type, errorThrown) {
            dealingWithErrorRequest(errorThrown);
            app.hideLoader();
            return callback('网络异常,请稍后再试');
        }
    });
}
var getQxDeviceType = function(param,callback){
    var url = config.urls.baseUrl+config.actions.getInspectDeviceType;//getDeviceType;
    // console.log('getQxDeviceType start')
    console.log(url)
    console.log(JSON.stringify(param))
    // console.log('getQxDeviceType end')
    app.showLoader();
    $.ajax(url, {
        data:param,
        dataType: 'json', //服务器返回json格式数据
        type: 'get', //HTTP请求类型
        headers: {
            // "Content-Type": "application/json",//不要
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Access-Token": app.sessionId()
            // "X-Access-Token":config.urls.tempToken
        },
        timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
        success: function(data) {
            app.hideLoader();
            if (dealingWithResponseCode(data)) {
                // //console.log(data);
                callback(data);
            } else {
                app.toast(data.message);
                // console.log(data.message)
            }
        },
        error: function(xhr, type, errorThrown) {
            dealingWithErrorRequest(errorThrown);
            app.hideLoader();
            return callback('网络异常,请稍后再试');
        }
    });

}

/**
 * 获取所有缺陷类型（根据分类）√
 * 根据objectType
 */
var getQx_Type = function(objectType,callback){
    //查接口
    var url = config.urls.baseUrl + config.actions.getQxType;

	let param = {
		// objectType : objectType,
        dictId: '22d230ec8de1b56cbe04bc29521051e0'
	}
	console.log(JSON.stringify(param))
	app.showLoader();
	$.ajax(url, {
		data:param,
        dataType: 'json', //服务器返回json格式数据
        type: 'get', //HTTP请求类型
        // async:false,
        headers: {
            // "Content-Type": "application/json",//不要
            "X-Access-Token": app.sessionId()
            // "X-Access-Token":config.urls.tempToken
        },
        timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
        success: function(data) {
            app.hideLoader();
            if (dealingWithResponseCode(data)) {
                // //console.log(data);
                callback(data);
            } else {
                app.toast(data.message);
                // console.log(data.message)
            }
        },
        error: function(xhr, type, errorThrown) {
			dealingWithErrorRequest(errorThrown);
            app.hideLoader();
            return callback('网络异常,请稍后再试');
        }
    });
}


/**
 * 获取根据objectType和bugType获取某个缺陷类型
 */
var getAQx_Type = function(objectType,bugType,callback){
    //查接口
    // var url = config.urls.baseUrl+"ft-device/monitor/bugEnum/query/bugType"+"?objectType="+objectType
    //根据对象类型获取缺陷类型集合
    getQx_Type(objectType,function(data){
        if (200 != parseInt(data.code)) {
            app.toast(data.message);
            // console.log(data.message)
            return;
        }
        var resultJSON =[];
        for (var i = 0; i < data.result.length; i++) {
            var item = data.result[i];
            resultJSON.push({
                text: item.problemType_dictText,
                value: item.problemType
            })
        }

        //根据缺陷id获取对应缺陷
        for(var i in resultJSON){
            //console.log(resultJSON[i].value)
            //console.log(resultJSON[i].text)
            if(bugType == parseInt(resultJSON[i].value)){
                // console.log(JSON.stringify(resultJSON[i]))
                return callback( resultJSON[i])
                // return;
            }
        }
        // return "";
        return callback("无对应信息")
    })
}


/**
 * 获取缺陷等级√
 * 4个级别
 */

/**
 * 获取单个缺陷等级by 查询结果的buyLevel 1,2,3.....
 */
var getAQx_Level = function(bugLevel,callback){
        //用枚举
        // ZHSW.DEVICE.BUG_LEVEL
        getDictItems('ZHSW.DEVICE.BUG_LEVEL',function (data) {

            if (206 != parseInt(data.code)) {
                app.toast(data.message);
                // console.log(data.message)
                return;
            }
            var resultJSON =[];
            for (var i = 0; i < data.result.length; i++) {
                var item = data.result[i];
                resultJSON.push({
                    text: item.text,
                    value: item.value
                })
            }

            for(var i in resultJSON){
                if(bugLevel == parseInt(resultJSON[i].value)){
                    callback( resultJSON[i].text)
                    return;
                }
            }
            return "";
        })
}


/**
 * 获取某个状态
 */
var getAQx_Status = function(bugStatus,callback){
    getDictItems('ZHSW.DEVICE.BUG_STATE',function (data) {

        if (206 != parseInt(data.code)) {
            app.toast(data.message);
            // console.log(data.message)
            return;
        }
        var resultJSON =[];
        for (var i = 0; i < data.result.length; i++) {
            var item = data.result[i];
            resultJSON.push({
                text: item.text,
                value: item.value
            })
        }

        for(var i in resultJSON){
            if(bugStatus == parseInt(resultJSON[i].value)){
                return callback( resultJSON[i].text);
            }
        }
        return "";
    })

}

/**
 * 获取设施类型
 * by请求，用枚举ZHSW.DEVICE.BUG_OBJECT_TYPE
 */

/**
 * 根据xx获取对象名
 * @param objectType
 */
var getAQx_ObjType = function(objectType,callback){

    //用枚举
    //ZHSW.DEVICE.BUG_OBJECT_TYPE
    getAQx_ObjType2('ZHSW.DEVICE.BUG_OBJECT_TYPE',function (data) {

            if (206 != parseInt(data.code)) {
                app.toast(data.message);
                // console.log(data.message)
                return;
            }
            var resultJSON =[];
            for (var i = 0; i < data.result.length; i++) {
                var item = data.result[i];
                resultJSON.push({
                    text: item.text,
                    value: item.value
                })
            }

            for(var i in resultJSON){
                if(objectType == parseInt(resultJSON[i].value)){
                    callback(resultJSON[i].text)
                    return;
                }
            }
			callback("无")
            return;
        })
}

var getAQx_ObjType2 = function(key, callback) {
    var url = config.urls.baseUrl + config.actions.getDictItems + "/" + key;
    var params = {};
    $.ajax(url, {
        data: '',
        dataType: 'json', //服务器返回json格式数据
        type: 'get', //HTTP请求类型
        // async:false,
        headers: {
            "Content-Type": "application/json",
            "X-Access-Token": app.sessionId()
        },
        timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
        success: function(data) {
            if (dealingWithResponseCode(data)) {
                data.key = key;
                callback(data);
            } 
        },
        error: function(xhr, type, errorThrown) {
            dealingWithErrorRequest(errorThrown);
            app.hideLoader();
            return callback('网络异常,请稍后再试');
        }
    });
}

/**
 *获取小区写在common.js中
 */

/**
 * 获取发现人
 */
var getQx_Discover = function(callback){
	var url = config.urls.baseUrl+config.actions.getDiscover;
    let  data = {
                pageNo: 1,
                pageSize: 20,
                column: "createTime",
                order: "desc",
                field: "id,,,personName,personSex,departName,companyName,personMobilePhone,createTime",
            };
    app.showLoader();
    $.ajax(url, {
        data:data,
        dataType: 'json', //服务器返回json格式数据
        type: 'get', //HTTP请求类型
        headers: {
            "Content-Type": "application/json",
            "X-Access-Token": app.sessionId()
        
        },
        timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
        success: function(data) {
            app.hideLoader();
            if (dealingWithResponseCode(data)) {
                //console.log(data);
                callback(data);
            } else {
                app.toast(data.message);
                // console.log(data.message)
            }
        },
        error: function(xhr, type, errorThrown) {
			dealingWithErrorRequest(errorThrown);
            app.hideLoader();
            return callback('网络异常,请稍后再试');
        }
    });
}

/**
 * 缺陷信息分页查询
 */
var searchBug = function(param,callback){
    var url = config.urls.baseUrl+config.actions.getQx;
    param.pageSize = 10;

    app.showLoader();
    $.ajax(url, {
        data:param,
        dataType: 'json', //服务器返回json格式数据
        type: 'get', //HTTP请求类型
        headers: {
            // "Content-Type": "application/json",//不要
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Access-Token": app.sessionId()
            // "X-Access-Token":config.urls.tempToken
        },
        timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
        success: function(data) {
            app.hideLoader();
            if (dealingWithResponseCode(data)) {
                // //console.log(data);
                callback(data);
            } else {
                app.toast(data.message);
                // console.log(data.message)
            }
        },
        error: function(xhr, type, errorThrown) {
			dealingWithErrorRequest(errorThrown);
            app.hideLoader();
            return callback('网络异常,请稍后再试');
        }
    });

}

/**
 * 根据guid获取缺陷信息
 */
var searchBugById = function(guid,callback){
    var url = config.urls.baseUrl + config.actions.getQxById;
    let param = {
		guid: guid
	}
    app.showLoader();
    $.ajax(url, {
        data: param,
        dataType: 'json', //服务器返回json格式数据
        type: 'get', //HTTP请求类型
        headers: {
            "X-Access-Token": app.sessionId()
            // "X-Access-Token":config.urls.tempToken
        },
        timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
        success: function(data) {
            app.hideLoader();
            if (dealingWithResponseCode(data)) {
                // //console.log(data);
                callback(data);
            } else {
                app.toast(data.message);
                // console.log(data.message)
            }
        },
        error: function(xhr, type, errorThrown) {
			dealingWithErrorRequest(errorThrown);
            app.hideLoader();
            return callback('网络异常,请稍后再试');
        }
    });

}


/**
 *
 * 获取图片token
 */
var queryQxPhoto = function (id, callback) {
    var url = config.urls.baseUrl + config.actions.queryPhoto;
    let param = {
		 groupId : id
	}
    // app.showLoader();
    $.ajax(url, {
		data: param,
        dataType: 'json', //服务器返回json格式数据
        type: 'get', //HTTP请求类型
		async: false,
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "X-Access-Token":app.sessionId()
        },
        timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
        success: function(data) {
            // app.hideLoader();
            if (dealingWithResponseCode(data)) {
                // console.log("queryQxPhoto:"+JSON.stringify(data))
                if(data.result.length>0){
                    callback(data);
                }else{
                    callback(0);
                }
            } else {
                app.toast(data.message);
            }
        },
        error: function(xhr, type, errorThrown) {
            dealingWithErrorRequest(errorThrown);
            // app.hideLoader();
            return callback('网络异常,请稍后再试');
        }
    });
}







