// 防洪排涝级降雨统计的接口js
const warehouseVue1 = new Vue({
	el: '#warehouse1',
	data: function() {
		return {
			isYear: true,//防洪排涝控制切换
			timeTxt: '',//页面显示的年分月分
			years: 2021,
			months: '',
			// kpiData: {},
			// yAxisData: [], //y轴数据
			// 指定图表的配置项和数据,年度防洪排涝及降雨统计表
			option: {
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'cross',
						crossStyle: {
							color: '#999'
						}
					},
					// formatter: function (params) {
					// 	// return params.data.value+'%'
					// 	console.log("ussh嗡嗡嗡wuo",JSON.stringify(params))
					// }
				},
				grid: {
					x: '3%', //相当于距离左边效果:padding-left
					y: '16%', //相当于距离上边效果:padding-top
					bottom: '3%',
					containLabel: true
				},
				legend: {
					type: 'scroll',
					itemWidth: 10,
					itemHeight: 10
					// data: ['关注级', 'IV级', 'I级', '最大降雨量', '平均降雨量'] //上面的对应的类型的数据
				},
				xAxis: [{
					type: 'category',
					data: [], //x轴日期
					axisPointer: {
						type: 'shadow'
					}
				}],
				yAxis: [{
						type: 'value',
						name: '(单位)ML',
						splitLine: {
							show: false
						},
						scale: true,
						axisLabel: {
							formatter: '{value} '//这里格式化的只是刻度而已
						}
					},
					// grid: {
					// left: '5%'
					// },
				],
				series: [
					
				]
			}
		}
	},
	watch: {
	},
	methods: {
		//选择类型
		swicthDate: function() {
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
		},
		//获取后台数据
		statisticsjk: function() {
			//调用封装方法
			const param = {
				month: this.months,
				year: this.years,
			};
			console.log("77777777",JSON.stringify(param));
			let _that = this;
			//获取类型
			statistics(
				param,
				function(data) {
					if (data.code == 200) {
						_that.kpiData = data.result;
						_that.option.series = []
						// console.log("请求4444成功", JSON.stringify(data.result.data))
						for (let i = 0; i < data.result.data.length; i++) {
							// console.log("ssssss", JSON.stringify(data.result.data[i].name))
							if (data.result.data[i].name == "响应次数") {
								// 这个就是选择月的数据，x轴显示当月的每一天的日期
								if (data.result.data[i].data.length > 12) {
									_that.option.xAxis[0].data = getDaysInMonth(_that.years, _that.months)
								} else {
									// 这里就是选择年的数据，x轴显示12个月份
									_that.option.xAxis[0].data = ['1月', '2月', '3月', '4月', '5月', '6月',
										'7月', '8月', '9月', '10月',
										'11月', '12月'
									]
								}
							}
							if(data.result.data[i].name !== "最大降雨量" && data.result.data[i].name !== "平均降雨量" && data.result.data[i].name !== "响应次数"){
								_that.option.series.push({
									name: data.result.data[i].name,
									type: 'bar',
									data: data.result.data[i].data,
								})
							}
							if(data.result.data[i].name == "最大降雨量" || data.result.data[i].name == "平均降雨量"){
								for (let k = 0; k < data.result.data[i].data.length; k++) {
										data.result.data[i].data[k] = data.result.data[i].data[k].toFixed(4)
									}
								_that.option.series.push({
									name: data.result.data[i].name,
									type: 'line',
									data: data.result.data[i].data,
								})
							}
						}
						// console.log("图表", JSON.stringify(_that.option))
						_that.$nextTick(() => {	
							var myChart = echarts.init(document.getElementById('main'));
							myChart.setOption(_that.option);
						});
					}
				});
		},
	},
	created: function() {
		var myDate = new Date();
		this.years = myDate.getFullYear()
		
		// console.log("55555",myDate.getMonth()+1)
		// date .getMonth(); //获取当前月份(0-11,0代表1月)
		// this.timeTxt = this.years + '年';
		this.statisticsjk();
		
	},
	mounted: function() {
	}
})
