let test = [];
// for (var z = 0; z < 7; z++) {
// 	test.push(Math.round(Math.random() * 31) + 1)
// };
// console.log(test)
var dat = new Date(); //当前时间 
var nianD = dat.getFullYear(); //当前年份 
var yueD = dat.getMonth(); //当前月 
console.log(yueD)
var tianD = dat.getDate(); //当前天 这保存的年月日 是为了 当到达当前日期 有对比 
var ifClip = true; //起始为一行数据 false 为显示全部
var firstIndex; //记录当前日期所处得行数得开头序号
var lastIndex; //记录当前日期所处得行数得结尾序号
add(); //进入页面第一次渲染    
function init() {
	dat = new Date(); //当前时间
	nianD = dat.getFullYear(); //当前年份 
	yueD = dat.getMonth(); //当前月 
	tianD = dat.getDate(); //当前天 这保存的年月日 是为了 当到达当前日期 有对比 
	ifClip = true; //起始为一行数据 false 为显示全部
	firstIndex; //记录当前日期所处得行数得开头序号
	lastIndex; //记录当前日期所处得行数得结尾序号
}

var getDateList = function(param, callback) {
	//获取数据
	var url = config.urls.baseUrl + config.actions.attendanceOne;

	app.showLoader();
	$.ajax(url, {
		data: param,
		// data: "",
		dataType: 'json', //服务器返回json格式数据
		type: 'GET', //HTTP请求类型
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			"X-Access-Token": app.sessionId(),
		},
		timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
		success: function(data) {
			app.hideLoader();
			if (dealingWithResponseCode(data)) {
				callback(data);
				// mui.alert(data.message)
			} else {
				app.toast(data.message);
			}
		}, 
		error: function(xhr, type, errorThrown) {
			var res = xhr.responseText;
			res = JSON.parse(res)
			mui.alert(res.message)
			dealingWithErrorRequest(errorThrown);
			app.hideLoader();
			return callback('网络异常,请稍后再试');
		}
	});
};
function add(first, last) {
	document.getElementById('date').innerHTML = "";
	var nian = dat.getFullYear(); //当前年份 
	var yue = dat.getMonth(); //当前月 
	var tian = dat.getDate(); //当前天 
	var arr = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
	// document.getElementById('nian').innerText = nian; 
	// document.getElementById('yue').innerText =`${nian}年${arr[yue]}`; 
	$('.month_text').html(arr[yue]);
	$('.month_wrap .month').text(nian+"年"+arr[yue]);
	var setDat = new Date(nian, yue + 1, 1 - 1); //把时间设为下个月的1号 然后天数减去1 就可以得到 当前月的最后一天; 
	var setTian = setDat.getDate(); //获取 当前月最后一天 
	var setZhou = new Date(nian, yue, 1).getDay(); //获取当前月第一天 是 周几 
	var num = -1; //记录空白数量 默认-1开始
	var html = '';
	var shouArr = [];
	var weiArr = [];
	
	for (var i = 0; i < setZhou; i++) { //渲染空白 与 星期 对应上 
		num += 1
		var li = document.createElement('li');
		html += `<li dataindex=${i}></li>`
		document.getElementById('date').appendChild(li);
	}
	
	for (var i = 1; i <= setTian; i++) { //利用获取到的当月最后一天 把 前边的 天数 都循环 出来 
		num += 1
		var myLi = `<li class='dot_wrap'style="line-height:46px" data-index=${num}>
		 <span>${i}
		  </li>`
		if (nian == nianD && yue == yueD && i == tianD) {
			myLi =
				`<li class='dot_wrap active' style="line-height:46px" data-index="${num}">
		   <span>${i}</span>	   
		   </li>`
		}
		html += myLi;
	}
	
	document.getElementById('date').innerHTML = html;
	// console.log($('#date li'));
	// console.log($('#date .active'))
	for (var i = 0; i < $('#date li').length; i++) {
		//为周末变灰色
		var weiIndex;
		if (i % 7 === 0) {
			shouArr.push(i);
			weiIndex = i - 1;
			$('#date li')[i].style.color = "#888888";
			if (weiIndex > 0) {
				weiArr.push(weiIndex)
				$('#date li')[weiIndex].style.color = "#888888";
			}
		};
	};
	
	if (first && last) {
		
		var clipHtml = '';
		//代表此时已有当日序号得头和尾记录下标
		for (var i = first; i <= last; i++) {
			if($('#date li').eq(i).prop("outerHTML"))
			clipHtml += $('#date li').eq(i).prop("outerHTML");
		};
		$('#date').html(clipHtml)
		return false
	}
	
	let nowIndex = parseInt($('#date .active').attr('data-index'));
	var gap; //比较范围大小 取最小的
	var recordIndex; //记录最小的时候得index序号 首尾
	var ifLast = false;
	weiArr.forEach((item, j) => {
		var newgap;
		if (j === 0) {
			gap = item
		}
		newgap = item - nowIndex;
		if (newgap < gap) {
			recordIndex = j
		}
		if (nowIndex > weiArr[weiArr.length - 1]) {
			//如果超过尾得最后一个 相当于是最后一行
			ifLast = true;
			recordIndex = j + 1;
		}
	});
	console.log(weiArr[weiArr.length - 1]);
	// console.log(firstIndex,lastIndex)
	firstIndex = shouArr[recordIndex];
	lastIndex = weiArr[recordIndex];
	// console.log(firstIndex);
	// console.log(lastIndex);
	var clipHtml = '';
	if (ifLast) {
		for (var i = shouArr[recordIndex]; i <= $('#date li').length - 1; i++) {
			// console.log($('#date li').eq(i).prop("outerHTML"))
			clipHtml += $('#date li').eq(i).prop("outerHTML")
		};
	} else {
		for (var i = shouArr[recordIndex]; i <= weiArr[recordIndex]; i++) {
			// console.log($('#date li').eq(i).prop("outerHTML"))
			clipHtml += $('#date li').eq(i).prop("outerHTML")
		};
	}
	$('#date').html(clipHtml)
};

function showAll() {
	console.log('------'+test)
	document.getElementById('date').innerHTML = "";
	var nian = dat.getFullYear(); //当前年份 
	var yue = dat.getMonth(); //当前月
	console.log(yue)
	var tian = dat.getDate(); //当前天 
	var arr = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
	var setDat = new Date(nian, yue + 1, 1 - 1); //把时间设为下个月的1号 然后天数减去1 就可以得到 当前月的最后一天; 
	var setTian = setDat.getDate(); //获取 当前月最后一天 
	var setZhou = new Date(nian, yue, 1).getDay(); //获取当前月第一天 是 周几 
	var blank = '';
	var html = '';
	$('.month_text').html(arr[yue]);
	$('.month_wrap .month').text(nian+"年"+arr[yue]);
	for (var i = 0; i < setZhou; i++) { //渲染空白 与 星期 对应上 
		var li = document.createElement('li');
		html += `<li></li>`
		document.getElementById('date').appendChild(li);
	}

	for (var i = 1; i <= setTian; i++) { //利用获取到的当月最后一天 把 前边的 天数 都循环 出来 
		// var li=document.createElement('li'); 
		// li.setAttribute('date',i)
		// li.innerText = i; 
		var myLi = `<li class='dot_wrap'>
	 <span>${i}</span><div class='dot'></div>
	  </li>`
		// if((i+setZhou) % 7 == 0 || (i+setZhou-2) % 7 == 6) {
		// 		myLi = `<li class='dot_wrap'>
		// 	   <span style="color:#888888">${i}</span>			   
		// 	   </li>`
		// }else 
		
		if (nian == nianD && yue == yueD && i == tianD) {
			// li.className = "active"; 			
			myLi = `<li class='dot_wrap active'>
		   <span>${i}</span>
		   <div class="dot"></div>
		   </li>`
		}else if(nian > nianD || (nian == nianD && yue == yueD && i >= tianD)|| (nian == nianD && yue > yueD) ) {
				myLi = `<li class='dot_wrap'>
			   <span>${i}</span>			   
			   </li>`
		}
		for (var k = 0; k < test.length; k++) {
			//打卡日期为test[k]; 判断打卡日期与文本内容相同得 就添加为dot为蓝色背景 文本内容就是i
			if (i == parseInt(test[k])) {
				myLi = `<li class='dot_wrap'>
				<span>${i}</span>
				<div class="dot" style="background:blue"></div>
				</li>`
				if (nian == nianD && yue == yueD && i == tianD) {
					myLi = `<li class='dot_wrap active'>
				  <span>${i}</span>
				  <div class="dot" style="background:blue"></div>
				  </li>`
				}
			}
		}
		html += myLi;
		// document.getElementById('date').appendChild(li); 
	};
	document.getElementById('date').innerHTML = html;

	// console.log($('#date li'))  [i].style
	// for(var i =0 ;i<$('#date li').length;i++){
	//  var weiIndex;
	//  if(i%7===0){
	//   weiIndex = i-1;
	//   $('#date li').eq(i).css('color',"#888888").find('.dot').css('background','#fff');
	//   if(weiIndex>0){
	// 	   $('#date li').eq(weiIndex).css('color',"#888888").find('.dot').css('background','#fff');
	//   }
	//  };
	// }
}

// 添加点击事件

$('.fenge').on('tap', function() {
	ifClip = !ifClip;
	if (ifClip) {
		add(firstIndex, lastIndex);
		$('.fenge').html(
			`<div class='line'></div><span class="mui-icon mui-icon-arrowdown"></span><div class='line'></div>`);
	} else {
		oneParam.month = dat.getMonth()+1;
		getDateList(oneParam, (res) => {
			if(res.result.dayList.length>0){
				test = res.result.dayList;
				console.log('ok'+test)
			};
			showAll();
		});
		$('.fenge').html(`<div class='line'></div><span class="mui-icon mui-icon-arrowup"></span><div class='line'></div>`)
	}

})
document.getElementById("next").onclick = function() {
	test = [];
	console.log(dat.getMonth() + 1)
	dat.setMonth(dat.getMonth() + 1); //当点击下一个月时 对当前月进行加1; 
	oneParam.month = dat.getMonth()+1;
	getDateList(oneParam, (res) => {
		if(res.result.dayList.length>0){
			test = res.result.dayList;	
		}
		if (ifClip) {
			//此时处于一行面板
			add(firstIndex, lastIndex)
		} else {
			showAll(); //重新执行渲染 获取去 改变后的 年月日 进行渲染; 
		};
		$('.yiCount').text(res.result.dayList.length);
		$('.totalCount').text(new Date().getDate());
		$('.normal span').text(res.result.dayList.length);
		$('.nonnormal span').text((new Date().getDate())-res.result.dayList.length);
		if(oneParam.month!=new Date().getMonth()+1){
			var day = new Date(nianD,oneParam.month,0);   //最后一个参数为0,意为获取2018年10月一共多少天
			// console.log(day.getDate());  //31
			var per = ((res.result.dayList.length / day.getDate()) * 100).toFixed(0);
			$('.attendence_text').text(`当月出勤率${per}%`);
			$('.nonnormal span').text(day.getDate()-res.result.dayList.length);
			$('.yiCount').text(res.result.dayList.length);
			$('.totalCount').text(day.getDate()-res.result.dayList.length);
			drawCanvas(res.result.dayList.length,day.getDate()-res.result.dayList.length)
		}else{
			var per =((res.result.dayList.length/new Date().getDate())*100).toFixed(0);
			$('.attendence_text').text(`当月出勤率${per}%`)
			drawCanvas(res.result.dayList.length,new Date().getDate())
		};
	});

};
document.getElementById("prev").onclick = function() {
	test = [];
	dat.setMonth(dat.getMonth() - 1); //与下一月 同理 
	oneParam.month = dat.getMonth()+1;
	getDateList(oneParam, (res) => {
		if(res.result.dayList.length>0){
			test = res.result.dayList;
		};
		if (ifClip) { 
			//此时处于一行面板
			add(firstIndex, lastIndex)
		} else {
			showAll(); //重新执行渲染 获取去 改变后的 年月日 进行渲染; 
		};
		$('.yiCount').text(res.result.dayList.length);
		$('.totalCount').text(new Date().getDate());
		$('.normal span').text(res.result.dayList.length);
		$('.nonnormal span').text((new Date().getDate())-res.result.dayList.length);
		if(oneParam.month!=new Date().getMonth()+1){
			var day = new Date(nianD,oneParam.month,0);   //最后一个参数为0,意为获取2018年10月一共多少天
			// console.log(day.getDate());  //31
			var per = ((res.result.dayList.length / day.getDate()) * 100).toFixed(0);
			$('.attendence_text').text(`当月出勤率${per}%`);
			$('.nonnormal span').text(day.getDate()-res.result.dayList.length);
			$('.yiCount').text(res.result.dayList.length);
			$('.totalCount').text(day.getDate()-res.result.dayList.length);
			drawCanvas(res.result.dayList.length,day.getDate()-res.result.dayList.length)
		}else{
			var per =((res.result.dayList.length/new Date().getDate())*100).toFixed(0);
			$('.attendence_text').text(`当月出勤率${per}%`)
			drawCanvas(res.result.dayList.length,new Date().getDate())
		};
		
	});
};
