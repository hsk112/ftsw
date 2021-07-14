//***********************
//混接点核心
//***********************

//混接点对象
var mix_discharger = {
	address: '', //混接地点
	cod: '',
	commName: '', //所属小区 name
	conductivity: '', //电导率
	corpCode: '', //所属租户
	createBy: '', //创建人
	createTime: '', //创建时间
	delFlag: '', //删除标志
	drawingFileId: '', //改造图纸文件
	expNo: '', //混接点检查井编号
	fileId: '', //位置照片
	fileIdPaths: [], //位置照片路径
	fileMixId: '', //混接情况照片
	fileMixIdPaths: [], //混接情况照片路径
	flowRe: '', //水量
	flowType: '', //水流是否清澈
	guid: '', //主键
	ideaFileId: '', //改造方案文件
	inBasin: '', //所属流域
	inCommId: '', //所属小区
	inStreetId: '', //所属街道
	inputByDepart: '', //填写人depart
	// inputById: '', //填写人
	// inputByName: '', //填写人name
	inputByUserName: '', //填写人username
	inputByRealName: '', //填写人realname
	inputByPhone: '', //填写人phone
	isFlow: '', //有无水流连续流出
	isSmell: '', //有无明显异味
	mixCode: '', //混接点编号
	mixDepth: '', //混接管埋深
	mixDiameter: '', //混接管管径
	mixPipe: '', //混接管编号
	mixPosition: '', //混接点位置字典
	mixSource: '', //混接水来源
	mixType: '', //混接类型编号
	nh3N: '', //NH3-N
	overFileId: '', //竣工图纸文件
	prjCode: '', //项目编号
	reformState: '', //改造状态 1改造 2未改造
	remark: '', //混接点备注
	remarkMonitor: '', //混接点监测备注
	// samplingBy: '', //取样人员
	// samplingByName: '', //取样人员name
	samplingByUserName: '', //取样人员username
	samplingByRealName: '', //取样人员realname
	samplingDate: '', //采样日期
	strAttachment: '', //strAttachment
	streetName: '', //所属街道 name
	// surveyBy: '', //调查人员
	// surveyByName: '', //调查人员name
	surveyByUserName: '', //调查人员username
	surveyByRealName: '', //调查人员realname
	surveyTime: '', //调查日期
	// testBy: '', //检测人员
	// testByName: '', //检测人员name
	testByUserName: '', //检测人员username
	testByRealName: '', //检测人员realname
	testDate: '', //检测日期
	testTime: '', //检测时间
	upNode: '', //混接点上游井编号
	updateBy: '', //更新人
	updateTime: '', //更新时间
	weather: '', //天气
	dischargerType: '' //混接程度
}


//混接点全局变量
var GlobalKey = {
	guidsList: "guidsList", //附近的混接点列表guids
	SMID: "SMID",
	Lat: "Lat",
	Lng: "Lng",
	pointNum: "pointNum", //混接点个数
	guid: "guid", //检查井编号
	guids: "guids", //拼接多个检查井编号
	upNOde: "upNode", //上游井编号
	//地图坐标点
	point: "point",
	//选中地点
	address: "address",
	//是否选中混接点
	isSelectMix: "isSelectMix",
	// 混接点信息
	mix: "mix",
	mixTypeText: "mixTypeText",
	mixStatusText: "mixTypeText",
	mixSourceText: "mixSourceText",
	//流域
	inBasin: "inBasin",
	inBasinId: "inBasinId",
	// 街道
	inStreetId: "inStreetId",
	streetName: "streetName",
	//社区
	inCommId: "commuId",
	commName: "commName",
	// 街路
	road: "road",
	road_dictText: "road_dictText",
	// 门牌
	houseNo: "houseNo",
	//传照片
	photoAttachment: 'photoAttachment'
}

var photoAttachment = [{
		"groupId": "",
		"fileTokens": "",
		"fieldName": "fileId", //混接点位置照片
		"tableName": "attachment"
	}, {
		"groupId": "",
		"fileTokens": "",
		"fieldName": "fileMixId", //混接情况照片
		"tableName": "attachment"
	}, {
		"groupId": "",
		"fileTokens": "",
		"fieldName": "ideaFileId", //改造方案文件
		"tableName": "attachment"
	},
	{
		"groupId": "",
		"fileTokens": "",
		"fieldName": "drawingFileId", //改造图纸文件
		"tableName": "attachment"
	},
	{
		"groupId": "",
		"fileTokens": "",
		"fieldName": "overFileId", //竣工图纸文件
		"tableName": "attachment"
	}
];


var findFilesByGroupId = function(param, callback) {
	var url = config.urls.baseUrl + config.actions.findFilesByGroupId;

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
			// if (dealingWithResponseCode(data)) {
			callback(data);
			// } else {
			// 	app.toast(data.message);
			// }
		},
		error: function(xhr, type, errorThrown) {
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}
	});
}
/**
 * @param {Object} strFormData
 * @param {Object} callback
 */
var getManhole = function(guid, callback) {
	var url = config.urls.baseUrl + config.actions.getManholeByGuid;
	
	let param = {
		guid: guid
	}
	app.showLoader();
	$.ajax(url, {
		data : param,
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token": app.sessionId()
		},
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
		success: function(data) {
			console.log("接口返回：" + JSON.stringify(data))
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
			app.toast("网络异常,请稍后再试");
		}
	});
}
/**
 * 新增混接点
 */
var addMix = function(strFormData, callback) {
	var url = config.urls.baseUrl + config.actions.addMixing;
	console.log("新增混接点参数信息：" + JSON.stringify(strFormData));
	app.showLoader();

	console.log(JSON.stringify(strFormData))
	$.ajax(url, {
		data: strFormData,
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token": app.sessionId()
		},
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
		success: function(data) {
			console.log("新增接口返回：" + JSON.stringify(data))
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
			app.toast("网络异常,请稍后再试");
		}
	});

}

/**
 * 编辑混接点
 */
var editMix = function(strFormData, callback) {
	var url = config.urls.baseUrl + config.actions.editMixing;

	console.log("编辑混接点参数信息：" + strFormData)
	app.showLoader();

	$.ajax(url, {
		data: strFormData,
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token": app.sessionId()
		},
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
		success: function(data) {
			console.log(JSON.stringify(data))
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
			app.toast("网络异常,请稍后再试");
		}
	});

}

/**
 * 混接点查询
 */
var getMixByExpNO = function(expNo, callback) {
	var url = config.urls.baseUrl + config.actions.getMixDetail;
	
	let param = {
		guid: expNo
	}
	app.showLoader();
	$.ajax(url, {
		data : param,
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token": app.sessionId()
		},
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
		success: function(data) {
			console.log("接口返回:" + JSON.stringify(data));
			app.hideLoader();
			if (dealingWithResponseCode(data)) {
				callback(data);
			} else {
				app.toast(data.message);
				// callback(data);
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
 * 混接点批量查询
 */
var getMixBatchByGuids = function(guids, callback) {
	var url = config.urls.baseUrl + config.actions.getMixingBatchByGuids;
	
	let param = {
		guids: guids
	}
	app.showLoader();
	$.ajax(url, {
		data : param,
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token": app.sessionId()
		},
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
		success: function(data) {
			// console.log("接口返回:" + JSON.stringify(data));
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

//分页获取混接点列表
var getMixPageList = function(isShowLoader, param, callback) {
	var url = config.urls.baseUrl + config.actions.getMixingListByPage;
	if (isShowLoader) {
		app.showLoader();
	}

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

/**
 * 混接点管理-删除
 */
var mixDel = function(guid, oldstate, callback) {
	console.log("param", guid)
	var url = config.urls.baseUrl + config.actions.delMix
	let param = {
		guid: guid,
		appOldState: oldstate,
		reformState: 5
	};
	
	app.showLoader();
	$.ajax(url, {
		data: param,
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
 * 根据guid获取混接点信息
 */
var searchMixById = function(guid, callback) {
	var url = config.urls.baseUrl + config.actions.getMixDetail;
	
	let param = {
		guid: guid
	}
	app.showLoader();
	$.ajax(url, {
		data : param,
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
				// alert(data);
				callback(data);
			} else {
				app.toast(data.message);
				// alert(data.code);
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
 * 获取混接点编号
 */
var queryNumber = function(param,callback) {
	var url = config.urls.baseUrl + config.actions.queryNumber

	app.showLoader();
	console.log(JSON.stringify(param))
	$.ajax(url, {
		data: param,
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		headers: {
			"Content-Type": "application/json;charset=UTF-8",
			"X-Access-Token":app.sessionId()
		},
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
		success: function(data) {
			app.hideLoader();
			// if (dealingWithResponseCode(data)) {
				callback(data);
			// } else {
			// 	app.toast(data.message);
			// }
		},
		error: function(xhr, type, errorThrown) {
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}
	});
}
/**
 * 根据guid获取小区
 */
var getXQ = function(guid, callback) {
	var url = config.urls.baseUrl + config.actions.getXQ;
	
	let param = {
		guid: guid
	}
	app.showLoader();
	$.ajax(url, {
		data : param,
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
 * 根据guid获取街道
 */
var getStreet = function(guid, callback) {
	var url = config.urls.baseUrl + config.actions.getStreet;
	
	let param = {
		guid: guid
	}
	app.showLoader();
	$.ajax(url, {
		data : param,
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		headers: {
			"X-Access-Token": app.sessionId(),
			"Content-Type": "application/x-www-form-urlencoded"
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
//判断是否为空
function isEmp(objectType) {
	if (objectType == undefined || objectType == "" || objectType == null) {
		return "无";
	} else return objectType;
}

function getReformState(sid, callback) {
	//用枚举
	// MONITOR_MIXING_REFORM_STATE
	aSource('MONITOR_MIXING_REFORM_STATE', function(data) {

		if (206 != parseInt(data.code)) {
			app.toast(data.message);
			// console.log(data.message)
			return;
		}
		var resultJSON = [];
		for (var i = 0; i < data.result.length; i++) {
			var item = data.result[i];
			resultJSON.push({
				text: item.text,
				value: item.value
			})
		}
		if (sid == "" || sid == null || sid == undefined) {
			callback("无");
			return;
		}

		for (var i in resultJSON) {
			if (sid == parseInt(resultJSON[i].value)) {
				// console.log(resultJSON[i].text)
				callback(resultJSON[i].text);
				return;
			}
		}
		return;
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

function getRS(objectType) {
	if (objectType == undefined || objectType == "" || objectType == null) {
		return "无";
	}
	for (var i in reformStateJson) {
		var item = reformStateJson[i];
		if (objectType == item.value) {
			return item.text;
		}
	}
	return '';
}

function getFlowState(sid, callback) {
	//用枚举
	// ZHSW.DEVICE.ISFLOW
	aSource('ZHSW.DEVICE.ISFLOW', function(data) {

		if (206 != parseInt(data.code)) {
			app.toast(data.message);
			// console.log(data.message)
			return;
		}
		var resultJSON = [];
		for (var i = 0; i < data.result.length; i++) {
			var item = data.result[i];
			resultJSON.push({
				text: item.text,
				value: item.value
			})
		}
		if (sid == "" || sid == null || sid == undefined) {
			callback("无");
			return;
		}

		for (var i in resultJSON) {
			if (sid == parseInt(resultJSON[i].value)) {
				// console.log(resultJSON[i].text)
				callback(resultJSON[i].text);
				return;
			}
		}
		return;
	})
}

function getflowType(sid, callback) {
	//用枚举
	// ZHSW.DEVICE.FLOW_TYPE
	aSource('ZHSW.DEVICE.FLOW_TYPE', function(data) {

		if (206 != parseInt(data.code)) {
			app.toast(data.message);
			// console.log(data.message)
			return;
		}
		var resultJSON = [];
		for (var i = 0; i < data.result.length; i++) {
			var item = data.result[i];
			resultJSON.push({
				text: item.text,
				value: item.value
			})
		}
		if (sid == "" || sid == null || sid == undefined) {
			callback("无");
			return;
		}

		for (var i in resultJSON) {
			if (sid == parseInt(resultJSON[i].value)) {
				// console.log(resultJSON[i].text)
				callback(resultJSON[i].text);
				return;
			}
		}
		return;
	})
}

function getSmell(sid, callback) {
	//用枚举
	// ZHSW.DEVICE.ISSMELL
	aSource('ZHSW.DEVICE.ISSMELL', function(data) {

		if (206 != parseInt(data.code)) {
			app.toast(data.message);
			// console.log(data.message)
			return;
		}
		var resultJSON = [];
		for (var i = 0; i < data.result.length; i++) {
			var item = data.result[i];
			resultJSON.push({
				text: item.text,
				value: item.value
			})
		}
		if (sid == "" || sid == null || sid == undefined) {
			callback("无");
			return;
		}

		for (var i in resultJSON) {
			if (sid == parseInt(resultJSON[i].value)) {
				// console.log(resultJSON[i].text)
				callback(resultJSON[i].text);
				return;
			}
		}
		return;
	})
}


function getMixType(sid, callback) {
	//用枚举
	// MONITOR_MIXING_TYPE
	aSource('MONITOR_MIXING_TYPE', function(data) {

		if (206 != parseInt(data.code)) {
			app.toast(data.message);
			// console.log(data.message)
			return;
		}
		var resultJSON = [];
		for (var i = 0; i < data.result.length; i++) {
			var item = data.result[i];
			resultJSON.push({
				text: item.text,
				value: item.value
			})
		}
		if (sid == "" || sid == null || sid == undefined) {
			callback("无");
			return;
		}

		for (var i in resultJSON) {
			if (sid == parseInt(resultJSON[i].value)) {
				// console.log(resultJSON[i].text)
				callback(resultJSON[i].text);
				return;
			}
		}
		return;
	})
}

function getMixPosition(sid, callback) {
	//用枚举
	// MONITOR_MIXING_POSITION_TYPE
	aSource('MONITOR_MIXING_POSITION_TYPE', function(data) {

		if (206 != parseInt(data.code)) {
			app.toast(data.message);
			// console.log(data.message)
			return;
		}
		var resultJSON = [];
		for (var i = 0; i < data.result.length; i++) {
			var item = data.result[i];
			resultJSON.push({
				text: item.text,
				value: item.value
			})
		}
		if (sid == "" || sid == null || sid == undefined) {
			callback("无");
			return;
		}

		for (var i in resultJSON) {
			if (sid == parseInt(resultJSON[i].value)) {
				// console.log(resultJSON[i].text)
				callback(resultJSON[i].text);
				return;
			}
		}
		return;
	})
}

function getMixSource(sid, callback) {
	//用枚举
	// ZHSW.DEVICE.MIX_SOURCE
	aSource('MONITOR_MIXING_SOURCE', function(data) {

		if (206 != parseInt(data.code)) {
			app.toast(data.message);
			// console.log(data.message)
			return;
		}
		var resultJSON = [];
		for (var i = 0; i < data.result.length; i++) {
			var item = data.result[i];
			resultJSON.push({
				text: item.text,
				value: item.value
			})
		}
		if (sid == "" || sid == null || sid == undefined) {
			callback("无");
			return;
		}

		for (var i in resultJSON) {
			if (sid == parseInt(resultJSON[i].value)) {
				// console.log(resultJSON[i].text)
				callback(resultJSON[i].text);
				return;
			}
		}
		return;
	})
}
//获取混接程度
function getMixDischargerType(dischargerType, callback) {
	aSource('MONITOR_MIXING_DISCHARGER_TYPE', function(data) {
		if (206 != parseInt(data.code)) {
			app.toast(data.message);
			// console.log(data.message)
			return;
		}
		var resultJSON = [];
		for (var i = 0; i < data.result.length; i++) {
			var item = data.result[i];
			resultJSON.push({
				text: item.text,
				value: item.value
			})
		}
		if (dischargerType == "" || dischargerType == null || dischargerType == undefined) {
			callback("无");
			return;
		}

		for (var i in resultJSON) {
			if (dischargerType == parseInt(resultJSON[i].value)) {
				// console.log(resultJSON[i].text)
				callback(resultJSON[i].text);
				return;
			}
		}
		return;
	})
}

/**
 * 获取历史工单
 */
var getHT = function(page, pageSize, param, callback) {
	var url = config.urls.baseUrl + config.actions.getHT;
	let params = {
		itemNo: param,
		page: page,
		pageSize: pageSize
	};
	app.showLoader();
	$.ajax(url, {
		data: params,
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
 * 获取混接点程度数量
 */
var getHjDegreeCount = function(callback) {
    var url = config.urls.baseUrl + config.actions.queryDegreeCount;
    let params = {
        // itemNo: param,
        // page: page,
        // pageSize: pageSize
    };
    app.showLoader();
    $.ajax(url, {
        data: params,
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
 * 获取工单详情
 */
var getTaskDet = function(guid, callback) {
	var url = config.urls.baseUrl + config.actions.getTaskDet;
	let param = {
		guid : guid
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
//判断混接程度
function mixLevel(reformState, dischargerType) {
	// alert(reformState+dischargerType)
	if (reformState != 1) {
		if (dischargerType == 3) {
			return "../../img/icon4.png";
		} else if (dischargerType == 2) {
			return "../../img/icon1.png";
		} else if (dischargerType == 1) {
			return "../../img/icon2.png";
		} else return "../../img/icon3.png";
	} else return "../../img/icon3.png";
}


var downloadFileById = function(param, callback) {
	var url = config.urls.baseUrl + config.actions.downloadFileById
	param = {
		id: '31de72f88b47a379f2d6d4cc651f20c3'
	};

	
	// app.showLoader();
	console.log(url);
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
			// if (dealingWithResponseCode(data)) {
			// 	// //console.log(data);
			// 	callback(data);
			// } else {
			// 	app.toast(data.message);
			console.log(JSON.stringify(data))
			// }
		},
		error: function(xhr, type, errorThrown) {
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}
	});
}

//改造状态
var reformStateJson = [{
		"value": 1,
		"text": '改造',
	},
	{
		"value": 2,
		"text": '未改造',
	},
	{
		"value": 3,
		"text": '新增待确认',
	},
	{
		"value": 4,
		"text": '改造待确认',
	},
	{
		"value": 5,
		"text": '删除待确认',
	},
	{
		"value": 6,
		"text": '已删除',
	},
];
//天气
var whetherJson = [{
		"value": 1,
		"text": '晴',
	},
	{
		"value": 2,
		"text": '多云',
	},
	{
		"value": 3,
		"text": '阴',
	},
	{
		"value": 4,
		"text": '雾',
	},
	{
		"value": 5,
		"text": '小雨',
	},
	{
		"value": 6,
		"text": '小到中雨',
	},
	{
		"value": 7,
		"text": '中雨',
	},
	{
		"value": 8,
		"text": '中到大雨',
	},
	{
		"value": 9,
		"text": '大雨',
	},
	{
		"value": 10,
		"text": '大雨到暴雨',
	},
	{
		"value": 11,
		"text": '阵雨',
	},
	{
		"value": 12,
		"text": '雷阵雨',
	},
	{
		"value": 13,
		"text": '暴雨',
	},
	{
		"value": 14,
		"text": '大暴雨',
	},
	{
		"value": 15,
		"text": '特大暴雨',
	},
	{
		"value": 16,
		"text": '台风',
	},
];


//用于匹配改造的字典
var stateColor = [{
    status:'改造',
    // color:'#29CC85'
    color:'grey'
},{
    status:'未改造',
    color:'#FF5656'
},{
    status:'新增待确认',
    color:'#0493f3'
},{
    status:'改造待确认',
    color:'#0493f3'
},{
    status:'删除待确认',
    color:'#0493f3'
},{
    status:'已删除',
    color:'#888888'
}]
