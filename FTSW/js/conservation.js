//***********************
//水保督查
//***********************

//新增项目表单
var pro_form = {
	prjName: '', //测试项目
	prjSource: '', // 0
	prjType: '', //0
	prjCharacter: '', //0
	industry: '', // 0
	conservationStatus: '', //0
	prjLocationDistrict: '', //福田区
	prjLocationStreet: '', //福田街道
	prjLocation: '', //深圳市福田区福华三路283号星河国际B1
	smx: '', //114.05000814815543
	smy: '', //22.535043640137147
	constructionUnit: '', //大幅度发
	conContacts: '', //15485625486
	email: '', // 1093645430@qq.com
	buildUnit: '', // email
	buildContacts: '', //施工单位联系人
	supervisoryUnit: '', // 监理单位
	supervisoryContacts: '', // 监理单位联系人
	designUnit: '', // 主体设计单位
	designContacts: '', // 主体设计单位联系人
	startDate: '', //2020-11-11 11:30:08
	planEndDate: '', // 2020-11-12 11:30:12
	preventionArea: '', // 232323
	totalInvestment: '', // 0.0005
	civilInvestment: '', // 0.0002
	checkPlan: '', //1
	inputerFullname: '', // 陈敏
	inputDate: '', // 2020-11-10 23:51:40
	inspectors: '', // 柯刚,谢孙绵
	programmeType: '', //0
	programme: '', // 98e3caaf3f404f598defde8efd4ac8ef
	approvalNumber: '', // 批复文号
	approvalDep: '', // 审批部门
	approvalDate: '', //2020-11-12 17:50:49
	planCheckDate: '', //2020-11-10;
	strAttachment: '',

}

var GlobalKey = {
	fileProperty: "fileProperty",
	reformFile: "reformFile",
}


var reFormData = {
	projectName: '', //项目名称
	superviseFile: '', //整改文件groupId
	comDate: '', //要求完成日期
	notifymethod: [], //发送方式
	sendDate: '', //发送日期
	conservationStatus_dictText: '', //当前状态
	inputer: '', //填写人
	phonum: '', //填写人联系方式
	wsConservationFileDetailList: [],
	attachment: '', //整改文件groupId
	superviseId: '' //整改id
}

var fileAttachment = [{
	groupId: '',
	fileTokens: '',
	fieldName: "superviseFile",
	tableName: "WS_CONSERVATION_FILE"
}]

//新增现场检查记录
var sceneData = {
	projectId: '', //项目id
	caseSource: '', //案件来源
	checkDate: '', //检查日期
	conservationWeather: '', //天气情况
	projectProgress: '', //项目建设进展情况
	initialDesign: '', //水土保持初步设计
	constrDrawingDesign: '', //水土保持施工设计
	teamRules: '', //相关管理制度
	clearDuty: '', //防治职责
	monitorDevelopment: '', //监测开展情况
	checkSituation: '', //设施验收备案情况
	checkPeopleNum: '', //检查人数
	create_by: '', //填写人
	phonenum: '', //联系方式
	inputDepart: '', //填写部门
	createTime: '', //填写时间
	drainageDitchConstruct: '', //截排水沟建设情况
	drainageDitchIsDam: '', //截排水沟是否存在淤积或损毁
	drainageDitchSituation: '', //截排水沟是否存在淤积或损毁具体情况
	drainageDitchIsPass: '', //截排水沟是否已贯通
	drainageDitchUnpassReason: '', //未贯通原因说明
	gritChamberConstruct: '', //沉沙池建设情况
	gritChamberIsDam: '', //沉沙池是否存在淤积或损毁
	gritChamberSituation: '', //沉沙池是否存在淤积或损毁具体情况
	gritChamberIsOverflow: '', //有无泥沙流出项目区
	overflowSituation: '', //有无泥沙流出项目区具体情况
	fenceConstruct: '', //拦挡措施建设情况
	fenceIsDam: '', //拦挡措施是否存在损毁
	fenceSituation: '', //拦挡措施是否存在损毁具体情况
	coverConstruct: '', //现场采取覆盖措施
	coverIsDam: '', //覆盖措施是否存在损毁
	coverSituation: '', //覆盖措施是否存在损毁具体情况
	otherConservationSituation: '', //现场已落实其他水土保持措施情况
	lastCheckRequired: '', //上次检查整改要求
	rectifySituation: '', //整改落实情况
	isExistDfhcs: '', //是否存在深填高挖边坡
	deepFillHighCutSlope: '', //深填高挖边坡具体情况
	isToldDfhcs: '', //是否告知建设单位（深填高挖边坡）
	isExistSoil: '', //是否存在堆土
	isToldSoil: '', //是否告知建设单位（堆土）
	soilSituation: '', //存在堆土具体情况
	soilErosionLevel: '', //水土流失隐患等级
	soilErosionRiskLevel: '', //水土流失隐患风险等级
	soilErosionHarm: '', //水土流失隐患及危害具体评价
	conservationStatus: '', //当前状态
	rectifyRequired: '', //整改要求
	monitorCorp: '', //监测单位	
	comDate: '', //要求完成日期
	signatureReturn: '' //现场检查记录文件groupId
}

var sceneAttachment = [{
	groupId: '', //现场检查记录文件groupId
	fileTokens: '',
	fieldName: "signatureReturn",
	tableName: "ws_conservation_supervise"
}]


//分页获取项目列表
var getProjectList = function(param, isLoading, callback) {
	var url = config.urls.baseUrl + config.actions.conversationList;

	if (isLoading) {
		app.showLoader()
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
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}
	});
}

//获取项目个数
var getProjectCount = function(param, callback) {
	var url = config.urls.baseUrl + config.actions.projectCount;

	// app.showLoader()
	$.ajax(url, {
		data: param,
		dataType: 'json', //服务器返回json格式数据
		type: 'get',
		// async:false,//HTTP请求类型
		headers: {
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

var getProjectName = function(callback) {
	var url = config.urls.baseUrl + config.actions.getProjectList;
	app.showLoader();
	$.ajax(url, {
		data: '',
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

//获取枚举
var getDict = function(key, callback) {
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

//获取字典枚举
// function getDicTextByIdAndKey(sid,key,callback) {
// 	//用枚举
// 	getDict(key,function (data) {
// 	    if (206 != parseInt(data.code)) {
// 	        app.toast(data.message);
// 	        // console.log(data.message)
// 	        return;
// 	    }
// 	    var resultJSON =[];
// 	    for (var i = 0; i < data.result.length; i++) {
// 	        var item = data.result[i];
// 	        resultJSON.push({
// 	            text: item.text,
// 	            value: item.value
// 	        })
// 	    }
// 	    if(sid ==""||sid ==null||sid == undefined){
// 	        callback("");
// 	        return ;
// 	    }
// 	    for(var i in resultJSON){
// 	        if(sid == parseInt(resultJSON[i].value)){
// 	            callback(resultJSON[i].text);
// 	            return;
// 	        }
// 	    }
// 	    return ;
// 	})
// }

//获取现场检查记录、整改文件列表
var getSceneList = function(param, callback) {
	var url = config.urls.baseUrl + config.actions.getSceneList;

	// console.log(url)
	// console.log(JSON.stringify(param))
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

//获取现场检查记录文件
var getSignFileMap = function(callback) {
	var url = config.urls.baseUrl + config.actions.getSignFileMap;
	app.showLoader();
	$.ajax(url, {
		data: '',
		dataType: 'json', //服务器返回json格式数据
		async: false,
		type: 'get', //HTTP请求类型
		headers: {
			"X-Access-Token": app.sessionId()
			// "X-Access-Token":config.urls.tempToken
		},
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
		success: function(data) {
			app.hideLoader();
			// if (dealingWithResponseCode(data)) {
			// console.log(JSON.stringify(data));
			callback(data);
			// } else {
			// 	app.toast(data.message);
			// 	console.log(2222)
			// }
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
 * 修改现场检查记录
 */
var editScene = function(strFormData, strAttachment, callback) {
	var url = config.urls.baseUrl + config.actions.editScene;
	var params = {
		strFormData: JSON.stringify(strFormData),
		strAttachment: JSON.stringify(strAttachment)
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
				console.log(JSON.stringify(data))
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
 * 新增现场检查记录
 */
var addScene = function(strFormData, strAttachment, callback) {
	var url = config.urls.baseUrl + config.actions.addScene;
	var params = {
		strFormData: JSON.stringify(strFormData),
		strAttachment: JSON.stringify(strAttachment)
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
				console.log(JSON.stringify(data))
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
 * 新增整改文件
 */
var addReform = function(strFormData, strAttachment, callback) {
	var url = config.urls.baseUrl + config.actions.addReform;
	var params = {
		strFormData: JSON.stringify(strFormData),
		strAttachment: JSON.stringify(strAttachment)
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
				console.log(JSON.stringify(data))
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

//获取整改文件
var getFileForm = function(param, callback) {
	var url = config.urls.baseUrl + config.actions.getFileForm;
	// console.log(url);

	app.showLoader();
	$.ajax(url, {
		data: param,
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
				app.toast('查询失败');
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

//获取签收人员
var queryWs = function(param, callback) {
	var url = config.urls.baseUrl + config.actions.queryWs;
	app.showLoader();

	// console.log(url)
	// console.log(JSON.stringify(param))
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
				// console.log(JSON.stringify(data));
				callback(data);
			} else {
				app.toast(data.message);
				console.log(JSON.stringify(data))
			}
		},
		error: function(xhr, type, errorThrown) {
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}
	});
}

function isEmp(key, callback) {
	if (key == null || key == '' || key == undefined) {
		return '无';
	} else {
		return key;
	}
}

//上传签字文件
var uploadSignFile = function(formparams, callback) {
	var url = config.urls.baseUrl + config.actions.uploadSignFile;

	app.showLoader();
	$.ajax(url, {
		data: formparams,
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
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
				callback(data);
				// app.toast(data.message);
			}
		},
		error: function(xhr, type, errorThrown) {
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}
	});
}


//获取文件流
var previewFileById = function(param,callback) {
	var url = 'https://zhswtest.hdec.com/ecidi-cmp/file/uploadFile/previewFileById?id=4d48070e7fe27e17657fba736d3f055b'
	// console.log(url);

	app.showLoader();
	$.ajax(url, {
		data: param,
		dataType: 'base64', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token": app.sessionId()
		},
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
		success: function(data) {
			app.hideLoader();
			callback(data);
		},
		error: function(xhr, type, errorThrown) {
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}
	});
}