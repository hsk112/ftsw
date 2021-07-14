// 防洪排涝级降雨统计的接口js
const warehouseVue1 = new Vue({
	el: '#vueapp',
	data: function() {
		return {
			arr1: [], //处理后的河湖长明录的页面的数组
			active: 1, //选项卡绑定数据  1默认河流
			show1: false, //河流的筛选框数据
			hlname: undefined, //河流名称绑定数据
			hlList: [], //所有河流名称数据
			showPicker: false, // 显示选择所有河流名称的Picker
			showPicker1: false, //控制河长级别Picker
			hzldjb: undefined, //河长级别中文名称绑定数据
			hzldjbid: undefined, //河长级别中文名称对应id绑定数据传给后端的
			// 河长级别对应数组
			hzldjbsz: [{
					text: "区级",
					id: "1"
				},
				{
					text: "社区级",
					id: "3"
				},
				{
					text: "街道级",
					id: "2"
				},
			],
			showPicker2: false, //控制所属街道Picker
			shinjjdsz: [], //所属街道数组
			shinjjdname: undefined, //所属街道文字
			shinjjdnameid: undefined, //所属街道文字对应id用来查社区和河湖长名录
			showPicker3: false, //控制所属社区Picker
			sqnamesz: [], //所属社区数组
			sqname: undefined, //所属社区文字
			sqnameid: undefined, //所属社区文字对应id用来查河湖长名录
			// --------------------------------------
			show2: false, //湖泊右侧筛选弹窗
			hbshowPicker: false, //控制湖泊水库名称选择器
			hbList: [], //接口返回所有湖泊列表
			hbhlname: undefined, //湖泊名称绑定数据
			hbhzldjb: undefined, //湖长级别中文名称绑定数据
			hbhzldjbid: undefined, //湖长级别中文名称对应id绑定数据传给后端的
			hbshinjjdname: undefined, //湖泊所属街道文字
			hbshinjjdnameid: undefined, //湖泊所属街道文字对应id用来查社区和河湖长名录
			hbshowPicker3: false, //湖泊筛选控制所属社区Picker
			hbsqnamesz: [], //湖泊所属社区数组
			hbsqname: undefined, //湖泊筛选所属社区文字
			hbsqnameid: undefined, //湖泊筛选所属社区文字对应id用来查河湖长名录

			dhshowPicker3: false, //电话湖长牌弹窗
			phone: undefined, //查看河湖长牌的电话
			tpimgcs: undefined, //查看河湖长牌，弹出图片的那个接口要传的参数
			wltpdz:'',//接口返回的拼接的那个网络地址图片
			tushow:false,//控制图片弹窗显示隐藏
		}
	},
	created: function() {

	},
	mounted: function() {
		this.inquirejk() //调用河湖tab页列表接口
		this.allriverjk() //调用查询所有河流接口
		this.hhDropDownjk() //调用查询所有湖泊接口
		this.listAdBasejk() //进入页面查询所有街道
	},
	watch: {
		// arr1: function() {
		// 	this.inquirejk();
		// }
	},
	methods: {
		// 河湖长名录列表查询接口
		inquirejk() {
			let params = {}
			if (this.active == 1) {
				// 河流传参
				params = {
					riverType: this.active,
					pageNo: 1,
					pageSize: 1000,
					riverName: this.hlname,
					level: this.hzldjbid,
					streetId: this.shinjjdnameid,
					communityId: this.sqnameid,
				}
			}
			if (this.active == 2) {
				// 湖泊河流传参
				params = {
					riverType: this.active,
					pageNo: 1,
					pageSize: 1000,
					riverName: this.hbhlname,
					level: this.hbhzldjbid,
					streetId: this.hbshinjjdnameid,
					communityId: this.hbsqnameid,
				}
			}
			inquire(params, (data) => {
				// console.log("kkkk非法人kkk", JSON.stringify(data))
				let arr = data //接口数据中间数组
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
				// let sqjn = 0//社区级数量
				// let jdjb = 0//街道级数量
				for (let j = 0; j < arr.result.records.length; j++) {
					arr.result.records[j].sqjn = 0 //社区级数量
					arr.result.records[j].jdjb = 0 //街道级数量
					arr.result.records[j].qujb = 0 //区级数量
					arr.result.records[j].tpimg = "../../../img/home_more_icon@2x.png" //给每一条河流加向下图片
					for (let i = 0; i < arr.result.records[j].childLevel.length; i++) {
						if (arr.result.records[j].childLevel[i].level == 2) {
							arr.result.records[j].jdjb++
						}
						if (arr.result.records[j].childLevel[i].level == 3) {
							arr.result.records[j].sqjn++
						}
						if (arr.result.records[j].childLevel[i].level == 1) {
							arr.result.records[j].qujb++
						}
					}
				}

				this.arr1 = arr.result.records
				// console.log("kkkk非法人kkk", JSON.stringify(arr))
				// var approvalStr = ''; //河流详情pj的html
				$(".hlslz").text(data.result.total); //河湖的分别流总条数
			})
		},
		// 查寻所有河流接口
		allriverjk() {
			let params = {
				pageNo: 1,
				pageSize: 1000,
			}
			allriver(params, (data) => {

				this.hlList = data.result.records.map(item => item.riverName)
				// console.log("lk22lwkk",JSON.stringify(this.hlList))
			})
		},
		// 查寻所有湖泊接口
		hhDropDownjk() {
			let params = {
				pageNo: 1,
				pageSize: 1000,
			}
			hhDropDown(params, (data) => {
				this.hbList = data.result.map(item => item.name)
				// console.log("lk22lwk66k",JSON.stringify(data))
			})
		},
		// 查询所有街道列表
		listAdBasejk() {
			let params = {
				parentId: 440304,
				// pageNo:1,
				// pageSize:1000,
			}
			listAdBase(params, (data) => {
				// adCode
				this.shinjjdsz = data.result
				// console.log("lk22lwkk",JSON.stringify(data))
			})
		},
		// 查询所属社区jk
		communityjk(id) {
			let params = {
				parentId: id,
			}
			community(params, (data) => {
				if (this.active == 1) {
					this.sqnamesz = data.result
				}
				if (this.active == 2) {
					this.hbsqnamesz = data.result
				}
			})
		},
		// 查询对应的河湖长图片接口
		lookupjk(tpimgcs) {
			let params = {
				groupId: tpimgcs,
			}
			lookup(params, (data) => {
				if(data.result.length>0){
					//有图片
					this.wltpdz = config.urls.baseUrl + 'sys/common/view/' + data.result[0].uploadFile.savePath
					this.tushow = true
					console.log("lk22l44wkk", this.wltpdz)
				}
				if(data.result.length=0){
					// 没图片
					this.$toast('暂无图片')
				}

			})
		},
		// 那个图片的上拉下拉点击事件
		myxtp(index) {
			// console.log("点击的i", index)
			// console.log("点击前",this.arr1[index].childLevel[0].quxztj)
			this.arr1[index].childLevel[0].quxztj = !this.arr1[index].childLevel[0].quxztj
			// console.log("点击后",this.arr1[index].childLevel[0].quxztj)

			if (this.arr1[index].childLevel[0].quxztj) {
				this.arr1[index].tpimg = "../../../img/home_pack_up_icon@2x.png" //点击向上
			} else {
				this.arr1[index].tpimg = "../../../img/home_more_icon@2x.png" //点击向下
			}
		},
		// 选项卡点击触发
		hhxxllick() {
			this.inquirejk() //调用河湖列表接口
		},
		// 河流筛选点击图片事件
		hlscreen() {
			this.show1 = true
		},
		// 湖泊筛选点击图片事件
		hbzsxdj() {
			this.show2 = true
		},
		// 所有河流名称选择器确时触发
		onConfirm(value) {
			// console.log("444444",value);
			this.hlname = value;
			this.showPicker = false;
		},
		// 河长级别选择器确时触发
		onConfirm1(value) {
			if (this.active == 1) {
				// 河
				this.hzldjbid = value.id
				this.hzldjb = value.text
			}
			if (this.active == 2) {
				// 湖
				this.hbhzldjbid = value.id
				this.hbhzldjb = value.text
			}

			this.showPicker1 = false;
		},
		// 所属街道选择器确时触发
		onConfirm2(value) {
			if (this.active == 1) {
				// 河
				this.shinjjdname = value.adName
				this.shinjjdnameid = value.guid
				this.communityjk(value.guid) //查询所有社区
			}
			if (this.active == 2) {
				this.hbshinjjdname = value.adName
				this.hbshinjjdnameid = value.guid
				this.communityjk(value.guid) //查询所有社区
			}

			this.showPicker2 = false;

		},
		// 所属社区选择器确时触发
		onConfirm3(value) {
			this.sqname = value.adName
			this.sqnameid = value.guid
			this.showPicker3 = false;
		},
		// 湖泊所属社区选择器确时触发
		hbonConfirm3(value) {
			this.hbsqname = value.adName
			this.hbsqnameid = value.guid
			this.hbshowPicker3 = false;
		},
		// 所有湖泊水库名称选择器触发
		hbonConfirm(value) {
			this.hbhlname = value;
			this.hbshowPicker = false;
		},
		// 河长名录确认触发
		hzntnqr() {
			this.inquirejk()
			this.show1 = false
		},
		// 湖泊名录确认触发
		hbhzntnqr() {
			this.inquirejk()
			this.show2 = false
		},
		// 河长重置按钮点击
		hzczbtn() {
			this.hlname = undefined
			this.hzldjbid = undefined
			this.hzldjb = undefined
			this.shinjjdname = undefined
			this.shinjjdnameid = undefined
			this.sqnamesz = []
			this.sqname = undefined
			this.sqnameid = undefined
			this.inquirejk()
			this.show1 = false
		},
		// 湖泊重置按钮点击
		hbhzczbtn() {
			this.hbhzldjb = undefined
			this.hbshinjjdname = undefined
			this.hbshinjjdnameid = undefined
			this.hbsqnamesz = []
			this.hbsqname = undefined
			this.hbsqnameid = undefined
			this.hbhlname = undefined
			this.hbhzldjbid = undefined
			this.inquirejk()
			this.show2 = false
		},
		// 每一个人的点击事件,电话和湖长牌
		ckzphedh(val) {

			this.phone = val.personPhone
			this.tpimgcs = val.attachment
			this.dhshowPicker3 = true
		},
		// 拨打电话点击事件
		bddh(phone) {
			console.log("jwwop55dwjwd", phone)
			var btnArray = ['拨打', '取消'];
			mui.confirm('是否拨打' + phone + '?', '提示', btnArray, function(e) {
				if (e.index == 0) {
					plus.device.dial(phone, false);
				}
			});
		},
		// 打电话的那个弹窗取消点击
		xmqxbtn() {
			this.dhshowPicker3 = false
		},
		// 查看河湖长牌点击事件
		cktpbtn(tpimgcs) {
			this.lookupjk(tpimgcs) //调用查看图片接口
			// console.log("oijijrejjie均为哦",tpimgcs)
		},



	},
})
