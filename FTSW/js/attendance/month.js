var dat = new Date(); //当前时间
var nianD = dat.getFullYear(); //当前年份
var yueD = dat.getMonth(); //当前月
var tianD = dat.getDate(); //当前天 这保存的年月日 是为了 当到达当前日期 有对比
var selectDay = tianD;
var allSignInDate = [];
// for (var z = 0; z < 7; z++) {
// 	test.push(Math.round(Math.random() * 31) + 1)
// };
add(-1, -1); //进入页面第一次渲染
function add(y, m) {

  document.getElementById('date').innerHTML = "";
  var nian = y == '-1' ? dat.getFullYear() : y; //当前年份
  var yue = m == '-1' ? dat.getMonth() : m; //当前月

  var tian = dat.getDate(); //当前天
  var arr = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
  var setDat = new Date(nian, yue + 1, 1 - 1); //把时间设为下个月的1号 然后天数减去1 就可以得到 当前月的最后一天;
  var setTian = setDat.getDate(); //获取 当前月最后一天
  var setZhou = new Date(nian, yue, 1).getDay(); //获取当前月第一天 是 周几
  var blank = '';
  var html = '';

  $('.month_text').html(arr[yue]);
  $('#yue').text(`${nian}年${arr[yue]}`);
  for (var i = 0; i < setZhou; i++) { //渲染空白 与 星期 对应上
    var li = document.createElement('li');
    html += `<li></li>`
    document.getElementById('date').appendChild(li);
  }

  for (var i = 1; i <= setTian; i++) { //利用获取到的当月最后一天 把 前边的 天数 都循环 出来
    // var li=document.createElement('li');
    // li.setAttribute('date',i)
    // li.innerText = i;
    var myLi =
      `<li class='dot_wrap dateItem'>
			 <span>${i}</span><div class='dot'></div>
			  </li>`;

    //周末置灰
    // if((i+setZhou) % 7 == 0 || (i+setZhou-2) % 7 == 6) {
    // 		myLi = `<li class='dot_wrap'>
    // 	   <span style="color:#888888">${i}</span>
    // 	   </li>`
    // }else
    if (nian == nianD && yue == yueD && i == selectDay) {
      // li.className = "active";
      myLi = `<li class='dot_wrap active dateItem'>
		   <span>${i}</span>
		   <div class="dot"></div>
		   </li>`
    } else if (nian > nianD || (nian == nianD && yue == yueD && i >= tianD) || (nian == nianD && yue > yueD)) {
      myLi = `<li class='dot_wrap dateItem'>
			   <span>${i}</span>			   
			   </li>`
    }
    // for (var k = 0; k < test.length; k++) {
    // 	//打卡日期为test[k]; 判断打卡日期与文本内容相同得 就添加为dot为蓝色背景 文本内容就是i
    // 	if (i == parseInt(test[k])) {
    // 		myLi = `<li class='dot_wrap'>
    // 		<span>${i}</span>
    // 		<div class="dot" style="background:blue"></div>
    // 		</li>`
    // 		if (nian == nianD && yue == yueD && i == tianD) {
    // 			myLi =
    // 				`<li class='dot_wrap active'>
    // 		  <span>${i}</span>
    // 		  <div class="dot" style="background:blue"></div>
    // 		  </li>`
    // 		}
    // 	}
    // }
    html += myLi;
    // document.getElementById('date').appendChild(li);
  }
  ;
  document.getElementById('date').innerHTML = html;
  $('.dateItem').on('tap', function () {
    var date = $('#yue').text();
    var year = parseInt(date.substring(0, 4));
    var month = parseInt(date.substring(5, date.length - 1)) - 1;
    if (month >= 12) {
      year = year + 1;
      month = 0;
    }
    // changeMonth(year, month)
    selectDay = $(this).text();
    if (year == nianD && month == yueD) {
      console.log(preZero(parseInt(selectDay), 2));
      console.log(allSignInDate.indexOf(preZero(parseInt(selectDay), 2)) != -1)
      if (allSignInDate.indexOf(preZero(parseInt(selectDay), 2)) != -1) {
        isChange = false;
        let attendanceTime = res.result.todayRecord.attendanceTime;
        let address = res.result.todayRecord.attendanceAddress;
        let index = attendanceTime.indexOf(' ');
        attendanceTime = attendanceTime.slice(index + 1, index + 6);
        $('.clock_wrap #left_show').text(attendanceTime);
        $('.clock_wrap .text_center').text(address);
        $('.clock_state').text('已打卡')
        $('.clock_state').css("color", "#337BFC")
      } else {
        $('.clock_wrap #left_show').hide();
        $('.clock_wrap #left_hide').show();
        $('.clock_wrap .text_center').text(params.attendanceAddress);
        $('.clock_state').text('未打卡')
        $('.clock_state').css("color", "red")
      }
      $(".clock_wrap").fadeIn();
    } else $(".clock_wrap").hide();
    add(year, month);
  })
  // var calendar = document.getElementById('date');
  // calendar.onclick = function (ev) {
  //   var ev = ev||window.event;
  //   var target = ev.target || ev.srcElement;
  //   if(target.nodeName.toLowerCase() == 'li'){
  //     console.log($(this).text());
  //   }
  // }

  // console.log($('#date li'))  [i].style
  // for (var i = 0; i < $('#date li').length; i++) {
  // 	var weiIndex;
  // 	if (i % 7 === 0) {
  // 		weiIndex = i - 1;
  // 		$('#date li').eq(i).css('color', "#888888").find('.dot').css('background', '#fff');
  // 		if (weiIndex > 0) {
  // 			$('#date li').eq(weiIndex).css('color', "#888888").find('.dot').css('background', '#fff');
  // 		}
  // 	};
  // }
}

// 添加点击事件
// document.getElementById("next").onclick = function(){
//  dat.setMonth(dat.getMonth() + 1); //当点击下一个月时 对当前月进行加1;
//  add(); //重新执行渲染 获取去 改变后的 年月日 进行渲染;
// };
// document.getElementById("prev").onclick = function(){
//  dat.setMonth(dat.getMonth() - 1); //与下一月 同理
//  add();
// };
document.getElementById("next").onclick = function () {
  var date = $('#yue').text();
  var year = parseInt(date.substring(0, 4));
  var month = parseInt(date.substring(5, date.length - 1));
  if (month >= 12) {
    year = year + 1;
    month = 0;
  }
  changeMonth(year, month)
}
document.getElementById("pre").onclick = function () {
  var date = $('#yue').text();
  console.log(data)
  var year = parseInt(date.substring(0, 4));
  var month = parseInt(date.substring(5, date.length - 1)) - 1;
  console.log(year)
  console.log(month)
  if (month <= 0) {
    year = year - 1;
    month = 11;
  } else {
    month -= 1;
  }
  changeMonth(year, month)
}

// 计算距离
function getRad(d) {
  return d * Math.PI / 180.0;
};

function getDistance(la1, lo1, la2, lo2) {
  //后台没有返回项目坐标则默认用水务局坐标
  la2 = la2 == null ? '22.562838792800903' : la2;
  lo2 = lo2 == null ? '114.05479073524475' : lo2;
  var distance;
  var La1 = la1 * Math.PI / 180.0;
  var La2 = la2 * Math.PI / 180.0;
  var La3 = La1 - La2;
  var Lb3 = lo1 * Math.PI / 180.0 - lo2 * Math.PI / 180.0;
  var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(La3 / 2), 2) + Math.cos(La1) * Math.cos(La2) * Math.pow(Math.sin(
    Lb3 / 2), 2)));
  s = s * 6378.137; //地球半径
  s = Math.round(s * 10000) / 10000;
  // distance = s.toFixed(2) + 'km';
  distance = s.toFixed(2);
  console.log("计算结果", distance);
  return distance
};

// getDistance(111, 102, 111.1, 102, 1);

function formatDateTime() {
  var date = new Date();
  var year = date.getFullYear();
  /* 在日期格式中，月份是从0开始的，因此要加0
   * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
   * */
  var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  // 拼接
  // noinspection JSAnnotator
  return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
};

function getTime() {
  var date = new Date();
  var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  var realTime = hours + ":" + minutes;
  $('.realTime').text(realTime);
  if (isChange) $('.clock_wrap #left_hide').text(realTime); //是否改变月报统计里的打卡时间
};

function getNowTime() {
  var date = new Date();
  var seperator1 = "-";
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
  console.log("当前时间：" + currentdate)
  $('.now-calendar').text(currentdate)

}


//判断是否在考勤范围
function getIsExist(Point, Points) {
  /* 测试数据
  Point = [
    121.66143894195557,
    31.143847579307188
  ]
   */

  console.log("进入判断是否在考勤范围")
  console.log(Point)
  var Points = JSON.parse(Points)
  var returnTrue = false;
  for (var i = 0; i < Points.length; i++) {
    var PointsArr = Points[i].geometry.coordinates[0]
    /* 测试数据
    PointsArr = [
      [
        121.6531991958618,
        31.150348570259077
      ],
      [
        121.64916515350342,
        31.144251608685227
      ],
      [
        121.66058063507079,
        31.13532583137115
      ],
      [
        121.67354106903075,
        31.138154255027153
      ],
      [
        121.67560100555419,
        31.147630696066848
      ],
      [
        121.6531991958618,
        31.150348570259077
      ]
    ]
     */
    console.log(Points[i].geometry.coordinates)
    var isTure = isInPolygon(Point, PointsArr);
    if (isTure) {
      returnTrue = true;
    }
  }
  return returnTrue;

}


function isInPolygon(checkPoint, polygonPoints) {
  var counter = 0;
  var i;
  var xinters;
  var p1, p2;
  var pointCount = polygonPoints.length;
  console.log(pointCount)
  p1 = polygonPoints[0];

  for (i = 1; i <= pointCount; i++) {
    p2 = polygonPoints[i % pointCount];
    if (
      checkPoint[0] > Math.min(p1[0], p2[0]) &&
      checkPoint[0] <= Math.max(p1[0], p2[0])
    ) {
      if (checkPoint[1] <= Math.max(p1[1], p2[1])) {
        if (p1[0] != p2[0]) {
          xinters =
            (checkPoint[0] - p1[0]) *
            (p2[1] - p1[1]) /
            (p2[0] - p1[0]) +
            p1[1];
          if (p1[1] == p2[1] || checkPoint[1] <= xinters) {
            counter++;
          }
        }
      }
    }
    p1 = p2;
  }
  if (counter % 2 == 0) {
    return false;
  } else {
    return true;
  }
}


function ifOut(num, isSignIn) {
  //之前的逻辑
  /*
  var bol;
  if (num < 2) {
    bol = ifWork = true;
    $('.checkText span').text('已进入考勤范围');
    $('.checkText #checkIcon').attr('src', '../../../img/checkRight.png');
    console.log('dsadsad')
  } else {
    bol = ifWork = false;
    $('.checkText span').text('未进入考勤范围');
    $('.checkText #checkIcon').attr('src', '../../../img/checkWrong.png')
  };
  return bol
   */

  var bol;
  // num = true;//测试数据
  if (num) {
    bol = ifWork = true;
    $('.checkText span').text('已进入考勤范围');
    $('.checkText #checkIcon').attr('src', '../../../img/checkRight.png');
    console.log('dsadsad')
  } else {
    bol = ifWork = false;
    $('.checkText span').text('未进入考勤范围');
    $('.checkText #checkIcon').attr('src', '../../../img/checkWrong.png')
  }
  ;
  $('.circle').css("background", "#29CC85");
  $('.active_circle').css("background", "rgba(167, 255, 203, 0.42)");
  if (isSignIn) {
    $('.checkText span').text('您已经成功打卡');
    $('.circle').css("background", "#256FF6");
    $('.active_circle').css("background", "rgba(177, 205, 254, 0.42)");
  }
  return bol
}

// api 方法
var daka = function (param, callback) {
  var url = config.urls.baseUrl + config.actions.attendanceAdd;
  app.showLoader();
  $.ajax(url, {
    data: param,
    dataType: 'json', //服务器返回json格式数据
    type: 'POST', //HTTP请求类型
    headers: {
      // "Content-Type": "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
      "X-Access-Token": app.sessionId(),
    },
    timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
    success: function (data) {
      app.hideLoader();
      if (dealingWithResponseCode(data)) {
        callback(data);
        // mui.alert(data.message)
      } else {
        app.toast(data.message);
        console.log(JSON.stringify(data))
      }
    },
    error: function (xhr, type, errorThrown) {
      console.log(xhr)
      dealingWithErrorRequest(errorThrown);
      app.hideLoader();
      return callback('网络异常,请稍后再试');
    }
  });
};
var getLoc = function (param, callback) {
  var url = config.urls.baseUrl + config.actions.getLoc;
  console.log(JSON.stringify(param));
  $.ajax(url, {
    data: param,
    // data: "",
    dataType: 'json', //服务器返回json格式数据
    type: 'get', //HTTP请求类型
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "X-Access-Token": app.sessionId(),
    },
    timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
    success: function (data) {
      console.log("=====================================")
      console.log(JSON.stringify(data))
      // app.hideLoader();
      if (dealingWithResponseCode(data)) {
        callback(data);
        // mui.alert(data.message)
      } else {
        // app.toast(data.message);
      }
    },
    error: function (xhr, type, errorThrown) {
      console.log(type)
      dealingWithErrorRequest(errorThrown);
      app.hideLoader();
      return callback('网络异常,请稍后再试');
    }
  });
};
var attendanceOne = function (param, callback) {
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
    success: function (data) {
      console.log("success");
      app.hideLoader();
      if (dealingWithResponseCode(data)) {
        console.log(JSON.stringify(data))
        callback(data);
        // mui.alert(data.message)
      } else {
        app.toast(data.message);
      }
    },
    error: function (xhr, type, errorThrown) {
      console.log("error");
      var res = xhr.responseText;
      res = JSON.parse(res)
      mui.alert(res.message)
      dealingWithErrorRequest(errorThrown);
      app.hideLoader();
      return callback('网络异常,请稍后再试');
    }
  });
};
var getPrjInfoBySysRole = function (param, callback) {
  var url = config.urls.baseUrl + config.actions.getPrjInfoBySysRole;

  app.showLoader();
  $.ajax(url, {
    data: param,
    dataType: 'json', //服务器返回json格式数据
    type: 'GET', //HTTP请求类型
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "X-Access-Token": app.sessionId(),
    },
    timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
    success: function (data) {
      console.log("getPrjInfoBySysRole === "+JSON.stringify(data));
      app.hideLoader();
      if (dealingWithResponseCode(data)) {
        callback(data);
        // mui.alert(data.message)
      } else {
        app.toast(data.message);
      }
    },
    error: function (xhr, type, errorThrown) {
      var res = xhr.responseText;
      res = JSON.parse(res)
      mui.alert(res.message)
      dealingWithErrorRequest(errorThrown);
      app.hideLoader();
      return callback('网络异常,请稍后再试');
    }
  });
}

// 获取当前用户考勤需打卡日期
var getAllNeedSignInDate = function (param, callback) {
  var url = config.urls.baseUrl + config.actions.getAllNeedSignInDate;

  app.showLoader();
  $.ajax(url, {
    data: param,
    dataType: 'json', //服务器返回json格式数据
    type: 'GET', //HTTP请求类型
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "X-Access-Token": app.sessionId(),
    },
    timeout: config.settings.requestTimeOut, //超时时间设置为10秒；
    success: function (data) {
      app.hideLoader();
      if (dealingWithResponseCode(data)) {
        callback(data);
        // mui.alert(data.message)
      } else {
        app.toast(data.message);
      }
    },
    error: function (xhr, type, errorThrown) {
      var res = xhr.responseText;
      res = JSON.parse(res)
      mui.alert(res.message)
      dealingWithErrorRequest(errorThrown);
      app.hideLoader();
      return callback('网络异常,请稍后再试');
    }
  });
}

function changeMonth(year, month) {
  let oneParam = {
    projectId: myProjectId.projectId,
    personId: JSON.parse(localStorage.getItem('$state')).account,
    // personId:'chen_k',
    year: year,
    month: month + 1
  };

  attendanceOne(oneParam, (res) => {
    let arr = [];
    for (var key in res.result.dayList) {
      arr.push(res.result.dayList[key])
    }
    ;
    allSignInDate = arr;
    console.log("个人考勤记录：" + JSON.stringify(allSignInDate))
    if (year == nianD && month == yueD) {
      if (res.result.todayRecord) {
        isChange = false;
        let attendanceTime = res.result.todayRecord.attendanceTime;
        let address = res.result.todayRecord.attendanceAddress;
        let index = attendanceTime.indexOf(' ');
        attendanceTime = attendanceTime.slice(index + 1, index + 6);
        $('.clock_wrap #left_show').text(attendanceTime);
        $('.clock_wrap .text_center').text(address);
        $('.clock_state').text('已打卡')
        $('.clock_state').css("color", "#337BFC")
      } else {
        $('.clock_wrap #left_show').hide();
        $('.clock_wrap #left_hide').show();
        $('.clock_wrap .text_center').text(params.attendanceAddress);
        $('.clock_state').text('未打卡')
        $('.clock_state').css("color", "red")
      }
      $(".clock_wrap").fadeIn();
    } else $(".clock_wrap").hide();
    add(year, month);
  })
}
