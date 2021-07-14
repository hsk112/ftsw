/**
 * 排水户巡检定时器
 */
var guid = localStorage.getItem('guid');
// console.log(guid)
var nowTime = new Date();			//现时时间
var time = 30000;					//发送间隔时间（毫秒）

var nowX; //当前坐标
var nowY;
localStorage.setItem('time', time);
var timer;							//定时器存储器
if (guid) {
	var codeX;
	var codeY;
	timerInit();
	// let startTimer = setTimeout(function () {
	// 	getLocation();
	// 	clearTimeout(startTimer);
	// }, 500);
	timer = setInterval(function () {
		timerInit();
	}, time);
}

// 执行请求
function timerInit() {
	let saveTime = localStorage.getItem('time');
	// console.log(saveTime)
	if (saveTime) {
		nowTime = new Date();
		if (nowTime.getTime() - Number(saveTime) > time) {
			getLocation();
		}
	} else {
		getLocation();
	}
}

// 删除定时器
function canelTimer() {
	clearInterval(timer);
	timer = '';
	localStorage.setItem('guid', '');
	localStorage.setItem('time', '');
}

// 获取定位后给服务器发送数据
function sendGps(codeX,codeY) {
	// console.log('codeX='+codeX);
	// console.log('codeY='+codeY);
	var url = config.urls.baseUrl + config.actions.sendGps;
	let year = nowTime.getFullYear();
	let month = nowTime.getMonth() + 1;
	let date = nowTime.getDate();
	let time = nowTime.toLocaleTimeString('chinese', { hour12: false });
	// console.log(time)
	let sendTime = year + '-' + month + '-' + date + ' ' + time;
	let param = {
		codeX: codeX,
		codeY: codeY,
		taskRecordId: localStorage.getItem('guid'),
		time: sendTime,
	};
	console.log(JSON.stringify(param))

	$.ajax(url, {
		data: param,
		dataType: 'json', //服务器返回json格式数据
		type: 'post', //HTTP请求类型
		headers: {
			// "Content-Type": "application/json",
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token": app.sessionId()
		},
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
		success: function(data) {
			if (dealingWithResponseCode(data)) {
				localStorage.setItem('time', JSON.stringify(nowTime.getTime()));
				console.log(JSON.stringify(data))
				// app.toast('成功');
			} else {
				app.toast(' GPS轨迹信息记录失败');
			}
		},
		error: function(xhr, type, errorThrown) {
			dealingWithErrorRequest(errorThrown);
		}
	});
}

// 定位
function getLocation() {
	if (navigator.geolocation) {				
		navigator.geolocation.getCurrentPosition((position) => {	
			// console.log(position)
			codeY = position.coords.latitude;
			codeX = position.coords.longitude;
			// console.log(codeX)
			if((codeX !== undefined && codeX !== null) && (codeY !== undefined && codeY !== null)){
				nowX = codeX;
				nowY = codeY;
				sendGps(codeX,codeY);
			}
				sendGps(codeX,codeY);
		}, error => {
			console.log(JSON.stringify(error.code))
			switch (JSON.stringify(error.code)) {
				case 1:
					app.toast('地理位置信息的获取失败，目前没有获取地理位置信息的权限');
					break;
				case 2:
					app.toast('地理位置获取失败，至少有一个内部位置源返回一个内部错误');
					break;
				case 3:
					app.toast('获取地理位置的超时');
					break;
				default:
					app.toast('地理位置信息的获取失败，目前没有获取地理位置信息的权限');
			}
		})
	} else {
		app.toast('对不起，该设备不支持地理位置定位');
	}
}
