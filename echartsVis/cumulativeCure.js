var dom2 = document.getElementById("container2");
var myChart2 = echarts.init(dom2);
var app = {};
option = null;

var data4 = [
    ['6月27日', 80029],
    ['6月28日', 80048],
    ['6月29日', 80058],
    ['6月30日', 80070],
    ['7月1日', 80088],
    ['7月2日', 80103],
    ['7月3日', 80119],
    ['7月4日', 80148],
    ['7月5日', 80160],
    ['7月6日', 80171],
];

option = {
    legend: {
        data: ['累计治愈'],
    textStyle: {
        color: '#87CEEB',
        fontSize: 10
    },
    bottom: 40
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        top: 80,
        bottom: 90,
        x:50,
        x2:10
    },
    xAxis: {
        type: 'category',
        data: ['6月27日', '6月28日', '6月29日', '6月30日', '7月1日', '7月2日', '7月3日','7月4日','7月5日','7月6日'],
        nameGap: 16,
        nameTextStyle: {
            color: '#87CEEB',
            fontSize: 12
        },
        axisLine: {
            lineStyle: {
                color: '#87CEEB',
            }
        },

        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#87CEEB',
            }
        },
        qxisLine: {
            lineStyle: {  
                color: '#87CEEB',
            }
        }
    },
    yAxis: {
        name: '人数',
        nameLocation: 'end',
        nameGap: 16,
        nameTextStyle: {
            color: '#87CEEB',
            fontSize: 12
        },

        type: 'value',
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#87CEEB',
            }
        },
        axisLine: {
            lineStyle: {  
                color: '#87CEEB',
            }
        },
        min:80010
    },
    series: [{
        name: '累计治愈',
        type: 'scatter',
        emphasis: {
            label: {
                show: true,
                formatter: function(param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(25, 100, 150, 0.5)',
            shadowOffsetY: 5,
            color:'#DC143C'
           // color: new echartsVis.graphic.RadialGradient(0.4, 0.3, 1, [{
            //        offset: 0,
            //        color: 'rgb(129, 227, 238)'
            //    }, {
             //       offset: 1,
             //       color: 'rgb(25, 183, 207)'
            //}])
        },
        data: data4
    }]
};
if (option && typeof option === "object") {
myChart2.setOption(option, true);
}