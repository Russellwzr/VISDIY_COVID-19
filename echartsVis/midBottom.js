var dom = document.getElementById("container3");
                        var myMiddleChart = echarts.init(dom);
                        var app = {};
                        option3 = null;
                        var dataBJ = [
                            [2456,2489,2536,2457,2549,2652,2566,2449,2560,2613, "伊朗"],
                            [3138,4072,3557,2825,4133,4339,4087,3387,3191,3344,"巴基斯坦"],
                            [3504,3809,4014,3682,3775,4019,3114,3288,2738,3201, "孟加拉国"],
                            [3625,3430,2946,2848,3264,3527,3595,3481,3638,2985, "秘鲁"],
                            [3927,3989,3943,4387,3402,3383,4193,4128,3580,4207, "沙特阿拉伯"],
                            [4149,3178,3274,2803,4163,4101,3395,3884,3721,3171,"哥伦比亚"],
                            [4406,4216,4017,3394,2650,2498,3548,3758,3685,3025, "智利"],
                            [5441,4410,4050,3805,5432,5681,6741,6740,6914,4683,"墨西哥"],
                            [6852,6791,6719,6693,6556,6760,6718,6632,6736,6611,"俄罗斯"],
                            [7210,6334,6130,6945,8124,8728,9063,10853,8773,8971,"南非"],
                            [20131,19620,18339,18256,19424,21952,22721,24015,23932,22510,"印度"],
                            [35887,28202,26345,37997,44884,47984,41988,35035,24679,23016,"巴西"],
                            [46142,40421,45082,46071,50898,55452,57324,44707,45741,58362,"美国"]
                        ];

                        var dataGZ = [
                            [125,144,162,147,141,148,154,148,163,160, "伊朗"],
                            [74,83,49,137,91,78,78,68,93,50,"巴基斯坦"],
                            [34,43,45,64,41,38,42,29,55,44,"孟加拉国"],
                            [178,182,187,173,183,185,181,186,177,183,"秘鲁"],
                            [46,40,48,50,49,54,50,56,58,52,"沙特阿拉伯"],
                            [128,167,117,111,136,144,163,165,122,146,"哥伦比亚"],
                            [165,162,66,113,42,190,131,141,116,76, "智利"],
                            [719,602,267,473,648,741,679,654,523,273,"墨西哥"],
                            [188,104,93,154,216,147,176,168,134,108,"俄罗斯"],
                            [73,43,73,128,92,95,108,74,173,111,"南非"],
                            [384,384,417,506,438,377,444,610,421,474,"印度"],
                            [990,519,763,1271,1057,1277,1264,1111,502,689,"巴西"],
                            [544,285,338,1331,675,636,686,214,239,380,"美国"],
                        ];

                        var dataSH = [
                            [2809,2649,2870,2578,2729,2611,2348,2503,2381,2753,"伊朗"],
                            [2738,5718,2783,3096,2299,3892,8929,11471,4736,1819,"巴基斯坦"],
                            [1185,1409,2053,1844,2484,4334,1606,2673,1904,3524,"孟加拉国"],
                            [4218,3161,2363,3376,3710,3825,3755,3769,4336,3662,"秘鲁"],
                            [1657,2627,2363,3648,1994,4909,2945,2642,1980,4398,"沙特阿拉伯"],
                            [1336,2007,1674,2119,1334,1124,803,1229,1318,2489,"哥伦比亚"],
                            [4624,4155,3944,5075,4214,3804,4096,4102,3587,3339,"智利"],
                            [3700,3235,3046,4421,3693,3362,4274,4612,5104,3295,"墨西哥"],
                            [9227,5735,4343,9220,10281,6047,8915,8986,3871,3579,"俄罗斯"],
                            [7120,1831,1689,2929,2482,5974,4299,4929,2088,4533,"南非"],
                            [14229,11628,13498,12564,12055,20011,14417,14743,15829,15259,"印度"],
                            [18379,17943,23614,32578,36826,89281,0,62468,0,0,"巴西"],
                            [17750,11906,13671,32082,23094,25829,23815,46993,29212,25143,"美国"],
                        ];

                        var schema = [
                            {name: 'A', index: 0, text: '6-27'},
                            {name: 'B', index: 1, text: '6-28'},
                            {name: 'C', index: 2, text: '6-29'},
                            {name: 'D', index: 3, text: '6-30'},
                            {name: 'E', index: 4, text: '7-1'},
                            {name: 'F', index: 5, text: '7-2'},
                            {name: 'G', index: 6, text: '7-3'},
                            {name: 'H', index: 7, text: '7-4'},
                            {name: 'I', index: 8, text: '7-5'},
                            {name: 'J', index: 9, text: '7-6'},
                            {name: 'K', index: 10,text: '国家'}
                        ];

                        var lineStyle = {
                            normal: {
                                width: 1.5,
                                opacity: 20
                            }
                        };
                        // function positionMessage() {
                        //             if (!checkCompatibility) return;
                        //             var ele = document.getElementById("message");
                        //             ele.style.position = "absolute";
                        //             ele.style.top = "100px";
                        //             ele.style.left = "50px";
                        //         }
                        //         function moveMessage() {
                        //             var ele = document.getElementById("message");
                        //             ele.style.left = "200px";
                        //         }
                        //         var loadeventlist = [positionMessage, moveMessage];
                        //         addOnloadEventlist(loadeventlist);
                        //         function addOnloadEventlist(eventlist) {
                        //             if (!eventlist) return false;
                        //             var oldonload = window.onload;
                        //             window.onload = function () {
                        //                 for (var i = 0; i < eventlist.length; i++) {
                        //                     eventlist[i]();
                        //                 }
                        //             }
                        //         }
                        //         function checkCompatibility() {
                        //             if (!document.getElementById) return false;
                        //             if (!document.createElement) return false;
                        //             if (!document.createTextNode) return false;
                        //             if (!document.getElementsByTagName) return false;
                        //             if (!document.getElementsByName) return false;
                        //             return true;
                        //         }
                        option3 = {
                            // backgroundColor: '#333',
                            legend: {
                                bottom:0,
                                data: ['新增确诊', '新增治愈', '新增死亡'],
                                itemGap: 20,
                                textStyle: {
                                    color: '#fff',
                                    fontSize:14
                                }
                            },
                            tooltip: {
                                padding: 10,
                                backgroundColor: '#222',
                                borderColor: '#777',
                                borderWidth: 1,
                                formatter: function (obj) {
                                    var value = obj[0].value;
                                    return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                                        + obj[0].seriesName + ' ' + value[0] + '6-27'
                                        + value[10]
                                        + '</div>'
                                        + schema[1].text + '：' + value[1] + '<br>'
                                        + schema[2].text + '：' + value[2] + '<br>'
                                        + schema[3].text + '：' + value[3] + '<br>'
                                        + schema[4].text + '：' + value[4] + '<br>'
                                        + schema[5].text + '：' + value[5] + '<br>'
                                        + schema[6].text + '：' + value[6] + '<br>'
                                        + schema[7].text + '：' + value[7] + '<br>'
                                        + schema[8].text + ':'  + value[8]+'<br>'
                                        + schema[9].text + ':'  + value[9]+'<br>'
                                        + schema[10].text+ ':'  + value[10]+'<br>';
                                    
                                }
                            },
                            // dataZoom: {
                            //     show: true,
                            //     orient: 'vertical',
                            //     parallelAxisIndex: [0]
                            // },
                            parallelAxis: [
                                {dim: 0, name: schema[0].text, inverse: false, max: 50000, nameLocation: 'end'},
                                {dim: 1, name: schema[1].text},
                                {dim: 2, name: schema[2].text},
                                {dim: 3, name: schema[3].text},
                                {dim: 4, name: schema[4].text},
                                {dim: 5, name: schema[5].text},
                                {dim: 6, name: schema[6].text},
                                {dim: 7, name: schema[7].text},
                                {dim: 8, name: schema[8].text},
                                {dim: 9, name: schema[9].text},
                                {dim: 10,name: schema[10].text,
                                type: 'category', data: ['伊朗','巴基斯坦','孟加拉国','秘鲁','沙特阿拉伯','哥伦比亚','智利','墨西哥','俄罗斯','南非','印度','巴西','美国']}
                            ],
                            visualMap: {
                                bottom:10,
                                show: true,
                                min:0,
                                max:50000,
                                dimension: 2,
                                inRange: {
                                    color: ['#d94e5d','#eac736','#50a3ba'].reverse(),
                                    // colorAlpha: [0, 1]
                                }
                            },
                            parallel: {
                                left: '10%',
                                right: '15%',
                                bottom: 30,
                                parallelAxisDefault: {
                                    type: 'value',
                                    name: '6-28',
                                    nameLocation: 'end',
                                    nameGap: 20,
                                    nameTextStyle: {
                                        color: '#fff',
                                        fontSize: 12
                                    },
                                    axisLine: {
                                        lineStyle: {
                                            color: '#aaa'
                                        }
                                    },
                                    axisTick: {
                                        lineStyle: {
                                            color: '#777'
                                        }
                                    },
                                    splitLine: {
                                        show: false
                                    },
                                    axisLabel: {
                                        color: '#fff'
                                    }
                                }
                            },
                            series: [
                                {
                                    name: '新增确诊',
                                    type: 'parallel',
                                    lineStyle: lineStyle,
                                    data: dataBJ
                                },
                                {
                                    name: '新增治愈',
                                    type: 'parallel',
                                    lineStyle: lineStyle,
                                    data: dataSH
                                },
                                  {
                                    name: '新增死亡',
                                    type: 'parallel',
                                    lineStyle: lineStyle,
                                    data: dataGZ
                                }
                            ]
                        };;
                        if (option3 && typeof option3 === "object") {
                            myMiddleChart.setOption(option3, true);
                        }