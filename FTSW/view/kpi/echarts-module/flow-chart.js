/**
 * @description 流图图表
 *
 */
function setChartOptions(data, unique, isYear, year, month) {
    let series = [];
    let xAxis = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    if(!isYear) {
        xAxis = getDaysInMonth(year, month);
    }
    // let count = Object.keys(data).length;
    for(const value in data) {
        let json = {
            name: value,
            type: 'bar',
            stack: 'a',
            emphasis: {
                focus: 'series'
            },
            data: data[value]
        };
        //删除该元素
        if(value == unique) {
            delete json.stack;
        }
        series.push(json);
    }
    var options = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['新增量', '总量', '核销量'],
            x:'left',
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: xAxis
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '单位(个)'
            }
        ],
        series: series
    };
    return options;
}