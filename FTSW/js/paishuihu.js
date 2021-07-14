//***********************
//排水户核心
//***********************

//排水对象
var ps_discharger = {

	/**
	 * 排水户名称
	 */
	dischargerName:'',//必填
	/**
	 * 排水户唯一编号
	 */
	// expNo:'',//必填
	/**
	 * 排水户记录序号
	 */
	dischargerRecordNo:'',
	/**
	 * 经度
	 */
	longitude:'',
	/**
	 * 纬度
	 */
	latitude:'',
	/**
	 * 排水户级别
	 */
	userlevel:'',//必填

	userlevel_dictText:'',

	/**
	 * 上级排水户编号
	 */
	parentId:'',
	/**
	 * 上级排水户名称
	 */
	parentName:'',
	/**
	 * 业主单位
	 */
	ownerComp:'',
	/**
	 * 业主单位联系人
	 */
	ownerPer:'',
	/**
	 * 业主联系电话
	 */
	ownerTel:'',
	/**
	 * 管理单位
	 */
	managerComp:'',

	managerComp_dictText:'',

	/**
	 * 管理单位联系人
	 */
	managerPer:'',
	/**
	 * 管理联系电话
	 */
	managerTel:'',
	/**
	 * 运维单位
	 */
	operatorId:'',//必填
	operatorId_dictText:'',
	/**
	 * 单位类型
	 * 排水户类型
	 */
	usertype:'',//必填
	usertype_dictText:'',
	/**
	 * 排水户分类
	 */
	sort:'',  //必填
	sort_dictText:'',
	/**
	 * 占地面积
	 */
	discArea:'',
	/**
	 * 主要业务活动
	 */
	business:'',
	/**
	 * 主要生产工艺
	 */
	process:'',
	/**
	 * 所属行政区
	 */
	district:'',//必填
	/**
	 * 所在街道
	 */
	street:'',//必填
	/**
	 * 所在社区
	 */
	commuId:'',//必填
	/**
	 * 所在居委会
	 */
	commitId:'',
	/**
	 * 所在街路巷名
	 */
	road:'',//必填
	/**
	 * 门牌号码
	 */
	houseNo:'',//必填
	/**
	 * 所属水务所
	 */
	stationId:'',//必填
	stationId_dictText:'',
	/**
	 * 所属水务所联系人
	 */
	stationContact:'',//必填
	/**
	 * 所属水务所联系电话
	 */
	stationPhone:'',//必填
	/**
	 * 所属流域
	 */
	basin:'',//必填
	/**
	 * 门牌详细地址
	 */
	address:'',//必填

	/**
	 * 录入人
	 */
	inputerfullname:'',//必填

	/**
	 * 联系方式
	 */
	inputPhone:'',
	/**
	 * 填写部门
	 */
	inputDepart:'',
	/**
	 * 填写日期
	 */
	inputDate:'',
	inputername:'',
	/**
	 * 审批人用户名
	 */
	approverUsername:'',
	/**
	 * 审批人姓名
	 */
	approverFullname:'',
	/**
	 * 用水性质
	 */
	waterType:'',
	/**
	 * 水表编号
	 */
	waterMetNu:'',
	/**
	 * 用水总量
	 */
	waterConsump:'',
	/**
	 * 自备水量
	 */
	waterSelfDaily:'',
	/**
	 * 污水类别
	 */
	pollutematter:'',
	pollutematter_dictText:'',
	/**
	 * 工业废水主要成分
	 */
	mainCont:'',
	/**
	 * 总排水量
	 */
	waterAllQuanit:'',
	/**
	 * 生产污水量
	 */
	productWasterQuant:'',
	/**
	 * 生活污水量
	 */
	sanitaryWasterQuant:'',
	/**
	 * 是否特殊物质用户
	 */
	ismatter:'',
	/**
	 * 特殊物质污染物名称
	 */
	matterName:'',
	/**
	 * 排水总悬浮固体
	 */
	waterSs:'',
	/**
	 * 排水生化需氧量
	 */
	waterBod5:'',
	/**
	 * 排水化学需氧量
	 */
	waterCodcr:'',
	/**
	 * 排水氨氮
	 */
	waterNh3N:'',
	/**
	 * 排水总氮
	 */
	waterTn:'',
	/**
	 * 排水总磷
	 */
	waterTp:'',
	/**
	 * 排水温度
	 */
	waterTemp:'',
	/**
	 * pH 值
	 */
	waterPh:'',
	/**
	 * 是否雨污分流
	 */
	passId:'',
	/**
	 * 雨污分流时间
	 */
	passTime:'',
	/**
	 * 现状是否违章
	 */
	isIllegal:'',
	/**
	 * 营业执照统一社会信用代码
	 */
	discCode:'',
	/**
	 * 营业执照核发日期
	 */
	discDate:'',
	/**
	 * 营业执照有效期
	 */
	discExpired:'',

	hasDiscCode:'',

	discCodeAttachment:'',
	/**
	 * 排水许可证编号
	 */
	pslCode:'',
	/**
	 * 许可证开始日期
	 */
	pslBeginDate:'',
	/**
	 * 许可证结束日期
	 */
	pslEndDate:'',

	hasPslCode:'',

	pslCodeAttachment:'',
	/**
	 * 排污许可证号
	 */
	eslCode:'',
	/**
	 * 排污许可证开始日期
	 */
	eslBeginDate:'',
	/**
	 * 排污许可证结束日期
	 */
	eslEndDate:'',

	eslCodeAttachment:'',

	/**
	 * 补充地址
	 */
	replenishAddress:'',

	/**
	 * 对象编码 默认：040532
	 */
	code:'',

	/**
	 * 关联点类表
	 */
	pointId:'',

	/**
	 * 7.21需求变更 是否为排水小区
	 */
	villageFlag:'',//必填

	/**
	 * 所属小区
	 */
	village:'',//必填

	/**
	 * 排水户照片
	 */
	pshPhoto:'',//必填

	/**
	 * 排水户联系人
	 */
	pshContact:'',//必填

	/**
	 * 排水户联系电话
	 */
	pshPhone:'',//必填

	/**
	 * 通知方式
	 */
	notifymethod:'',

	departName1:'',

	structures:'',

	disChargeLine:'',

	transportWell:'',
	guid: '',
	corpCode: '',
	smid: '',
	character: '', //排水户性质
	characterText: '',
    sewageWhereabouts:'',//污水去向
    rainSewageSeparated:'',//是否雨水分流
    businessDrainageHousehold:'',//是否经营排水户

	
}


//排水户全局变量
var GlobalKey = {
    //地图坐标点
    point : "point",
    //选中地点
    address : "address",
    //是否选中排水户
    isSelectPsh : "isSelectPsh",
	// 排水户信息
	psh : "psh",
	// 街道
	street:"street",
	street_dictText:"street_dictText",
	//社区
	commuId:"commuId",
	commuId_dictText:"commuId_dictText",
	// 街路
	road:"road",
	road_dictText:"road_dictText",
	//流域
	basin:"",
    basin_dictText:"",
	// 门牌
	houseNo:"houseNo",
	//排水户上传照片
	photoJSON:'photoJSON',
	id : '',
	smid: ''
}

//组装json
var savePsData = function(key,value){
	var ps = localStorage.getItem("ps_discharger");
	if(ps != "undefined" ){
		ps_discharger= JSON.parse(ps)
		ps_discharger[key] = value;
	}
	ps_discharger[key] = value;
	localStorage.setItem("ps_discharger",JSON.stringify(ps_discharger));
}

/**
 * 新增排水户
 */
var addPSH = function(strFormData,strAttachment,callback) {
	var url = config.urls.baseUrl + config.actions.addPSH;

	var params = {
		strFormData: strFormData,
		strAttachment: strAttachment,
		strFlowData: '{"api":"/process/startAndSubmit","processDefinitionKey":"psh_PsDischarger"}'
	};
	console.log(url)
	console.log(JSON.stringify(params))

	app.showLoader();
	$.ajax(url, {
		data: params,
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
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
				console.log(JSON.stringify(data))
				app.toast(data.message);
			}
		},
		error: function(xhr, type, errorThrown) {
			console.log(JSON.stringify("error-----"))
			console.log(JSON.stringify(errorThrown))
			console.log(JSON.stringify(type))
			console.log(JSON.stringify(xhr))
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			app.toast("网络异常,请稍后再试");
		}
	});
}

/**
 * 暂存排水户
 */
var temporaryPSH = function(strFormData,strAttachment,callback) {
	// var temporaryPSH = function(params,callback) {
	var url = config.urls.baseUrl + config.actions.addPSH;

	var params = {
		strFormData: strFormData,
		strAttachment: strAttachment,
		strFlowData: '{"api":"/process/start","processDefinitionKey":"psh_PsDischarger"}'
	};

	app.showLoader();
	$.ajax(url, {
		data: params,
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
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
				console.log(JSON.stringify(data))
				app.toast(data.message);
			}
		},
		error: function(xhr, type, errorThrown) {
			console.log(JSON.stringify("error-----"))
			console.log(JSON.stringify(errorThrown))
			console.log(JSON.stringify(type))
			console.log(JSON.stringify(xhr))
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			app.toast("网络异常,请稍后再试");
		}
	});
}

//排水户需要用到的图片，预先封装成固定格式
var photoJSON = [{
	"groupId": "",
	"fileTokens": "",
	"fieldName": "discCodeAttachment",//营业执照
	"tableName": "ps_discharger"
}, {
	"groupId": "",
	"fileTokens": "",
	"fieldName": "pslCodeAttachment",//排水许可
	"tableName": "ps_discharger"
}, {
	"groupId": "",
	"fileTokens": "",
	"fieldName": "eslCodeAttachment",//排污许可
	"tableName": "ps_discharger"
}, {
	"groupId": "",
	"fileTokens": "",
	"fieldName": "pshPhoto",//排水户照片
	"tableName": "ps_discharger"
}]

/**
 * 编辑排水户
 */
var editPSH = function(strFormData,strAttachment,callback) {
	var url = config.urls.baseUrl + config.actions.editPSH;
	var params = {
		strFormData: strFormData,
		strAttachment: strAttachment,
	};

	app.showLoader();
	$.ajax(url, {
		data: params,
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token": app.sessionId()
		},
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
		success: function(data) {
			app.hideLoader();
			// if (dealingWithResponseCode(data)) {
				callback(data);
			// } else {
				// console.log(JSON.stringify(data))
				// app.toast(data.message);
			// }
		},
		error: function(xhr, type, errorThrown) {
			console.log(JSON.stringify("error-----"))
			console.log(JSON.stringify(errorThrown))
			console.log(JSON.stringify(type))
			console.log(JSON.stringify(xhr))
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			app.toast("网络异常,请稍后再试");
		}
	});
}

// 关联排水户列表
/**
 * parentId 查找关联排水户
 */
var getPshByParentId = function(params, callback){
	//  // ecidi-cmp/ft-device/ps/discharger/list?_t=1625193676&parentId=
	var url = config.urls.baseUrl + config.actions.getPshByParentId;
	// var params = {
	//
	// };
	// if(parentId != null && parentId.length > 0) {
	// 	params = {
	// 		parentId: parentId
	// 	};
	// }

	app.showLoader();
	$.ajax(url, {
		data: params,
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token":app.sessionId()
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


/**
 * 根据GUID,返回排水户列表  
 */
var getPshByGUIDS = function(guids, callback){
	var url = config.urls.baseUrl + config.actions.getPshByGUIDS;
	var params = {
		guids: guids
	};

	app.showLoader();
	$.ajax(url, {
		data: params,
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token":app.sessionId()
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


/**
 * 根据编号,返回排水户列表  
 */
var getPshByExpNo = function(expNos,callback){
	var url = config.urls.baseUrl + config.actions.getPshByGUIDS;
	var params = {
		expNos:expNos
	};

	app.showLoader();
	$.ajax(url, {
		data:params,
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token":app.sessionId()
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


//获取排水户列表
var getPshPageList = function(page,count,param,callback) {
	var url = config.urls.baseUrl + config.actions.getPsh;
	var params =param||{};
	params.pageNo = page;
	params.pageSize = count;

	app.showLoader();   
	$.ajax(url, {
		data:params,
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
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
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}
	});
}



/**
 * 获取排水户信息
 */
var queryByGuid = function(guid,callback){
	var url = config.urls.baseUrl + config.actions.queryByGuid;
	let param = {
		guid : guid
	}
	app.showLoader();
	$.ajax(url, {
		data:param,
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token":app.sessionId()
		},
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；	
		success: function(data) {
			// console.log(JSON.stringify(data))
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

/**
 * 获取排水户图片信息
 */
var queryPhoto = function (id, callback) {
	var url = config.urls.baseUrl + config.actions.queryPhoto;
	let param = {
		groupId : id
	}
	app.showLoader();
	$.ajax(url, {
		data : param,
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		headers: {
			"Content-Type": "application/json;charset=UTF-8",
			"X-Access-Token":app.sessionId()
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

/**
 * 获取排水户排口信息
 */
var getPshConn = function (id, callback) {
	var url = config.urls.baseUrl + config.actions.getPshConn;
	
	let param = {
		id: id
	}
	app.showLoader();
	$.ajax(url, {
		data : param,
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		headers: {
			"Content-Type": "application/json",
			"X-Access-Token":app.sessionId()
		},
		timeout: 60000, //超时时间设置为20秒；
		success: function(data) {
			app.hideLoader();
			if (dealingWithResponseCode(data)) {
				callback(data);
			} else {
				console.log(JSON.stringify(data))
				app.toast(data.message);
			}
		},
		error: function(xhr, type, errorThrown) {
			console.log(JSON.stringify(errorThrown))
			console.log(JSON.stringify(type))
			console.log(JSON.stringify(xhr))
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}
	});
}

/**
 * 检测排水户是否重复
 */
var checkPSH = function(params,callback){
	var url = config.urls.baseUrl + config.actions.checkPSH;
	var params ={
		strFormData:JSON.stringify(params),
	};

	app.showLoader();
	$.ajax(url, {
		data:params,
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		async:false,
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token":app.sessionId()
		},
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；	
		success: function(data) {
			app.hideLoader();
			if (dealingWithResponseCode(data)) {
				callback(data);
			} else {
				app.toast(data.message);
				callback({ success: false });
			}
		},
		error: function(xhr, type, errorThrown) {
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}
	});
}

//统一信用代码验证
function disCodeReg(obj) {
    var reg = /^[1-9A-GY]{1}[1239]{1}[1-5]{1}[0-9]{5}[0-9A-Z]{10}$/;

    if (reg.test(obj.value) || obj.value== '') {
        isErr = false;
        // $("#discCodeError").hide()
    } else {
        // $("#discCodeError").fadeIn()
        obj.focus();
        isErr = true;
        app.toast("统一社会信用代码格式错误")
    }
}