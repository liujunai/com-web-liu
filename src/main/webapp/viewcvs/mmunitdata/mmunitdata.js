var dateList = ['2019-01','2019-02','2019-03','2019-04','2019-05','2019-06','2019-07','2019-08','2019-09','2019-10','2019-11','2019-12',
	'2020-01','2020-02','2020-03','2020-04','2020-05','2020-06','2020-07','2020-08','2020-09'];

var mapx = [];
var mapy = [];
for (var i=0;i<dateList.length;i++) {
	var x = [];
	var y = [];
	$.ajax
	({
		type: 'POST',
		url: "/mmunitdata/selectAll.do",
		data: {
			"date" : dateList[i]
		},
		dataType: "json",
		async: false,
		crossDomain: true == !(document.all),
		success: function (data) {
			for (var i = 0; i < data.length; i++) {
				x.push(data[i].cUnit);
				y.push(data[i].cCount);
			}
			mapx.push(x);
			mapy.push(y);
		}
	});
}

var datazft = [{x: mapx[0],y: mapy[0],type: "histogram",histfunc: "sum",name: dateList[0]},{
	x: mapx[1],y: mapy[1],type: "histogram",histfunc: "sum",name: dateList[1]},{
	x: mapx[2],y: mapy[2],type: "histogram",histfunc: "sum",name: dateList[2]},{
	x: mapx[3],y: mapy[3],type: "histogram",histfunc: "sum",name: dateList[3]},{
	x: mapx[4],y: mapy[4],type: "histogram",histfunc: "sum",name: dateList[4]},{
	x: mapx[5],y: mapy[5],type: "histogram",histfunc: "sum",name: dateList[5]},{
	x: mapx[6],y: mapy[6],type: "histogram",histfunc: "sum",name: dateList[6]},{
	x: mapx[7],y: mapy[7],type: "histogram",histfunc: "sum",name: dateList[7]},{
	x: mapx[8],y: mapy[8],type: "histogram",histfunc: "sum",name: dateList[8]},{
	x: mapx[9],y: mapy[9],type: "histogram",histfunc: "sum",name: dateList[9]},{
	x: mapx[10],y: mapy[10],type: "histogram",histfunc: "sum",name: dateList[10]},{
	x: mapx[11],y: mapy[11],type: "histogram",histfunc: "sum",name: dateList[11]},{
	x: mapx[12],y: mapy[12],type: "histogram",histfunc: "sum",name: dateList[12]},{
	x: mapx[13],y: mapy[13],type: "histogram",histfunc: "sum",name: dateList[13]},{
	x: mapx[14],y: mapy[14],type: "histogram",histfunc: "sum",name: dateList[14]},{
	x: mapx[15],y: mapy[15],type: "histogram",histfunc: "sum",name: dateList[15]},{
	x: mapx[16],y: mapy[16],type: "histogram",histfunc: "sum",name: dateList[16]},{
	x: mapx[17],y: mapy[17],type: "histogram",histfunc: "sum",name: dateList[17]},{
	x: mapx[18],y: mapy[18],type: "histogram",histfunc: "sum",name: dateList[18]},{
	x: mapx[19],y: mapy[19],type: "histogram",histfunc: "sum",name: dateList[19]},{
	x: mapx[20],y: mapy[20],type: "histogram",histfunc: "sum",name: dateList[20]},{
	x: mapx[21],y: mapy[21],type: "histogram",histfunc: "sum",name: dateList[21]}]

var layoutzft ={
	title:'办件提供单位每个月办件量直方图',// width: 8000, height: 1000, xaxis:{title: '日期'},
	yaxis: {title: '数量'}
}
Plotly.newPlot('mmunitdatazft',datazft,layoutzft);

//饼图
var allLabels = mapx;
var allValues = mapy;
var databt = [{
	values: allValues[0],labels: allLabels[0],type: 'pie',name: dateList[0],domain: {row: 0,column: 0},
	hoverinfo: 'label+percent+name',textinfo: 'none'
},{
	values: allValues[1],labels: allLabels[1],type: 'pie',name: dateList[1],domain: {row: 0,column: 1},
	hoverinfo: 'label+percent+name',textinfo: 'none'
},{
	values: allValues[2],labels: allLabels[2],type: 'pie',name: dateList[2],domain: {row: 0,column: 2},
	hoverinfo: 'label+percent+name',textinfo: 'none'
},{
	values: allValues[3],labels: allLabels[3],type: 'pie',name: dateList[3],domain: {row: 0,column: 3},
	hoverinfo: 'label+percent+name',textinfo: 'none'
},{
	values: allValues[4],labels: allLabels[4],type: 'pie',name: dateList[4],domain: {row: 0,column: 4},
	hoverinfo: 'label+percent+name',textinfo: 'none'
},{
	values: allValues[5],labels: allLabels[5],type: 'pie',name: dateList[5],domain: {row: 0,column: 5},
	hoverinfo: 'label+percent+name',textinfo: 'none'
},{
	values: allValues[6],labels: allLabels[6],type: 'pie',name: dateList[6],domain: {row: 0,column: 6},
	hoverinfo: 'label+percent+name',textinfo: 'none'
},{
	values: allValues[7],labels: allLabels[7],type: 'pie',name: dateList[7],domain: {row: 0,column: 7},
	hoverinfo: 'label+percent+name',textinfo: 'none'
},{
	values: allValues[8],labels: allLabels[8],type: 'pie',name: dateList[8],domain: {row: 1,column: 0},
	hoverinfo: 'label+percent+name',textinfo: 'none'
},{
	values: allValues[9],labels: allLabels[9],type: 'pie',name: dateList[9],domain: {row: 1,column: 1},
	hoverinfo: 'label+percent+name',textinfo: 'none'
},{
	values: allValues[10],labels: allLabels[10],type: 'pie',name: dateList[10],domain: {row: 1,column: 2},
	hoverinfo: 'label+percent+name',textinfo: 'none'
},{
	values: allValues[11],labels: allLabels[11],type: 'pie',name: dateList[11],domain: {row: 1,column: 3},
	hoverinfo: 'label+percent+name',textinfo: 'none'
},{
	values: allValues[12],labels: allLabels[12],type: 'pie',name: dateList[12],domain: {row: 1,column: 4},
	hoverinfo: 'label+percent+name',textinfo: 'none'
},{
	values: allValues[13],labels: allLabels[13],type: 'pie',name: dateList[13],domain: {row: 1,column: 5},
	hoverinfo: 'label+percent+name',textinfo: 'none'
},{
	values: allValues[14],labels: allLabels[14],type: 'pie',name: dateList[14],domain: {row: 1,column: 6},
	hoverinfo: 'label+percent+name',textinfo: 'none'
},{
	values: allValues[15],labels: allLabels[15],type: 'pie',name: dateList[15],domain: {row: 1,column: 7},
	hoverinfo: 'label+percent+name',textinfo: 'none'
},{
	values: allValues[16],labels: allLabels[16],type: 'pie',name: dateList[16],domain: {row: 2,column: 0},
	hoverinfo: 'label+percent+name',textinfo: 'none'
},{
	values: allValues[17],labels: allLabels[17],type: 'pie',name: dateList[17],domain: {row: 2,column: 1},
	hoverinfo: 'label+percent+name',textinfo: 'none'
},{
	values: allValues[18],labels: allLabels[18],type: 'pie',name: dateList[18],domain: {row: 2,column: 2},
	hoverinfo: 'label+percent+name',textinfo: 'none'
},{
	values: allValues[19],labels: allLabels[19],type: 'pie',name: dateList[19],domain: {row: 2,column: 3},
	hoverinfo: 'label+percent+name',textinfo: 'none'
},{
	values: allValues[20],labels: allLabels[20],type: 'pie',name: dateList[20],domain: {row: 2,column: 4},
	hoverinfo: 'label+percent+name',textinfo: 'none'
},{
	values: allValues[21],labels: allLabels[21],type: 'pie',name: dateList[21],domain: {row: 2,column: 5},
	hoverinfo: 'label+percent+name',textinfo: 'none'
}];

var layoutbt = {
	title:'办件提供单位每个月办件量饼图',
	width: 2200,
	// height: 1000,
	grid: {rows: 3, columns: 8}
};

Plotly.newPlot('mmunitdatabt', databt,layoutbt);
