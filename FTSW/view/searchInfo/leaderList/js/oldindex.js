// 河湖长名录页面js处理文件
// 调用河湖长列表的接口1，河2湖
inquirejk()

function inquirejk() {
	var arr = [] //接口数据中间数组
	var params = {
		riverType: "1"
	}
	inquire(params, function(data) {
			arr = data
			for (let j = 0; j < arr.result.records.length; j++) {
				arr.result.records[j].childLevel.unshift({
					"riverLevel_dictText": arr.result.records[j].riverLevel_dictText,
					"level": arr.result.records[j].level,
					"riverId": arr.result.records[j].riverId,
					"personDuty": arr.result.records[j].personDuty,
					"riverLevelText": arr.result.records[j].riverLevelText,
					"superRiver": arr.result.records[j].superRiver,
					"riverName": arr.result.records[j].riverName,
					"personName": arr.result.records[j].personName,
					"personPhone": arr.result.records[j].personPhone,
					"streetName": arr.result.records[j].streetName,
					"levelDicText": arr.result.records[j].levelDicText,
					"attachment": arr.result.records[j].attachment,
					"riverLevel": arr.result.records[j].riverLevel,
					"guid": arr.result.records[j].guid,
					"riverType": arr.result.records[j].riverType,
					"communityName": arr.result.records[j].communityName,
					"quxztj": false, //这个比较特述每一条数组的第一个有这个用来区分选中显示一部份还是全部
				})
			}
			console.log("kkkkkkk", JSON.stringify(arr))
			var approvalStr = ''; //河流详情pj的html
			$(".hlslz").text(data.result.total); //河流总条数
			// 动态页面渲染开始
			for (let i = 0; i < arr.result.records.length; i++) {
				approvalStr += `
				<div>
				<div class="toubu">
					<div class="toubu-1"></div>
					<div class="toubu-2">皇岗河</div>
				</div>
				<div class="hljb">
					<div class="hljb-1">河流级别：<span style="color: #262626;">干流</span></div>
					<div class="hljb-2">上级河流：<span style="color: #262626;">福田河</span></div>
				</div>
				<div class="sghz">
					<div>区级河长：<span style="color: #262626;">1</span></div>
					<div>社区级河长：<span style="color: #262626;">1</span></div>
					<div>街道级河长：<span style="color: #262626;">1</span></div>
				</div>
				</div>
					
					`
				// 只显示区长
				if (!arr.result.records[i].childLevel[0].quxztj) {
					approvalStr += `
								<div class="fankuan">
									<div class="zfankuan">
										<div class="zfankuan-1"><span style="margin-right: 2px;">张三</span><img
												src="../../../img/clfhhgl/hh3.png"
												style="width: 18px;height: 20px;" alt=""></div>
										<div class="zfankuan-2">...</div>
									</div>
									<div class="fankuan-hzjb">河长级别：<span style="color: #262626;">区级</span></div>
									<div class="fankuan-hzjb">相应职务：<span style="color: #262626;">区级</span></div>
									<div class="fankuan-hzjb">联系方式：<span style="color: #262626;">区级</span></div>
								</div>
								`
					// 显示全部级别的
				} else {
					for (let k = 0; k < arr.result.records[i].childLevel.length; k++) {
						approvalStr += `
									<div class="fankuan">
										<div class="zfankuan">
											<div class="zfankuan-1"><span style="margin-right: 2px;">张三</span><img
													src="../../../img/clfhhgl/hh3.png"
													style="width: 18px;height: 20px;" alt=""></div>
											<div class="zfankuan-2">...</div>
										</div>
										<div class="fankuan-hzjb">河长级别：<span style="color: #262626;">区级</span></div>
										<div class="fankuan-hzjb">相应职务：<span style="color: #262626;">区级</span></div>
										<div class="fankuan-hzjb">联系方式：<span style="color: #262626;">区级</span></div>
									</div>
									`
					}
				}

				approvalStr += `
			<div id="moreNotification" onclick="myAlert(i)"  style="padding: 5px">
				<img id="moreNotificationImg" src="../../../img/home_more_icon@2x.png"
					style="width: 9px">
			</div>
			<div style="width: 100%;height: 5px;background: #f4f4f4;"></div>
			`
			// $("#jthlqmc").on('tap', "#moreNotification", function(e) {
			// 		// var datas = $('#problemTypeName').text();
			// 		// let i = $(this).index() //点击的下标
			// 		console.log("fffffff点击了图片",JSON.stringify(e))
			// 	})
			}
			
			
			// console.log("woehwichwiuuuuuuuu群殴我",approvalStr)
			// var buttons = document.querySelectorAll(".mui-control-item")
			// console.log("woehwichwiuuuuuuuuuuuuuu群殴我",JSON.stringify(buttons))
			
				$("#jthlqmc").append(approvalStr); //把拼接的东西渲染到页面上
				// document.getElementById("moreNotification").onclick = djtup
				// console.log("qqw哦i华为", JSON.stringify(data))
			})
	}
	function myAlert(i){
	    
	}
