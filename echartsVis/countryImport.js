function countryImport(){
var myChart = echarts.init(document.getElementById('charts_2'));
var option6 = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },

    visualMap: {
        show: false,
        min: 20,
        max: 1100,
        inRange: { colorLightness: [0,1]}
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '70%',
            center: ['50%', '50%'],
            data: [
                {value: 726, name: '俄罗斯'},
                {value: 623, name: '其他国家'},
                {value: 322, name: '英国'},
                {value: 216, name: '美国'},
                {value: 92, name: '法国'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                color: '#87CEEB'
            },
            labelLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
            },
            itemStyle: {
                color: '#c23531',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
            ]
        }
myChart.setOption(option6);
}
countryImport()