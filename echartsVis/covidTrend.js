function covidTrend() {
var myChart=echarts.init(document.getElementById('chart_other'));
var colors = ['#5793f3', '#d14a61', '#675bba','#00FFFF','#FFD700'];
var option4 = {
    color: colors,
    tooltip: {
        trigger: 'none',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        data:['当日确诊', '累计确诊','累计治愈', '累计死亡'],
        textStyle:{
            color:'#87CEEB'
        }
    },
    grid: {
        left:20,
        top: 20,
        bottom: 50,
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: colors[1]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '当日确诊人数' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
            data: ['1-15', '1-24','1-28', '1-30', '2-4', '2-7', '2-8', '2-10', '2-11', '2-12', '2-15','2-18','2-19','3-1','3-7','3-13','4-7','4-23','5-1','5-14','6-1','6-15','7-6','7-16']
        },
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: colors[0]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '累计人数  ' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
        data: ['1-15', '1-24','1-28', '1-30', '2-4', '2-7', '2-8', '2-10', '2-11', '2-12', '2-15','2-18','2-19','3-1','3-7','3-13','4-7','4-23','5-1','5-14','6-1','6-15','7-6','7-16']
        },
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: colors[3]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '累计治愈  ' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
        data: ['1-15', '1-24','1-28', '1-30', '2-4', '2-7', '2-8', '2-10', '2-11', '2-12', '2-15','2-18','2-19','3-1','3-7','3-13','4-7','4-23','5-1','5-14','6-1','6-15','7-6','7-16']
        },
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                onZero: false,
                lineStyle: {
                    color: colors[4]
                }
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return '累计死亡  ' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
        data: ['1-15', '1-24','1-28', '1-30', '2-4', '2-7', '2-8', '2-10', '2-11', '2-12', '2-15','2-18','2-19','3-1','3-7','3-13','4-7','4-23','5-1','5-14','6-1','6-15','7-6','7-16']
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLine: {
                lineStyle: {  
                    color:'#87CEEB'
                }
            }
        }
    ],
    series: [
        {
            name: '累计人数',
            type: 'line',
            xAxisIndex: 1,
            smooth: true,
            data: [41, 1297, 5997, 9720, 24363,34594,37162, 42708, 44730, 58839, 68584, 74276,75101,80174,80859,81021,83157,84311,84388,84469,84595,84823,85345,85775]
        },
        {
            name: '当日确诊人数',
            type: 'line',
            smooth: true,
            data: [0, 462,1462,2568, 3892,3397, 2486,2022,14109,2009,1748,825,206,46,18,147,86,9,3,5,7,45,25,78]
        },
        {
            name: '累计治愈',
            type: 'line',
            smooth: true,
            data: [12, 38,103,171,892,2051, 2651,3998,4742,5646,9425,14387,16168,44518,57143,65649,77586,78236,78905,79644,79822,79922,80168,80476]
        },
        {
            name: '累计死亡',
            type: 'line',
            smooth: true,
            data: [2, 41,132,213,491,723, 812,1017,1114,1260,1666,2006,2121,2915,3100,3194,3342,4643,4643,4644,4645,4645,4648,4651]
        }
    ]
}
myChart.setOption(option4);
}
covidTrend()