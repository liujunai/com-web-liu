var dateList = ['2019','2020'];

var mapx = [];
var mapy = [];
for (var i=0;i<dateList.length;i++) {
	var x = [];
	var y = [];
	$.ajax
	({
		type: 'POST',
		url: "/yydeptdata/selectAll.do",
		data: {
			"date" : dateList[i]
		},
		dataType: "json",
		async: false,
		crossDomain: true == !(document.all),
		success: function (data) {
			for (var i = 0; i < data.length; i++) {
				x.push(data[i].cDept);
				y.push(data[i].cCount);
			}
			mapx.push(x);
			mapy.push(y);
		}
	});
}
var datazft = [{x: mapx[0],y: mapy[0],type: "histogram",histfunc: "sum",name: dateList[0]},{
	x: mapx[1],y: mapy[1],type: "histogram",histfunc: "sum",name: dateList[1]}]

var layoutzft ={
	title:'部门每年办件量直方图',// width: 8000, height: 1000, xaxis:{title: '日期'},
	yaxis: {title: '数量'}
}
Plotly.newPlot('yydeptdatazft',datazft,layoutzft);


//饼图
var allLabels = mapx;
var allValues = mapy;
var databt = [{
	values: allValues[0],labels: allLabels[0],type: 'pie',name: dateList[0],domain: {row: 0,column: 0},
	hoverinfo: 'label+percent+name',textinfo: 'none'
},{
	values: allValues[1],labels: allLabels[1],type: 'pie',name: dateList[1],domain: {row: 0,column: 1},
	hoverinfo: 'label+percent+name',textinfo: 'none'
}];

var layoutbt = {
	title:'部门每年办件量直方图',
	// width: 2200,
	// height: 1000,
	grid: {rows: 2, columns: 3}
};

Plotly.newPlot('yydeptdatabt', databt,layoutbt);
