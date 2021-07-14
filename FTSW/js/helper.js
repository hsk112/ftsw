// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18

Date.prototype.Format = function(fmt) { // author: meizz
	var o = {
		"M+": this.getMonth() + 1, // 月份
		"d+": this.getDate(), // 日
		"h+": this.getHours(), // 小时
		"m+": this.getMinutes(), // 分
		"s+": this.getSeconds(), // 秒
		"q+": Math.floor((this.getMonth() + 3) / 3), // 季度
		"S": this.getMilliseconds() // 毫秒
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" +
			o[k]).substr(("" + o[k]).length)));
	return fmt;
}

/**
 * 得到当前时间字符串，格式为：YYYY-MM-DD
 */
var getNowDate = function() {
	var now = new Date();

	var year = now.getFullYear(); // 年
	var month = now.getMonth() + 1; // 月
	var day = now.getDate(); // 日

	var clock = year + "-";

	if (month < 10) clock += "0";
	clock += month + "-";

	if (day < 10) clock += "0";
	clock += day + "";

	return clock;
}

//位数不够前补零
function preZero(num, n) {
	return (Array(n).join(0) + num).slice(-n);
}

/**
 * @param {Object} 时间戳转换为时分秒
 */
var toHHmmss = function(data) {
	var s;
	var hours = parseInt((data % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = parseInt((data % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = parseInt((data % (1000 * 60)) / 1000);
	s = (hours < 10 ? ('0' + hours) : hours) + ':' + (minutes < 10 ? ('0' + minutes) : minutes) + ':' + (seconds < 10 ? (
		'0' + seconds) : seconds);
	return s;
};


/**
 * 格式化数字, 千位符分隔
 * @param s	金额
 * @param n	小数位数
 * @returns {String}
 */
function formatMoney(s, n) {
	if (s < 0) {
		s = Math.abs(s);
		return '-' + formatMoney(s);
	} else {
		n = n > 0 && n <= 20 ? n : 2;
		s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
		var l = s.split(".")[0].split("").reverse(),
			r = s.split(".")[1];
		t = "";
		for (i = 0; i < l.length; i++) {
			t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
		}
		return t.split("").reverse().join("") + "." + r;
	}

}

/**日期比较
 * @param {Object} date1  字符串
 * @param {Object} date2  字符串
 */
function compareDateStr(date1, date2) {
	// var oDate1 = new Date(date1);
	// console.log(oDate1);
	// var oDate2 = new Date(date2);
	// console.log(oDate2);
	var oDate1 = date1.replace(/\-/g, "");
	var oDate2 = date2.replace(/\-/g, "");
	oDate1 = parseInt(oDate1);
	oDate2 = parseInt(oDate2);
	if (oDate1 > oDate2) {
		return true;

	} else {
		return false;
	}
}



/**
 * 去掉 千位符分隔 格式化的逗号
 * @param {Object} s
 */
function unformatMoney(s) {
	if (s && s.length > 0 && s.indexOf(',') > -1) {
		s = s.split(',').join('');
	}
	return s;
}

/**
 * 显示日志信息
 * @param str	日志内容
 */
function log(str) {
	if (config.settings.shouldShowConsoleLog) {
		//console.log(str);
	}
}

/**
 * 获取参数值
 * @param paramName	参数名
 * @param url		目标url
 * @returns
 */
function getParamValue(paramName, url) {
	if (!url) url = location.href;
	paramName = paramName.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regexS = "[\\?&]" + paramName + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(url);
	return results == null ? null : results[1];
}

/**
 * 获取所有url参数
 * @returns {Object}
 */
function GetRequest() {
	var url = location.search; //获取url中"?"符后的字串
	var theRequest = new Object();
	if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		strs = str.split("&");
		for (var i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
		}
	}
	return theRequest;
}

/**
 * 获取设备类型
 * @returns {P: iPhone或安卓, D: Ipad}
 */
function getDeviceType() {
	var u = navigator.userAgent,
		app = navigator.appVersion; //判断设备
	var storage = window.localStorage;
	if (u.indexOf("iPhone") > -1 || u.indexOf("Android") > -1) {
		return "P";
	} else if (u.indexOf("iPad") > -1) {
		return "D";
	}
}

/**
 * 判断是否为质数
 * @param destNumber    目标数字
 * @returns {boolean}   true or false
 */
function isPrime(destNumber) {
	if (destNumber == 0) {
		return false;
	}
	if (destNumber == 1) {
		return true;
	}
	var bound = Math.floor(Math.sqrt(destNumber));
	for (var i = 2; i <= bound; i++) {
		if (destNumber % i == 0) {
			return false;
		}
	}
	return true;
}

/**
 * 是否存在指定函数
 * @param funcName		函数名
 * @returns {Boolean}	true or false
 */
function isExitsFunction(funcName) {
	try {
		if (typeof(eval(funcName)) == "function") {
			return true;
		}
	} catch (e) {}
	return false;
}

/**
 * 是否存在指定变量
 * @param variableName	变量名
 * @returns {Boolean}	true or false
 */
function isExitsVariable(variableName) {
	try {
		if (typeof(variableName) == "undefined") {
			return false;
		} else {
			return true;
		}
	} catch (e) {}
	return false;
}

var getStyle = function(e, styleName) {
	var styleValue = "";
	if (document.defaultView && document.defaultView.getComputedStyle) {
		styleValue = document.defaultView.getComputedStyle(e, "").getPropertyValue(styleName);
	} else if (e.currentStyle) {
		styleName = styleName.replace(/\-(\w)/g, function(strMatch, p1) {
			return p1.toUpperCase();
		});
		styleValue = e.currentStyle[styleName];
	}
	return styleValue;
}

/**
 * 计算阶乘
 * @param {Object} num
 */
function factorial(num) {
	if (num < 0) {
		return -1;
	} else if (num === 0 || num === 1) {
		return 1;
	} else {
		return (num * factorial(num - 1));
	}
}

/**
 * json对象是否为空
 * @param {Object} e
 */
function isEmptyObject(e) {
	var t;
	for (t in e)
		return !1;
	return !0
}

//判断字符是否为空的方法
function isEmpty(obj) {
	if (typeof obj == "undefined" || obj == null || obj == "null" || obj == "" || obj.length == 0) {
		return true;
	} else {
		return false;
	}
}

/**
 * 重复自身
 * @param {Object} times
 */
String.prototype.repeatTimes = function(times) {
	var str = '';
	for (var i = 0; i < times; i++) {
		str += this;
	}
	return str;
}

/**
 * 创建长度为 count 的 value 元素数组
 * @param {Object} value
 * @param {Object} count
 */
Array.prototype.fillWith = function(value, count) {
	var output = [];
	for (var i = 0; i < count; i++) {
		output.push(value);
	}
	return output;
}

/**
 * 数组去重
 */
Array.prototype.removeRepeat = function(isNotNeedSequence) {
	var res = [];
	var json = {};
	for (var i = 0; i < this.length; i++) {
		if (isNotNeedSequence && this[i] instanceof Array) {
			this[i] = this[i].sort()
		}
		if (!json[this[i]]) {
			res.push(this[i]);
			json[this[i]] = 1;
		}
	}
	return res;
}

/**
 * 判断是否有重复值
 */
Array.prototype.hasRepeatElement = function() {
	return this.length != this.removeRepeat().length;
}

/**
 * 判断是否所有数字相同
 */
Array.prototype.isAllItemEqual = function() {
	var isAllItemEqual = true;
	var ele = this[0];
	for (var i = 0; i < this.length; i++) {
		if (this[i] != ele) {
			isAllItemEqual = false;
		}
	}
	return isAllItemEqual;
}

/**
 * 数组冒泡排序
 */
Array.prototype.bubbleSort = function() {
	/*给每个未确定的位置做循环*/
	for (var unfix = this.length - 1; unfix > 0; unfix--) {
		/*给进度做个记录，比到未确定位置*/
		for (var i = 0; i < unfix; i++) {
			if (this[i] > this[i + 1]) {
				var temp = this[i];
				this.splice(i, 1, this[i + 1]);
				this.splice(i + 1, 1, temp);
			}
		}
	}
	return this;
}

/**
 * 是否都不大于 num
 * @param {Object} num
 */
Array.prototype.isAllNoMoreThan = function(num) {
	var isAllLessThanNum = true;
	for (var i = 0; i < this.length; i++) {
		if (parseInt(this[i]) > parseInt(num)) {
			isAllLessThanNum = false;
			break;
		}
	}
	return isAllLessThanNum;
}

/**
 * 判断数组中是否元素长度是否符合要求
 * @param {Object} length
 */
Array.prototype.isAllEqualLengthTo = function(length) {
	var isAllEqualLength = true;
	for (var i = 0; i < this.length; i++) {
		if (this[i].toString().fullTrim().length != length) {
			isAllEqualLength = false;
			break;
		}
	}
	return isAllEqualLength;
}

/**
 * 替换符号
 */
String.prototype.unifySeparateSymbol = function(separateSymbol) {
	separateSymbol = separateSymbol ? separateSymbol : " ";
	return {
		value: this.replace(/[|;,\；\，\-\n]/g, separateSymbol),
		sSymbol: separateSymbol
	};
}

/**
 * 去空格
 */
String.prototype.fullTrim = function() {
	return this.replace(/\s/g, '');
}

function generateNumberArr(min, max, step, shouldFillZero) {
	var arr = [];
	var com = min;
	if (shouldFillZero == true) {
		arr.push(com >= 10 ? com.toString() : "0" + com.toString());
	} else {
		arr.push(com);
	}

	while (com < max) {
		com = com + step;
		if (shouldFillZero == true) {
			arr.push(com >= 10 ? com.toString() : "0" + com.toString());
		} else {
			arr.push(com);
		}
	}
	return arr;
}

function randomInteger(min, max) {
	var random = Math.floor(Math.random() * (max - min + 1) + min);
	return random;
}

function generateIntergerArr(min, max, count, shouldFillZero) {
	if (count <= 0) {
		log('参数不合法');
		return [];
	}
	var arr = [];
	for (var i = 0; i < count; i++) {
		const num = randomInteger(min, max);
		if (shouldFillZero == true) {
			arr.push(num >= 10 ? num.toString() : "0" + num.toString());
		} else {
			arr.push(num);
		}
	}
	return arr;
}

function NumberConvert(input) {
	//	log('数字转换，输入：' + input);
	var num = parseFloat(input);
	if (isNaN(num)) {
		return 0;
	} else {
		var xx = ((num + '').indexOf('.') != -1) ? true : false;
		if (xx) {
			return parseFloat(input);
		} else {
			return parseInt(input);
		}
	}

	//	return parseFloat(input);
}

function isValidInteger(input) {
	var num = parseFloat(input);
	if (isNaN(num)) {
		return false;
	} else {
		var xx = ((num + '').indexOf('.') != -1) ? true : false;
		if (xx) {
			//			return parseFloat(input);
			return false;
		} else {
			//			return parseInt(input);
			return true;
		}
	}
}

//验证电话号码
function checkPhone(phone) {
	//手机号
	if (!(/^1[3456789]\d{9}$/.test(phone))) {
		return false;
	}
	return true;
}

//验证电话号码
function checkPhone2(phone) {
	//手机号以及固话
	let rag = /(^1[3456789]\d{9}$)|(^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,8}$)/;
	if (!rag.test(phone)) {
		return false;
	}
	return true;
}

/**
 * 校验营业执照编号  18位
 * @param {Object} code 营业执照编号
 */
function checkLicense(code) {
	if (code.length != 18) {
		return false;
	}

	var reg = /^(?:(?![IOZSV])[\dA-Z]){2}\d{6}(?:(?![IOZSV])[\dA-Z]){10}$/;
	if (!reg.test(code)) {
		return false;
	}

	//不用I、O、S、V、Z
	var str = '0123456789ABCDEFGHJKLMNPQRTUWXY';
	var ws = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28];

	var codes = new Array();
	var sum = 0;
	codes[0] = code.substr(0, code.length - 1);
	codes[1] = code.substr(code.length - 1, code.length);

	for (var i = 0; i < codes[0].length; i++) {
		var Ancode = codes[0].charAt(i);
		var Ancodevalue = str.indexOf(Ancode);
		sum += Ancodevalue * ws[i];
	}
	var indexOfc18 = 31 - (sum % 31);
	var c18 = str.charAt(indexOfc18);
	if (c18 != codes[1]) {
		return false;
	}
	return true;
}

function CheckPassWord(password) { //密码必须包含数字和字母
	var str = password;
	if (str == null || str.length < 8) {
		return false;
	}
	var reg = new RegExp(/^(?![^a-zA-Z]+$)(?!\D+$)/);
	if (reg.test(str))
		return true;
}

//生成GUID
function guid() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random() * 16 | 0,
			v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}

function getNo(key) {
	return key + 'xxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random() * 16 | 0,
			v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}

/**
 * 日期选择
 * @param {Object} callback
 * @param {Object} type  类型
 */
function plusDate(callback, type) {
	if (!mui.os.plus) {
		app.toast("请初始化plus");
		return;
	}
	var dateSetting = {
		title: "请选择日期"
	}

	if (type && type == 1) { //最大值是今天
		dateSetting.maxDate = new Date()
	} else if (type && type == 2) { //最小值是今天
		dateSetting.minDate = new Date(new Date().getTime() + 86400000)
	}

	plus.nativeUI.pickDate(function(e) {
		var d = e.date;
		callback(d.getFullYear() + "-" + preZero((d.getMonth() + 1), 2) + "-" + preZero(d.getDate(), 2))
	}, function(e) {
		callback("");
	}, dateSetting);
}

/**
 * 日期选择
 * @param {Object} callback
 * @param {Object} type  类型
 */
function plusDateWithDate(callback, type) {
  if (!mui.os.plus) {
    app.toast("请初始化plus");
    return;
  }
  var dateSetting = {
    title: "请选择日期"
  }

  if (type && type == 1) { //最大值是今天
    dateSetting.maxDate = new Date()
  } else if (type && type == 2) { //最小值是今天
    dateSetting.minDate = new Date(new Date().getTime() + 86400000)
  }

  plus.nativeUI.pickDate(function(e) {
    var d = e.date;
    // var week = "";
    // switch (d.getDay()) {
    //   case 1:
    //     week = '周一';
    //     break;
    //   case 2:
    //     week = '周二';
    //     break;
    //   case 3:
    //     week = '周三';
    //     break;
    //   case 4:
    //     week = '周四';
    //     break;
    //   case 5:
    //     week = '周五';
    //     break;
    //   case 6:
    //     week = '周六';
    //     break;
    //   case 0:
    //     week = '周日';
    //     break;
    // }
    // callback(d.getFullYear() + "-" + preZero((d.getMonth() + 1), 2) + "-" + preZero(d.getDate(), 2)+" "+week);
    callback(d);
  }, function(e) {
    callback("");
  }, dateSetting);
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

//获取字典枚举对应的text
function getDicTextByIdAndKey(sid,key,callback) {
	//用枚举
	getDict(key,function (data) {
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
	    if(sid ==""||sid ==null||sid == undefined){
	        callback("");
	        return ;
	    }
	    for(var i in resultJSON){
	        if(sid == parseInt(resultJSON[i].value)){
	            callback(resultJSON[i].text);
	            return;
	        }
	    }
	    return ;
	})
}

//获取字典枚举对应的text
function getDicText(sid,key,callback) {
	//用枚举
	getDict(key,function (data) {
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
	    if(sid ==""||sid ==null||sid == undefined){
	        callback("");
	        return ;
	    }
	    for(var i in resultJSON){
	        if(sid == resultJSON[i].value){
	            callback(resultJSON[i].text);
	            return;
	        }
	    }
	    return ;
	})
}
