var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
option = null;
var xAxisData = ['6月27日','6月28日','6月29日','6月30日','7月1日','7月2日','7月3日','7月4日','7月5日','7月6日'];
//var data0 = ['18','15','22','33','13','11','15','18','20','23'];
var data1 = ['85192','85207','85229','85262','85275','85286','85301','85319','85339','85362'];
//var data2 = ['515','511','523','544','539','535','534','523','531','543'];

option = {
    legend: {
        data: ['新增确诊','累计确诊', '现存确诊'],
        textStyle: {
        color: '#87CEEB',
        fontSize: 10
        }
    },
    toolbox: {
        // y: 'bottom',
        feature: {
            magicType: {
            type: ['stack', 'tiled']
            },
            dataView: {},
            saveAsImage: {
                pixelRatio: 2
            }
        }
    },
    tooltip: {},
    xAxis: {
        data: xAxisData,
        nameTextStyle: {
            color: '#87CEEB',
            fontSize: 10
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {  
                color:'#87CEEB'
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
        axisLine: {
            lineStyle: {
                color:'#87CEEB'
            }
        },
        splitLine: {
            show: false
        } ,
        min:85000
    },
    grid:{
        x:50,
        x2:10
    },
    series: [
     {
            name: '累计确诊',
            type: 'bar',
            itemStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#83bff6'},
                        {offset: 0.5, color: '#188df0'},
                        {offset: 1, color: '#188df0'}
                    ]
                )
            },
            emphasis: {
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#2378f7'},
                            {offset: 0.7, color: '#2378f7'},
                            {offset: 1, color: '#83bff6'}
                        ]
                    )
                }
            },
            data: data1
        }
        //{
//  name: '新增确诊',
//type: 'bar',
//data: data0
//},{
       // name: '累计确诊',
       // type: 'bar',
        //data: data1,
//}, {
//  name: '现存确诊',
//type: 'bar',
//data: data2
        //itemStyle: {
          //  color: '#40E0D0'
        //},
    ],
    animationEasing: 'elasticOut'
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}