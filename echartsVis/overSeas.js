function overSeas() {
    var myChart=echarts.init(document.getElementById('chart_3'));
    var option5={
        dataset: {
            source: [
                ['Score', 'amount', 'country'],
                [100, 3772876, '美国'],
                [90, 2049140, '巴西'],
                [80, 1003552, '印度'],
                [70, 765437, '俄罗斯'],
                [60, 345537, '秘鲁'],
                [50, 337594, '南非'],
                [40, 331298, '墨西哥'],
                [30, 326539, '智利'],
                [20, 307335, '西班牙']
            ]
        },
        grid: {
            left:10,
            bottom:50,
            containLabel: true
        },
        xAxis: {name: 'amount',
        axisLine: {
            lineStyle: {  
                color:'#87CEEB'
            }
        }},
        yAxis: {type: 'category',
        axisLine: {
            lineStyle: {  
                color:'#87CEEB'
            }
        }},
        visualMap: {
            orient: 'horizontal',
            left: 'center',
            min: 10,
            max: 100,
            text: ['High Score', 'Low Score'],
            textStyle:{
                color:'#87CEEB'
            },
            // Map the score column to color
            dimension: 0,
            inRange: {
                color: ['#D7DA8B', '#E15457']
            }
        },
        series: [
            {
                type: 'bar',
                encode: {
                    // Map the "amount" column to X axis.
                    x: 'amount',
                    // Map the "product" column to Y axis
                    y: 'country'
                }
            }
        ]
    }
    myChart.setOption(option5);
}

overSeas()