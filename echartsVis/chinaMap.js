// JavaScript Document
var num=new Array();
var maxTime,curTime;
		
maxTime=10;
curTime=1;


for(i=0;i<=9;i++){
	var temp=0;
	var tag=i;
	num[i]=new Array();
	for(j=0;j<=35;j++){
		num[i][j]=temp;
	}
}

data=[

{

"time":"2020-06-27"



,"newconfirm":[{"name":"湖北","value":0}

,{"name":"香港","value":1}

,{"name":"广东","value":0}

,{"name":"河南","value":0}

,{"name":"浙江","value":0}

,{"name":"湖南","value":0}

,{"name":"安徽","value":0}

,{"name":"黑龙江","value":0}

,{"name":"江西","value":0}

,{"name":"北京","value":14}

,{"name":"山东","value":0}

,{"name":"上海","value":1}

,{"name":"江苏","value":0}

,{"name":"四川","value":0}

,{"name":"重庆","value":0}

,{"name":"台湾","value":0}

,{"name":"福建","value":0}

,{"name":"河北","value":0}

,{"name":"陕西","value":1}

,{"name":"广西","value":0}

,{"name":"内蒙古","value":0}

,{"name":"天津","value":0}

,{"name":"山西","value":0}

,{"name":"云南","value":0}

,{"name":"海南","value":0}

,{"name":"甘肃","value":1}

,{"name":"辽宁","value":0}

,{"name":"吉林","value":0}

,{"name":"贵州","value":0}

,{"name":"新疆","value":0}

,{"name":"宁夏","value":0}

,{"name":"澳门","value":0}

,{"name":"青海","value":0}

,{"name":"西藏","value":0}



]

,"confirm":[{"name":"湖北","value":68135}

,{"name":"香港","value":1197}

,{"name":"广东","value":1637}

,{"name":"河南","value":1276}

,{"name":"浙江","value":1269}

,{"name":"湖南","value":1019}

,{"name":"安徽","value":991}

,{"name":"黑龙江","value":947}

,{"name":"江西","value":932}

,{"name":"北京","value":905}

,{"name":"山东","value":792}

,{"name":"上海","value":707}

,{"name":"江苏","value":654}

,{"name":"四川","value":589}

,{"name":"重庆","value":582}

,{"name":"台湾","value":447}

,{"name":"福建","value":363}

,{"name":"河北","value":349}

,{"name":"陕西","value":320}

,{"name":"广西","value":254}

,{"name":"内蒙古","value":238}

,{"name":"天津","value":198}

,{"name":"山西","value":200}

,{"name":"云南","value":185}

,{"name":"海南","value":171}

,{"name":"甘肃","value":163}

,{"name":"辽宁","value":154}

,{"name":"吉林","value":155}

,{"name":"贵州","value":147}

,{"name":"新疆","value":76}

,{"name":"宁夏","value":75}

,{"name":"澳门","value":46}

,{"name":"青海","value":18}

,{"name":"西藏","value":1}



]

,"curconfirm":[{"name":"湖北","value":0}

,{"name":"香港","value":95}

,{"name":"广东","value":7}

,{"name":"河南","value":0}

,{"name":"浙江","value":1}

,{"name":"湖南","value":0}

,{"name":"安徽","value":0}

,{"name":"黑龙江","value":0}

,{"name":"江西","value":0}

,{"name":"北京","value":311}

,{"name":"山东","value":0}

,{"name":"上海","value":25}

,{"name":"江苏","value":1}

,{"name":"四川","value":11}

,{"name":"重庆","value":3}

,{"name":"台湾","value":5}

,{"name":"福建","value":5}

,{"name":"河北","value":12}

,{"name":"陕西","value":10}

,{"name":"广西","value":0}

,{"name":"内蒙古","value":1}

,{"name":"天津","value":2}

,{"name":"山西","value":0}

,{"name":"云南","value":0}

,{"name":"海南","value":0}

,{"name":"甘肃","value":21}

,{"name":"辽宁","value":5}

,{"name":"吉林","value":0}

,{"name":"贵州","value":0}

,{"name":"新疆","value":0}

,{"name":"宁夏","value":0}

,{"name":"澳门","value":0}

,{"name":"青海","value":0}

,{"name":"西藏","value":0}



]

,"death":[{"name":"湖北","value":4512}

,{"name":"香港","value":7}

,{"name":"广东","value":8}

,{"name":"河南","value":22}

,{"name":"浙江","value":1}

,{"name":"湖南","value":4}

,{"name":"安徽","value":6}

,{"name":"黑龙江","value":13}

,{"name":"江西","value":1}

,{"name":"北京","value":9}

,{"name":"山东","value":7}

,{"name":"上海","value":7}

,{"name":"江苏","value":0}

,{"name":"四川","value":3}

,{"name":"重庆","value":6}

,{"name":"台湾","value":7}

,{"name":"福建","value":1}

,{"name":"河北","value":6}

,{"name":"陕西","value":3}

,{"name":"广西","value":2}

,{"name":"内蒙古","value":1}

,{"name":"天津","value":3}

,{"name":"山西","value":0}

,{"name":"云南","value":2}

,{"name":"海南","value":6}

,{"name":"甘肃","value":2}

,{"name":"辽宁","value":2}

,{"name":"吉林","value":2}

,{"name":"贵州","value":2}

,{"name":"新疆","value":3}

,{"name":"宁夏","value":0}

,{"name":"澳门","value":0}

,{"name":"青海","value":0}

,{"name":"西藏","value":0}



]

,"cure":[{"name":"湖北","value":63623}

,{"name":"香港","value":1095}

,{"name":"广东","value":1622}

,{"name":"河南","value":1254}

,{"name":"浙江","value":1267}

,{"name":"湖南","value":1015}

,{"name":"安徽","value":985}

,{"name":"黑龙江","value":934}

,{"name":"江西","value":931}

,{"name":"北京","value":585}

,{"name":"山东","value":785}

,{"name":"上海","value":675}

,{"name":"江苏","value":653}

,{"name":"四川","value":575}

,{"name":"重庆","value":573}

,{"name":"台湾","value":435}

,{"name":"福建","value":357}

,{"name":"河北","value":331}

,{"name":"陕西","value":307}

,{"name":"广西","value":252}

,{"name":"内蒙古","value":236}

,{"name":"天津","value":193}

,{"name":"山西","value":200}

,{"name":"云南","value":183}

,{"name":"海南","value":165}

,{"name":"甘肃","value":140}

,{"name":"辽宁","value":147}

,{"name":"吉林","value":153}

,{"name":"贵州","value":145}

,{"name":"新疆","value":73}

,{"name":"宁夏","value":75}

,{"name":"澳门","value":46}

,{"name":"青海","value":18}

,{"name":"西藏","value":1}



]

},

{

"time":"2020-06-28"



,"newconfirm":[{"name":"湖北","value":0}

,{"name":"香港","value":2}

,{"name":"广东","value":0}

,{"name":"河南","value":0}

,{"name":"浙江","value":0}

,{"name":"湖南","value":0}

,{"name":"安徽","value":0}

,{"name":"黑龙江","value":0}

,{"name":"江西","value":0}

,{"name":"北京","value":7}

,{"name":"山东","value":0}

,{"name":"上海","value":1}

,{"name":"江苏","value":0}

,{"name":"四川","value":3}

,{"name":"重庆","value":0}

,{"name":"台湾","value":0}

,{"name":"福建","value":0}

,{"name":"河北","value":0}

,{"name":"陕西","value":0}

,{"name":"广西","value":0}

,{"name":"内蒙古","value":0}

,{"name":"天津","value":0}

,{"name":"山西","value":0}

,{"name":"云南","value":0}

,{"name":"海南","value":0}

,{"name":"甘肃","value":1}

,{"name":"辽宁","value":1}

,{"name":"吉林","value":0}

,{"name":"贵州","value":0}

,{"name":"新疆","value":0}

,{"name":"宁夏","value":0}

,{"name":"澳门","value":0}

,{"name":"青海","value":0}

,{"name":"西藏","value":0}



]

,"confirm":[{"name":"湖北","value":68135}

,{"name":"香港","value":1199}

,{"name":"广东","value":1637}

,{"name":"河南","value":1276}

,{"name":"浙江","value":1269}

,{"name":"湖南","value":1019}

,{"name":"安徽","value":991}

,{"name":"黑龙江","value":947}

,{"name":"江西","value":932}

,{"name":"北京","value":912}

,{"name":"山东","value":792}

,{"name":"上海","value":708}

,{"name":"江苏","value":654}

,{"name":"四川","value":592}

,{"name":"重庆","value":582}

,{"name":"台湾","value":447}

,{"name":"福建","value":363}

,{"name":"河北","value":349}

,{"name":"陕西","value":320}

,{"name":"广西","value":254}

,{"name":"内蒙古","value":238}

,{"name":"天津","value":198}

,{"name":"山西","value":200}

,{"name":"云南","value":185}

,{"name":"海南","value":171}

,{"name":"甘肃","value":164}

,{"name":"辽宁","value":155}

,{"name":"吉林","value":155}

,{"name":"贵州","value":147}

,{"name":"新疆","value":76}

,{"name":"宁夏","value":75}

,{"name":"澳门","value":46}

,{"name":"青海","value":18}

,{"name":"西藏","value":1}



]

,"curconfirm":[{"name":"湖北","value":0}

,{"name":"香港","value":88}

,{"name":"广东","value":4}

,{"name":"河南","value":0}

,{"name":"浙江","value":1}

,{"name":"湖南","value":0}

,{"name":"安徽","value":0}

,{"name":"黑龙江","value":0}

,{"name":"江西","value":0}

,{"name":"北京","value":318}

,{"name":"山东","value":0}

,{"name":"上海","value":26}

,{"name":"江苏","value":1}

,{"name":"四川","value":12}

,{"name":"重庆","value":3}

,{"name":"台湾","value":5}

,{"name":"福建","value":5}

,{"name":"河北","value":10}

,{"name":"陕西","value":9}

,{"name":"广西","value":0}

,{"name":"内蒙古","value":0}

,{"name":"天津","value":1}

,{"name":"山西","value":0}

,{"name":"云南","value":0}

,{"name":"海南","value":0}

,{"name":"甘肃","value":22}

,{"name":"辽宁","value":6}

,{"name":"吉林","value":0}

,{"name":"贵州","value":0}

,{"name":"新疆","value":0}

,{"name":"宁夏","value":0}

,{"name":"澳门","value":0}

,{"name":"青海","value":0}

,{"name":"西藏","value":0}



]

,"death":[{"name":"湖北","value":4512}

,{"name":"香港","value":7}

,{"name":"广东","value":8}

,{"name":"河南","value":22}

,{"name":"浙江","value":1}

,{"name":"湖南","value":4}

,{"name":"安徽","value":6}

,{"name":"黑龙江","value":13}

,{"name":"江西","value":1}

,{"name":"北京","value":9}

,{"name":"山东","value":7}

,{"name":"上海","value":7}

,{"name":"江苏","value":0}

,{"name":"四川","value":3}

,{"name":"重庆","value":6}

,{"name":"台湾","value":7}

,{"name":"福建","value":1}

,{"name":"河北","value":6}

,{"name":"陕西","value":3}

,{"name":"广西","value":2}

,{"name":"内蒙古","value":1}

,{"name":"天津","value":3}

,{"name":"山西","value":0}

,{"name":"云南","value":2}

,{"name":"海南","value":6}

,{"name":"甘肃","value":2}

,{"name":"辽宁","value":2}

,{"name":"吉林","value":2}

,{"name":"贵州","value":2}

,{"name":"新疆","value":3}

,{"name":"宁夏","value":0}

,{"name":"澳门","value":0}

,{"name":"青海","value":0}

,{"name":"西藏","value":0}



]

,"cure":[{"name":"湖北","value":63623}

,{"name":"香港","value":1104}

,{"name":"广东","value":1625}

,{"name":"河南","value":1254}

,{"name":"浙江","value":1267}

,{"name":"湖南","value":1015}

,{"name":"安徽","value":985}

,{"name":"黑龙江","value":934}

,{"name":"江西","value":931}

,{"name":"北京","value":585}

,{"name":"山东","value":785}

,{"name":"上海","value":675}

,{"name":"江苏","value":653}

,{"name":"四川","value":577}

,{"name":"重庆","value":573}

,{"name":"台湾","value":435}

,{"name":"福建","value":357}

,{"name":"河北","value":333}

,{"name":"陕西","value":308}

,{"name":"广西","value":252}

,{"name":"内蒙古","value":237}

,{"name":"天津","value":194}

,{"name":"山西","value":200}

,{"name":"云南","value":183}

,{"name":"海南","value":165}

,{"name":"甘肃","value":140}

,{"name":"辽宁","value":147}

,{"name":"吉林","value":153}

,{"name":"贵州","value":145}

,{"name":"新疆","value":73}

,{"name":"宁夏","value":75}

,{"name":"澳门","value":46}

,{"name":"青海","value":18}

,{"name":"西藏","value":1}



]

},

{

"time":"2020-06-29"



,"newconfirm":[{"name":"湖北","value":0}

,{"name":"香港","value":4}

,{"name":"广东","value":4}

,{"name":"河南","value":0}

,{"name":"浙江","value":0}

,{"name":"湖南","value":0}

,{"name":"安徽","value":0}

,{"name":"黑龙江","value":0}

,{"name":"江西","value":0}

,{"name":"北京","value":7}

,{"name":"山东","value":0}

,{"name":"上海","value":4}

,{"name":"江苏","value":0}

,{"name":"四川","value":3}

,{"name":"重庆","value":0}

,{"name":"台湾","value":0}

,{"name":"福建","value":0}

,{"name":"河北","value":0}

,{"name":"陕西","value":0}

,{"name":"广西","value":0}

,{"name":"内蒙古","value":0}

,{"name":"天津","value":0}

,{"name":"山西","value":0}

,{"name":"云南","value":0}

,{"name":"海南","value":0}

,{"name":"甘肃","value":0}

,{"name":"辽宁","value":0}

,{"name":"吉林","value":0}

,{"name":"贵州","value":0}

,{"name":"新疆","value":0}

,{"name":"宁夏","value":0}

,{"name":"澳门","value":0}

,{"name":"青海","value":0}

,{"name":"西藏","value":0}



]

,"confirm":[{"name":"湖北","value":68135}

,{"name":"香港","value":1203}

,{"name":"广东","value":1641}

,{"name":"河南","value":1276}

,{"name":"浙江","value":1269}

,{"name":"湖南","value":1019}

,{"name":"安徽","value":991}

,{"name":"黑龙江","value":947}

,{"name":"江西","value":932}

,{"name":"北京","value":919}

,{"name":"山东","value":792}

,{"name":"上海","value":712}

,{"name":"江苏","value":654}

,{"name":"四川","value":595}

,{"name":"重庆","value":582}

,{"name":"台湾","value":447}

,{"name":"福建","value":363}

,{"name":"河北","value":349}

,{"name":"陕西","value":320}

,{"name":"广西","value":254}

,{"name":"内蒙古","value":238}

,{"name":"天津","value":198}

,{"name":"山西","value":200}

,{"name":"云南","value":185}

,{"name":"海南","value":171}

,{"name":"甘肃","value":164}

,{"name":"辽宁","value":155}

,{"name":"吉林","value":155}

,{"name":"贵州","value":147}

,{"name":"新疆","value":76}

,{"name":"宁夏","value":75}

,{"name":"澳门","value":46}

,{"name":"青海","value":18}

,{"name":"西藏","value":1}



]

,"curconfirm":[{"name":"湖北","value":0}

,{"name":"香港","value":91}

,{"name":"广东","value":6}

,{"name":"河南","value":0}

,{"name":"浙江","value":1}

,{"name":"湖南","value":0}

,{"name":"安徽","value":0}

,{"name":"黑龙江","value":0}

,{"name":"江西","value":0}

,{"name":"北京","value":324}

,{"name":"山东","value":0}

,{"name":"上海","value":30}

,{"name":"江苏","value":1}

,{"name":"四川","value":14}

,{"name":"重庆","value":3}

,{"name":"台湾","value":5}

,{"name":"福建","value":5}

,{"name":"河北","value":9}

,{"name":"陕西","value":8}

,{"name":"广西","value":0}

,{"name":"内蒙古","value":0}

,{"name":"天津","value":1}

,{"name":"山西","value":0}

,{"name":"云南","value":0}

,{"name":"海南","value":0}

,{"name":"甘肃","value":19}

,{"name":"辽宁","value":6}

,{"name":"吉林","value":0}

,{"name":"贵州","value":0}

,{"name":"新疆","value":0}

,{"name":"宁夏","value":0}

,{"name":"澳门","value":0}

,{"name":"青海","value":0}

,{"name":"西藏","value":0}



]

,"death":[{"name":"湖北","value":4512}

,{"name":"香港","value":7}

,{"name":"广东","value":8}

,{"name":"河南","value":22}

,{"name":"浙江","value":1}

,{"name":"湖南","value":4}

,{"name":"安徽","value":6}

,{"name":"黑龙江","value":13}

,{"name":"江西","value":1}

,{"name":"北京","value":9}

,{"name":"山东","value":7}

,{"name":"上海","value":7}

,{"name":"江苏","value":0}

,{"name":"四川","value":3}

,{"name":"重庆","value":6}

,{"name":"台湾","value":7}

,{"name":"福建","value":1}

,{"name":"河北","value":6}

,{"name":"陕西","value":3}

,{"name":"广西","value":2}

,{"name":"内蒙古","value":1}

,{"name":"天津","value":3}

,{"name":"山西","value":0}

,{"name":"云南","value":2}

,{"name":"海南","value":6}

,{"name":"甘肃","value":2}

,{"name":"辽宁","value":2}

,{"name":"吉林","value":2}

,{"name":"贵州","value":2}

,{"name":"新疆","value":3}

,{"name":"宁夏","value":0}

,{"name":"澳门","value":0}

,{"name":"青海","value":0}

,{"name":"西藏","value":0}



]

,"cure":[{"name":"湖北","value":63623}

,{"name":"香港","value":1105}

,{"name":"广东","value":1627}

,{"name":"河南","value":1254}

,{"name":"浙江","value":1267}

,{"name":"湖南","value":1015}

,{"name":"安徽","value":985}

,{"name":"黑龙江","value":934}

,{"name":"江西","value":931}

,{"name":"北京","value":586}

,{"name":"山东","value":785}

,{"name":"上海","value":675}

,{"name":"江苏","value":653}

,{"name":"四川","value":578}

,{"name":"重庆","value":573}

,{"name":"台湾","value":435}

,{"name":"福建","value":357}

,{"name":"河北","value":334}

,{"name":"陕西","value":309}

,{"name":"广西","value":252}

,{"name":"内蒙古","value":237}

,{"name":"天津","value":194}

,{"name":"山西","value":200}

,{"name":"云南","value":183}

,{"name":"海南","value":165}

,{"name":"甘肃","value":143}

,{"name":"辽宁","value":147}

,{"name":"吉林","value":153}

,{"name":"贵州","value":145}

,{"name":"新疆","value":73}

,{"name":"宁夏","value":75}

,{"name":"澳门","value":46}

,{"name":"青海","value":18}

,{"name":"西藏","value":1}



]

},

{

"time":"2020-06-30"



,"newconfirm":[{"name":"湖北","value":0}

,{"name":"香港","value":30}

,{"name":"广东","value":0}

,{"name":"河南","value":0}

,{"name":"浙江","value":0}

,{"name":"湖南","value":0}

,{"name":"安徽","value":0}

,{"name":"黑龙江","value":0}

,{"name":"江西","value":0}

,{"name":"北京","value":3}

,{"name":"山东","value":0}

,{"name":"上海","value":0}

,{"name":"江苏","value":0}

,{"name":"四川","value":0}

,{"name":"重庆","value":0}

,{"name":"台湾","value":0}

,{"name":"福建","value":0}

,{"name":"河北","value":0}

,{"name":"陕西","value":0}

,{"name":"广西","value":0}

,{"name":"内蒙古","value":0}

,{"name":"天津","value":0}

,{"name":"山西","value":0}

,{"name":"云南","value":0}

,{"name":"海南","value":0}

,{"name":"甘肃","value":0}

,{"name":"辽宁","value":0}

,{"name":"吉林","value":0}

,{"name":"贵州","value":0}

,{"name":"新疆","value":0}

,{"name":"宁夏","value":0}

,{"name":"澳门","value":0}

,{"name":"青海","value":0}

,{"name":"西藏","value":0}



]

,"confirm":[{"name":"湖北","value":68135}

,{"name":"香港","value":1233}

,{"name":"广东","value":1641}

,{"name":"河南","value":1276}

,{"name":"浙江","value":1269}

,{"name":"湖南","value":1019}

,{"name":"安徽","value":991}

,{"name":"黑龙江","value":947}

,{"name":"江西","value":932}

,{"name":"北京","value":922}

,{"name":"山东","value":792}

,{"name":"上海","value":712}

,{"name":"江苏","value":654}

,{"name":"四川","value":595}

,{"name":"重庆","value":582}

,{"name":"台湾","value":447}

,{"name":"福建","value":363}

,{"name":"河北","value":349}

,{"name":"陕西","value":320}

,{"name":"广西","value":254}

,{"name":"内蒙古","value":238}

,{"name":"天津","value":198}

,{"name":"山西","value":200}

,{"name":"云南","value":185}

,{"name":"海南","value":171}

,{"name":"甘肃","value":164}

,{"name":"辽宁","value":155}

,{"name":"吉林","value":155}

,{"name":"贵州","value":147}

,{"name":"新疆","value":76}

,{"name":"宁夏","value":75}

,{"name":"澳门","value":46}

,{"name":"青海","value":18}

,{"name":"西藏","value":1}



]

,"curconfirm":[{"name":"湖北","value":0}

,{"name":"香港","value":119}

,{"name":"广东","value":6}

,{"name":"河南","value":0}

,{"name":"浙江","value":1}

,{"name":"湖南","value":0}

,{"name":"安徽","value":0}

,{"name":"黑龙江","value":0}

,{"name":"江西","value":0}

,{"name":"北京","value":326}

,{"name":"山东","value":0}

,{"name":"上海","value":30}

,{"name":"江苏","value":1}

,{"name":"四川","value":12}

,{"name":"重庆","value":3}

,{"name":"台湾","value":5}

,{"name":"福建","value":3}

,{"name":"河北","value":9}

,{"name":"陕西","value":7}

,{"name":"广西","value":0}

,{"name":"内蒙古","value":0}

,{"name":"天津","value":1}

,{"name":"山西","value":0}

,{"name":"云南","value":0}

,{"name":"海南","value":0}

,{"name":"甘肃","value":16}

,{"name":"辽宁","value":5}

,{"name":"吉林","value":0}

,{"name":"贵州","value":0}

,{"name":"新疆","value":0}

,{"name":"宁夏","value":0}

,{"name":"澳门","value":0}

,{"name":"青海","value":0}

,{"name":"西藏","value":0}



]

,"death":[{"name":"湖北","value":4512}

,{"name":"香港","value":7}

,{"name":"广东","value":8}

,{"name":"河南","value":22}

,{"name":"浙江","value":1}

,{"name":"湖南","value":4}

,{"name":"安徽","value":6}

,{"name":"黑龙江","value":13}

,{"name":"江西","value":1}

,{"name":"北京","value":9}

,{"name":"山东","value":7}

,{"name":"上海","value":7}

,{"name":"江苏","value":0}

,{"name":"四川","value":3}

,{"name":"重庆","value":6}

,{"name":"台湾","value":7}

,{"name":"福建","value":1}

,{"name":"河北","value":6}

,{"name":"陕西","value":3}

,{"name":"广西","value":2}

,{"name":"内蒙古","value":1}

,{"name":"天津","value":3}

,{"name":"山西","value":0}

,{"name":"云南","value":2}

,{"name":"海南","value":6}

,{"name":"甘肃","value":2}

,{"name":"辽宁","value":2}

,{"name":"吉林","value":2}

,{"name":"贵州","value":2}

,{"name":"新疆","value":3}

,{"name":"宁夏","value":0}

,{"name":"澳门","value":0}

,{"name":"青海","value":0}

,{"name":"西藏","value":0}



]

,"cure":[{"name":"湖北","value":63623}

,{"name":"香港","value":1107}

,{"name":"广东","value":1627}

,{"name":"河南","value":1254}

,{"name":"浙江","value":1267}

,{"name":"湖南","value":1015}

,{"name":"安徽","value":985}

,{"name":"黑龙江","value":934}

,{"name":"江西","value":931}

,{"name":"北京","value":587}

,{"name":"山东","value":785}

,{"name":"上海","value":675}

,{"name":"江苏","value":653}

,{"name":"四川","value":580}

,{"name":"重庆","value":573}

,{"name":"台湾","value":435}

,{"name":"福建","value":359}

,{"name":"河北","value":334}

,{"name":"陕西","value":310}

,{"name":"广西","value":252}

,{"name":"内蒙古","value":237}

,{"name":"天津","value":194}

,{"name":"山西","value":200}

,{"name":"云南","value":183}

,{"name":"海南","value":165}

,{"name":"甘肃","value":146}

,{"name":"辽宁","value":148}

,{"name":"吉林","value":153}

,{"name":"贵州","value":145}

,{"name":"新疆","value":73}

,{"name":"宁夏","value":75}

,{"name":"澳门","value":46}

,{"name":"青海","value":18}

,{"name":"西藏","value":1}



]

},

{

"time":"2020-07-01"



,"newconfirm":[{"name":"湖北","value":0}

,{"name":"香港","value":9}

,{"name":"广东","value":1}

,{"name":"河南","value":0}

,{"name":"浙江","value":0}

,{"name":"湖南","value":0}

,{"name":"安徽","value":0}

,{"name":"黑龙江","value":0}

,{"name":"江西","value":0}

,{"name":"北京","value":1}

,{"name":"山东","value":0}

,{"name":"上海","value":1}

,{"name":"江苏","value":0}

,{"name":"四川","value":0}

,{"name":"重庆","value":0}

,{"name":"台湾","value":1}

,{"name":"福建","value":0}

,{"name":"河北","value":0}

,{"name":"陕西","value":0}

,{"name":"广西","value":0}

,{"name":"内蒙古","value":0}

,{"name":"天津","value":0}

,{"name":"山西","value":0}

,{"name":"云南","value":0}

,{"name":"海南","value":0}

,{"name":"甘肃","value":0}

,{"name":"辽宁","value":0}

,{"name":"吉林","value":0}

,{"name":"贵州","value":0}

,{"name":"新疆","value":0}

,{"name":"宁夏","value":0}

,{"name":"澳门","value":0}

,{"name":"青海","value":0}

,{"name":"西藏","value":0}



]

,"confirm":[{"name":"湖北","value":68135}

,{"name":"香港","value":1242}

,{"name":"广东","value":1642}

,{"name":"河南","value":1276}

,{"name":"浙江","value":1269}

,{"name":"湖南","value":1019}

,{"name":"安徽","value":991}

,{"name":"黑龙江","value":947}

,{"name":"江西","value":932}

,{"name":"北京","value":923}

,{"name":"山东","value":792}

,{"name":"上海","value":713}

,{"name":"江苏","value":654}

,{"name":"四川","value":595}

,{"name":"重庆","value":582}

,{"name":"台湾","value":448}

,{"name":"福建","value":363}

,{"name":"河北","value":349}

,{"name":"陕西","value":320}

,{"name":"广西","value":254}

,{"name":"内蒙古","value":238}

,{"name":"天津","value":198}

,{"name":"山西","value":200}

,{"name":"云南","value":185}

,{"name":"海南","value":171}

,{"name":"甘肃","value":164}

,{"name":"辽宁","value":155}

,{"name":"吉林","value":155}

,{"name":"贵州","value":147}

,{"name":"新疆","value":76}

,{"name":"宁夏","value":75}

,{"name":"澳门","value":46}

,{"name":"青海","value":18}

,{"name":"西藏","value":1}



]

,"curconfirm":[{"name":"湖北","value":0}

,{"name":"香港","value":118}

,{"name":"广东","value":7}

,{"name":"河南","value":0}

,{"name":"浙江","value":1}

,{"name":"湖南","value":0}

,{"name":"安徽","value":0}

,{"name":"黑龙江","value":0}

,{"name":"江西","value":0}

,{"name":"北京","value":327}

,{"name":"山东","value":0}

,{"name":"上海","value":29}

,{"name":"江苏","value":1}

,{"name":"四川","value":12}

,{"name":"重庆","value":3}

,{"name":"台湾","value":3}

,{"name":"福建","value":3}

,{"name":"河北","value":9}

,{"name":"陕西","value":7}

,{"name":"广西","value":0}

,{"name":"内蒙古","value":0}

,{"name":"天津","value":1}

,{"name":"山西","value":0}

,{"name":"云南","value":0}

,{"name":"海南","value":0}

,{"name":"甘肃","value":13}

,{"name":"辽宁","value":5}

,{"name":"吉林","value":0}

,{"name":"贵州","value":0}

,{"name":"新疆","value":0}

,{"name":"宁夏","value":0}

,{"name":"澳门","value":0}

,{"name":"青海","value":0}

,{"name":"西藏","value":0}



]

,"death":[{"name":"湖北","value":4512}

,{"name":"香港","value":7}

,{"name":"广东","value":8}

,{"name":"河南","value":22}

,{"name":"浙江","value":1}

,{"name":"湖南","value":4}

,{"name":"安徽","value":6}

,{"name":"黑龙江","value":13}

,{"name":"江西","value":1}

,{"name":"北京","value":9}

,{"name":"山东","value":7}

,{"name":"上海","value":7}

,{"name":"江苏","value":0}

,{"name":"四川","value":3}

,{"name":"重庆","value":6}

,{"name":"台湾","value":7}

,{"name":"福建","value":1}

,{"name":"河北","value":6}

,{"name":"陕西","value":3}

,{"name":"广西","value":2}

,{"name":"内蒙古","value":1}

,{"name":"天津","value":3}

,{"name":"山西","value":0}

,{"name":"云南","value":2}

,{"name":"海南","value":6}

,{"name":"甘肃","value":2}

,{"name":"辽宁","value":2}

,{"name":"吉林","value":2}

,{"name":"贵州","value":2}

,{"name":"新疆","value":3}

,{"name":"宁夏","value":0}

,{"name":"澳门","value":0}

,{"name":"青海","value":0}

,{"name":"西藏","value":0}



]

,"cure":[{"name":"湖北","value":63623}

,{"name":"香港","value":1117}

,{"name":"广东","value":1627}

,{"name":"河南","value":1254}

,{"name":"浙江","value":1267}

,{"name":"湖南","value":1015}

,{"name":"安徽","value":985}

,{"name":"黑龙江","value":934}

,{"name":"江西","value":931}

,{"name":"北京","value":587}

,{"name":"山东","value":785}

,{"name":"上海","value":677}

,{"name":"江苏","value":653}

,{"name":"四川","value":580}

,{"name":"重庆","value":573}

,{"name":"台湾","value":438}

,{"name":"福建","value":359}

,{"name":"河北","value":334}

,{"name":"陕西","value":310}

,{"name":"广西","value":252}

,{"name":"内蒙古","value":237}

,{"name":"天津","value":194}

,{"name":"山西","value":200}

,{"name":"云南","value":183}

,{"name":"海南","value":165}

,{"name":"甘肃","value":149}

,{"name":"辽宁","value":148}

,{"name":"吉林","value":153}

,{"name":"贵州","value":145}

,{"name":"新疆","value":73}

,{"name":"宁夏","value":75}

,{"name":"澳门","value":46}

,{"name":"青海","value":18}

,{"name":"西藏","value":1}



]

},

{

"time":"2020-07-02"



,"newconfirm":[{"name":"湖北","value":0}

,{"name":"香港","value":5}

,{"name":"广东","value":0}

,{"name":"河南","value":0}

,{"name":"浙江","value":0}

,{"name":"湖南","value":0}

,{"name":"安徽","value":0}

,{"name":"黑龙江","value":0}

,{"name":"江西","value":0}

,{"name":"北京","value":2}

,{"name":"山东","value":0}

,{"name":"上海","value":1}

,{"name":"江苏","value":0}

,{"name":"四川","value":0}

,{"name":"重庆","value":0}

,{"name":"台湾","value":1}

,{"name":"福建","value":0}

,{"name":"河北","value":0}

,{"name":"陕西","value":0}

,{"name":"广西","value":0}

,{"name":"内蒙古","value":0}

,{"name":"天津","value":0}

,{"name":"山西","value":0}

,{"name":"云南","value":1}

,{"name":"海南","value":0}

,{"name":"甘肃","value":0}

,{"name":"辽宁","value":1}

,{"name":"吉林","value":0}

,{"name":"贵州","value":0}

,{"name":"新疆","value":0}

,{"name":"宁夏","value":0}

,{"name":"澳门","value":0}

,{"name":"青海","value":0}

,{"name":"西藏","value":0}



]

,"confirm":[{"name":"湖北","value":68135}

,{"name":"香港","value":1247}

,{"name":"广东","value":1642}

,{"name":"河南","value":1276}

,{"name":"浙江","value":1269}

,{"name":"湖南","value":1019}

,{"name":"安徽","value":991}

,{"name":"黑龙江","value":947}

,{"name":"江西","value":932}

,{"name":"北京","value":925}

,{"name":"山东","value":792}

,{"name":"上海","value":714}

,{"name":"江苏","value":654}

,{"name":"四川","value":595}

,{"name":"重庆","value":582}

,{"name":"台湾","value":449}

,{"name":"福建","value":363}

,{"name":"河北","value":349}

,{"name":"陕西","value":320}

,{"name":"广西","value":254}

,{"name":"内蒙古","value":238}

,{"name":"天津","value":198}

,{"name":"山西","value":200}

,{"name":"云南","value":186}

,{"name":"海南","value":171}

,{"name":"甘肃","value":164}

,{"name":"辽宁","value":156}

,{"name":"吉林","value":155}

,{"name":"贵州","value":147}

,{"name":"新疆","value":76}

,{"name":"宁夏","value":75}

,{"name":"澳门","value":46}

,{"name":"青海","value":18}

,{"name":"西藏","value":1}



]

,"curconfirm":[{"name":"湖北","value":0}

,{"name":"香港","value":120}

,{"name":"广东","value":5}

,{"name":"河南","value":0}

,{"name":"浙江","value":1}

,{"name":"湖南","value":0}

,{"name":"安徽","value":0}

,{"name":"黑龙江","value":0}

,{"name":"江西","value":0}

,{"name":"北京","value":326}

,{"name":"山东","value":0}

,{"name":"上海","value":29}

,{"name":"江苏","value":1}

,{"name":"四川","value":11}

,{"name":"重庆","value":2}

,{"name":"台湾","value":4}

,{"name":"福建","value":3}

,{"name":"河北","value":9}

,{"name":"陕西","value":7}

,{"name":"广西","value":0}

,{"name":"内蒙古","value":0}

,{"name":"天津","value":1}

,{"name":"山西","value":0}

,{"name":"云南","value":1}

,{"name":"海南","value":0}

,{"name":"甘肃","value":9}

,{"name":"辽宁","value":6}

,{"name":"吉林","value":0}

,{"name":"贵州","value":0}

,{"name":"新疆","value":0}

,{"name":"宁夏","value":0}

,{"name":"澳门","value":0}

,{"name":"青海","value":0}

,{"name":"西藏","value":0}



]

,"death":[{"name":"湖北","value":4512}

,{"name":"香港","value":7}

,{"name":"广东","value":8}

,{"name":"河南","value":22}

,{"name":"浙江","value":1}

,{"name":"湖南","value":4}

,{"name":"安徽","value":6}

,{"name":"黑龙江","value":13}

,{"name":"江西","value":1}

,{"name":"北京","value":9}

,{"name":"山东","value":7}

,{"name":"上海","value":7}

,{"name":"江苏","value":0}

,{"name":"四川","value":3}

,{"name":"重庆","value":6}

,{"name":"台湾","value":7}

,{"name":"福建","value":1}

,{"name":"河北","value":6}

,{"name":"陕西","value":3}

,{"name":"广西","value":2}

,{"name":"内蒙古","value":1}

,{"name":"天津","value":3}

,{"name":"山西","value":0}

,{"name":"云南","value":2}

,{"name":"海南","value":6}

,{"name":"甘肃","value":2}

,{"name":"辽宁","value":2}

,{"name":"吉林","value":2}

,{"name":"贵州","value":2}

,{"name":"新疆","value":3}

,{"name":"宁夏","value":0}

,{"name":"澳门","value":0}

,{"name":"青海","value":0}

,{"name":"西藏","value":0}



]

,"cure":[{"name":"湖北","value":63623}

,{"name":"香港","value":1120}

,{"name":"广东","value":1629}

,{"name":"河南","value":1254}

,{"name":"浙江","value":1267}

,{"name":"湖南","value":1015}

,{"name":"安徽","value":985}

,{"name":"黑龙江","value":934}

,{"name":"江西","value":931}

,{"name":"北京","value":590}

,{"name":"山东","value":785}

,{"name":"上海","value":678}

,{"name":"江苏","value":653}

,{"name":"四川","value":581}

,{"name":"重庆","value":574}

,{"name":"台湾","value":438}

,{"name":"福建","value":359}

,{"name":"河北","value":334}

,{"name":"陕西","value":310}

,{"name":"广西","value":252}

,{"name":"内蒙古","value":237}

,{"name":"天津","value":194}

,{"name":"山西","value":200}

,{"name":"云南","value":183}

,{"name":"海南","value":165}

,{"name":"甘肃","value":153}

,{"name":"辽宁","value":148}

,{"name":"吉林","value":153}

,{"name":"贵州","value":145}

,{"name":"新疆","value":73}

,{"name":"宁夏","value":75}

,{"name":"澳门","value":46}

,{"name":"青海","value":18}

,{"name":"西藏","value":1}



]

},

{

"time":"2020-07-03"



,"newconfirm":[{"name":"湖北","value":0}

,{"name":"香港","value":11}

,{"name":"广东","value":1}

,{"name":"河南","value":0}

,{"name":"浙江","value":0}

,{"name":"湖南","value":0}

,{"name":"安徽","value":0}

,{"name":"黑龙江","value":0}

,{"name":"江西","value":0}

,{"name":"北京","value":1}

,{"name":"山东","value":0}

,{"name":"上海","value":1}

,{"name":"江苏","value":0}

,{"name":"四川","value":0}

,{"name":"重庆","value":0}

,{"name":"台湾","value":0}

,{"name":"福建","value":0}

,{"name":"河北","value":0}

,{"name":"陕西","value":0}

,{"name":"广西","value":0}

,{"name":"内蒙古","value":0}

,{"name":"天津","value":1}

,{"name":"山西","value":0}

,{"name":"云南","value":0}

,{"name":"海南","value":0}

,{"name":"甘肃","value":0}

,{"name":"辽宁","value":0}

,{"name":"吉林","value":0}

,{"name":"贵州","value":0}

,{"name":"新疆","value":0}

,{"name":"宁夏","value":0}

,{"name":"澳门","value":0}

,{"name":"青海","value":0}

,{"name":"西藏","value":0}



]

,"confirm":[{"name":"湖北","value":68135}

,{"name":"香港","value":1258}

,{"name":"广东","value":1643}

,{"name":"河南","value":1276}

,{"name":"浙江","value":1269}

,{"name":"湖南","value":1019}

,{"name":"安徽","value":991}

,{"name":"黑龙江","value":947}

,{"name":"江西","value":932}

,{"name":"北京","value":926}

,{"name":"山东","value":792}

,{"name":"上海","value":715}

,{"name":"江苏","value":654}

,{"name":"四川","value":595}

,{"name":"重庆","value":582}

,{"name":"台湾","value":449}

,{"name":"福建","value":363}

,{"name":"河北","value":349}

,{"name":"陕西","value":320}

,{"name":"广西","value":254}

,{"name":"内蒙古","value":238}

,{"name":"天津","value":199}

,{"name":"山西","value":200}

,{"name":"云南","value":186}

,{"name":"海南","value":171}

,{"name":"甘肃","value":164}

,{"name":"辽宁","value":156}

,{"name":"吉林","value":155}

,{"name":"贵州","value":147}

,{"name":"新疆","value":76}

,{"name":"宁夏","value":75}

,{"name":"澳门","value":46}

,{"name":"青海","value":18}

,{"name":"西藏","value":1}



]

,"curconfirm":[{"name":"湖北","value":0}

,{"name":"香港","value":126}

,{"name":"广东","value":6}

,{"name":"河南","value":0}

,{"name":"浙江","value":1}

,{"name":"湖南","value":0}

,{"name":"安徽","value":0}

,{"name":"黑龙江","value":0}

,{"name":"江西","value":0}

,{"name":"北京","value":325}

,{"name":"山东","value":0}

,{"name":"上海","value":27}


,{"name":"江苏","value":1}

,{"name":"四川","value":11}

,{"name":"重庆","value":2}

,{"name":"台湾","value":4}

,{"name":"福建","value":2}

,{"name":"河北","value":7}

,{"name":"陕西","value":6}

,{"name":"广西","value":0}

,{"name":"内蒙古","value":0}

,{"name":"天津","value":2}

,{"name":"山西","value":0}

,{"name":"云南","value":1}

,{"name":"海南","value":0}

,{"name":"甘肃","value":8}

,{"name":"辽宁","value":5}

,{"name":"吉林","value":0}

,{"name":"贵州","value":0}

,{"name":"新疆","value":0}

,{"name":"宁夏","value":0}

,{"name":"澳门","value":0}

,{"name":"青海","value":0}

,{"name":"西藏","value":0}



]

,"death":[{"name":"湖北","value":4512}

,{"name":"香港","value":7}

,{"name":"广东","value":8}

,{"name":"河南","value":22}

,{"name":"浙江","value":1}

,{"name":"湖南","value":4}

,{"name":"安徽","value":6}

,{"name":"黑龙江","value":13}

,{"name":"江西","value":1}

,{"name":"北京","value":9}

,{"name":"山东","value":7}

,{"name":"上海","value":7}

,{"name":"江苏","value":0}

,{"name":"四川","value":3}

,{"name":"重庆","value":6}

,{"name":"台湾","value":7}

,{"name":"福建","value":1}

,{"name":"河北","value":6}

,{"name":"陕西","value":3}

,{"name":"广西","value":2}

,{"name":"内蒙古","value":1}

,{"name":"天津","value":3}

,{"name":"山西","value":0}

,{"name":"云南","value":2}

,{"name":"海南","value":6}

,{"name":"甘肃","value":2}

,{"name":"辽宁","value":2}

,{"name":"吉林","value":2}

,{"name":"贵州","value":2}

,{"name":"新疆","value":3}

,{"name":"宁夏","value":0}

,{"name":"澳门","value":0}

,{"name":"青海","value":0}

,{"name":"西藏","value":0}



]

,"cure":[{"name":"湖北","value":63623}

,{"name":"香港","value":1125}

,{"name":"广东","value":1629}

,{"name":"河南","value":1254}

,{"name":"浙江","value":1267}

,{"name":"湖南","value":1015}

,{"name":"安徽","value":985}

,{"name":"黑龙江","value":934}

,{"name":"江西","value":931}

,{"name":"北京","value":592}

,{"name":"山东","value":785}

,{"name":"上海","value":681}

,{"name":"江苏","value":653}

,{"name":"四川","value":581}

,{"name":"重庆","value":574}

,{"name":"台湾","value":438}

,{"name":"福建","value":360}

,{"name":"河北","value":336}

,{"name":"陕西","value":311}

,{"name":"广西","value":252}

,{"name":"内蒙古","value":237}

,{"name":"天津","value":194}

,{"name":"山西","value":200}

,{"name":"云南","value":183}

,{"name":"海南","value":165}

,{"name":"甘肃","value":154}

,{"name":"辽宁","value":149}

,{"name":"吉林","value":153}

,{"name":"贵州","value":145}

,{"name":"新疆","value":73}

,{"name":"宁夏","value":75}

,{"name":"澳门","value":46}

,{"name":"青海","value":18}

,{"name":"西藏","value":1}



]

},

{

"time":"2020-07-04"



,"newconfirm":[{"name":"湖北","value":0}

,{"name":"香港","value":10}

,{"name":"广东","value":0}

,{"name":"河南","value":0}

,{"name":"浙江","value":0}

,{"name":"湖南","value":0}

,{"name":"安徽","value":0}

,{"name":"黑龙江","value":0}

,{"name":"江西","value":0}

,{"name":"北京","value":2}

,{"name":"山东","value":0}

,{"name":"上海","value":1}

,{"name":"江苏","value":0}

,{"name":"四川","value":1}

,{"name":"重庆","value":0}

,{"name":"台湾","value":0}

,{"name":"福建","value":0}

,{"name":"河北","value":0}

,{"name":"陕西","value":0}

,{"name":"广西","value":0}

,{"name":"内蒙古","value":1}

,{"name":"天津","value":0}

,{"name":"山西","value":0}

,{"name":"云南","value":0}

,{"name":"海南","value":0}

,{"name":"甘肃","value":3}

,{"name":"辽宁","value":0}

,{"name":"吉林","value":0}

,{"name":"贵州","value":0}

,{"name":"新疆","value":0}

,{"name":"宁夏","value":0}

,{"name":"澳门","value":0}

,{"name":"青海","value":0}

,{"name":"西藏","value":0}



]

,"confirm":[{"name":"湖北","value":68135}

,{"name":"香港","value":1268}

,{"name":"广东","value":1643}

,{"name":"河南","value":1276}

,{"name":"浙江","value":1269}

,{"name":"湖南","value":1019}

,{"name":"安徽","value":991}

,{"name":"黑龙江","value":947}

,{"name":"江西","value":932}

,{"name":"北京","value":928}

,{"name":"山东","value":792}

,{"name":"上海","value":716}

,{"name":"江苏","value":654}

,{"name":"四川","value":596}

,{"name":"重庆","value":582}

,{"name":"台湾","value":449}

,{"name":"福建","value":363}

,{"name":"河北","value":349}

,{"name":"陕西","value":320}

,{"name":"广西","value":254}

,{"name":"内蒙古","value":239}

,{"name":"天津","value":199}

,{"name":"山西","value":200}

,{"name":"云南","value":186}

,{"name":"海南","value":171}

,{"name":"甘肃","value":167}

,{"name":"辽宁","value":156}

,{"name":"吉林","value":155}

,{"name":"贵州","value":147}

,{"name":"新疆","value":76}

,{"name":"宁夏","value":75}

,{"name":"澳门","value":46}

,{"name":"青海","value":18}

,{"name":"西藏","value":1}



]

,"curconfirm":[{"name":"湖北","value":0}

,{"name":"香港","value":116}

,{"name":"广东","value":4}

,{"name":"河南","value":0}

,{"name":"浙江","value":1}

,{"name":"湖南","value":0}

,{"name":"安徽","value":0}

,{"name":"黑龙江","value":0}

,{"name":"江西","value":0}

,{"name":"北京","value":324}

,{"name":"山东","value":0}

,{"name":"上海","value":28}

,{"name":"江苏","value":1}

,{"name":"四川","value":12}

,{"name":"重庆","value":2}

,{"name":"台湾","value":4}

,{"name":"福建","value":2}

,{"name":"河北","value":6}

,{"name":"陕西","value":4}

,{"name":"广西","value":0}

,{"name":"内蒙古","value":1}

,{"name":"天津","value":2}

,{"name":"山西","value":0}

,{"name":"云南","value":1}

,{"name":"海南","value":0}

,{"name":"甘肃","value":11}

,{"name":"辽宁","value":4}

,{"name":"吉林","value":0}

,{"name":"贵州","value":0}

,{"name":"新疆","value":0}

,{"name":"宁夏","value":0}

,{"name":"澳门","value":0}

,{"name":"青海","value":0}

,{"name":"西藏","value":0}



]

,"death":[{"name":"湖北","value":4512}

,{"name":"香港","value":7}

,{"name":"广东","value":8}

,{"name":"河南","value":22}

,{"name":"浙江","value":1}

,{"name":"湖南","value":4}

,{"name":"安徽","value":6}

,{"name":"黑龙江","value":13}

,{"name":"江西","value":1}

,{"name":"北京","value":9}

,{"name":"山东","value":7}

,{"name":"上海","value":7}

,{"name":"江苏","value":0}

,{"name":"四川","value":3}

,{"name":"重庆","value":6}

,{"name":"台湾","value":7}

,{"name":"福建","value":1}

,{"name":"河北","value":6}

,{"name":"陕西","value":3}

,{"name":"广西","value":2}

,{"name":"内蒙古","value":1}

,{"name":"天津","value":3}

,{"name":"山西","value":0}

,{"name":"云南","value":2}

,{"name":"海南","value":6}

,{"name":"甘肃","value":2}

,{"name":"辽宁","value":2}

,{"name":"吉林","value":2}

,{"name":"贵州","value":2}

,{"name":"新疆","value":3}

,{"name":"宁夏","value":0}

,{"name":"澳门","value":0}

,{"name":"青海","value":0}

,{"name":"西藏","value":0}



]

,"cure":[{"name":"湖北","value":63623}

,{"name":"香港","value":1145}

,{"name":"广东","value":1631}

,{"name":"河南","value":1254}

,{"name":"浙江","value":1267}

,{"name":"湖南","value":1015}

,{"name":"安徽","value":985}

,{"name":"黑龙江","value":934}

,{"name":"江西","value":931}

,{"name":"北京","value":595}

,{"name":"山东","value":785}

,{"name":"上海","value":681}

,{"name":"江苏","value":653}

,{"name":"四川","value":581}

,{"name":"重庆","value":574}

,{"name":"台湾","value":438}

,{"name":"福建","value":360}

,{"name":"河北","value":337}

,{"name":"陕西","value":313}

,{"name":"广西","value":252}

,{"name":"内蒙古","value":237}

,{"name":"天津","value":194}

,{"name":"山西","value":200}

,{"name":"云南","value":183}

,{"name":"海南","value":165}

,{"name":"甘肃","value":154}

,{"name":"辽宁","value":150}

,{"name":"吉林","value":153}

,{"name":"贵州","value":145}

,{"name":"新疆","value":73}

,{"name":"宁夏","value":75}

,{"name":"澳门","value":46}

,{"name":"青海","value":18}

,{"name":"西藏","value":1}



]

},

{

"time":"2020-07-05"



,"newconfirm":[{"name":"湖北","value":0}

,{"name":"香港","value":17}

,{"name":"广东","value":0}

,{"name":"河南","value":0}

,{"name":"浙江","value":0}

,{"name":"湖南","value":0}

,{"name":"安徽","value":0}

,{"name":"黑龙江","value":0}

,{"name":"江西","value":0}

,{"name":"北京","value":1}

,{"name":"山东","value":0}

,{"name":"上海","value":0}

,{"name":"江苏","value":0}

,{"name":"四川","value":0}

,{"name":"重庆","value":0}

,{"name":"台湾","value":0}

,{"name":"福建","value":0}

,{"name":"河北","value":0}

,{"name":"陕西","value":1}

,{"name":"广西","value":0}

,{"name":"内蒙古","value":0}

,{"name":"天津","value":0}

,{"name":"山西","value":0}

,{"name":"云南","value":0}

,{"name":"海南","value":0}

,{"name":"甘肃","value":0}

,{"name":"辽宁","value":1}

,{"name":"吉林","value":0}

,{"name":"贵州","value":0}

,{"name":"新疆","value":0}

,{"name":"宁夏","value":0}

,{"name":"澳门","value":0}

,{"name":"青海","value":0}

,{"name":"西藏","value":0}



]

,"confirm":[{"name":"湖北","value":68135}

,{"name":"香港","value":1285}

,{"name":"广东","value":1643}

,{"name":"河南","value":1276}

,{"name":"浙江","value":1269}

,{"name":"湖南","value":1019}

,{"name":"安徽","value":991}

,{"name":"黑龙江","value":947}

,{"name":"江西","value":932}

,{"name":"北京","value":929}

,{"name":"山东","value":792}

,{"name":"上海","value":716}

,{"name":"江苏","value":654}

,{"name":"四川","value":596}

,{"name":"重庆","value":582}

,{"name":"台湾","value":449}

,{"name":"福建","value":363}

,{"name":"河北","value":349}

,{"name":"陕西","value":321}

,{"name":"广西","value":254}

,{"name":"内蒙古","value":239}

,{"name":"天津","value":199}

,{"name":"山西","value":200}

,{"name":"云南","value":186}

,{"name":"海南","value":171}

,{"name":"甘肃","value":167}

,{"name":"辽宁","value":157}

,{"name":"吉林","value":155}

,{"name":"贵州","value":147}

,{"name":"新疆","value":76}

,{"name":"宁夏","value":75}

,{"name":"澳门","value":46}

,{"name":"青海","value":18}

,{"name":"西藏","value":1}



]

,"curconfirm":[{"name":"湖北","value":0}

,{"name":"香港","value":122}

,{"name":"广东","value":4}

,{"name":"河南","value":0}

,{"name":"浙江","value":1}

,{"name":"湖南","value":0}

,{"name":"安徽","value":0}

,{"name":"黑龙江","value":0}

,{"name":"江西","value":0}

,{"name":"北京","value":324}

,{"name":"山东","value":0}

,{"name":"上海","value":28}

,{"name":"江苏","value":1}

,{"name":"四川","value":12}

,{"name":"重庆","value":2}

,{"name":"台湾","value":4}

,{"name":"福建","value":2}

,{"name":"河北","value":6}

,{"name":"陕西","value":5}

,{"name":"广西","value":0}

,{"name":"内蒙古","value":1}

,{"name":"天津","value":2}

,{"name":"山西","value":0}

,{"name":"云南","value":1}

,{"name":"海南","value":0}

,{"name":"甘肃","value":11}

,{"name":"辽宁","value":5}

,{"name":"吉林","value":0}

,{"name":"贵州","value":0}

,{"name":"新疆","value":0}

,{"name":"宁夏","value":0}

,{"name":"澳门","value":0}

,{"name":"青海","value":0}

,{"name":"西藏","value":0}



]

,"death":[{"name":"湖北","value":4512}

,{"name":"香港","value":7}

,{"name":"广东","value":8}

,{"name":"河南","value":22}

,{"name":"浙江","value":1}

,{"name":"湖南","value":4}

,{"name":"安徽","value":6}

,{"name":"黑龙江","value":13}

,{"name":"江西","value":1}

,{"name":"北京","value":9}

,{"name":"山东","value":7}

,{"name":"上海","value":7}

,{"name":"江苏","value":0}

,{"name":"四川","value":3}

,{"name":"重庆","value":6}

,{"name":"台湾","value":7}

,{"name":"福建","value":1}

,{"name":"河北","value":6}

,{"name":"陕西","value":3}

,{"name":"广西","value":2}

,{"name":"内蒙古","value":1}

,{"name":"天津","value":3}

,{"name":"山西","value":0}

,{"name":"云南","value":2}

,{"name":"海南","value":6}

,{"name":"甘肃","value":2}

,{"name":"辽宁","value":2}

,{"name":"吉林","value":2}

,{"name":"贵州","value":2}

,{"name":"新疆","value":3}

,{"name":"宁夏","value":0}

,{"name":"澳门","value":0}

,{"name":"青海","value":0}

,{"name":"西藏","value":0}



]

,"cure":[{"name":"湖北","value":63623}

,{"name":"香港","value":1156}

,{"name":"广东","value":1631}

,{"name":"河南","value":1254}

,{"name":"浙江","value":1267}

,{"name":"湖南","value":1015}

,{"name":"安徽","value":985}

,{"name":"黑龙江","value":934}

,{"name":"江西","value":931}

,{"name":"北京","value":596}

,{"name":"山东","value":785}

,{"name":"上海","value":681}

,{"name":"江苏","value":653}

,{"name":"四川","value":581}

,{"name":"重庆","value":574}

,{"name":"台湾","value":438}

,{"name":"福建","value":360}

,{"name":"河北","value":337}

,{"name":"陕西","value":313}

,{"name":"广西","value":252}

,{"name":"内蒙古","value":237}

,{"name":"天津","value":194}

,{"name":"山西","value":200}

,{"name":"云南","value":183}

,{"name":"海南","value":165}

,{"name":"甘肃","value":154}

,{"name":"辽宁","value":150}

,{"name":"吉林","value":153}

,{"name":"贵州","value":145}

,{"name":"新疆","value":73}

,{"name":"宁夏","value":75}

,{"name":"澳门","value":46}

,{"name":"青海","value":18}

,{"name":"西藏","value":1}



]

},

{

"time":"2020-07-06"



,"newconfirm":[{"name":"湖北","value":0}

,{"name":"香港","value":14}

,{"name":"广东","value":1}

,{"name":"河南","value":0}

,{"name":"浙江","value":0}

,{"name":"湖南","value":0}

,{"name":"安徽","value":0}

,{"name":"黑龙江","value":0}

,{"name":"江西","value":0}

,{"name":"北京","value":0}

,{"name":"山东","value":0}

,{"name":"上海","value":2}

,{"name":"江苏","value":0}

,{"name":"四川","value":2}

,{"name":"重庆","value":0}

,{"name":"台湾","value":0}

,{"name":"福建","value":0}

,{"name":"河北","value":0}

,{"name":"陕西","value":0}

,{"name":"广西","value":0}

,{"name":"内蒙古","value":1}

,{"name":"天津","value":0}

,{"name":"山西","value":1}

,{"name":"云南","value":0}

,{"name":"海南","value":0}

,{"name":"甘肃","value":0}

,{"name":"辽宁","value":2}

,{"name":"吉林","value":0}

,{"name":"贵州","value":0}

,{"name":"新疆","value":0}

,{"name":"宁夏","value":0}

,{"name":"澳门","value":0}

,{"name":"青海","value":0}

,{"name":"西藏","value":0}



]

,"confirm":[{"name":"湖北","value":68135}

,{"name":"香港","value":1299}

,{"name":"广东","value":1644}

,{"name":"河南","value":1276}

,{"name":"浙江","value":1269}

,{"name":"湖南","value":1019}

,{"name":"安徽","value":991}

,{"name":"黑龙江","value":947}

,{"name":"江西","value":932}

,{"name":"北京","value":929}

,{"name":"山东","value":792}

,{"name":"上海","value":718}

,{"name":"江苏","value":654}

,{"name":"四川","value":598}

,{"name":"重庆","value":582}

,{"name":"台湾","value":449}

,{"name":"福建","value":363}

,{"name":"河北","value":349}

,{"name":"陕西","value":321}

,{"name":"广西","value":254}

,{"name":"内蒙古","value":240}

,{"name":"天津","value":199}

,{"name":"山西","value":201}

,{"name":"云南","value":186}

,{"name":"海南","value":171}

,{"name":"甘肃","value":167}

,{"name":"辽宁","value":159}

,{"name":"吉林","value":155}

,{"name":"贵州","value":147}

,{"name":"新疆","value":76}

,{"name":"宁夏","value":75}

,{"name":"澳门","value":46}

,{"name":"青海","value":18}

,{"name":"西藏","value":1}



]

,"curconfirm":[{"name":"湖北","value":0}

,{"name":"香港","value":135}

,{"name":"广东","value":5}

,{"name":"河南","value":0}

,{"name":"浙江","value":1}

,{"name":"湖南","value":0}

,{"name":"安徽","value":0}

,{"name":"黑龙江","value":0}

,{"name":"江西","value":0}

,{"name":"北京","value":320}

,{"name":"山东","value":0}

,{"name":"上海","value":26}

,{"name":"江苏","value":1}

,{"name":"四川","value":14}

,{"name":"重庆","value":2}

,{"name":"台湾","value":4}

,{"name":"福建","value":2}

,{"name":"河北","value":6}

,{"name":"陕西","value":5}

,{"name":"广西","value":0}

,{"name":"内蒙古","value":2}

,{"name":"天津","value":2}

,{"name":"山西","value":1}

,{"name":"云南","value":1}

,{"name":"海南","value":0}

,{"name":"甘肃","value":9}

,{"name":"辽宁","value":7}

,{"name":"吉林","value":0}

,{"name":"贵州","value":0}

,{"name":"新疆","value":0}

,{"name":"宁夏","value":0}

,{"name":"澳门","value":0}

,{"name":"青海","value":0}

,{"name":"西藏","value":0}



]

,"death":[{"name":"湖北","value":4512}

,{"name":"香港","value":7}

,{"name":"广东","value":8}

,{"name":"河南","value":22}

,{"name":"浙江","value":1}

,{"name":"湖南","value":4}

,{"name":"安徽","value":6}

,{"name":"黑龙江","value":13}

,{"name":"江西","value":1}

,{"name":"北京","value":9}

,{"name":"山东","value":7}

,{"name":"上海","value":7}

,{"name":"江苏","value":0}

,{"name":"四川","value":3}

,{"name":"重庆","value":6}

,{"name":"台湾","value":7}

,{"name":"福建","value":1}

,{"name":"河北","value":6}

,{"name":"陕西","value":3}

,{"name":"广西","value":2}

,{"name":"内蒙古","value":1}

,{"name":"天津","value":3}

,{"name":"山西","value":0}

,{"name":"云南","value":2}

,{"name":"海南","value":6}

,{"name":"甘肃","value":2}

,{"name":"辽宁","value":2}

,{"name":"吉林","value":2}

,{"name":"贵州","value":2}

,{"name":"新疆","value":3}

,{"name":"宁夏","value":0}

,{"name":"澳门","value":0}

,{"name":"青海","value":0}

,{"name":"西藏","value":0}



]

,"cure":[{"name":"湖北","value":63623}

,{"name":"香港","value":1157}

,{"name":"广东","value":1631}

,{"name":"河南","value":1254}

,{"name":"浙江","value":1267}

,{"name":"湖南","value":1015}

,{"name":"安徽","value":985}

,{"name":"黑龙江","value":934}

,{"name":"江西","value":931}

,{"name":"北京","value":600}

,{"name":"山东","value":785}

,{"name":"上海","value":685}

,{"name":"江苏","value":653}

,{"name":"四川","value":581}

,{"name":"重庆","value":574}

,{"name":"台湾","value":438}

,{"name":"福建","value":360}

,{"name":"河北","value":337}

,{"name":"陕西","value":313}

,{"name":"广西","value":252}

,{"name":"内蒙古","value":237}

,{"name":"天津","value":194}

,{"name":"山西","value":200}

,{"name":"云南","value":183}

,{"name":"海南","value":165}

,{"name":"甘肃","value":156}

,{"name":"辽宁","value":150}

,{"name":"吉林","value":153}

,{"name":"贵州","value":145}

,{"name":"新疆","value":73}

,{"name":"宁夏","value":75}

,{"name":"澳门","value":46}

,{"name":"青海","value":18}

,{"name":"西藏","value":1}



]

}

]

for(i=0;i<=9;i++){
	//	num[i]=new Array();
		for(j=0;j<=33;j++){
			num[i][j]=data[i].curconfirm[j].value;
		}
}


index=0;

var ChinaOption= {
        title: {
				show:true,	
				text: '国内疫情即时确诊变化(6.27-7.6)',
				x:'center',
				textStyle:{
					color: '#FFFFFF',
				},
			},
        tooltip : {trigger: 'item',
				  textStyle:{
					  color:'#FFFFFF'
				  }},
        visualMap: {
            show : true,
            x: 'left',
            y: 'bottom',
			textStyle:{
					color: '#FFFFFF',
				},
            splitList: [
                /*{start: 400},
                {start: 350, end: 400},
                {start: 300, end: 350},*/
                {start: 41, color: "rgb(112,22,29)"},
                {start: 31, end: 40,color: 'rgb(120,20,0)'},
                {start: 21, end: 30,color: 'rgb(203,42,47)'},
                {start: 11, end: 20,color: 'rgb(229,90,78)'},
                {start: 0, end: 10,color: 'rgb(245,158,131)'},
				{start:0,end:0,color:'rgb(253,235,207)'}
            ],
        },
        series: [{
            name: '人数',
            type: 'map',
            mapType: 'china',
            roam: false,
            zoom:1.2,
            label: {
                normal: {
                    show: true ,
                },
                emphasis: {
                    show: false
                }
            },
            data:[{name: '北京',value:inputData(9,curTime) },{name: '天津',value: inputData(21,curTime) },
                {name: '上海',value: inputData(11,curTime) },{name: '重庆',value: inputData(14,curTime) },
                {name: '河北',value: inputData(17,curTime) },{name: '河南',value: inputData(3,curTime) },
                {name: '云南',value: inputData(23,curTime) },{name: '辽宁',value: inputData(26,curTime) },
                {name: '黑龙江',value: inputData(7,curTime) },{name: '湖南',value: inputData(5,curTime) },
                {name: '安徽',value: inputData(6,curTime) },{name: '山东',value: inputData(10,curTime) },
                {name: '新疆',value: inputData(29,curTime) },{name: '江苏',value: inputData(12,curTime) },
                {name: '浙江',value: inputData(4,curTime) },{name: '江西',value: inputData(8,curTime) },
                {name: '湖北',value: inputData(0,curTime) },{name: '广西',value: inputData(19,curTime) },
                {name: '甘肃',value: inputData(25,curTime) },{name: '山西',value: inputData(22,curTime) },
                {name: '内蒙古',value: inputData(20,curTime) },{name: '陕西',value: inputData(18,curTime) },
                {name: '吉林',value: inputData(27,curTime) },{name: '福建',value: inputData(16,curTime) },
                {name: '贵州',value: inputData(28,curTime) },{name: '广东',value: inputData(2,curTime) },
                {name: '青海',value: inputData(32,curTime) },{name: '西藏',value: inputData(33,curTime) },
                {name: '四川',value: inputData(13,curTime) },{name: '宁夏',value: inputData(30,curTime) },
                {name: '海南',value: inputData(24,curTime) },{name: '台湾',value: inputData(15,curTime) },
                {name: '香港',value: inputData(1,curTime) },{name: '澳门',value: inputData(31,curTime) }]
        }]
};
		
	
		
	
		
function inputData(idx,times){
	return num[times][idx];
//	return num[times][idx].value;
}

function china_map(){
		//document.getElementById("subtext_c").innerHTML=" ";
		curTime=1;
		let myChart = echarts.init(document.getElementById('world_map'));
    	myChart.clear();
		 myChart.setOption(ChinaOption);
		
		var lab=setInterval(function(){
		curTime++;
		if(curTime>maxTime)clearInterval(lab);
		myChart.setOption({
			series:[{
				data:[{name: '北京',value:inputData(9,curTime) },{name: '天津',value: inputData(21,curTime) },
                {name: '上海',value: inputData(11,curTime) },{name: '重庆',value: inputData(14,curTime) },
                {name: '河北',value: inputData(17,curTime) },{name: '河南',value: inputData(3,curTime) },
                {name: '云南',value: inputData(23,curTime) },{name: '辽宁',value: inputData(26,curTime) },
                {name: '黑龙江',value: inputData(7,curTime) },{name: '湖南',value: inputData(5,curTime) },
                {name: '安徽',value: inputData(6,curTime) },{name: '山东',value: inputData(10,curTime) },
                {name: '新疆',value: inputData(29,curTime) },{name: '江苏',value: inputData(12,curTime) },
                {name: '浙江',value: inputData(4,curTime) },{name: '江西',value: inputData(8,curTime) },
                {name: '湖北',value: inputData(0,curTime) },{name: '广西',value: inputData(19,curTime) },
                {name: '甘肃',value: inputData(25,curTime) },{name: '山西',value: inputData(22,curTime) },
                {name: '内蒙古',value: inputData(20,curTime) },{name: '陕西',value: inputData(18,curTime) },
                {name: '吉林',value: inputData(27,curTime) },{name: '福建',value: inputData(16,curTime) },
                {name: '贵州',value: inputData(28,curTime) },{name: '广东',value: inputData(2,curTime) },
                {name: '青海',value: inputData(32,curTime) },{name: '西藏',value: inputData(33,curTime) },
                {name: '四川',value: inputData(13,curTime) },{name: '宁夏',value: inputData(30,curTime) },
                {name: '海南',value: inputData(24,curTime) },{name: '台湾',value: inputData(15,curTime) },
                {name: '香港',value: inputData(1,curTime) },{name: '澳门',value: inputData(31,curTime) }]
			}]
		});
	},700);
}

