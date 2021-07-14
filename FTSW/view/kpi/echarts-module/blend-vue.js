const blendVue = new Vue({
    el: '#hybridJunction',
    data: function () {
        return {
            isYear: true,
            timeTxt: '',
            years: 2021,
            months: '',
            kpiData: {},
        }
    },
    watch: {
        kpiData: function() {
            this.renderChart();
        }
    },
    methods: {
        //选择类型
        swicthDate: function () {
            this.isYear = !this.isYear;
            if (this.isYear) {
                this.timeTxt = this.years + '年';
            } else {
                this.timeTxt = this.months + '月';
            }
        },
        //选择内容
        selectTime: function () {
            const picker = new mui.PopPicker();
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
                picker.show(function (selectItems) {
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
                type: 1
            };
            console.log(JSON.stringify(param));
            let _that = this;
            getDrainage('https://zhswtest.hdec.com/ecidi-cmp/ft-emergency/statistics/kpi/drain/mixing_point_statistics', param, function (data) {
                if(data.code == 200) {
                    // console.log(JSON.stringify(data.result.data));
                    _that.kpiData = data.result.data;
                }
            });
        },
        renderChart: function () {
            let data = {"新增量":[1,2,3,2,5,6,2,2,3,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,3,2,2,3,5],"总量":[5,2,3,4,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0],"核销量":[6,8,3,1,0,3,0,5,0,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};
            var flowChart = echarts.init(document.getElementById('blendChart'));
            if(this.isYear) {
                flowChart.setOption(setChartOptions(this.kpiData, '核销量', this.isYear, this.years, this.months));
            }else {
            flowChart.setOption(setChartOptions(data, '核销量', this.isYear, this.years, this.months));
            }
        }
    },
    created: function () {
        this.getKpiFlowData();
        this.timeTxt = this.years + '年';
    },
    mounted: function () {
        this.renderChart();
    }
})