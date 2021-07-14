// 自营仓库出入库统计图表
function setOppOptions(kpiData, yAxisData) {
    let series = [];
    for(const value in kpiData) {
        // console.log(value);
        let json = {
            name: '借出',
            type: 'bar',
            stack: '所有',
            label: {
                show: true,
                position: 'right',
                formatter: function (value) {
                    return Math.abs(value.data);
                }
            },
            emphasis: {
                focus: 'series'
            },
            data: kpiData[value]
        };
        if(value == 'lendList' || value == 'materialTotalList') {
            json.stack = '总量';
        }
        if(value == 'lendList') {
            json.name = '借出';
            json.label.position = 'left';
            let ary = kpiData[value];
            for(let i = 0; i < ary.length; i++) {
                ary[i] = 0 - Number(ary[i]);
            }
            json.data = ary;
            series.push(json);
        }
        if(value == 'lessList') {
            json.name = '损益';
            json.label.position = 'left';
            let ary = kpiData[value];
            for(let i = 0; i < ary.length; i++) {
                ary[i] = 0 - Number(ary[i]);
            }
            json.data = ary;
            series.push(json);
        }
        if(value == 'materialTotalList') {
            json.name = '总量';
            series.push(json);
        }
        if(value == 'restitutionList') {
            json.name = '归还';
            series.push(json);
        }
    }
    // console.log(1111111+JSON.stringify(series));
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
        },
        legend: {
            data: ['借出', '归还', '损益', '总量'],
            x: 'left'
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'value',
                axisLabel: {
                    formatter: function (value) {
                        return Math.abs(value);
                    }
                }
                
            }
        ],
        yAxis: [
            {
                type: 'category',
                axisTick: {
                    show: false
                },
                data: yAxisData
            }
        ],
        series: series
    };
    return option;
}