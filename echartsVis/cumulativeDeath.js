var dom1 = document.getElementById("container1");
var myChart1 = echarts.init(dom1);
var app1 = {};
option1 = null;
option1 = {
    legend: {
        data: ['累计死亡'],
        textStyle: {
            color: '#87CEEB',
            fontSize: 10
        }
    },
    tooltip: {},
    grid:{
        x:40,
        x2:10
    },
    xAxis: {
        type: 'category',
        data: ['1月30日', '2月8日', '2月12日', '2月19日', '3月13日', '5月1日', '6月15日'],
        nameGap: 16,
        nameTextStyle: {
            color: '#87CEEB',
            fontSize: 12
        },
        axisLine: {
            lineStyle: {
            color: '#87CEEB'
            }
        },
    },
    yAxis: {
        type: 'value',
        name: '人数',
        nameLocation: 'end',
        nameGap: 16,
        nameTextStyle: {
            color: '#87CEEB',
            fontSize: 12
        },
        axisLine: {
            lineStyle: {
                color: '#87CEEB'
            }
        },
        splitLine: {
            color:'#87CEEB'
        } ,
        min:200
    },
    series: [{
        data: [213, 811,1367,2118,3189,4633,4634],
        type: 'line',
        symbol: 'triangle',
        symbolSize: 15,
        lineStyle: {
            color: '#FFA500',
            width: 1,
            type: 'dashed'

        },
        itemStyle: {
            borderWidth: 1,
            borderColor: 'yellow',
            color: '#FFDAB9'
        },
        label: {
            show: false,
            position: 'top',
            color:'#87CEEB',
        }
    }]
};
if (option1 && typeof option1 === "object") {
    myChart1.setOption(option1, true);
}