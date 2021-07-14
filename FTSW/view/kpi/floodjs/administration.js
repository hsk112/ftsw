// 防洪排涝级降雨统计的接口js
const warehouseVue1 = new Vue({
	el: '#vueapp',
	data: function() {
		return {
			isYear: true, //行政审批控制年月切换
			timeTxt: '', //行政审批显示的年分月分
			years: 2021, //行政审批要传参的年
			months: '', //行政审批要传参的月
			showPicker: false, //行政审批类型筛选弹窗
			lxid: undefined, //行政审批选中类型id
			// 行政审批类型筛选数据
			sqnamesz: [{
					name: "全部",
					id: undefined,
				},
				{
					name: "排水排污相关",
					id: 1,
				},
				{
					name: "水土保持相关",
					id: 2,
				},
				{
					name: "取水用水相关",
					id: 3,
				},
				{
					name: "水利工程相关",
					id: 4,
				},
				{
					name: "水利设施相关",
					id: 5,
				},
			],
			// 水保检查绑定
			isYear1: true, //水保检查控制年月切换
			timeTxt1: '', //水保检查显示的年分月分
			years1: 2021, //水保检查要传参的年
			months1: '', //水保检查要传参的月
		}
	},
	created() {
		var myDate = new Date();
		this.years = myDate.getFullYear()
		this.timeTxt = this.years + '年';
		this.years1 = myDate.getFullYear()
		this.timeTxt1 = this.years1 + '年';
		this.statisticsjk() //调用行政审批情况统计接口
		this.happeningjk() //调用水保检查
	},
	mounted() {

	},
	watch: {

	},
	methods: {
		// 行政审批情况统计接口
		statisticsjk() {
			let params = {
				month: this.months,
				year: this.years,
				approvalType: this.lxid,
			}
			statistics(params, (data) => {
				var option = {
					tooltip: {
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					legend: {
						data: ['受理数', '办结数', ]
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						data: []
					}],
					yAxis: [{
						type: 'value'
					}],
					series: [{
							name: '受理数',
							type: 'bar',
							emphasis: {
								focus: 'series'
							},
							data: []
						},
						{
							name: '办结数',
							type: 'bar',
							emphasis: {
								focus: 'series'
							},
							data: []
						},
					]
				};
				for (let key in data.result.data.流转中) {
					// console.log("key的值", key)
					option.xAxis[0].data.push(key)
				}
				option.series[0].data = Object.values(data.result.data.流转中)
				option.series[1].data = Object.values(data.result.data.办结)
				let sholenum = 0 //受理总和
				let banjienum = 0 //办结总和
				for (let i = 0; i < option.series[0].data.length; i++) {
					sholenum += option.series[0].data[i]
				}
				for (let i = 0; i < option.series[0].data.length; i++) {
					banjienum += option.series[1].data[i]
				}
				$(".sldnum").text(sholenum)
				$(".bjnum").text(banjienum)

				this.$nextTick(() => {
					var myChart = echarts.init(document.getElementById('main'));
					myChart.setOption(option);
				});
			})
		},
		// 水保检查接口
		happeningjk() {
			let params = {
				month: this.months1,
				year: this.years1,
			}
			happening(params, (data) => {
				$(".xmzsnum").text(data.result.项目总数)
				$(".jcrszsnum").text(data.result.检查人数总数)
				$(".fszgnum").text(data.result.发送整改总数)
				var option = {
					tooltip: {
						trigger: 'item'
					},
					legend: {
						top: '5%',
						left: 'center'
					},
					// grid: {
					// 	left: '3%',
					// 	right: '4%',
					// 	bottom: '3%',
					// 	y: '24%',
					// 	containLabel: true
					// },
					series: [{
						// name: '访问来源',
						type: 'pie',
						radius: ['40%', '70%'],
						avoidLabelOverlap: false,
						label: {
							show: false,
							position: 'center'
						},
						emphasis: {
							label: {
								show: true,
								fontSize: '20',
								fontWeight: 'bold'
							}
						},
						labelLine: {
							show: false
						},
						data: [
						]
					}]
				};
				let  syaxm = []//所有属性名
				let  sysxz = []//所有属性值
				for (let key in data.result.饼图) {
					syaxm.push(key)
				}
				sysxz = Object.values(data.result.饼图)
				for (let i = 0; i < syaxm.length; i++) {
					option.series[0].data.push({
						value:sysxz[i],
						name:syaxm[i]
					})
				}
				this.$nextTick(() => {
					var myChart = echarts.init(document.getElementById('main1'));
					myChart.setOption(option);
				});
				// console.log("lk22lwkk", JSON.stringify(data))
			})
		},
		// 行政审批类型筛选确认触发
		onConfirm(val) {
			$(".lxwzqd").text(val.name)
			this.lxid = val.id
			this.statisticsjk()
			this.showPicker = false
		},
		//行政审批年月切换点击触发，用来切换显示年月
		swicthDate(val) {
			if (val == 1) {
				// 行政审批情况统计
				this.isYear = !this.isYear;
				if (this.isYear) {
					this.timeTxt = this.years + '年';
					this.months = ''
					this.statisticsjk()
				} else {
					var myDate = new Date();
					this.months = myDate.getMonth()+1
					this.timeTxt = this.months + '月';
					this.statisticsjk()
				}
			}
			if (val == 2) {
				// 水保检查统计
				this.isYear1 = !this.isYear1;
				if (this.isYear1) {
					this.timeTxt1 = this.years1 + '年';
					this.months1 = ''
					this.happeningjk()
				} else {
					var myDate = new Date();
					this.months1 = myDate.getMonth()+1
					this.timeTxt1 = this.months1 + '月';
					this.happeningjk()
				}
			}
		},
		//选择内容，年月选择内容触发
		selectTime(val) {
			if (val == 1) {
				// 行政审批情况统计
				const picker = new mui.PopPicker();
				let _that = this;
				if (this.isYear) {
					this.months = '';
					//设置年份的选择
					var options = [];
					var myDate = new Date();
					var startYear = myDate.getFullYear() - 10; //起始年份
					var endYear = myDate.getFullYear(); //结束年份
					for (var i = startYear; i <= endYear; i++) {
						options.push({
							value: i,
							text: i + '年'
						})
					}
					picker.setData(options);
					picker.show(function(selectItems) {
						_that.years = selectItems[0].value;
						_that.timeTxt = selectItems[0].text;
						_that.statisticsjk();
					});
				} else {
					// this.years = '';
					var options = [];
					for (let i = 0; i < 12; i++) {
						options.push({
							value: i + 1,
							text: i + 1 + '月'
						});
					}
					picker.setData(options);
					picker.show(function(selectItems) {
						_that.months = selectItems[0].value;
						_that.timeTxt = selectItems[0].text;
						_that.statisticsjk();
					});
				}
			}
			if (val == 2) {
				// 水保检查统计
				const picker = new mui.PopPicker();
				let _that = this;
				if (this.isYear1) {
					this.months1 = '';
					//设置年份的选择
					var options = [];
					var myDate = new Date();
					var startYear = myDate.getFullYear() - 10; //起始年份
					var endYear = myDate.getFullYear(); //结束年份
					for (var i = startYear; i <= endYear; i++) {
						options.push({
							value: i,
							text: i + '年'
						})
					}
					picker.setData(options);
					picker.show(function(selectItems) {
						_that.years1 = selectItems[0].value;
						_that.timeTxt1 = selectItems[0].text;
						_that.happeningjk() //调用水保检查
					});
				} else {
					// this.years = '';
					var options = [];
					for (let i = 0; i < 12; i++) {
						options.push({
							value: i + 1,
							text: i + 1 + '月'
						});
					}
					picker.setData(options);
					picker.show(function(selectItems) {
						_that.months1 = selectItems[0].value;
						_that.timeTxt1 = selectItems[0].text;
						_that.happeningjk() //调用水保检查
					});
				}
			}

		},



















	},
})
