// 仓库物资统计图表的接口
const warehouseVue2 = new Vue({
	el: '#warehouse2',
	data: function() {
		return {
			isYear: true, //防洪排涝控制切换
			timeTxt: '', //页面显示的年分月分
			years: 2021,
			months: '',
			// kpiData: {},
			// yAxisData: [], //y轴数据
			// 指定图表的配置项和数据,年度防洪排涝及降雨统计表
			option1: {
				color: ['#3F9EFF', '#FED33F', '#7E7CFF', "#5470c6", "#91cc75", "#fac858", "#ee6666",
					"#73c0de", "#3ba272", "#fc8452", "#9a60b4"
				],
				tooltip: {
					trigger: 'axis',
					axisPointer: { // Use axis to trigger tooltip
						type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
					}
				},
				legend: {
					// 
					type: 'scroll',
					itemWidth: 10,
					itemHeight: 10
					// data: ["抢险物料","救生器材","防汛舟艇","通讯报警器材","勘察监测设备","抢险机具","动力设备","照明设备","防护用品","其他类型"]//所有的类型名
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					y: '7%',
					containLabel: true
				},
				xAxis: {
					type: 'value'
				},
				yAxis: {
					type: 'category',
					data: [] //所有的仓库名
				},
				series: [{
						name: '',
						type: 'bar',
						stack: 'total',
						label: {
							show: true
						},
						emphasis: {
							focus: 'series'
						},
						data: [] //类型里面第一条类型的所有数据，后面的依次类推
					},
					{
						name: '',
						type: 'bar',
						stack: 'total',
						label: {
							show: true,
							color: "#fff"
						},
						emphasis: {
							focus: 'series'
						},
						data: []
					},
					{
						name: '',
						type: 'bar',
						stack: 'total',
						label: {
							show: true,
							color: "#fff"
						},
						emphasis: {
							focus: 'series'
						},
						data: []
					},
					{
						name: '',
						type: 'bar',
						stack: 'total',
						label: {
							show: true,
							color: "#fff"
						},
						emphasis: {
							focus: 'series'
						},
						data: []
					},
					{
						name: '',
						type: 'bar',
						stack: 'total',
						label: {
							show: true,
							color: "#fff"
						},
						emphasis: {
							focus: 'series'
						},
						data: []
					},
					{
						name: '',
						type: 'bar',
						stack: 'total',
						label: {
							show: true,
							color: "#fff"
						},
						emphasis: {
							focus: 'series'
						},
						data: []
					},
					{
						name: '',
						type: 'bar',
						stack: 'total',
						label: {
							show: true,
							color: "#fff"
						},
						emphasis: {
							focus: 'series'
						},
						data: []
					},
					{
						name: '',
						type: 'bar',
						stack: 'total',
						label: {
							show: true,
							color: "#fff"
						},
						emphasis: {
							focus: 'series'
						},
						data: []
					},
					{
						name: '',
						type: 'bar',
						stack: 'total',
						label: {
							show: true,
							color: "#fff"
						},
						emphasis: {
							focus: 'series'
						},
						data: []
					},
					{
						name: '',
						type: 'bar',
						stack: 'total',
						label: {
							show: true,
							color: "#fff"
						},
						emphasis: {
							focus: 'series'
						},
						data: []
					}
				]
			}
		}
	},
	watch: {
		// kpiData: function() {
		// 	this.renderChart();
		// }
	},
	methods: {
		//选择类型
		swicthDate: function() {
			this.isYear = !this.isYear;
			if (this.isYear) {
				this.timeTxt = this.years + '年';
				this.months = ''
				this.wztypejk()
			} else {
				var myDate = new Date();
				this.months = myDate.getMonth()+1
				this.timeTxt = this.months + '月';
				this.wztypejk()
			}
		},
		//选择内容
		selectTime: function() {
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
					_that.wztypejk();
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
					_that.wztypejk();
				});
			}
		},
		//获取后台数据
		wztypejk: function() {

			//调用封装方法
			const params1 = {
				month: this.months,
				year: this.years,
			};
			let _that = this;
			//获取类型
			var params = {}
			wztype(
				params,
				function(data) {
					// console.log("lll98988", JSON.stringify(data))

					// if (data.code == 200) {
					// console.log("llllllll",JSON.stringify(data))
					var arr = []
					arr = data.result.map(item => item.text)
					// console.log("llllllll", JSON.stringify(params1))

					warehouse(params1, function(data1) {
						// console.log("lll98988", JSON.stringify(data1))
						// option1.legend.data = arr
						// console.log("oooooooo", arr)
						_that.option1.yAxis.data = data1.result.whList
						for (let i = 0; i < arr.length; i++) {
							_that.option1.series[i].name = arr[i]
							// if(){

							// }
							_that.option1.series[i].data = data1.result.collect[i]
						}
						_that.$nextTick(() => {
							var myChart1 = echarts.init(document.getElementById(
								'main1'));
							myChart1.setOption(_that.option1); //调用仓库资统计图表
						});
					})
					// }
				});
		},
	},
	created: function() {
		var myDate = new Date();
		this.years = myDate.getFullYear()
		// console.log("wo景了周期")
		this.wztypejk();
		this.timeTxt = this.years + '年';
	},
	mounted: function() {
		// this.renderChart();
	}
})
