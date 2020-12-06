var x = [];
var y = [];
$.ajax
({
	type: 'POST',
	url: "/datacount/selectAll.do",
	data: {
	},
	dataType: "json",
	async: false,
	crossDomain: true == !(document.all),
	success: function (data) {
		for (var i = 0; i < data.length; i++) {
			x.push(data[i].yy);
			y.push(data[i].cCount);
		}
	}
});

var trace1 = {x: x,y: y,mode: 'lines+markers+text',type: 'scatter',name: '月办件量',	text: x,
	marker: { size: 10 }};

var data = [trace1];
var layout = {
	title:'2019年1月-2020年9月，每个月的办件总量线形图',
	width: 1600,
	height: 790,

	xaxis: {
		title: '日期'
	},
	yaxis: {
		title: '数量'
	}
};

Plotly.newPlot('datacount', data,layout);
