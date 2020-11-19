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

var trace1 = {x: x,y: y,mode: 'lines+markers+text',type: 'scatter',name: '蓝色',
	// text: ['Mobile A', 'Mobile B', 'Mobile C', 'Mobile D', 'Mobile E'],
	textposition: 'top center',textfont: {family: 'Raleway, sans-serif'},
	marker: { size: 12 }};

var data = [trace1];
Plotly.newPlot('myDiv', data);
