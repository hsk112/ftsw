/**
 * 排水户级别统计 全部
 */
var getStatistic = function(type,callback){
	var url = config.urls.baseUrl + config.actions.getStatistic;
	let param = {
		type : type
	}

	app.showLoader();
	$.ajax(url, {
		data: param,
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		async: false,
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

var countPsh = function(callback){
	var url = config.urls.baseUrl + config.actions.countPsh;
	let param = {
		region : 1,
		level : 3
	}
	app.showLoader();
	$.ajax(url, {
		data: param,
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		async: false,
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

var streetMap = [
    {
        "street":"香蜜湖街道",
        "adCode":"440304006000",
        "point1":{"lng":114.00942074663732,"lat":22.551073038738735},
        "point2": {"lng":114.02057295346776,"lat":22.54863349349459}
    },
    {
        "street":"南园街道",
        "adCode":"440304001000",
        "point1":{"lng":114.08336531194527,"lat":22.536412506994424} ,
        "point2": {"lng":114.0891426895991,"lat":22.539225177697034}
    },
    {
        "street":"园岭街道",
        "adCode":"440304002000",
        "point1":{"lng":114.08990334489863,"lat":22.56478181884978},
        "point2": {"lng":114.09224483582955,"lat":22.555595969796272}
    },
    {
        "street":"华强北街道",
        "adCode":"440304011000",
        "point1":{"lng":114.08017255060383,"lat":22.548271334825188},
        "point2": {"lng":114.08800241769143,"lat":22.548195316696564}
    },
    {
        "street":"华富街道",
        "adCode":"440304009000",
        "point1":{"lng":114.06525460694667,"lat":22.557447373567115},
        "point2": {"lng":114.07590693837511,"lat":22.559318729088872}
    },
    {
        "street":"福田街道",
        "adCode":"440304004000",
        "point1":{"lng":114.05768827826824,"lat":22.530880845971936} ,
        "point2": {"lng":114.07067546274862,"lat":22.528848069271987}
    },
    {
        "street":"梅林街道",
        "adCode":"440304007000",
        "point1":{"lng":114.03421774701513,"lat":22.57765666552217},
        "point2": {"lng":114.04311366905358,"lat":22.57444424922376}
    },
    {
        "street":"莲花街道",
        "adCode":"440304008000",
        "point1":{"lng":114.04712273044726,"lat":22.55582455388104},
        "point2": {"lng":114.04979664050444,"lat":22.552195675946393}
    },
    {
        "street":"福保街道",
        "adCode":"440304010000",
        "point1":{"lng":114.04190006042109,"lat":22.51023443639781},
        "point2": {"lng":114.05492459209069,"lat":22.509583209815247}
    },
    {
        "street":"沙头街道",
        "adCode":"440304005000",
        "point1":{"lng":114.02356815478066,"lat":22.528547343183305},
        "point2": {"lng":114.03767351748712,"lat":22.52991013275009}
    }
]