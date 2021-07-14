// 自营仓库出入库统计的jk处理js
const warehouseVue = new Vue({
    el: '#warehouse',
    data: function () {
        return {
            isYear: true,
            timeTxt: '',
            years: 2021,
            months: '',
            kpiData: {},
            yAxisData: [], //y轴数据
        }
    },
    watch: {
        kpiData: function () {
            this.renderChart();
        }
    },
    methods: {
        //选择类型
        swicthDate: function () {
            this.isYear = !this.isYear;
            if (this.isYear) {
                this.timeTxt = this.years + '年';
								this.months = ''
								this.getKpiFlowData()
            } else {
							var myDate = new Date();
							this.months = myDate.getMonth()+1
                this.timeTxt = this.months + '月';
								this.getKpiFlowData()
            }
        },
        //选择内容
        selectTime: function () {
            const picker = new mui.PopPicker();
						// console.log("lllllllllll",JSON.stringify(new mui.PopPicker()))
            let _that = this;
            if (this.isYear) {
                this.months = '';
                //设置年份的选择
                var options = [];
                var myDate = new Date();
                var startYear = myDate.getFullYear() - 10;//起始年份
                var endYear = myDate.getFullYear();//结束年份
                for (var i = startYear; i <= endYear; i++) {
                    options.push({ value: i, text: i + '年' })
                }
                picker.setData(options);
								// 这里点击选择器的确定后会触发
                picker.show(function (selectItems) {
									// console.log("lllllllllll",JSON.stringify(selectItems))
                    _that.years = selectItems[0].value;
                    _that.timeTxt = selectItems[0].text;
                    _that.getKpiFlowData();
                });
            } else {
                // this.years = '';
                var options = [];
                for (let i = 0; i < 12; i++) {
                    options.push({ value: i + 1, text: i + 1 + '月' });
                }
                picker.setData(options);
                picker.show(function (selectItems) {
                    _that.months = selectItems[0].value;
                    _that.timeTxt = selectItems[0].text;
                    _that.getKpiFlowData();
                });
            }
        },
        //获取后台数据
        getKpiFlowData: function () {
            //调用封装方法
            const param = {
                month: this.months,
                year: this.years,
            };
            // console.log(JSON.stringify(param));
            let _that = this;
            //获取类型
						// config.urls.baseUrl
            getDrainage(config.urls.baseUrl+'ft-emergency/material/queryMaterialByName', {}, function (data1) {
                if (data1.code == 200) {
                    getDrainage(config.urls.baseUrl+'ft-emergency/statistics/kpi/flood_protection/in_out_warehouse', param, function (data) {
                        if (data.code == 200) {
													// console.log("dwdwjqsxjo申请单位",JSON.stringify(data));
                            _that.kpiData = data.result;
                            // console.log('长度'+data1.result);
                            for(let i = 0; i < data.result.materialTypeList.length; i++) {
                                for(let j = 0; j < data1.result.length; j++) {
                                    if(data.result.materialTypeList[i] == data1.result[j].key) {
                                        // console.log(data1.result[j].title);
                                        _that.yAxisData.push(data1.result[j].title);
                                    }
                                }
                            }
                        }
                    });
                }
            })
        },
        renderChart: function () {
            var flowChart = echarts.init(document.getElementById('warehouseChart'));
            flowChart.setOption(setOppOptions(this.kpiData, this.yAxisData));
        }
    },
    created: function () {
			var myDate = new Date();
			this.years = myDate.getFullYear()
        this.getKpiFlowData();
        this.timeTxt = this.years + '年';
    },
    mounted: function () {
        // this.renderChart();
    }
})