
$(function(){
	$("#showcvs").children().hide();
	$("#datacount").show();

	//2019-01至2020-09数据总览
	$("#zongti").click(function(){
		$("#showcvs").children().hide();
		$("#datacount").show();
	});


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~事项年统计
	// 事项年统计 左侧导航 默认
	$("#yyname").click(function(){
		$("#showcvs").children().hide();
		$("#yynamedatashow").show();

		var dateList = ['2019','2020'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/yynamedata/selectAll.do",
				data: {
					"date" : dateList[i]
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cName);
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
			title:'事项每年办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('yynamedata',datazft,layoutzft);
	});
	// 事项年统计  直方图
	$("#yynamedatazft").click(function(){
		$("#yynamedata").empty();
		var dateList = ['2019','2020'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/yynamedata/selectAll.do",
				data: {
					"date" : dateList[i]
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cName);
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
			title:'事项每年办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('yynamedata',datazft,layoutzft);
	});
	// 事项年统计  饼图
	$("#yynamedatabt").click(function(){
		$("#yynamedata").empty();
		var dateList = ['2019','2020'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/yynamedata/selectAll.do",
				data: {
					"date" : dateList[i]
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cName);
						y.push(data[i].cCount);
					}
					mapx.push(x);
					mapy.push(y);
				}
			});
		}
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
			title:'事项每年办件量饼图',
			width: 1600,
			height: 750,
			grid: {rows: 3, columns: 5}
		};
		Plotly.newPlot('yynamedata', databt,layoutbt);
	});
	// 事项年耗时天数 最大值  统计  直方图
	$("#yynamedatamax").click(function(){
		$("#yynamedata").empty();
		var dateList = ['2019','2020'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectNameAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "max"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cName);
						y.push(data[i].maxDate);
					}
					mapx.push(x);
					mapy.push(y);
				}
			});
		}
		var datazft = [{x: mapx[0],y: mapy[0],type: "histogram",histfunc: "sum",name: dateList[0]},{
			x: mapx[1],y: mapy[1],type: "histogram",histfunc: "sum",name: dateList[1]}]

		var layoutzft ={
			title:'事项年耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yynamedata',datazft,layoutzft);
	});
	// 事项年耗时天数 最小值  统计  直方图
	$("#yynamedatamin").click(function(){
		$("#yynamedata").empty();
		var dateList = ['2019','2020'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectNameAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "min"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cName);
						y.push(data[i].minDate);
					}
					mapx.push(x);
					mapy.push(y);
				}
			});
		}
		var datazft = [{x: mapx[0],y: mapy[0],type: "histogram",histfunc: "sum",name: dateList[0]},{
			x: mapx[1],y: mapy[1],type: "histogram",histfunc: "sum",name: dateList[1]}]

		var layoutzft ={
			title:'事项年耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yynamedata',datazft,layoutzft);
	});
	// 事项年耗时天数  极差  统计  直方图
	$("#yynamedatarange").click(function(){
		$("#yynamedata").empty();
		var dateList = ['2019','2020'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectNameAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "range"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cName);
						y.push(data[i].rangeDate);
					}
					mapx.push(x);
					mapy.push(y);
				}
			});
		}
		var datazft = [{x: mapx[0],y: mapy[0],type: "histogram",histfunc: "sum",name: dateList[0]},{
			x: mapx[1],y: mapy[1],type: "histogram",histfunc: "sum",name: dateList[1]}]

		var layoutzft ={
			title:'事项年耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yynamedata',datazft,layoutzft);
	});
	// 事项年耗时天数  中位数  统计  直方图
	$("#yynamedatamedian").click(function(){
		$("#yynamedata").empty();
		var dateList = ['2019','2020'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectNameAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "median"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cName);
						y.push(data[i].median);
					}
					mapx.push(x);
					mapy.push(y);
				}
			});
		}
		var datazft = [{x: mapx[0],y: mapy[0],type: "histogram",histfunc: "sum",name: dateList[0]},{
			x: mapx[1],y: mapy[1],type: "histogram",histfunc: "sum",name: dateList[1]}]

		var layoutzft ={
			title:'事项年耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yynamedata',datazft,layoutzft);
	});
	// 事项年耗时天数  众数  统计  直方图
	$("#yynamedatamode").click(function(){
		$("#yynamedata").empty();
		var dateList = ['2019','2020'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectNameAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "mode"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cName);
						y.push(data[i].mode);
					}
					mapx.push(x);
					mapy.push(y);
				}
			});
		}
		var datazft = [{x: mapx[0],y: mapy[0],type: "histogram",histfunc: "sum",name: dateList[0]},{
			x: mapx[1],y: mapy[1],type: "histogram",histfunc: "sum",name: dateList[1]}]

		var layoutzft ={
			title:'事项年耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yynamedata',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~事项2019年统计
	// 事项2019年统计 左侧导航 默认
	$("#yyname2019").click(function(){
		$("#showcvs").children().hide();
		$("#yyname2019dateshow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/yynamedata/selectAll.do",
			data: {
				"date" : '2019'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2019}]
		var layoutzft ={
			title:'事项2019年办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('yyname2019date',datazft,layoutzft);
	});
	// 事项2019年统计  直方图
	$("#yyname2019datazft").click(function(){
		$("#yyname2019date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/yynamedata/selectAll.do",
			data: {
				"date" : '2019'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2019}]
		var layoutzft ={
			title:'事项2019年办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('yyname2019date',datazft,layoutzft);
	});
	// 事项2019年统计  饼图
	$("#yyname2019databt").click(function(){
		$("#yyname2019date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/yynamedata/selectAll.do",
			data: {
				"date" : '2019'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2019,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'事项2019年办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 1, columns: 2}
		};
		Plotly.newPlot('yyname2019date', databt,layoutbt);
	});
	// 事项2019年耗时天数 最大值  统计  直方图
	$("#yyname2019datamax").click(function(){
		$("#yyname2019date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2019}]
		var layoutzft ={
			title:'事项2019耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyname2019date',datazft,layoutzft);
	});
	// 事项2019年耗时天数 最小值  统计  直方图
	$("#yyname2019datamin").click(function(){
		$("#yyname2019data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2019}]

		var layoutzft ={
			title:'事项2019年耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyname2019date',datazft,layoutzft);
	});
	// 事项2019年耗时天数  极差  统计  直方图
	$("#yyname2019datarange").click(function(){
		$("#yyname2019data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2019}]

		var layoutzft ={
			title:'事项2019年耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyname2019date',datazft,layoutzft);
	});
	// 事项2019年耗时天数  中位数  统计  直方图
	$("#yyname2019datamedian").click(function(){
		$("#yyname2019data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2019}]

		var layoutzft ={
			title:'事项2019年耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyname2019date',datazft,layoutzft);
	});
	// 事项2019年耗时天数  众数  统计  直方图
	$("#yyname2019datamode").click(function(){
		$("#yyname2019data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2019}]

		var layoutzft ={
			title:'事项2019年耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyname2019date',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~事项2020年统计
	// 事项2020年统计 左侧导航 默认
	$("#yyname2020").click(function(){
		$("#showcvs").children().hide();
		$("#yyname2020dateshow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/yynamedata/selectAll.do",
			data: {
				"date" : '2020'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2020年办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('yyname2020data',datazft,layoutzft);
	});
	// 事项2020年统计  直方图
	$("#yyname2020datazft").click(function(){
		$("#yyname2020date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/yynamedata/selectAll.do",
			data: {
				"date" : '2020'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2020年办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('yyname2020data',datazft,layoutzft);
	});
	// 事项2020年统计  饼图
	$("#yyname2020databt").click(function(){
		$("#yyname2020date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/yynamedata/selectAll.do",
			data: {
				"date" : '2020'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'事项2020年办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('yyname2020data', databt,layoutbt);

	});
	// 事项2020年耗时天数 最大值  统计  直方图
	$("#yyname2020datamax").click(function(){
		$("#yyname2020date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2020耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyname2020data',datazft,layoutzft);
	});
	// 事项2020年耗时天数 最小值  统计  直方图
	$("#yyname2020datamin").click(function(){
		$("#yyname2020data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyname2020data',datazft,layoutzft);
	});
	// 事项2020年耗时天数  极差  统计  直方图
	$("#yyname2020datarange").click(function(){
		$("#yyname2020data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyname2020data',datazft,layoutzft);

	});
	// 事项2020年耗时天数  中位数  统计  直方图
	$("#yyname2020datamedian").click(function(){
		$("#yyname2020data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyname2020data',datazft,layoutzft);
	});
	// 事项2020年耗时天数  众数  统计  直方图
	$("#yyname2020datamode").click(function(){
		$("#yyname2020data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyname2020data',datazft,layoutzft);
	});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~事项月统计
	// 事项月统计 左侧导航 默认
	$("#mmname").click(function(){
		$("#showcvs").children().hide();
		$("#mmnamedatashow").show();
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
				url: "/mmnamedata/selectAll.do",
				data: {
					"date" : dateList[i]
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cName);
						y.push(data[i].mMCount);
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
			title:'事项每个月办件量直方图',width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmnamedata',datazft,layoutzft);
	});
	// 事项月统计  直方图
	$("#mmnamedatazft").click(function(){
		$("#mmnamedata").empty();
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
				url: "/mmnamedata/selectAll.do",
				data: {
					"date" : dateList[i]
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cName);
						y.push(data[i].mMCount);
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
			title:'事项每个月办件量直方图',width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmnamedata',datazft,layoutzft);
	});
	// 事项年统计  饼图
	$("#mmnamedatabt").click(function(){
		$("#mmnamedata").empty();
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
				url: "/mmnamedata/selectAll.do",
				data: {
					"date" : dateList[i]
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cName);
						y.push(data[i].mMCount);
					}
					mapx.push(x);
					mapy.push(y);
				}
			});
		}
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
			title:'事项每个月办件量饼图',
			width: 2200,
			height: 790,
			grid: {rows: 3, columns: 8}
		};

		Plotly.newPlot('mmnamedata', databt,layoutbt);
	});
	// 事项年耗时天数 最大值  统计  直方图
	$("#mmnamedatamax").click(function(){
		$("#mmnamedata").empty();
		var dateList = ['2019-01','2019-02','2019-03','2019-04','2019-05','2019-06','2019-07','2019-08','2019-09','2019-10','2019-11','2019-12',
			'2020-01','2020-02','2020-03','2020-04','2020-05','2020-06','2020-07','2020-08','2020-09'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectNameAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "max"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cName);
						y.push(data[i].maxDate);
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
			title:'事项月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmnamedata',datazft,layoutzft);
	});
	// 事项年耗时天数 最小值  统计  直方图
	$("#mmnamedatamin").click(function(){
		$("#mmnamedata").empty();
		var dateList = ['2019-01','2019-02','2019-03','2019-04','2019-05','2019-06','2019-07','2019-08','2019-09','2019-10','2019-11','2019-12',
			'2020-01','2020-02','2020-03','2020-04','2020-05','2020-06','2020-07','2020-08','2020-09'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectNameAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "min"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cName);
						y.push(data[i].minDate);
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
			title:'事项月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmnamedata',datazft,layoutzft);
	});
	// 事项年耗时天数  极差  统计  直方图
	$("#mmnamedatarange").click(function(){
		$("#mmnamedata").empty();
		var dateList = ['2019-01','2019-02','2019-03','2019-04','2019-05','2019-06','2019-07','2019-08','2019-09','2019-10','2019-11','2019-12',
			'2020-01','2020-02','2020-03','2020-04','2020-05','2020-06','2020-07','2020-08','2020-09'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectNameAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "range"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cName);
						y.push(data[i].rangeDate);
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
			title:'事项月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmnamedata',datazft,layoutzft);
	});
	// 事项年耗时天数  中位数  统计  直方图
	$("#mmnamedatamedian").click(function(){
		$("#mmnamedata").empty();
		var dateList = ['2019-01','2019-02','2019-03','2019-04','2019-05','2019-06','2019-07','2019-08','2019-09','2019-10','2019-11','2019-12',
			'2020-01','2020-02','2020-03','2020-04','2020-05','2020-06','2020-07','2020-08','2020-09'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectNameAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "median"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cName);
						y.push(data[i].median);
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
			title:'事项月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmnamedata',datazft,layoutzft);
	});
	// 事项年耗时天数  众数  统计  直方图
	$("#mmnamedatamode").click(function(){
		$("#mmnamedata").empty();
		var dateList = ['2019-01','2019-02','2019-03','2019-04','2019-05','2019-06','2019-07','2019-08','2019-09','2019-10','2019-11','2019-12',
			'2020-01','2020-02','2020-03','2020-04','2020-05','2020-06','2020-07','2020-08','2020-09'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectNameAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "mode"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cName);
						y.push(data[i].mode);
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
			title:'事项月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmnamedata',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~事项2019年1月统计
	// 事项2019年1月统计 左侧导航 默认
	$("#mmname201901").click(function(){
		$("#showcvs").children().hide();
		$("#mmname201901datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2019-01'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2019年1月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname201901data',datazft,layoutzft);
	});
	// 事项2019年1月统计  直方图
	$("#mmname201901datazft").click(function(){
		$("#mmname201901date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2019-01'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2019年1月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname201901data',datazft,layoutzft);
	});
	// 事项2019年1月统计  饼图
	$("#mmname201901databt").click(function(){
		$("#mmname201901date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2019-01'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'事项2019年1月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmname201901data', databt,layoutbt);

	});
	// 事项2019年1月耗时天数 最大值  统计  直方图
	$("#mmname201901datamax").click(function(){
		$("#mmname201901date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-01',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2019年1月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201901data',datazft,layoutzft);
	});
	// 事项2019年1月耗时天数 最小值  统计  直方图
	$("#mmname201901datamin").click(function(){
		$("#mmname201901data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-01',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年1月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201901data',datazft,layoutzft);
	});
	// 事项2019年1月耗时天数  极差  统计  直方图
	$("#mmname201901datarange").click(function(){
		$("#mmname201901data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-01',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年1月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201901data',datazft,layoutzft);

	});
	// 事项2019年1月耗时天数  中位数  统计  直方图
	$("#mmname201901datamedian").click(function(){
		$("#mmname201901data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-01',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年1月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201901data',datazft,layoutzft);
	});
	// 事项2019年1月耗时天数  众数  统计  直方图
	$("#mmname201901datamode").click(function(){
		$("#mmname201901data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-01',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年1月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201901data',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~事项2019年2月统计
	// 事项2019年2月统计 左侧导航 默认
	$("#mmname201902").click(function(){
		$("#showcvs").children().hide();
		$("#mmname201902datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2019-02'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2019年2月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname201902data',datazft,layoutzft);
	});
	// 事项2019年2月统计  直方图
	$("#mmname201902datazft").click(function(){
		$("#mmname201902date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2019-02'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2019年2月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname201902data',datazft,layoutzft);
	});
	// 事项2019年2月统计  饼图
	$("#mmname201902databt").click(function(){
		$("#mmname201902date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2019-02'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'事项2019年2月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmname201902data', databt,layoutbt);

	});
	// 事项2019年2月耗时天数 最大值  统计  直方图
	$("#mmname201902datamax").click(function(){
		$("#mmname201902date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-02',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2019年2月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201902data',datazft,layoutzft);
	});
	// 事项2019年2月耗时天数 最小值  统计  直方图
	$("#mmname201902datamin").click(function(){
		$("#mmname201902data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-02',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年2月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201902data',datazft,layoutzft);
	});
	// 事项2019年2月耗时天数  极差  统计  直方图
	$("#mmname201902datarange").click(function(){
		$("#mmname201902data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-02',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年2月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201902data',datazft,layoutzft);

	});
	// 事项2019年2月耗时天数  中位数  统计  直方图
	$("#mmname201902datamedian").click(function(){
		$("#mmname201902data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-02',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年2月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201902data',datazft,layoutzft);
	});
	// 事项2019年2月耗时天数  众数  统计  直方图
	$("#mmname201902datamode").click(function(){
		$("#mmname201902data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-02',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年2月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201902data',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~事项2019年3月统计
	// 事项2019年3月统计 左侧导航 默认
	$("#mmname201903").click(function(){
		$("#showcvs").children().hide();
		$("#mmname201903datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2019-03'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2019年3月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname201903data',datazft,layoutzft);
	});
	// 事项2019年3月统计  直方图
	$("#mmname201903datazft").click(function(){
		$("#mmname201903date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2019-03'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2019年3月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname201903data',datazft,layoutzft);
	});
	// 事项2019年3月统计  饼图
	$("#mmname201903databt").click(function(){
		$("#mmname201903date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2019-03'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'事项2019年3月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmname201903data', databt,layoutbt);

	});
	// 事项2019年3月耗时天数 最大值  统计  直方图
	$("#mmname201903datamax").click(function(){
		$("#mmname201903date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-03',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2019年3月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201903data',datazft,layoutzft);
	});
	// 事项2019年3月耗时天数 最小值  统计  直方图
	$("#mmname201903datamin").click(function(){
		$("#mmname201903data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-03',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年3月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201903data',datazft,layoutzft);
	});
	// 事项2019年3月耗时天数  极差  统计  直方图
	$("#mmname201903datarange").click(function(){
		$("#mmname201903data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-03',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年3月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201903data',datazft,layoutzft);

	});
	// 事项2019年3月耗时天数  中位数  统计  直方图
	$("#mmname201903datamedian").click(function(){
		$("#mmname201903data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-03',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年3月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201903data',datazft,layoutzft);
	});
	// 事项2019年3月耗时天数  众数  统计  直方图
	$("#mmname201903datamode").click(function(){
		$("#mmname201903data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-03',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年3月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201903data',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~事项2019年4月统计
	// 事项2019年4月统计 左侧导航 默认
	$("#mmname201904").click(function(){
		$("#showcvs").children().hide();
		$("#mmname201904datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2019-04'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2019年4月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname201904data',datazft,layoutzft);
	});
	// 事项2019年4月统计  直方图
	$("#mmname201904datazft").click(function(){
		$("#mmname201904date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2019-04'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2019年4月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname201904data',datazft,layoutzft);
	});
	// 事项2019年4月统计  饼图
	$("#mmname201904databt").click(function(){
		$("#mmname201904date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2019-04'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'事项2019年4月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmname201904data', databt,layoutbt);

	});
	// 事项2019年4月耗时天数 最大值  统计  直方图
	$("#mmname201904datamax").click(function(){
		$("#mmname201904date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-04',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2019年4月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201904data',datazft,layoutzft);
	});
	// 事项2019年4月耗时天数 最小值  统计  直方图
	$("#mmname201904datamin").click(function(){
		$("#mmname201904data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-04',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年4月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201904data',datazft,layoutzft);
	});
	// 事项2019年4月耗时天数  极差  统计  直方图
	$("#mmname201904datarange").click(function(){
		$("#mmname201904data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-04',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年4月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201904data',datazft,layoutzft);

	});
	// 事项2019年4月耗时天数  中位数  统计  直方图
	$("#mmname201904datamedian").click(function(){
		$("#mmname201904data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-04',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年4月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201904data',datazft,layoutzft);
	});
	// 事项2019年4月耗时天数  众数  统计  直方图
	$("#mmname201904datamode").click(function(){
		$("#mmname201904data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-04',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年4月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201904data',datazft,layoutzft);
	});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~事项2019年5月统计
	// 事项2019年5月统计 左侧导航 默认
	$("#mmname201905").click(function(){
		$("#showcvs").children().hide();
		$("#mmname201905datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2019-05'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2019年5月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname201905data',datazft,layoutzft);
	});
	// 事项2019年5月统计  直方图
	$("#mmname201905datazft").click(function(){
		$("#mmname201905date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2019-05'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2019年5月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname201905data',datazft,layoutzft);
	});
	// 事项2019年5月统计  饼图
	$("#mmname201905databt").click(function(){
		$("#mmname201905date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2019-05'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'事项2019年5月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmname201905data', databt,layoutbt);

	});
	// 事项2019年5月耗时天数 最大值  统计  直方图
	$("#mmname201905datamax").click(function(){
		$("#mmname201905date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-05',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2019年5月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201905data',datazft,layoutzft);
	});
	// 事项2019年5月耗时天数 最小值  统计  直方图
	$("#mmname201905datamin").click(function(){
		$("#mmname201905data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-05',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年5月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201905data',datazft,layoutzft);
	});
	// 事项2019年5月耗时天数  极差  统计  直方图
	$("#mmname201905datarange").click(function(){
		$("#mmname201905data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-05',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年5月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201905data',datazft,layoutzft);

	});
	// 事项2019年5月耗时天数  中位数  统计  直方图
	$("#mmname201905datamedian").click(function(){
		$("#mmname201905data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-05',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年5月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201905data',datazft,layoutzft);
	});
	// 事项2019年5月耗时天数  众数  统计  直方图
	$("#mmname201905datamode").click(function(){
		$("#mmname201905data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-05',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年5月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201905data',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~事项2019年6月统计
	// 事项2019年6月统计 左侧导航 默认
	$("#mmname201906").click(function(){
		$("#showcvs").children().hide();
		$("#mmname201906datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2019-06'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2019年6月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname201906data',datazft,layoutzft);
	});
	// 事项2019年6月统计  直方图
	$("#mmname201906datazft").click(function(){
		$("#mmname201906date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2019-06'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2019年6月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname201906data',datazft,layoutzft);
	});
	// 事项2019年6月统计  饼图
	$("#mmname201906databt").click(function(){
		$("#mmname201906date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2019-06'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'事项2019年6月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmname201906data', databt,layoutbt);

	});
	// 事项2019年6月耗时天数 最大值  统计  直方图
	$("#mmname201906datamax").click(function(){
		$("#mmname201906date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-06',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2019年6月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201906data',datazft,layoutzft);
	});
	// 事项2019年6月耗时天数 最小值  统计  直方图
	$("#mmname201906datamin").click(function(){
		$("#mmname201906data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-06',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年6月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201906data',datazft,layoutzft);
	});
	// 事项2019年6月耗时天数  极差  统计  直方图
	$("#mmname201906datarange").click(function(){
		$("#mmname201906data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-06',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年6月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201906data',datazft,layoutzft);

	});
	// 事项2019年6月耗时天数  中位数  统计  直方图
	$("#mmname201906datamedian").click(function(){
		$("#mmname201906data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-06',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年6月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201906data',datazft,layoutzft);
	});
	// 事项2019年6月耗时天数  众数  统计  直方图
	$("#mmname201906datamode").click(function(){
		$("#mmname201906data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-06',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年6月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201906data',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~事项2019年7月统计
	// 事项2019年7月统计 左侧导航 默认
	$("#mmname201907").click(function(){
		$("#showcvs").children().hide();
		$("#mmname201907datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2019-07'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2019年7月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname201907data',datazft,layoutzft);
	});
	// 事项2019年7月统计  直方图
	$("#mmname201907datazft").click(function(){
		$("#mmname201907date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2019-07'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2019年7月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname201907data',datazft,layoutzft);
	});
	// 事项2019年7月统计  饼图
	$("#mmname201907databt").click(function(){
		$("#mmname201907date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2019-07'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'事项2019年7月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmname201907data', databt,layoutbt);

	});
	// 事项2019年7月耗时天数 最大值  统计  直方图
	$("#mmname201907datamax").click(function(){
		$("#mmname201907date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-07',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2019年7月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201907data',datazft,layoutzft);
	});
	// 事项2019年7月耗时天数 最小值  统计  直方图
	$("#mmname201907datamin").click(function(){
		$("#mmname201907data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-07',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年7月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201907data',datazft,layoutzft);
	});
	// 事项2019年7月耗时天数  极差  统计  直方图
	$("#mmname201907datarange").click(function(){
		$("#mmname201907data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-07',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年7月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201907data',datazft,layoutzft);

	});
	// 事项2019年7月耗时天数  中位数  统计  直方图
	$("#mmname201907datamedian").click(function(){
		$("#mmname201907data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-07',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年7月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201907data',datazft,layoutzft);
	});
	// 事项2019年7月耗时天数  众数  统计  直方图
	$("#mmname201907datamode").click(function(){
		$("#mmname201907data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-07',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年7月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201907data',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~事项2019年8月统计
	// 事项2019年8月统计 左侧导航 默认
	$("#mmname201908").click(function(){
		$("#showcvs").children().hide();
		$("#mmname201908datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2019-08'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2019年8月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname201908data',datazft,layoutzft);
	});
	// 事项2019年8月统计  直方图
	$("#mmname201908datazft").click(function(){
		$("#mmname201908date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2019-08'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2019年8月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname201908data',datazft,layoutzft);
	});
	// 事项2019年8月统计  饼图
	$("#mmname201908databt").click(function(){
		$("#mmname201908date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2019-08'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'事项2019年8月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmname201908data', databt,layoutbt);

	});
	// 事项2019年8月耗时天数 最大值  统计  直方图
	$("#mmname201908datamax").click(function(){
		$("#mmname201908date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-08',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2019年8月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201908data',datazft,layoutzft);
	});
	// 事项2019年8月耗时天数 最小值  统计  直方图
	$("#mmname201908datamin").click(function(){
		$("#mmname201908data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-08',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年8月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201908data',datazft,layoutzft);
	});
	// 事项2019年8月耗时天数  极差  统计  直方图
	$("#mmname201908datarange").click(function(){
		$("#mmname201908data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-08',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年8月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201908data',datazft,layoutzft);

	});
	// 事项2019年8月耗时天数  中位数  统计  直方图
	$("#mmname201908datamedian").click(function(){
		$("#mmname201908data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-08',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年8月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201908data',datazft,layoutzft);
	});
	// 事项2019年8月耗时天数  众数  统计  直方图
	$("#mmname201908datamode").click(function(){
		$("#mmname201908data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-08',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年8月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201908data',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~事项2019年9月统计
	// 事项2019年9月统计 左侧导航 默认
	$("#mmname201909").click(function(){
		$("#showcvs").children().hide();
		$("#mmname201909datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2019-09'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2019年9月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname201909data',datazft,layoutzft);
	});
	// 事项2019年9月统计  直方图
	$("#mmname201909datazft").click(function(){
		$("#mmname201909date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2019-09'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2019年9月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname201909data',datazft,layoutzft);
	});
	// 事项2019年9月统计  饼图
	$("#mmname201909databt").click(function(){
		$("#mmname201909date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2019-09'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'事项2019年9月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmname201909data', databt,layoutbt);

	});
	// 事项2019年9月耗时天数 最大值  统计  直方图
	$("#mmname201909datamax").click(function(){
		$("#mmname201909date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-09',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2019年9月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201909data',datazft,layoutzft);
	});
	// 事项2019年9月耗时天数 最小值  统计  直方图
	$("#mmname201909datamin").click(function(){
		$("#mmname201909data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-09',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年9月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201909data',datazft,layoutzft);
	});
	// 事项2019年9月耗时天数  极差  统计  直方图
	$("#mmname201909datarange").click(function(){
		$("#mmname201909data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-09',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年9月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201909data',datazft,layoutzft);

	});
	// 事项2019年9月耗时天数  中位数  统计  直方图
	$("#mmname201909datamedian").click(function(){
		$("#mmname201909data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-09',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年9月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201909data',datazft,layoutzft);
	});
	// 事项2019年9月耗时天数  众数  统计  直方图
	$("#mmname201909datamode").click(function(){
		$("#mmname201909data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-09',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年9月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201909data',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~事项2019年10月统计
	// 事项2019年10月统计 左侧导航 默认
	$("#mmname201910").click(function(){
		$("#showcvs").children().hide();
		$("#mmname201910datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2019-10'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2019年10月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname201910data',datazft,layoutzft);
	});
	// 事项2019年10月统计  直方图
	$("#mmname201910datazft").click(function(){
		$("#mmname201910date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2019-10'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2019年10月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname201910data',datazft,layoutzft);
	});
	// 事项2019年10月统计  饼图
	$("#mmname201910databt").click(function(){
		$("#mmname201910date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2019-10'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'事项2019年10月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmname201910data', databt,layoutbt);

	});
	// 事项2019年10月耗时天数 最大值  统计  直方图
	$("#mmname201910datamax").click(function(){
		$("#mmname201910date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-10',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2019年10月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201910data',datazft,layoutzft);
	});
	// 事项2019年10月耗时天数 最小值  统计  直方图
	$("#mmname201910datamin").click(function(){
		$("#mmname201910data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-10',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年10月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201910data',datazft,layoutzft);
	});
	// 事项2019年10月耗时天数  极差  统计  直方图
	$("#mmname201910datarange").click(function(){
		$("#mmname201910data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-10',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年10月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201910data',datazft,layoutzft);

	});
	// 事项2019年10月耗时天数  中位数  统计  直方图
	$("#mmname201910datamedian").click(function(){
		$("#mmname201910data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-10',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年10月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201910data',datazft,layoutzft);
	});
	// 事项2019年10月耗时天数  众数  统计  直方图
	$("#mmname201910datamode").click(function(){
		$("#mmname201910data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-10',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年10月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201910data',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~事项2019年11月统计
	// 事项2019年11月统计 左侧导航 默认
	$("#mmname201911").click(function(){
		$("#showcvs").children().hide();
		$("#mmname201911datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2019-11'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2019年11月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname201911data',datazft,layoutzft);
	});
	// 事项2019年11月统计  直方图
	$("#mmname201911datazft").click(function(){
		$("#mmname201911date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2019-11'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2019年11月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname201911data',datazft,layoutzft);
	});
	// 事项2019年11月统计  饼图
	$("#mmname201911databt").click(function(){
		$("#mmname201911date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2019-11'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'事项2019年11月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmname201911data', databt,layoutbt);

	});
	// 事项2019年11月耗时天数 最大值  统计  直方图
	$("#mmname201911datamax").click(function(){
		$("#mmname201911date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-11',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2019年11月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201911data',datazft,layoutzft);
	});
	// 事项2019年11月耗时天数 最小值  统计  直方图
	$("#mmname201911datamin").click(function(){
		$("#mmname201911data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-11',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年11月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201911data',datazft,layoutzft);
	});
	// 事项2019年11月耗时天数  极差  统计  直方图
	$("#mmname201911datarange").click(function(){
		$("#mmname201911data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-11',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年11月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201911data',datazft,layoutzft);

	});
	// 事项2019年11月耗时天数  中位数  统计  直方图
	$("#mmname201911datamedian").click(function(){
		$("#mmname201911data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-11',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年11月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201911data',datazft,layoutzft);
	});
	// 事项2019年11月耗时天数  众数  统计  直方图
	$("#mmname201911datamode").click(function(){
		$("#mmname201911data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-11',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年11月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201911data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~事项2019年12月统计
	// 事项2019年12月统计 左侧导航 默认
	$("#mmname201912").click(function(){
		$("#showcvs").children().hide();
		$("#mmname201912datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2019-12'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2019年12月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname201912data',datazft,layoutzft);
	});
	// 事项2019年12月统计  直方图
	$("#mmname201912datazft").click(function(){
		$("#mmname201912date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2019-12'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2019年12月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname201912data',datazft,layoutzft);
	});
	// 事项2019年12月统计  饼图
	$("#mmname201912databt").click(function(){
		$("#mmname201912date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2019-12'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'事项2019年12月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmname201912data', databt,layoutbt);

	});
	// 事项2019年12月耗时天数 最大值  统计  直方图
	$("#mmname201912datamax").click(function(){
		$("#mmname201912date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-12',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2019年12月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201912data',datazft,layoutzft);
	});
	// 事项2019年12月耗时天数 最小值  统计  直方图
	$("#mmname201912datamin").click(function(){
		$("#mmname201912data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-12',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年12月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201912data',datazft,layoutzft);
	});
	// 事项2019年12月耗时天数  极差  统计  直方图
	$("#mmname201912datarange").click(function(){
		$("#mmname201912data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-12',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年12月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201912data',datazft,layoutzft);

	});
	// 事项2019年12月耗时天数  中位数  统计  直方图
	$("#mmname201912datamedian").click(function(){
		$("#mmname201912data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-12',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年12月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201912data',datazft,layoutzft);
	});
	// 事项2019年12月耗时天数  众数  统计  直方图
	$("#mmname201912datamode").click(function(){
		$("#mmname201912data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2019-12',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2019年12月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname201912data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~事项2020年1月统计
	// 事项2020年1月统计 左侧导航 默认
	$("#mmname202001").click(function(){
		$("#showcvs").children().hide();
		$("#mmname202001datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2020-01'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2020年1月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname202001data',datazft,layoutzft);
	});
	// 事项2020年1月统计  直方图
	$("#mmname202001datazft").click(function(){
		$("#mmname202001date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2020-01'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2020年1月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname202001data',datazft,layoutzft);
	});
	// 事项2020年1月统计  饼图
	$("#mmname202001databt").click(function(){
		$("#mmname202001date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2020-01'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'事项2020年1月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmname202001data', databt,layoutbt);

	});
	// 事项2020年1月耗时天数 最大值  统计  直方图
	$("#mmname202001datamax").click(function(){
		$("#mmname202001date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-01',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2020年1月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202001data',datazft,layoutzft);
	});
	// 事项2020年1月耗时天数 最小值  统计  直方图
	$("#mmname202001datamin").click(function(){
		$("#mmname202001data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-01',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年1月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202001data',datazft,layoutzft);
	});
	// 事项2020年1月耗时天数  极差  统计  直方图
	$("#mmname202001datarange").click(function(){
		$("#mmname202001data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-01',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年1月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202001data',datazft,layoutzft);

	});
	// 事项2020年1月耗时天数  中位数  统计  直方图
	$("#mmname202001datamedian").click(function(){
		$("#mmname202001data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-01',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年1月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202001data',datazft,layoutzft);
	});
	// 事项2020年1月耗时天数  众数  统计  直方图
	$("#mmname202001datamode").click(function(){
		$("#mmname202001data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-01',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年1月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202001data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~事项2020年2月统计
	// 事项2020年2月统计 左侧导航 默认
	$("#mmname202002").click(function(){
		$("#showcvs").children().hide();
		$("#mmname202002datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2020-02'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2020年2月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname202002data',datazft,layoutzft);
	});
	// 事项2020年2月统计  直方图
	$("#mmname202002datazft").click(function(){
		$("#mmname202002date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2020-02'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2020年2月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname202002data',datazft,layoutzft);
	});
	// 事项2020年2月统计  饼图
	$("#mmname202002databt").click(function(){
		$("#mmname202002date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2020-02'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'事项2020年2月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmname202002data', databt,layoutbt);

	});
	// 事项2020年2月耗时天数 最大值  统计  直方图
	$("#mmname202002datamax").click(function(){
		$("#mmname202002date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-02',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2020年2月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202002data',datazft,layoutzft);
	});
	// 事项2020年2月耗时天数 最小值  统计  直方图
	$("#mmname202002datamin").click(function(){
		$("#mmname202002data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-02',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年2月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202002data',datazft,layoutzft);
	});
	// 事项2020年2月耗时天数  极差  统计  直方图
	$("#mmname202002datarange").click(function(){
		$("#mmname202002data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-02',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年2月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202002data',datazft,layoutzft);

	});
	// 事项2020年2月耗时天数  中位数  统计  直方图
	$("#mmname202002datamedian").click(function(){
		$("#mmname202002data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-02',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年2月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202002data',datazft,layoutzft);
	});
	// 事项2020年2月耗时天数  众数  统计  直方图
	$("#mmname202002datamode").click(function(){
		$("#mmname202002data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-02',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年2月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202002data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~事项2020年3月统计
	// 事项2020年3月统计 左侧导航 默认
	$("#mmname202003").click(function(){
		$("#showcvs").children().hide();
		$("#mmname202003datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2020-03'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2020年3月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname202003data',datazft,layoutzft);
	});
	// 事项2020年3月统计  直方图
	$("#mmname202003datazft").click(function(){
		$("#mmname202003date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2020-03'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2020年3月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname202003data',datazft,layoutzft);
	});
	// 事项2020年3月统计  饼图
	$("#mmname202003databt").click(function(){
		$("#mmname202003date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2020-03'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'事项2020年3月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmname202003data', databt,layoutbt);

	});
	// 事项2020年3月耗时天数 最大值  统计  直方图
	$("#mmname202003datamax").click(function(){
		$("#mmname202003date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-03',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2020年3月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202003data',datazft,layoutzft);
	});
	// 事项2020年3月耗时天数 最小值  统计  直方图
	$("#mmname202003datamin").click(function(){
		$("#mmname202003data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-03',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年3月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202003data',datazft,layoutzft);
	});
	// 事项2020年3月耗时天数  极差  统计  直方图
	$("#mmname202003datarange").click(function(){
		$("#mmname202003data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-03',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年3月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202003data',datazft,layoutzft);

	});
	// 事项2020年3月耗时天数  中位数  统计  直方图
	$("#mmname202003datamedian").click(function(){
		$("#mmname202003data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-03',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年3月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202003data',datazft,layoutzft);
	});
	// 事项2020年3月耗时天数  众数  统计  直方图
	$("#mmname202003datamode").click(function(){
		$("#mmname202003data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-03',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年3月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202003data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~事项2020年4月统计
	// 事项2020年4月统计 左侧导航 默认
	$("#mmname202004").click(function(){
		$("#showcvs").children().hide();
		$("#mmname202004datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2020-04'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2020年4月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname202004data',datazft,layoutzft);
	});
	// 事项2020年4月统计  直方图
	$("#mmname202004datazft").click(function(){
		$("#mmname202004date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2020-04'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2020年4月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname202004data',datazft,layoutzft);
	});
	// 事项2020年4月统计  饼图
	$("#mmname202004databt").click(function(){
		$("#mmname202004date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2020-04'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'事项2020年4月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmname202004data', databt,layoutbt);

	});
	// 事项2020年4月耗时天数 最大值  统计  直方图
	$("#mmname202004datamax").click(function(){
		$("#mmname202004date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-04',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2020年4月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202004data',datazft,layoutzft);
	});
	// 事项2020年4月耗时天数 最小值  统计  直方图
	$("#mmname202004datamin").click(function(){
		$("#mmname202004data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-04',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年4月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202004data',datazft,layoutzft);
	});
	// 事项2020年4月耗时天数  极差  统计  直方图
	$("#mmname202004datarange").click(function(){
		$("#mmname202004data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-04',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年4月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202004data',datazft,layoutzft);

	});
	// 事项2020年4月耗时天数  中位数  统计  直方图
	$("#mmname202004datamedian").click(function(){
		$("#mmname202004data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-04',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年4月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202004data',datazft,layoutzft);
	});
	// 事项2020年4月耗时天数  众数  统计  直方图
	$("#mmname202004datamode").click(function(){
		$("#mmname202004data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-04',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年4月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202004data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~事项2020年5月统计
	// 事项2020年5月统计 左侧导航 默认
	$("#mmname202005").click(function(){
		$("#showcvs").children().hide();
		$("#mmname202005datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2020-05'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2020年5月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname202005data',datazft,layoutzft);
	});
	// 事项2020年5月统计  直方图
	$("#mmname202005datazft").click(function(){
		$("#mmname202005date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2020-05'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2020年5月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname202005data',datazft,layoutzft);
	});
	// 事项2020年5月统计  饼图
	$("#mmname202005databt").click(function(){
		$("#mmname202005date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2020-05'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'事项2020年5月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmname202005data', databt,layoutbt);

	});
	// 事项2020年5月耗时天数 最大值  统计  直方图
	$("#mmname202005datamax").click(function(){
		$("#mmname202005date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-05',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2020年5月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202005data',datazft,layoutzft);
	});
	// 事项2020年5月耗时天数 最小值  统计  直方图
	$("#mmname202005datamin").click(function(){
		$("#mmname202005data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-05',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年5月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202005data',datazft,layoutzft);
	});
	// 事项2020年5月耗时天数  极差  统计  直方图
	$("#mmname202005datarange").click(function(){
		$("#mmname202005data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-05',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年5月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202005data',datazft,layoutzft);

	});
	// 事项2020年5月耗时天数  中位数  统计  直方图
	$("#mmname202005datamedian").click(function(){
		$("#mmname202005data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-05',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年5月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202005data',datazft,layoutzft);
	});
	// 事项2020年5月耗时天数  众数  统计  直方图
	$("#mmname202005datamode").click(function(){
		$("#mmname202005data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-05',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年5月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202005data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~事项2020年6月统计
	// 事项2020年6月统计 左侧导航 默认
	$("#mmname202006").click(function(){
		$("#showcvs").children().hide();
		$("#mmname202006datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2020-06'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2020年6月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname202006data',datazft,layoutzft);
	});
	// 事项2020年6月统计  直方图
	$("#mmname202006datazft").click(function(){
		$("#mmname202006date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2020-06'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2020年6月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname202006data',datazft,layoutzft);
	});
	// 事项2020年6月统计  饼图
	$("#mmname202006databt").click(function(){
		$("#mmname202006date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2020-06'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'事项2020年6月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmname202006data', databt,layoutbt);

	});
	// 事项2020年6月耗时天数 最大值  统计  直方图
	$("#mmname202006datamax").click(function(){
		$("#mmname202006date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-06',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2020年6月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202006data',datazft,layoutzft);
	});
	// 事项2020年6月耗时天数 最小值  统计  直方图
	$("#mmname202006datamin").click(function(){
		$("#mmname202006data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-06',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年6月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202006data',datazft,layoutzft);
	});
	// 事项2020年6月耗时天数  极差  统计  直方图
	$("#mmname202006datarange").click(function(){
		$("#mmname202006data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-06',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年6月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202006data',datazft,layoutzft);

	});
	// 事项2020年6月耗时天数  中位数  统计  直方图
	$("#mmname202006datamedian").click(function(){
		$("#mmname202006data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-06',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年6月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202006data',datazft,layoutzft);
	});
	// 事项2020年6月耗时天数  众数  统计  直方图
	$("#mmname202006datamode").click(function(){
		$("#mmname202006data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-06',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年6月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202006data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~事项2020年7月统计
	// 事项2020年7月统计 左侧导航 默认
	$("#mmname202007").click(function(){
		$("#showcvs").children().hide();
		$("#mmname202007datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2020-07'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2020年7月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname202007data',datazft,layoutzft);
	});
	// 事项2020年7月统计  直方图
	$("#mmname202007datazft").click(function(){
		$("#mmname202007date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2020-07'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2020年7月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname202007data',datazft,layoutzft);
	});
	// 事项2020年7月统计  饼图
	$("#mmname202007databt").click(function(){
		$("#mmname202007date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2020-07'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'事项2020年7月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmname202007data', databt,layoutbt);

	});
	// 事项2020年7月耗时天数 最大值  统计  直方图
	$("#mmname202007datamax").click(function(){
		$("#mmname202007date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-07',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2020年7月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202007data',datazft,layoutzft);
	});
	// 事项2020年7月耗时天数 最小值  统计  直方图
	$("#mmname202007datamin").click(function(){
		$("#mmname202007data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-07',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年7月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202007data',datazft,layoutzft);
	});
	// 事项2020年7月耗时天数  极差  统计  直方图
	$("#mmname202007datarange").click(function(){
		$("#mmname202007data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-07',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年7月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202007data',datazft,layoutzft);

	});
	// 事项2020年7月耗时天数  中位数  统计  直方图
	$("#mmname202007datamedian").click(function(){
		$("#mmname202007data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-07',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年7月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202007data',datazft,layoutzft);
	});
	// 事项2020年7月耗时天数  众数  统计  直方图
	$("#mmname202007datamode").click(function(){
		$("#mmname202007data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-07',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年7月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202007data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~事项2020年8月统计
	// 事项2020年8月统计 左侧导航 默认
	$("#mmname202008").click(function(){
		$("#showcvs").children().hide();
		$("#mmname202008datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2020-08'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2020年8月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname202008data',datazft,layoutzft);
	});
	// 事项2020年8月统计  直方图
	$("#mmname202008datazft").click(function(){
		$("#mmname202008date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2020-08'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2020年8月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname202008data',datazft,layoutzft);
	});
	// 事项2020年8月统计  饼图
	$("#mmname202008databt").click(function(){
		$("#mmname202008date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2020-08'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'事项2020年8月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmname202008data', databt,layoutbt);

	});
	// 事项2020年8月耗时天数 最大值  统计  直方图
	$("#mmname202008datamax").click(function(){
		$("#mmname202008date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-08',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2020年8月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202008data',datazft,layoutzft);
	});
	// 事项2020年8月耗时天数 最小值  统计  直方图
	$("#mmname202008datamin").click(function(){
		$("#mmname202008data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-08',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年8月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202008data',datazft,layoutzft);
	});
	// 事项2020年8月耗时天数  极差  统计  直方图
	$("#mmname202008datarange").click(function(){
		$("#mmname202008data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-08',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年8月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202008data',datazft,layoutzft);

	});
	// 事项2020年8月耗时天数  中位数  统计  直方图
	$("#mmname202008datamedian").click(function(){
		$("#mmname202008data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-08',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年8月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202008data',datazft,layoutzft);
	});
	// 事项2020年8月耗时天数  众数  统计  直方图
	$("#mmname202008datamode").click(function(){
		$("#mmname202008data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-08',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年8月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202008data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~事项2020年9月统计
	// 事项2020年9月统计 左侧导航 默认
	$("#mmname202009").click(function(){
		$("#showcvs").children().hide();
		$("#mmname202009datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2020-09'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2020年9月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname202009data',datazft,layoutzft);
	});
	// 事项2020年9月统计  直方图
	$("#mmname202009datazft").click(function(){
		$("#mmname202009date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2020-09'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2020年9月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmname202009data',datazft,layoutzft);
	});
	// 事项2020年9月统计  饼图
	$("#mmname202009databt").click(function(){
		$("#mmname202009date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmnamedata/selectAll.do",
			data: {
				"date" : '2020-09'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mMCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'事项2020年9月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmname202009data', databt,layoutbt);

	});
	// 事项2020年9月耗时天数 最大值  统计  直方图
	$("#mmname202009datamax").click(function(){
		$("#mmname202009date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-09',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'事项2020年9月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202009data',datazft,layoutzft);
	});
	// 事项2020年9月耗时天数 最小值  统计  直方图
	$("#mmname202009datamin").click(function(){
		$("#mmname202009data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-09',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年9月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202009data',datazft,layoutzft);
	});
	// 事项2020年9月耗时天数  极差  统计  直方图
	$("#mmname202009datarange").click(function(){
		$("#mmname202009data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-09',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年9月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202009data',datazft,layoutzft);

	});
	// 事项2020年9月耗时天数  中位数  统计  直方图
	$("#mmname202009datamedian").click(function(){
		$("#mmname202009data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-09',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年9月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202009data',datazft,layoutzft);
	});
	// 事项2020年9月耗时天数  众数  统计  直方图
	$("#mmname202009datamode").click(function(){
		$("#mmname202009data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameAll.do",
			data: {
				"yy" : '2020-09',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'事项2020年9月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmname202009data',datazft,layoutzft);
	});


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~区划年统计
	// 区划年统计 左侧导航 默认
	$("#yyregion").click(function(){
		$("#showcvs").children().hide();
		$("#yyregiondatashow").show();

		var dateList = ['2019','2020'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/yyregiondata/selectAll.do",
				data: {
					"date" : dateList[i]
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cRegion);
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
			title:'区划每年办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('yyregiondata',datazft,layoutzft);
	});
	// 区划年统计  直方图
	$("#yyregiondatazft").click(function(){
		$("#yyregiondata").empty();
		var dateList = ['2019','2020'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/yyregiondata/selectAll.do",
				data: {
					"date" : dateList[i]
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cRegion);
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
			title:'区划每年办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('yyregiondata',datazft,layoutzft);
	});
	// 区划年统计  饼图
	$("#yyregiondatabt").click(function(){
		$("#yyregiondata").empty();
		var dateList = ['2019','2020'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/yyregiondata/selectAll.do",
				data: {
					"date" : dateList[i]
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cRegion);
						y.push(data[i].cCount);
					}
					mapx.push(x);
					mapy.push(y);
				}
			});
		}
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
			title:'区划每年办件量饼图',
			width: 1600,
			height: 750,
			grid: {rows: 3, columns: 5}
		};
		Plotly.newPlot('yyregiondata', databt,layoutbt);
	});
	// 区划年耗时天数 最大值  统计  直方图
	$("#yyregiondatamax").click(function(){
		$("#yyregiondata").empty();
		var dateList = ['2019','2020'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectRegionAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "max"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cRegion);
						y.push(data[i].maxDate);
					}
					mapx.push(x);
					mapy.push(y);
				}
			});
		}
		var datazft = [{x: mapx[0],y: mapy[0],type: "histogram",histfunc: "sum",name: dateList[0]},{
			x: mapx[1],y: mapy[1],type: "histogram",histfunc: "sum",name: dateList[1]}]

		var layoutzft ={
			title:'区划年耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyregiondata',datazft,layoutzft);
	});
	// 区划年耗时天数 最小值  统计  直方图
	$("#yyregiondatamin").click(function(){
		$("#yyregiondata").empty();
		var dateList = ['2019','2020'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectRegionAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "min"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cRegion);
						y.push(data[i].minDate);
					}
					mapx.push(x);
					mapy.push(y);
				}
			});
		}
		var datazft = [{x: mapx[0],y: mapy[0],type: "histogram",histfunc: "sum",name: dateList[0]},{
			x: mapx[1],y: mapy[1],type: "histogram",histfunc: "sum",name: dateList[1]}]

		var layoutzft ={
			title:'区划年耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyregiondata',datazft,layoutzft);
	});
	// 区划年耗时天数  极差  统计  直方图
	$("#yyregiondatarange").click(function(){
		$("#yyregiondata").empty();
		var dateList = ['2019','2020'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectRegionAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "range"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cRegion);
						y.push(data[i].rangeDate);
					}
					mapx.push(x);
					mapy.push(y);
				}
			});
		}
		var datazft = [{x: mapx[0],y: mapy[0],type: "histogram",histfunc: "sum",name: dateList[0]},{
			x: mapx[1],y: mapy[1],type: "histogram",histfunc: "sum",name: dateList[1]}]

		var layoutzft ={
			title:'区划年耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyregiondata',datazft,layoutzft);
	});
	// 区划年耗时天数  中位数  统计  直方图
	$("#yyregiondatamedian").click(function(){
		$("#yyregiondata").empty();
		var dateList = ['2019','2020'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectRegionAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "median"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cRegion);
						y.push(data[i].median);
					}
					mapx.push(x);
					mapy.push(y);
				}
			});
		}
		var datazft = [{x: mapx[0],y: mapy[0],type: "histogram",histfunc: "sum",name: dateList[0]},{
			x: mapx[1],y: mapy[1],type: "histogram",histfunc: "sum",name: dateList[1]}]

		var layoutzft ={
			title:'区划年耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyregiondata',datazft,layoutzft);
	});
	// 区划年耗时天数  众数  统计  直方图
	$("#yyregiondatamode").click(function(){
		$("#yyregiondata").empty();
		var dateList = ['2019','2020'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectRegionAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "mode"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cRegion);
						y.push(data[i].mode);
					}
					mapx.push(x);
					mapy.push(y);
				}
			});
		}
		var datazft = [{x: mapx[0],y: mapy[0],type: "histogram",histfunc: "sum",name: dateList[0]},{
			x: mapx[1],y: mapy[1],type: "histogram",histfunc: "sum",name: dateList[1]}]

		var layoutzft ={
			title:'区划年耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyregiondata',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~区划2019年统计
	// 区划2019年统计 左侧导航 默认
	$("#yyregion2019").click(function(){
		$("#showcvs").children().hide();
		$("#yyregion2019dateshow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/yyregiondata/selectAll.do",
			data: {
				"date" : '2019'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2019}]
		var layoutzft ={
			title:'区划2019年办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('yyregion2019date',datazft,layoutzft);
	});
	// 区划2019年统计  直方图
	$("#yyregion2019datazft").click(function(){
		$("#yyregion2019date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/yyregiondata/selectAll.do",
			data: {
				"date" : '2019'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2019}]
		var layoutzft ={
			title:'区划2019年办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('yyregion2019date',datazft,layoutzft);
	});
	// 区划2019年统计  饼图
	$("#yyregion2019databt").click(function(){
		$("#yyregion2019date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/yyregiondata/selectAll.do",
			data: {
				"date" : '2019'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2019,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'区划2019年办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 1, columns: 2}
		};
		Plotly.newPlot('yyregion2019date', databt,layoutbt);
	});
	// 区划2019年耗时天数 最大值  统计  直方图
	$("#yyregion2019datamax").click(function(){
		$("#yyregion2019date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2019}]
		var layoutzft ={
			title:'区划2019耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyregion2019date',datazft,layoutzft);
	});
	// 区划2019年耗时天数 最小值  统计  直方图
	$("#yyregion2019datamin").click(function(){
		$("#yyregion2019data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2019}]

		var layoutzft ={
			title:'区划2019年耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyregion2019date',datazft,layoutzft);
	});
	// 区划2019年耗时天数  极差  统计  直方图
	$("#yyregion2019datarange").click(function(){
		$("#yyregion2019data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2019}]

		var layoutzft ={
			title:'区划2019年耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyregion2019date',datazft,layoutzft);
	});
	// 区划2019年耗时天数  中位数  统计  直方图
	$("#yyregion2019datamedian").click(function(){
		$("#yyregion2019data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2019}]

		var layoutzft ={
			title:'区划2019年耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyregion2019date',datazft,layoutzft);
	});
	// 区划2019年耗时天数  众数  统计  直方图
	$("#yyregion2019datamode").click(function(){
		$("#yyregion2019data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2019}]

		var layoutzft ={
			title:'区划2019年耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyregion2019date',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~区划2020年统计
	// 区划2020年统计 左侧导航 默认
	$("#yyregion2020").click(function(){
		$("#showcvs").children().hide();
		$("#yyregion2020dateshow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/yyregiondata/selectAll.do",
			data: {
				"date" : '2020'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2020年办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('yyregion2020data',datazft,layoutzft);
	});
	// 区划2020年统计  直方图
	$("#yyregion2020datazft").click(function(){
		$("#yyregion2020date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/yyregiondata/selectAll.do",
			data: {
				"date" : '2020'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2020年办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('yyregion2020data',datazft,layoutzft);
	});
	// 区划2020年统计  饼图
	$("#yyregion2020databt").click(function(){
		$("#yyregion2020date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/yyregiondata/selectAll.do",
			data: {
				"date" : '2020'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'区划2020年办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('yyregion2020data', databt,layoutbt);

	});
	// 区划2020年耗时天数 最大值  统计  直方图
	$("#yyregion2020datamax").click(function(){
		$("#yyregion2020date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2020耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyregion2020data',datazft,layoutzft);
	});
	// 区划2020年耗时天数 最小值  统计  直方图
	$("#yyregion2020datamin").click(function(){
		$("#yyregion2020data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyregion2020data',datazft,layoutzft);
	});
	// 区划2020年耗时天数  极差  统计  直方图
	$("#yyregion2020datarange").click(function(){
		$("#yyregion2020data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyregion2020data',datazft,layoutzft);

	});
	// 区划2020年耗时天数  中位数  统计  直方图
	$("#yyregion2020datamedian").click(function(){
		$("#yyregion2020data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyregion2020data',datazft,layoutzft);
	});
	// 区划2020年耗时天数  众数  统计  直方图
	$("#yyregion2020datamode").click(function(){
		$("#yyregion2020data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyregion2020data',datazft,layoutzft);
	});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~区划月统计
	// 区划月统计 左侧导航 默认
	$("#mmregion").click(function(){
		$("#showcvs").children().hide();
		$("#mmregiondatashow").show();
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
				url: "/mmregiondata/selectAll.do",
				data: {
					"date" : dateList[i]
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cRegion);
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
			title:'区划每个月办件量直方图',width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregiondata',datazft,layoutzft);
	});
	// 区划月统计  直方图
	$("#mmregiondatazft").click(function(){
		$("#mmregiondata").empty();
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
				url: "/mmregiondata/selectAll.do",
				data: {
					"date" : dateList[i]
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cRegion);
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
			title:'区划每个月办件量直方图',width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregiondata',datazft,layoutzft);
	});
	// 区划年统计  饼图
	$("#mmregiondatabt").click(function(){
		$("#mmregiondata").empty();
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
				url: "/mmregiondata/selectAll.do",
				data: {
					"date" : dateList[i]
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cRegion);
						y.push(data[i].cCount);
					}
					mapx.push(x);
					mapy.push(y);
				}
			});
		}
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
			title:'区划每个月办件量饼图',
			width: 2200,
			height: 790,
			grid: {rows: 3, columns: 8}
		};

		Plotly.newPlot('mmregiondata', databt,layoutbt);
	});
	// 区划年耗时天数 最大值  统计  直方图
	$("#mmregiondatamax").click(function(){
		$("#mmregiondata").empty();
		var dateList = ['2019-01','2019-02','2019-03','2019-04','2019-05','2019-06','2019-07','2019-08','2019-09','2019-10','2019-11','2019-12',
			'2020-01','2020-02','2020-03','2020-04','2020-05','2020-06','2020-07','2020-08','2020-09'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectRegionAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "max"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cRegion);
						y.push(data[i].maxDate);
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
			title:'区划月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregiondata',datazft,layoutzft);
	});
	// 区划年耗时天数 最小值  统计  直方图
	$("#mmregiondatamin").click(function(){
		$("#mmregiondata").empty();
		var dateList = ['2019-01','2019-02','2019-03','2019-04','2019-05','2019-06','2019-07','2019-08','2019-09','2019-10','2019-11','2019-12',
			'2020-01','2020-02','2020-03','2020-04','2020-05','2020-06','2020-07','2020-08','2020-09'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectRegionAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "min"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cRegion);
						y.push(data[i].minDate);
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
			title:'区划月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregiondata',datazft,layoutzft);
	});
	// 区划年耗时天数  极差  统计  直方图
	$("#mmregiondatarange").click(function(){
		$("#mmregiondata").empty();
		var dateList = ['2019-01','2019-02','2019-03','2019-04','2019-05','2019-06','2019-07','2019-08','2019-09','2019-10','2019-11','2019-12',
			'2020-01','2020-02','2020-03','2020-04','2020-05','2020-06','2020-07','2020-08','2020-09'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectRegionAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "range"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cRegion);
						y.push(data[i].rangeDate);
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
			title:'区划月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregiondata',datazft,layoutzft);
	});
	// 区划年耗时天数  中位数  统计  直方图
	$("#mmregiondatamedian").click(function(){
		$("#mmregiondata").empty();
		var dateList = ['2019-01','2019-02','2019-03','2019-04','2019-05','2019-06','2019-07','2019-08','2019-09','2019-10','2019-11','2019-12',
			'2020-01','2020-02','2020-03','2020-04','2020-05','2020-06','2020-07','2020-08','2020-09'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectRegionAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "median"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cRegion);
						y.push(data[i].median);
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
			title:'区划月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregiondata',datazft,layoutzft);
	});
	// 区划年耗时天数  众数  统计  直方图
	$("#mmregiondatamode").click(function(){
		$("#ymmregiondata").empty();
		var dateList = ['2019-01','2019-02','2019-03','2019-04','2019-05','2019-06','2019-07','2019-08','2019-09','2019-10','2019-11','2019-12',
			'2020-01','2020-02','2020-03','2020-04','2020-05','2020-06','2020-07','2020-08','2020-09'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectRegionAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "mode"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cRegion);
						y.push(data[i].mode);
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
			title:'区划月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregiondata',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~区划2019年1月统计
	// 区划2019年1月统计 左侧导航 默认
	$("#mmregion201901").click(function(){
		$("#showcvs").children().hide();
		$("#mmregion201901datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2019-01'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2019年1月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion201901data',datazft,layoutzft);
	});
	// 区划2019年1月统计  直方图
	$("#mmregion201901datazft").click(function(){
		$("#mmregion201901date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2019-01'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2019年1月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion201901data',datazft,layoutzft);
	});
	// 区划2019年1月统计  饼图
	$("#mmregion201901databt").click(function(){
		$("#mmregion201901date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2019-01'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'区划2019年1月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmregion201901data', databt,layoutbt);

	});
	// 区划2019年1月耗时天数 最大值  统计  直方图
	$("#mmregion201901datamax").click(function(){
		$("#mmregion201901date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-01',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2019年1月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201901data',datazft,layoutzft);
	});
	// 区划2019年1月耗时天数 最小值  统计  直方图
	$("#mmregion201901datamin").click(function(){
		$("#mmregion201901data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-01',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年1月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201901data',datazft,layoutzft);
	});
	// 区划2019年1月耗时天数  极差  统计  直方图
	$("#mmregion201901datarange").click(function(){
		$("#mmregion201901data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-01',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年1月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201901data',datazft,layoutzft);

	});
	// 区划2019年1月耗时天数  中位数  统计  直方图
	$("#mmregion201901datamedian").click(function(){
		$("#mmregion201901data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-01',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年1月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201901data',datazft,layoutzft);
	});
	// 区划2019年1月耗时天数  众数  统计  直方图
	$("#mmregion201901datamode").click(function(){
		$("#mmregion201901data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-01',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年1月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201901data',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~区划2019年2月统计
	// 区划2019年2月统计 左侧导航 默认
	$("#mmregion201902").click(function(){
		$("#showcvs").children().hide();
		$("#mmregion201902datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2019-02'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2019年2月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion201902data',datazft,layoutzft);
	});
	// 区划2019年2月统计  直方图
	$("#mmregion201902datazft").click(function(){
		$("#mmregion201902date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2019-02'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2019年2月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion201902data',datazft,layoutzft);
	});
	// 区划2019年2月统计  饼图
	$("#mmregion201902databt").click(function(){
		$("#mmregion201902date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2019-02'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'区划2019年2月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmregion201902data', databt,layoutbt);

	});
	// 区划2019年2月耗时天数 最大值  统计  直方图
	$("#mmregion201902datamax").click(function(){
		$("#mmregion201902date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-02',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2019年2月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201902data',datazft,layoutzft);
	});
	// 区划2019年2月耗时天数 最小值  统计  直方图
	$("#mmregion201902datamin").click(function(){
		$("#mmregion201902data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-02',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年2月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201902data',datazft,layoutzft);
	});
	// 区划2019年2月耗时天数  极差  统计  直方图
	$("#mmregion201902datarange").click(function(){
		$("#mmregion201902data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-02',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年2月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201902data',datazft,layoutzft);

	});
	// 区划2019年2月耗时天数  中位数  统计  直方图
	$("#mmregion201902datamedian").click(function(){
		$("#mmregion201902data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-02',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年2月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201902data',datazft,layoutzft);
	});
	// 区划2019年2月耗时天数  众数  统计  直方图
	$("#mmregion201902datamode").click(function(){
		$("#mmregion201902data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-02',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年2月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201902data',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~区划2019年3月统计
	// 区划2019年3月统计 左侧导航 默认
	$("#mmregion201903").click(function(){
		$("#showcvs").children().hide();
		$("#mmregion201903datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2019-03'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2019年3月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion201903data',datazft,layoutzft);
	});
	// 区划2019年3月统计  直方图
	$("#mmregion201903datazft").click(function(){
		$("#mmregion201903date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2019-03'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2019年3月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion201903data',datazft,layoutzft);
	});
	// 区划2019年3月统计  饼图
	$("#mmregion201903databt").click(function(){
		$("#mmregion201903date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2019-03'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'区划2019年3月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmregion201903data', databt,layoutbt);

	});
	// 区划2019年3月耗时天数 最大值  统计  直方图
	$("#mmregion201903datamax").click(function(){
		$("#mmregion201903date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-03',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2019年3月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201903data',datazft,layoutzft);
	});
	// 区划2019年3月耗时天数 最小值  统计  直方图
	$("#mmregion201903datamin").click(function(){
		$("#mmregion201903data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-03',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年3月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201903data',datazft,layoutzft);
	});
	// 区划2019年3月耗时天数  极差  统计  直方图
	$("#mmregion201903datarange").click(function(){
		$("#mmregion201903data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-03',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年3月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201903data',datazft,layoutzft);

	});
	// 区划2019年3月耗时天数  中位数  统计  直方图
	$("#mmregion201903datamedian").click(function(){
		$("#mmregion201903data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-03',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年3月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201903data',datazft,layoutzft);
	});
	// 区划2019年3月耗时天数  众数  统计  直方图
	$("#mmregion201903datamode").click(function(){
		$("#mmregion201903data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-03',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年3月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201903data',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~区划2019年4月统计
	// 区划2019年4月统计 左侧导航 默认
	$("#mmregion201904").click(function(){
		$("#showcvs").children().hide();
		$("#mmregion201904datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2019-04'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2019年4月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion201904data',datazft,layoutzft);
	});
	// 区划2019年4月统计  直方图
	$("#mmregion201904datazft").click(function(){
		$("#mmregion201904date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2019-04'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2019年4月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion201904data',datazft,layoutzft);
	});
	// 区划2019年4月统计  饼图
	$("#mmregion201904databt").click(function(){
		$("#mmregion201904date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2019-04'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'区划2019年4月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmregion201904data', databt,layoutbt);

	});
	// 区划2019年4月耗时天数 最大值  统计  直方图
	$("#mmregion201904datamax").click(function(){
		$("#mmregion201904date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-04',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2019年4月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201904data',datazft,layoutzft);
	});
	// 区划2019年4月耗时天数 最小值  统计  直方图
	$("#mmregion201904datamin").click(function(){
		$("#mmregion201904data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-04',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年4月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201904data',datazft,layoutzft);
	});
	// 区划2019年4月耗时天数  极差  统计  直方图
	$("#mmregion201904datarange").click(function(){
		$("#mmregion201904data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-04',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年4月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201904data',datazft,layoutzft);

	});
	// 区划2019年4月耗时天数  中位数  统计  直方图
	$("#mmregion201904datamedian").click(function(){
		$("#mmregion201904data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-04',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年4月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201904data',datazft,layoutzft);
	});
	// 区划2019年4月耗时天数  众数  统计  直方图
	$("#mmregion201904datamode").click(function(){
		$("#mmregion201904data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-04',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年4月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201904data',datazft,layoutzft);
	});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~区划2019年5月统计
	// 区划2019年5月统计 左侧导航 默认
	$("#mmregion201905").click(function(){
		$("#showcvs").children().hide();
		$("#mmregion201905datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2019-05'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2019年5月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion201905data',datazft,layoutzft);
	});
	// 区划2019年5月统计  直方图
	$("#mmregion201905datazft").click(function(){
		$("#mmregion201905date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2019-05'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2019年5月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion201905data',datazft,layoutzft);
	});
	// 区划2019年5月统计  饼图
	$("#mmregion201905databt").click(function(){
		$("#mmregion201905date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2019-05'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'区划2019年5月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmregion201905data', databt,layoutbt);

	});
	// 区划2019年5月耗时天数 最大值  统计  直方图
	$("#mmregion201905datamax").click(function(){
		$("#mmregion201905date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-05',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2019年5月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201905data',datazft,layoutzft);
	});
	// 区划2019年5月耗时天数 最小值  统计  直方图
	$("#mmregion201905datamin").click(function(){
		$("#mmregion201905data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-05',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年5月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201905data',datazft,layoutzft);
	});
	// 区划2019年5月耗时天数  极差  统计  直方图
	$("#mmregion201905datarange").click(function(){
		$("#mmregion201905data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-05',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年5月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201905data',datazft,layoutzft);

	});
	// 区划2019年5月耗时天数  中位数  统计  直方图
	$("#mmregion201905datamedian").click(function(){
		$("#mmregion201905data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-05',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年5月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201905data',datazft,layoutzft);
	});
	// 区划2019年5月耗时天数  众数  统计  直方图
	$("#mmregion201905datamode").click(function(){
		$("#mmregion201905data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-05',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年5月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201905data',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~区划2019年6月统计
	// 区划2019年6月统计 左侧导航 默认
	$("#mmregion201906").click(function(){
		$("#showcvs").children().hide();
		$("#mmregion201906datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2019-06'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2019年6月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion201906data',datazft,layoutzft);
	});
	// 区划2019年6月统计  直方图
	$("#mmregion201906datazft").click(function(){
		$("#mmregion201906date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2019-06'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2019年6月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion201906data',datazft,layoutzft);
	});
	// 区划2019年6月统计  饼图
	$("#mmregion201906databt").click(function(){
		$("#mmregion201906date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2019-06'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'区划2019年6月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmregion201906data', databt,layoutbt);

	});
	// 区划2019年6月耗时天数 最大值  统计  直方图
	$("#mmregion201906datamax").click(function(){
		$("#mmregion201906date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-06',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2019年6月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201906data',datazft,layoutzft);
	});
	// 区划2019年6月耗时天数 最小值  统计  直方图
	$("#mmregion201906datamin").click(function(){
		$("#mmregion201906data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-06',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年6月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201906data',datazft,layoutzft);
	});
	// 区划2019年6月耗时天数  极差  统计  直方图
	$("#mmregion201906datarange").click(function(){
		$("#mmregion201906data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-06',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年6月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201906data',datazft,layoutzft);

	});
	// 区划2019年6月耗时天数  中位数  统计  直方图
	$("#mmregion201906datamedian").click(function(){
		$("#mmregion201906data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-06',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年6月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201906data',datazft,layoutzft);
	});
	// 区划2019年6月耗时天数  众数  统计  直方图
	$("#mmregion201906datamode").click(function(){
		$("#mmregion201906data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-06',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年6月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201906data',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~区划2019年7月统计
	// 区划2019年7月统计 左侧导航 默认
	$("#mmregion201907").click(function(){
		$("#showcvs").children().hide();
		$("#mmregion201907datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2019-07'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2019年7月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion201907data',datazft,layoutzft);
	});
	// 区划2019年7月统计  直方图
	$("#mmregion201907datazft").click(function(){
		$("#mmregion201907date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2019-07'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2019年7月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion201907data',datazft,layoutzft);
	});
	// 区划2019年7月统计  饼图
	$("#mmregion201907databt").click(function(){
		$("#mmregion201907date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2019-07'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'区划2019年7月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmregion201907data', databt,layoutbt);

	});
	// 区划2019年7月耗时天数 最大值  统计  直方图
	$("#mmregion201907datamax").click(function(){
		$("#mmregion201907date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-07',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2019年7月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201907data',datazft,layoutzft);
	});
	// 区划2019年7月耗时天数 最小值  统计  直方图
	$("#mmregion201907datamin").click(function(){
		$("#mmregion201907data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-07',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年7月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201907data',datazft,layoutzft);
	});
	// 区划2019年7月耗时天数  极差  统计  直方图
	$("#mmregion201907datarange").click(function(){
		$("#mmregion201907data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-07',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年7月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201907data',datazft,layoutzft);

	});
	// 区划2019年7月耗时天数  中位数  统计  直方图
	$("#mmregion201907datamedian").click(function(){
		$("#mmregion201907data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-07',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年7月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201907data',datazft,layoutzft);
	});
	// 区划2019年7月耗时天数  众数  统计  直方图
	$("#mmregion201907datamode").click(function(){
		$("#mmregion201907data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-07',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年7月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201907data',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~区划2019年8月统计
	// 区划2019年8月统计 左侧导航 默认
	$("#mmregion201908").click(function(){
		$("#showcvs").children().hide();
		$("#mmregion201908datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2019-08'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2019年8月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion201908data',datazft,layoutzft);
	});
	// 区划2019年8月统计  直方图
	$("#mmregion201908datazft").click(function(){
		$("#mmregion201908date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2019-08'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2019年8月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion201908data',datazft,layoutzft);
	});
	// 区划2019年8月统计  饼图
	$("#mmregion201908databt").click(function(){
		$("#mmregion201908date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2019-08'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'区划2019年8月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmregion201908data', databt,layoutbt);

	});
	// 区划2019年8月耗时天数 最大值  统计  直方图
	$("#mmregion201908datamax").click(function(){
		$("#mmregion201908date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-08',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2019年8月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201908data',datazft,layoutzft);
	});
	// 区划2019年8月耗时天数 最小值  统计  直方图
	$("#mmregion201908datamin").click(function(){
		$("#mmregion201908data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-08',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年8月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201908data',datazft,layoutzft);
	});
	// 区划2019年8月耗时天数  极差  统计  直方图
	$("#mmregion201908datarange").click(function(){
		$("#mmregion201908data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-08',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年8月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201908data',datazft,layoutzft);

	});
	// 区划2019年8月耗时天数  中位数  统计  直方图
	$("#mmregion201908datamedian").click(function(){
		$("#mmregion201908data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-08',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年8月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201908data',datazft,layoutzft);
	});
	// 区划2019年8月耗时天数  众数  统计  直方图
	$("#mmregion201908datamode").click(function(){
		$("#mmregion201908data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-08',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年8月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201908data',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~区划2019年9月统计
	// 区划2019年9月统计 左侧导航 默认
	$("#mmregion201909").click(function(){
		$("#showcvs").children().hide();
		$("#mmregion201909datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2019-09'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2019年9月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion201909data',datazft,layoutzft);
	});
	// 区划2019年9月统计  直方图
	$("#mmregion201909datazft").click(function(){
		$("#mmregion201909date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2019-09'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2019年9月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion201909data',datazft,layoutzft);
	});
	// 区划2019年9月统计  饼图
	$("#mmregion201909databt").click(function(){
		$("#mmregion201909date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2019-09'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'区划2019年9月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmregion201909data', databt,layoutbt);

	});
	// 区划2019年9月耗时天数 最大值  统计  直方图
	$("#mmregion201909datamax").click(function(){
		$("#mmregion201909date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-09',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2019年9月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201909data',datazft,layoutzft);
	});
	// 区划2019年9月耗时天数 最小值  统计  直方图
	$("#mmregion201909datamin").click(function(){
		$("#mmregion201909data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-09',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年9月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201909data',datazft,layoutzft);
	});
	// 区划2019年9月耗时天数  极差  统计  直方图
	$("#mmregion201909datarange").click(function(){
		$("#mmregion201909data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-09',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年9月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201909data',datazft,layoutzft);

	});
	// 区划2019年9月耗时天数  中位数  统计  直方图
	$("#mmregion201909datamedian").click(function(){
		$("#mmregion201909data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-09',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年9月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201909data',datazft,layoutzft);
	});
	// 区划2019年9月耗时天数  众数  统计  直方图
	$("#mmregion201909datamode").click(function(){
		$("#mmregion201909data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-09',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年9月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201909data',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~区划2019年10月统计
	// 区划2019年10月统计 左侧导航 默认
	$("#mmregion201910").click(function(){
		$("#showcvs").children().hide();
		$("#mmregion201910datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2019-10'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2019年10月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion201910data',datazft,layoutzft);
	});
	// 区划2019年10月统计  直方图
	$("#mmregion201910datazft").click(function(){
		$("#mmregion201910date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2019-10'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2019年10月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion201910data',datazft,layoutzft);
	});
	// 区划2019年10月统计  饼图
	$("#mmregion201910databt").click(function(){
		$("#mmregion201910date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2019-10'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'区划2019年10月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmregion201910data', databt,layoutbt);

	});
	// 区划2019年10月耗时天数 最大值  统计  直方图
	$("#mmregion201910datamax").click(function(){
		$("#mmregion201910date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-10',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2019年10月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201910data',datazft,layoutzft);
	});
	// 区划2019年10月耗时天数 最小值  统计  直方图
	$("#mmregion201910datamin").click(function(){
		$("#mmregion201910data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-10',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年10月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201910data',datazft,layoutzft);
	});
	// 区划2019年10月耗时天数  极差  统计  直方图
	$("#mmregion201910datarange").click(function(){
		$("#mmregion201910data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-10',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年10月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201910data',datazft,layoutzft);

	});
	// 区划2019年10月耗时天数  中位数  统计  直方图
	$("#mmregion201910datamedian").click(function(){
		$("#mmregion201910data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-10',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年10月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201910data',datazft,layoutzft);
	});
	// 区划2019年10月耗时天数  众数  统计  直方图
	$("#mmregion201910datamode").click(function(){
		$("#mmregion201910data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-10',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年10月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201910data',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~区划2019年11月统计
	// 区划2019年11月统计 左侧导航 默认
	$("#mmregion201911").click(function(){
		$("#showcvs").children().hide();
		$("#mmregion201911datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2019-11'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2019年11月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion201911data',datazft,layoutzft);
	});
	// 区划2019年11月统计  直方图
	$("#mmregion201911datazft").click(function(){
		$("#mmregion201911date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2019-11'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2019年11月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion201911data',datazft,layoutzft);
	});
	// 区划2019年11月统计  饼图
	$("#mmregion201911databt").click(function(){
		$("#mmregion201911date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2019-11'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'区划2019年11月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmregion201911data', databt,layoutbt);

	});
	// 区划2019年11月耗时天数 最大值  统计  直方图
	$("#mmregion201911datamax").click(function(){
		$("#mmregion201911date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-11',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2019年11月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201911data',datazft,layoutzft);
	});
	// 区划2019年11月耗时天数 最小值  统计  直方图
	$("#mmregion201911datamin").click(function(){
		$("#mmregion201911data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-11',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年11月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201911data',datazft,layoutzft);
	});
	// 区划2019年11月耗时天数  极差  统计  直方图
	$("#mmregion201911datarange").click(function(){
		$("#mmregion201911data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-11',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年11月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201911data',datazft,layoutzft);

	});
	// 区划2019年11月耗时天数  中位数  统计  直方图
	$("#mmregion201911datamedian").click(function(){
		$("#mmregion201911data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-11',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年11月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201911data',datazft,layoutzft);
	});
	// 区划2019年11月耗时天数  众数  统计  直方图
	$("#mmregion201911datamode").click(function(){
		$("#mmregion201911data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-11',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年11月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201911data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~区划2019年12月统计
	// 区划2019年12月统计 左侧导航 默认
	$("#mmregion201912").click(function(){
		$("#showcvs").children().hide();
		$("#mmregion201912datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2019-12'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2019年12月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion201912data',datazft,layoutzft);
	});
	// 区划2019年12月统计  直方图
	$("#mmregion201912datazft").click(function(){
		$("#mmregion201912date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2019-12'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2019年12月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion201912data',datazft,layoutzft);
	});
	// 区划2019年12月统计  饼图
	$("#mmregion201912databt").click(function(){
		$("#mmregion201912date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2019-12'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'区划2019年12月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmregion201912data', databt,layoutbt);

	});
	// 区划2019年12月耗时天数 最大值  统计  直方图
	$("#mmregion201912datamax").click(function(){
		$("#mmregion201912date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-12',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2019年12月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201912data',datazft,layoutzft);
	});
	// 区划2019年12月耗时天数 最小值  统计  直方图
	$("#mmregion201912datamin").click(function(){
		$("#mmregion201912data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-12',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年12月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201912data',datazft,layoutzft);
	});
	// 区划2019年12月耗时天数  极差  统计  直方图
	$("#mmregion201912datarange").click(function(){
		$("#mmregion201912data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-12',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年12月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201912data',datazft,layoutzft);

	});
	// 区划2019年12月耗时天数  中位数  统计  直方图
	$("#mmregion201912datamedian").click(function(){
		$("#mmregion201912data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-12',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年12月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201912data',datazft,layoutzft);
	});
	// 区划2019年12月耗时天数  众数  统计  直方图
	$("#mmregion201912datamode").click(function(){
		$("#mmregion201912data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2019-12',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2019年12月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion201912data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~区划2020年1月统计
	// 区划2020年1月统计 左侧导航 默认
	$("#mmregion202001").click(function(){
		$("#showcvs").children().hide();
		$("#mmregion202001datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2020-01'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2020年1月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion202001data',datazft,layoutzft);
	});
	// 区划2020年1月统计  直方图
	$("#mmregion202001datazft").click(function(){
		$("#mmregion202001date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2020-01'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2020年1月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion202001data',datazft,layoutzft);
	});
	// 区划2020年1月统计  饼图
	$("#mmregion202001databt").click(function(){
		$("#mmregion202001date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2020-01'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'区划2020年1月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmregion202001data', databt,layoutbt);

	});
	// 区划2020年1月耗时天数 最大值  统计  直方图
	$("#mmregion202001datamax").click(function(){
		$("#mmregion202001date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-01',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2020年1月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202001data',datazft,layoutzft);
	});
	// 区划2020年1月耗时天数 最小值  统计  直方图
	$("#mmregion202001datamin").click(function(){
		$("#mmregion202001data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-01',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年1月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202001data',datazft,layoutzft);
	});
	// 区划2020年1月耗时天数  极差  统计  直方图
	$("#mmregion202001datarange").click(function(){
		$("#mmregion202001data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-01',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年1月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202001data',datazft,layoutzft);

	});
	// 区划2020年1月耗时天数  中位数  统计  直方图
	$("#mmregion202001datamedian").click(function(){
		$("#mmregion202001data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-01',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年1月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202001data',datazft,layoutzft);
	});
	// 区划2020年1月耗时天数  众数  统计  直方图
	$("#mmregion202001datamode").click(function(){
		$("#mmregion202001data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-01',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年1月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202001data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~区划2020年2月统计
	// 区划2020年2月统计 左侧导航 默认
	$("#mmregion202002").click(function(){
		$("#showcvs").children().hide();
		$("#mmregion202002datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2020-02'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2020年2月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion202002data',datazft,layoutzft);
	});
	// 区划2020年2月统计  直方图
	$("#mmregion202002datazft").click(function(){
		$("#mmregion202002date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2020-02'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2020年2月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion202002data',datazft,layoutzft);
	});
	// 区划2020年2月统计  饼图
	$("#mmregion202002databt").click(function(){
		$("#mmregion202002date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2020-02'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'区划2020年2月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmregion202002data', databt,layoutbt);

	});
	// 区划2020年2月耗时天数 最大值  统计  直方图
	$("#mmregion202002datamax").click(function(){
		$("#mmregion202002date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-02',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2020年2月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202002data',datazft,layoutzft);
	});
	// 区划2020年2月耗时天数 最小值  统计  直方图
	$("#mmregion202002datamin").click(function(){
		$("#mmregion202002data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-02',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年2月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202002data',datazft,layoutzft);
	});
	// 区划2020年2月耗时天数  极差  统计  直方图
	$("#mmregion202002datarange").click(function(){
		$("#mmregion202002data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-02',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年2月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202002data',datazft,layoutzft);

	});
	// 区划2020年2月耗时天数  中位数  统计  直方图
	$("#mmregion202002datamedian").click(function(){
		$("#mmregion202002data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-02',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年2月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202002data',datazft,layoutzft);
	});
	// 区划2020年2月耗时天数  众数  统计  直方图
	$("#mmregion202002datamode").click(function(){
		$("#mmregion202002data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-02',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年2月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202002data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~区划2020年3月统计
	// 区划2020年3月统计 左侧导航 默认
	$("#mmregion202003").click(function(){
		$("#showcvs").children().hide();
		$("#mmregion202003datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2020-03'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2020年3月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion202003data',datazft,layoutzft);
	});
	// 区划2020年3月统计  直方图
	$("#mmregion202003datazft").click(function(){
		$("#mmregion202003date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2020-03'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2020年3月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion202003data',datazft,layoutzft);
	});
	// 区划2020年3月统计  饼图
	$("#mmregion202003databt").click(function(){
		$("#mmregion202003date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2020-03'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'区划2020年3月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmregion202003data', databt,layoutbt);

	});
	// 区划2020年3月耗时天数 最大值  统计  直方图
	$("#mmregion202003datamax").click(function(){
		$("#mmregion202003date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-03',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2020年3月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202003data',datazft,layoutzft);
	});
	// 区划2020年3月耗时天数 最小值  统计  直方图
	$("#mmregion202003datamin").click(function(){
		$("#mmregion202003data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-03',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年3月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202003data',datazft,layoutzft);
	});
	// 区划2020年3月耗时天数  极差  统计  直方图
	$("#mmregion202003datarange").click(function(){
		$("#mmregion202003data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-03',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年3月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202003data',datazft,layoutzft);

	});
	// 区划2020年3月耗时天数  中位数  统计  直方图
	$("#mmregion202003datamedian").click(function(){
		$("#mmregion202003data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-03',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年3月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202003data',datazft,layoutzft);
	});
	// 区划2020年3月耗时天数  众数  统计  直方图
	$("#mmregion202003datamode").click(function(){
		$("#mmregion202003data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-03',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年3月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202003data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~区划2020年4月统计
	// 区划2020年4月统计 左侧导航 默认
	$("#mmregion202004").click(function(){
		$("#showcvs").children().hide();
		$("#mmregion202004datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2020-04'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2020年4月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion202004data',datazft,layoutzft);
	});
	// 区划2020年4月统计  直方图
	$("#mmregion202004datazft").click(function(){
		$("#mmregion202004date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2020-04'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2020年4月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion202004data',datazft,layoutzft);
	});
	// 区划2020年4月统计  饼图
	$("#mmregion202004databt").click(function(){
		$("#mmregion202004date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2020-04'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'区划2020年4月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmregion202004data', databt,layoutbt);

	});
	// 区划2020年4月耗时天数 最大值  统计  直方图
	$("#mmregion202004datamax").click(function(){
		$("#mmregion202004date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-04',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2020年4月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202004data',datazft,layoutzft);
	});
	// 区划2020年4月耗时天数 最小值  统计  直方图
	$("#mmregion202004datamin").click(function(){
		$("#mmregion202004data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-04',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年4月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202004data',datazft,layoutzft);
	});
	// 区划2020年4月耗时天数  极差  统计  直方图
	$("#mmregion202004datarange").click(function(){
		$("#mmregion202004data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-04',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年4月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202004data',datazft,layoutzft);

	});
	// 区划2020年4月耗时天数  中位数  统计  直方图
	$("#mmregion202004datamedian").click(function(){
		$("#mmregion202004data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-04',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年4月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202004data',datazft,layoutzft);
	});
	// 区划2020年4月耗时天数  众数  统计  直方图
	$("#mmregion202004datamode").click(function(){
		$("#mmregion202004data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-04',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年4月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202004data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~区划2020年5月统计
	// 区划2020年5月统计 左侧导航 默认
	$("#mmregion202005").click(function(){
		$("#showcvs").children().hide();
		$("#mmregion202005datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2020-05'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2020年5月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion202005data',datazft,layoutzft);
	});
	// 区划2020年5月统计  直方图
	$("#mmregion202005datazft").click(function(){
		$("#mmregion202005date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2020-05'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2020年5月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion202005data',datazft,layoutzft);
	});
	// 区划2020年5月统计  饼图
	$("#mmregion202005databt").click(function(){
		$("#mmregion202005date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2020-05'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'区划2020年5月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmregion202005data', databt,layoutbt);

	});
	// 区划2020年5月耗时天数 最大值  统计  直方图
	$("#mmregion202005datamax").click(function(){
		$("#mmregion202005date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-05',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2020年5月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202005data',datazft,layoutzft);
	});
	// 区划2020年5月耗时天数 最小值  统计  直方图
	$("#mmregion202005datamin").click(function(){
		$("#mmregion202005data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-05',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年5月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202005data',datazft,layoutzft);
	});
	// 区划2020年5月耗时天数  极差  统计  直方图
	$("#mmregion202005datarange").click(function(){
		$("#mmregion202005data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-05',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年5月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202005data',datazft,layoutzft);

	});
	// 区划2020年5月耗时天数  中位数  统计  直方图
	$("#mmregion202005datamedian").click(function(){
		$("#mmregion202005data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-05',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年5月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202005data',datazft,layoutzft);
	});
	// 区划2020年5月耗时天数  众数  统计  直方图
	$("#mmregion202005datamode").click(function(){
		$("#mmregion202005data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-05',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年5月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202005data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~区划2020年6月统计
	// 区划2020年6月统计 左侧导航 默认
	$("#mmregion202006").click(function(){
		$("#showcvs").children().hide();
		$("#mmregion202006datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2020-06'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2020年6月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion202006data',datazft,layoutzft);
	});
	// 区划2020年6月统计  直方图
	$("#mmregion202006datazft").click(function(){
		$("#mmregion202006date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2020-06'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2020年6月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion202006data',datazft,layoutzft);
	});
	// 区划2020年6月统计  饼图
	$("#mmregion202006databt").click(function(){
		$("#mmregion202006date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2020-06'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'区划2020年6月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmregion202006data', databt,layoutbt);

	});
	// 区划2020年6月耗时天数 最大值  统计  直方图
	$("#mmregion202006datamax").click(function(){
		$("#mmregion202006date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-06',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2020年6月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202006data',datazft,layoutzft);
	});
	// 区划2020年6月耗时天数 最小值  统计  直方图
	$("#mmregion202006datamin").click(function(){
		$("#mmregion202006data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-06',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年6月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202006data',datazft,layoutzft);
	});
	// 区划2020年6月耗时天数  极差  统计  直方图
	$("#mmregion202006datarange").click(function(){
		$("#mmregion202006data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-06',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年6月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202006data',datazft,layoutzft);

	});
	// 区划2020年6月耗时天数  中位数  统计  直方图
	$("#mmregion202006datamedian").click(function(){
		$("#mmregion202006data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-06',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年6月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202006data',datazft,layoutzft);
	});
	// 区划2020年6月耗时天数  众数  统计  直方图
	$("#mmregion202006datamode").click(function(){
		$("#mmregion202006data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-06',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年6月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202006data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~区划2020年7月统计
	// 区划2020年7月统计 左侧导航 默认
	$("#mmregion202007").click(function(){
		$("#showcvs").children().hide();
		$("#mmregion202007datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2020-07'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2020年7月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion202007data',datazft,layoutzft);
	});
	// 区划2020年7月统计  直方图
	$("#mmregion202007datazft").click(function(){
		$("#mmregion202007date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2020-07'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2020年7月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion202007data',datazft,layoutzft);
	});
	// 区划2020年7月统计  饼图
	$("#mmregion202007databt").click(function(){
		$("#mmregion202007date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2020-07'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'区划2020年7月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmregion202007data', databt,layoutbt);

	});
	// 区划2020年7月耗时天数 最大值  统计  直方图
	$("#mmregion202007datamax").click(function(){
		$("#mmregion202007date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-07',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2020年7月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202007data',datazft,layoutzft);
	});
	// 区划2020年7月耗时天数 最小值  统计  直方图
	$("#mmregion202007datamin").click(function(){
		$("#mmregion202007data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-07',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年7月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202007data',datazft,layoutzft);
	});
	// 区划2020年7月耗时天数  极差  统计  直方图
	$("#mmregion202007datarange").click(function(){
		$("#mmregion202007data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-07',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年7月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202007data',datazft,layoutzft);

	});
	// 区划2020年7月耗时天数  中位数  统计  直方图
	$("#mmregion202007datamedian").click(function(){
		$("#mmregion202007data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-07',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年7月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202007data',datazft,layoutzft);
	});
	// 区划2020年7月耗时天数  众数  统计  直方图
	$("#mmregion202007datamode").click(function(){
		$("#mmregion202007data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-07',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年7月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202007data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~区划2020年8月统计
	// 区划2020年8月统计 左侧导航 默认
	$("#mmregion202008").click(function(){
		$("#showcvs").children().hide();
		$("#mmregion202008datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2020-08'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2020年8月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion202008data',datazft,layoutzft);
	});
	// 区划2020年8月统计  直方图
	$("#mmregion202008datazft").click(function(){
		$("#mmregion202008date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2020-08'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2020年8月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion202008data',datazft,layoutzft);
	});
	// 区划2020年8月统计  饼图
	$("#mmregion202008databt").click(function(){
		$("#mmregion202008date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2020-08'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'区划2020年8月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmregion202008data', databt,layoutbt);

	});
	// 区划2020年8月耗时天数 最大值  统计  直方图
	$("#mmregion202008datamax").click(function(){
		$("#mmregion202008date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-08',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2020年8月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202008data',datazft,layoutzft);
	});
	// 区划2020年8月耗时天数 最小值  统计  直方图
	$("#mmregion202008datamin").click(function(){
		$("#mmregion202008data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-08',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年8月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202008data',datazft,layoutzft);
	});
	// 区划2020年8月耗时天数  极差  统计  直方图
	$("#mmregion202008datarange").click(function(){
		$("#mmregion202008data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-08',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年8月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202008data',datazft,layoutzft);

	});
	// 区划2020年8月耗时天数  中位数  统计  直方图
	$("#mmregion202008datamedian").click(function(){
		$("#mmregion202008data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-08',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年8月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202008data',datazft,layoutzft);
	});
	// 区划2020年8月耗时天数  众数  统计  直方图
	$("#mmregion202008datamode").click(function(){
		$("#mmregion202008data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-08',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年8月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202008data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~区划2020年9月统计
	// 区划2020年9月统计 左侧导航 默认
	$("#mmregion202009").click(function(){
		$("#showcvs").children().hide();
		$("#mmregion202009datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2020-09'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2020年9月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion202009data',datazft,layoutzft);
	});
	// 区划2020年9月统计  直方图
	$("#mmregion202009datazft").click(function(){
		$("#mmregion202009date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2020-09'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2020年9月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmregion202009data',datazft,layoutzft);
	});
	// 区划2020年9月统计  饼图
	$("#mmregion202009databt").click(function(){
		$("#mmregion202009date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmregiondata/selectAll.do",
			data: {
				"date" : '2020-09'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'区划2020年9月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmregion202009data', databt,layoutbt);

	});
	// 区划2020年9月耗时天数 最大值  统计  直方图
	$("#mmregion202009datamax").click(function(){
		$("#mmregion202009date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-09',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'区划2020年9月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202009data',datazft,layoutzft);
	});
	// 区划2020年9月耗时天数 最小值  统计  直方图
	$("#mmregion202009datamin").click(function(){
		$("#mmregion202009data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-09',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年9月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202009data',datazft,layoutzft);
	});
	// 区划2020年9月耗时天数  极差  统计  直方图
	$("#mmregion202009datarange").click(function(){
		$("#mmregion202009data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-09',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年9月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202009data',datazft,layoutzft);

	});
	// 区划2020年9月耗时天数  中位数  统计  直方图
	$("#mmregion202009datamedian").click(function(){
		$("#mmregion202009data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-09',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年9月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202009data',datazft,layoutzft);
	});
	// 区划2020年9月耗时天数  众数  统计  直方图
	$("#mmregion202009datamode").click(function(){
		$("#mmregion202009data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionAll.do",
			data: {
				"yy" : '2020-09',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'区划2020年9月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmregion202009data',datazft,layoutzft);
	});












	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	



















	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~受理部门年统计
	// 受理部门年统计 左侧导航 默认
	$("#yydept").click(function(){
		$("#showcvs").children().hide();
		$("#yydeptdatashow").show();

		var dateList = ['2019','2020'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
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
			title:'受理部门每年办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('yydeptdata',datazft,layoutzft);
	});
	// 受理部门年统计  直方图
	$("#yydeptdatazft").click(function(){
		$("#yydeptdata").empty();
		var dateList = ['2019','2020'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
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
			title:'受理部门每年办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('yydeptdata',datazft,layoutzft);
	});
	// 受理部门年统计  饼图
	$("#yydeptdatabt").click(function(){
		$("#yydeptdata").empty();
		var dateList = ['2019','2020'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
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
			title:'受理部门每年办件量饼图',
			width: 1600,
			height: 750,
			grid: {rows: 3, columns: 5}
		};
		Plotly.newPlot('yydeptdata', databt,layoutbt);
	});
	// 受理部门年耗时天数 最大值  统计  直方图
	$("#yydeptdatamax").click(function(){
		$("#yydeptdata").empty();
		var dateList = ['2019','2020'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectDeptAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "max"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cDept);
						y.push(data[i].maxDate);
					}
					mapx.push(x);
					mapy.push(y);
				}
			});
		}
		var datazft = [{x: mapx[0],y: mapy[0],type: "histogram",histfunc: "sum",name: dateList[0]},{
			x: mapx[1],y: mapy[1],type: "histogram",histfunc: "sum",name: dateList[1]}]

		var layoutzft ={
			title:'受理部门年耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yydeptdata',datazft,layoutzft);
	});
	// 受理部门年耗时天数 最小值  统计  直方图
	$("#yydeptdatamin").click(function(){
		$("#yydeptdata").empty();
		var dateList = ['2019','2020'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectDeptAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "min"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cDept);
						y.push(data[i].minDate);
					}
					mapx.push(x);
					mapy.push(y);
				}
			});
		}
		var datazft = [{x: mapx[0],y: mapy[0],type: "histogram",histfunc: "sum",name: dateList[0]},{
			x: mapx[1],y: mapy[1],type: "histogram",histfunc: "sum",name: dateList[1]}]

		var layoutzft ={
			title:'受理部门年耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yydeptdata',datazft,layoutzft);
	});
	// 受理部门年耗时天数  极差  统计  直方图
	$("#yydeptdatarange").click(function(){
		$("#yydeptdata").empty();
		var dateList = ['2019','2020'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectDeptAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "range"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cDept);
						y.push(data[i].rangeDate);
					}
					mapx.push(x);
					mapy.push(y);
				}
			});
		}
		var datazft = [{x: mapx[0],y: mapy[0],type: "histogram",histfunc: "sum",name: dateList[0]},{
			x: mapx[1],y: mapy[1],type: "histogram",histfunc: "sum",name: dateList[1]}]

		var layoutzft ={
			title:'受理部门年耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yydeptdata',datazft,layoutzft);
	});
	// 受理部门年耗时天数  中位数  统计  直方图
	$("#yydeptdatamedian").click(function(){
		$("#yydeptdata").empty();
		var dateList = ['2019','2020'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectDeptAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "median"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cDept);
						y.push(data[i].median);
					}
					mapx.push(x);
					mapy.push(y);
				}
			});
		}
		var datazft = [{x: mapx[0],y: mapy[0],type: "histogram",histfunc: "sum",name: dateList[0]},{
			x: mapx[1],y: mapy[1],type: "histogram",histfunc: "sum",name: dateList[1]}]

		var layoutzft ={
			title:'受理部门年耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yydeptdata',datazft,layoutzft);
	});
	// 受理部门年耗时天数  众数  统计  直方图
	$("#yydeptdatamode").click(function(){
		$("#yydeptdata").empty();
		var dateList = ['2019','2020'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectDeptAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "mode"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cDept);
						y.push(data[i].mode);
					}
					mapx.push(x);
					mapy.push(y);
				}
			});
		}
		var datazft = [{x: mapx[0],y: mapy[0],type: "histogram",histfunc: "sum",name: dateList[0]},{
			x: mapx[1],y: mapy[1],type: "histogram",histfunc: "sum",name: dateList[1]}]

		var layoutzft ={
			title:'受理部门年耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yydeptdata',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~受理部门2019年统计
	// 受理部门2019年统计 左侧导航 默认
	$("#yydept2019").click(function(){
		$("#showcvs").children().hide();
		$("#yydept2019dateshow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/yydeptdata/selectAll.do",
			data: {
				"date" : '2019'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2019}]
		var layoutzft ={
			title:'受理部门2019年办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('yydept2019date',datazft,layoutzft);
	});
	// 受理部门2019年统计  直方图
	$("#yydept2019datazft").click(function(){
		$("#yydept2019date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/yydeptdata/selectAll.do",
			data: {
				"date" : '2019'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2019}]
		var layoutzft ={
			title:'受理部门2019年办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('yydept2019date',datazft,layoutzft);
	});
	// 受理部门2019年统计  饼图
	$("#yydept2019databt").click(function(){
		$("#yydept2019date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/yydeptdata/selectAll.do",
			data: {
				"date" : '2019'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2019,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'受理部门2019年办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 1, columns: 2}
		};
		Plotly.newPlot('yydept2019date', databt,layoutbt);
	});
	// 受理部门2019年耗时天数 最大值  统计  直方图
	$("#yydept2019datamax").click(function(){
		$("#yydept2019date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2019}]
		var layoutzft ={
			title:'受理部门2019耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yydept2019date',datazft,layoutzft);
	});
	// 受理部门2019年耗时天数 最小值  统计  直方图
	$("#yydept2019datamin").click(function(){
		$("#yydept2019data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2019}]

		var layoutzft ={
			title:'受理部门2019年耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yydept2019date',datazft,layoutzft);
	});
	// 受理部门2019年耗时天数  极差  统计  直方图
	$("#yydept2019datarange").click(function(){
		$("#yydept2019data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2019}]

		var layoutzft ={
			title:'受理部门2019年耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yydept2019date',datazft,layoutzft);
	});
	// 受理部门2019年耗时天数  中位数  统计  直方图
	$("#yydept2019datamedian").click(function(){
		$("#yydept2019data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2019}]

		var layoutzft ={
			title:'受理部门2019年耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yydept2019date',datazft,layoutzft);
	});
	// 受理部门2019年耗时天数  众数  统计  直方图
	$("#yydept2019datamode").click(function(){
		$("#yydept2019data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2019}]

		var layoutzft ={
			title:'受理部门2019年耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yydept2019date',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~受理部门2020年统计
	// 受理部门2020年统计 左侧导航 默认
	$("#yydept2020").click(function(){
		$("#showcvs").children().hide();
		$("#yydept2020dateshow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/yydeptdata/selectAll.do",
			data: {
				"date" : '2020'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2020年办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('yydept2020data',datazft,layoutzft);
	});
	// 受理部门2020年统计  直方图
	$("#yydept2020datazft").click(function(){
		$("#yydept2020date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/yydeptdata/selectAll.do",
			data: {
				"date" : '2020'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2020年办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('yydept2020data',datazft,layoutzft);
	});
	// 受理部门2020年统计  饼图
	$("#yydept2020databt").click(function(){
		$("#yydept2020date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/yydeptdata/selectAll.do",
			data: {
				"date" : '2020'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'受理部门2020年办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('yydept2020data', databt,layoutbt);

	});
	// 受理部门2020年耗时天数 最大值  统计  直方图
	$("#yydept2020datamax").click(function(){
		$("#yydept2020date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2020耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yydept2020data',datazft,layoutzft);
	});
	// 受理部门2020年耗时天数 最小值  统计  直方图
	$("#yydept2020datamin").click(function(){
		$("#yydept2020data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yydept2020data',datazft,layoutzft);
	});
	// 受理部门2020年耗时天数  极差  统计  直方图
	$("#yydept2020datarange").click(function(){
		$("#yydept2020data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yydept2020data',datazft,layoutzft);

	});
	// 受理部门2020年耗时天数  中位数  统计  直方图
	$("#yydept2020datamedian").click(function(){
		$("#yydept2020data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yydept2020data',datazft,layoutzft);
	});
	// 受理部门2020年耗时天数  众数  统计  直方图
	$("#yydept2020datamode").click(function(){
		$("#yydept2020data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yydept2020data',datazft,layoutzft);
	});
	
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~受理部门月统计
	// 受理部门月统计 左侧导航 默认
	$("#mmdept").click(function(){
		$("#showcvs").children().hide();
		$("#mmdeptdatashow").show();
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
				url: "/mmdeptdata/selectAll.do",
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
			title:'受理部门每个月办件量直方图',width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdeptdata',datazft,layoutzft);
	});
	// 受理部门月统计  直方图
	$("#mmdeptdatazft").click(function(){
		$("#mmdeptdata").empty();
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
				url: "/mmdeptdata/selectAll.do",
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
			title:'受理部门每个月办件量直方图',width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdeptdata',datazft,layoutzft);
	});
	// 受理部门年统计  饼图
	$("#mmdeptdatabt").click(function(){
		$("#mmdeptdata").empty();
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
				url: "/mmdeptdata/selectAll.do",
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
			title:'受理部门每个月办件量饼图',
			width: 2200,
			height: 790,
			grid: {rows: 3, columns: 8}
		};

		Plotly.newPlot('mmdeptdata', databt,layoutbt);
	});
	// 受理部门年耗时天数 最大值  统计  直方图
	$("#mmdeptdatamax").click(function(){
		$("#mmdeptdata").empty();
		var dateList = ['2019-01','2019-02','2019-03','2019-04','2019-05','2019-06','2019-07','2019-08','2019-09','2019-10','2019-11','2019-12',
			'2020-01','2020-02','2020-03','2020-04','2020-05','2020-06','2020-07','2020-08','2020-09'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectDeptAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "max"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cDept);
						y.push(data[i].maxDate);
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
			title:'受理部门月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdeptdata',datazft,layoutzft);
	});
	// 受理部门年耗时天数 最小值  统计  直方图
	$("#mmdeptdatamin").click(function(){
		$("#mmdeptdata").empty();
		var dateList = ['2019-01','2019-02','2019-03','2019-04','2019-05','2019-06','2019-07','2019-08','2019-09','2019-10','2019-11','2019-12',
			'2020-01','2020-02','2020-03','2020-04','2020-05','2020-06','2020-07','2020-08','2020-09'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectDeptAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "min"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cDept);
						y.push(data[i].minDate);
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
			title:'受理部门月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdeptdata',datazft,layoutzft);
	});
	// 受理部门年耗时天数  极差  统计  直方图
	$("#mmdeptdatarange").click(function(){
		$("#mmdeptdata").empty();
		var dateList = ['2019-01','2019-02','2019-03','2019-04','2019-05','2019-06','2019-07','2019-08','2019-09','2019-10','2019-11','2019-12',
			'2020-01','2020-02','2020-03','2020-04','2020-05','2020-06','2020-07','2020-08','2020-09'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectDeptAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "range"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cDept);
						y.push(data[i].rangeDate);
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
			title:'受理部门月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdeptdata',datazft,layoutzft);
	});
	// 受理部门年耗时天数  中位数  统计  直方图
	$("#mmdeptdatamedian").click(function(){
		$("#mmdeptdata").empty();
		var dateList = ['2019-01','2019-02','2019-03','2019-04','2019-05','2019-06','2019-07','2019-08','2019-09','2019-10','2019-11','2019-12',
			'2020-01','2020-02','2020-03','2020-04','2020-05','2020-06','2020-07','2020-08','2020-09'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectDeptAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "median"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cDept);
						y.push(data[i].median);
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
			title:'受理部门月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdeptdata',datazft,layoutzft);
	});
	// 受理部门年耗时天数  众数  统计  直方图
	$("#mmdeptdatamode").click(function(){
		$("#mmdeptdata").empty();
		var dateList = ['2019-01','2019-02','2019-03','2019-04','2019-05','2019-06','2019-07','2019-08','2019-09','2019-10','2019-11','2019-12',
			'2020-01','2020-02','2020-03','2020-04','2020-05','2020-06','2020-07','2020-08','2020-09'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectDeptAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "mode"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cDept);
						y.push(data[i].mode);
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
			title:'受理部门月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdeptdata',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~受理部门2019年1月统计
	// 受理部门2019年1月统计 左侧导航 默认
	$("#mmdept201901").click(function(){
		$("#showcvs").children().hide();
		$("#mmdept201901datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2019-01'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2019年1月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept201901data',datazft,layoutzft);
	});
	// 受理部门2019年1月统计  直方图
	$("#mmdept201901datazft").click(function(){
		$("#mmdept201901date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2019-01'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2019年1月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept201901data',datazft,layoutzft);
	});
	// 受理部门2019年1月统计  饼图
	$("#mmdept201901databt").click(function(){
		$("#mmdept201901date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2019-01'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'受理部门2019年1月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmdept201901data', databt,layoutbt);

	});
	// 受理部门2019年1月耗时天数 最大值  统计  直方图
	$("#mmdept201901datamax").click(function(){
		$("#mmdept201901date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-01',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2019年1月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201901data',datazft,layoutzft);
	});
	// 受理部门2019年1月耗时天数 最小值  统计  直方图
	$("#mmdept201901datamin").click(function(){
		$("#mmdept201901data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-01',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年1月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201901data',datazft,layoutzft);
	});
	// 受理部门2019年1月耗时天数  极差  统计  直方图
	$("#mmdept201901datarange").click(function(){
		$("#mmdept201901data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-01',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年1月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201901data',datazft,layoutzft);

	});
	// 受理部门2019年1月耗时天数  中位数  统计  直方图
	$("#mmdept201901datamedian").click(function(){
		$("#mmdept201901data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-01',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年1月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201901data',datazft,layoutzft);
	});
	// 受理部门2019年1月耗时天数  众数  统计  直方图
	$("#mmdept201901datamode").click(function(){
		$("#mmdept201901data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-01',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年1月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201901data',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~受理部门2019年2月统计
	// 受理部门2019年2月统计 左侧导航 默认
	$("#mmdept201902").click(function(){
		$("#showcvs").children().hide();
		$("#mmdept201902datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2019-02'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2019年2月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept201902data',datazft,layoutzft);
	});
	// 受理部门2019年2月统计  直方图
	$("#mmdept201902datazft").click(function(){
		$("#mmdept201902date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2019-02'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2019年2月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept201902data',datazft,layoutzft);
	});
	// 受理部门2019年2月统计  饼图
	$("#mmdept201902databt").click(function(){
		$("#mmdept201902date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2019-02'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'受理部门2019年2月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmdept201902data', databt,layoutbt);

	});
	// 受理部门2019年2月耗时天数 最大值  统计  直方图
	$("#mmdept201902datamax").click(function(){
		$("#mmdept201902date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-02',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2019年2月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201902data',datazft,layoutzft);
	});
	// 受理部门2019年2月耗时天数 最小值  统计  直方图
	$("#mmdept201902datamin").click(function(){
		$("#mmdept201902data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-02',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年2月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201902data',datazft,layoutzft);
	});
	// 受理部门2019年2月耗时天数  极差  统计  直方图
	$("#mmdept201902datarange").click(function(){
		$("#mmdept201902data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-02',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年2月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201902data',datazft,layoutzft);

	});
	// 受理部门2019年2月耗时天数  中位数  统计  直方图
	$("#mmdept201902datamedian").click(function(){
		$("#mmdept201902data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-02',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年2月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201902data',datazft,layoutzft);
	});
	// 受理部门2019年2月耗时天数  众数  统计  直方图
	$("#mmdept201902datamode").click(function(){
		$("#mmdept201902data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-02',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年2月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201902data',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~受理部门2019年3月统计
	// 受理部门2019年3月统计 左侧导航 默认
	$("#mmdept201903").click(function(){
		$("#showcvs").children().hide();
		$("#mmdept201903datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2019-03'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2019年3月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept201903data',datazft,layoutzft);
	});
	// 受理部门2019年3月统计  直方图
	$("#mmdept201903datazft").click(function(){
		$("#mmdept201903date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2019-03'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2019年3月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept201903data',datazft,layoutzft);
	});
	// 受理部门2019年3月统计  饼图
	$("#mmdept201903databt").click(function(){
		$("#mmdept201903date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2019-03'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'受理部门2019年3月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmdept201903data', databt,layoutbt);

	});
	// 受理部门2019年3月耗时天数 最大值  统计  直方图
	$("#mmdept201903datamax").click(function(){
		$("#mmdept201903date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-03',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2019年3月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201903data',datazft,layoutzft);
	});
	// 受理部门2019年3月耗时天数 最小值  统计  直方图
	$("#mmdept201903datamin").click(function(){
		$("#mmdept201903data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-03',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年3月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201903data',datazft,layoutzft);
	});
	// 受理部门2019年3月耗时天数  极差  统计  直方图
	$("#mmdept201903datarange").click(function(){
		$("#mmdept201903data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-03',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年3月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201903data',datazft,layoutzft);

	});
	// 受理部门2019年3月耗时天数  中位数  统计  直方图
	$("#mmdept201903datamedian").click(function(){
		$("#mmdept201903data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-03',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年3月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201903data',datazft,layoutzft);
	});
	// 受理部门2019年3月耗时天数  众数  统计  直方图
	$("#mmdept201903datamode").click(function(){
		$("#mmdept201903data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-03',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年3月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201903data',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~受理部门2019年4月统计
	// 受理部门2019年4月统计 左侧导航 默认
	$("#mmdept201904").click(function(){
		$("#showcvs").children().hide();
		$("#mmdept201904datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2019-04'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2019年4月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept201904data',datazft,layoutzft);
	});
	// 受理部门2019年4月统计  直方图
	$("#mmdept201904datazft").click(function(){
		$("#mmdept201904date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2019-04'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2019年4月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept201904data',datazft,layoutzft);
	});
	// 受理部门2019年4月统计  饼图
	$("#mmdept201904databt").click(function(){
		$("#mmdept201904date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2019-04'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'受理部门2019年4月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmdept201904data', databt,layoutbt);

	});
	// 受理部门2019年4月耗时天数 最大值  统计  直方图
	$("#mmdept201904datamax").click(function(){
		$("#mmdept201904date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-04',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2019年4月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201904data',datazft,layoutzft);
	});
	// 受理部门2019年4月耗时天数 最小值  统计  直方图
	$("#mmdept201904datamin").click(function(){
		$("#mmdept201904data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-04',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年4月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201904data',datazft,layoutzft);
	});
	// 受理部门2019年4月耗时天数  极差  统计  直方图
	$("#mmdept201904datarange").click(function(){
		$("#mmdept201904data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-04',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年4月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201904data',datazft,layoutzft);

	});
	// 受理部门2019年4月耗时天数  中位数  统计  直方图
	$("#mmdept201904datamedian").click(function(){
		$("#mmdept201904data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-04',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年4月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201904data',datazft,layoutzft);
	});
	// 受理部门2019年4月耗时天数  众数  统计  直方图
	$("#mmdept201904datamode").click(function(){
		$("#mmdept201904data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-04',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年4月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201904data',datazft,layoutzft);
	});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~受理部门2019年5月统计
	// 受理部门2019年5月统计 左侧导航 默认
	$("#mmdept201905").click(function(){
		$("#showcvs").children().hide();
		$("#mmdept201905datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2019-05'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2019年5月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept201905data',datazft,layoutzft);
	});
	// 受理部门2019年5月统计  直方图
	$("#mmdept201905datazft").click(function(){
		$("#mmdept201905date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2019-05'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2019年5月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept201905data',datazft,layoutzft);
	});
	// 受理部门2019年5月统计  饼图
	$("#mmdept201905databt").click(function(){
		$("#mmdept201905date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2019-05'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'受理部门2019年5月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmdept201905data', databt,layoutbt);

	});
	// 受理部门2019年5月耗时天数 最大值  统计  直方图
	$("#mmdept201905datamax").click(function(){
		$("#mmdept201905date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-05',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2019年5月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201905data',datazft,layoutzft);
	});
	// 受理部门2019年5月耗时天数 最小值  统计  直方图
	$("#mmdept201905datamin").click(function(){
		$("#mmdept201905data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-05',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年5月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201905data',datazft,layoutzft);
	});
	// 受理部门2019年5月耗时天数  极差  统计  直方图
	$("#mmdept201905datarange").click(function(){
		$("#mmdept201905data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-05',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年5月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201905data',datazft,layoutzft);

	});
	// 受理部门2019年5月耗时天数  中位数  统计  直方图
	$("#mmdept201905datamedian").click(function(){
		$("#mmdept201905data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-05',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年5月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201905data',datazft,layoutzft);
	});
	// 受理部门2019年5月耗时天数  众数  统计  直方图
	$("#mmdept201905datamode").click(function(){
		$("#mmdept201905data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-05',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年5月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201905data',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~受理部门2019年6月统计
	// 受理部门2019年6月统计 左侧导航 默认
	$("#mmdept201906").click(function(){
		$("#showcvs").children().hide();
		$("#mmdept201906datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2019-06'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2019年6月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept201906data',datazft,layoutzft);
	});
	// 受理部门2019年6月统计  直方图
	$("#mmdept201906datazft").click(function(){
		$("#mmdept201906date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2019-06'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2019年6月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept201906data',datazft,layoutzft);
	});
	// 受理部门2019年6月统计  饼图
	$("#mmdept201906databt").click(function(){
		$("#mmdept201906date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2019-06'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'受理部门2019年6月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmdept201906data', databt,layoutbt);

	});
	// 受理部门2019年6月耗时天数 最大值  统计  直方图
	$("#mmdept201906datamax").click(function(){
		$("#mmdept201906date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-06',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2019年6月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201906data',datazft,layoutzft);
	});
	// 受理部门2019年6月耗时天数 最小值  统计  直方图
	$("#mmdept201906datamin").click(function(){
		$("#mmdept201906data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-06',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年6月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201906data',datazft,layoutzft);
	});
	// 受理部门2019年6月耗时天数  极差  统计  直方图
	$("#mmdept201906datarange").click(function(){
		$("#mmdept201906data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-06',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年6月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201906data',datazft,layoutzft);

	});
	// 受理部门2019年6月耗时天数  中位数  统计  直方图
	$("#mmdept201906datamedian").click(function(){
		$("#mmdept201906data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-06',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年6月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201906data',datazft,layoutzft);
	});
	// 受理部门2019年6月耗时天数  众数  统计  直方图
	$("#mmdept201906datamode").click(function(){
		$("#mmdept201906data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-06',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年6月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201906data',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~受理部门2019年7月统计
	// 受理部门2019年7月统计 左侧导航 默认
	$("#mmdept201907").click(function(){
		$("#showcvs").children().hide();
		$("#mmdept201907datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2019-07'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2019年7月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept201907data',datazft,layoutzft);
	});
	// 受理部门2019年7月统计  直方图
	$("#mmdept201907datazft").click(function(){
		$("#mmdept201907date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2019-07'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2019年7月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept201907data',datazft,layoutzft);
	});
	// 受理部门2019年7月统计  饼图
	$("#mmdept201907databt").click(function(){
		$("#mmdept201907date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2019-07'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'受理部门2019年7月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmdept201907data', databt,layoutbt);

	});
	// 受理部门2019年7月耗时天数 最大值  统计  直方图
	$("#mmdept201907datamax").click(function(){
		$("#mmdept201907date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-07',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2019年7月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201907data',datazft,layoutzft);
	});
	// 受理部门2019年7月耗时天数 最小值  统计  直方图
	$("#mmdept201907datamin").click(function(){
		$("#mmdept201907data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-07',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年7月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201907data',datazft,layoutzft);
	});
	// 受理部门2019年7月耗时天数  极差  统计  直方图
	$("#mmdept201907datarange").click(function(){
		$("#mmdept201907data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-07',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年7月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201907data',datazft,layoutzft);

	});
	// 受理部门2019年7月耗时天数  中位数  统计  直方图
	$("#mmdept201907datamedian").click(function(){
		$("#mmdept201907data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-07',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年7月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201907data',datazft,layoutzft);
	});
	// 受理部门2019年7月耗时天数  众数  统计  直方图
	$("#mmdept201907datamode").click(function(){
		$("#mmdept201907data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-07',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年7月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201907data',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~受理部门2019年8月统计
	// 受理部门2019年8月统计 左侧导航 默认
	$("#mmdept201908").click(function(){
		$("#showcvs").children().hide();
		$("#mmdept201908datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2019-08'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2019年8月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept201908data',datazft,layoutzft);
	});
	// 受理部门2019年8月统计  直方图
	$("#mmdept201908datazft").click(function(){
		$("#mmdept201908date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2019-08'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2019年8月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept201908data',datazft,layoutzft);
	});
	// 受理部门2019年8月统计  饼图
	$("#mmdept201908databt").click(function(){
		$("#mmdept201908date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2019-08'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'受理部门2019年8月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmdept201908data', databt,layoutbt);

	});
	// 受理部门2019年8月耗时天数 最大值  统计  直方图
	$("#mmdept201908datamax").click(function(){
		$("#mmdept201908date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-08',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2019年8月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201908data',datazft,layoutzft);
	});
	// 受理部门2019年8月耗时天数 最小值  统计  直方图
	$("#mmdept201908datamin").click(function(){
		$("#mmdept201908data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-08',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年8月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201908data',datazft,layoutzft);
	});
	// 受理部门2019年8月耗时天数  极差  统计  直方图
	$("#mmdept201908datarange").click(function(){
		$("#mmdept201908data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-08',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年8月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201908data',datazft,layoutzft);

	});
	// 受理部门2019年8月耗时天数  中位数  统计  直方图
	$("#mmdept201908datamedian").click(function(){
		$("#mmdept201908data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-08',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年8月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201908data',datazft,layoutzft);
	});
	// 受理部门2019年8月耗时天数  众数  统计  直方图
	$("#mmdept201908datamode").click(function(){
		$("#mmdept201908data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-08',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年8月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201908data',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~受理部门2019年9月统计
	// 受理部门2019年9月统计 左侧导航 默认
	$("#mmdept201909").click(function(){
		$("#showcvs").children().hide();
		$("#mmdept201909datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2019-09'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2019年9月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept201909data',datazft,layoutzft);
	});
	// 受理部门2019年9月统计  直方图
	$("#mmdept201909datazft").click(function(){
		$("#mmdept201909date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2019-09'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2019年9月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept201909data',datazft,layoutzft);
	});
	// 受理部门2019年9月统计  饼图
	$("#mmdept201909databt").click(function(){
		$("#mmdept201909date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2019-09'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'受理部门2019年9月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmdept201909data', databt,layoutbt);

	});
	// 受理部门2019年9月耗时天数 最大值  统计  直方图
	$("#mmdept201909datamax").click(function(){
		$("#mmdept201909date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-09',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2019年9月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201909data',datazft,layoutzft);
	});
	// 受理部门2019年9月耗时天数 最小值  统计  直方图
	$("#mmdept201909datamin").click(function(){
		$("#mmdept201909data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-09',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年9月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201909data',datazft,layoutzft);
	});
	// 受理部门2019年9月耗时天数  极差  统计  直方图
	$("#mmdept201909datarange").click(function(){
		$("#mmdept201909data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-09',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年9月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201909data',datazft,layoutzft);

	});
	// 受理部门2019年9月耗时天数  中位数  统计  直方图
	$("#mmdept201909datamedian").click(function(){
		$("#mmdept201909data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-09',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年9月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201909data',datazft,layoutzft);
	});
	// 受理部门2019年9月耗时天数  众数  统计  直方图
	$("#mmdept201909datamode").click(function(){
		$("#mmdept201909data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-09',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年9月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201909data',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~受理部门2019年10月统计
	// 受理部门2019年10月统计 左侧导航 默认
	$("#mmdept201910").click(function(){
		$("#showcvs").children().hide();
		$("#mmdept201910datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2019-10'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2019年10月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept201910data',datazft,layoutzft);
	});
	// 受理部门2019年10月统计  直方图
	$("#mmdept201910datazft").click(function(){
		$("#mmdept201910date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2019-10'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2019年10月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept201910data',datazft,layoutzft);
	});
	// 受理部门2019年10月统计  饼图
	$("#mmdept201910databt").click(function(){
		$("#mmdept201910date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2019-10'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'受理部门2019年10月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmdept201910data', databt,layoutbt);

	});
	// 受理部门2019年10月耗时天数 最大值  统计  直方图
	$("#mmdept201910datamax").click(function(){
		$("#mmdept201910date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-10',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2019年10月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201910data',datazft,layoutzft);
	});
	// 受理部门2019年10月耗时天数 最小值  统计  直方图
	$("#mmdept201910datamin").click(function(){
		$("#mmdept201910data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-10',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年10月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201910data',datazft,layoutzft);
	});
	// 受理部门2019年10月耗时天数  极差  统计  直方图
	$("#mmdept201910datarange").click(function(){
		$("#mmdept201910data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-10',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年10月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201910data',datazft,layoutzft);

	});
	// 受理部门2019年10月耗时天数  中位数  统计  直方图
	$("#mmdept201910datamedian").click(function(){
		$("#mmdept201910data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-10',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年10月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201910data',datazft,layoutzft);
	});
	// 受理部门2019年10月耗时天数  众数  统计  直方图
	$("#mmdept201910datamode").click(function(){
		$("#mmdept201910data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-10',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年10月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201910data',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~受理部门2019年11月统计
	// 受理部门2019年11月统计 左侧导航 默认
	$("#mmdept201911").click(function(){
		$("#showcvs").children().hide();
		$("#mmdept201911datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2019-11'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2019年11月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept201911data',datazft,layoutzft);
	});
	// 受理部门2019年11月统计  直方图
	$("#mmdept201911datazft").click(function(){
		$("#mmdept201911date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2019-11'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2019年11月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept201911data',datazft,layoutzft);
	});
	// 受理部门2019年11月统计  饼图
	$("#mmdept201911databt").click(function(){
		$("#mmdept201911date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2019-11'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'受理部门2019年11月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmdept201911data', databt,layoutbt);

	});
	// 受理部门2019年11月耗时天数 最大值  统计  直方图
	$("#mmdept201911datamax").click(function(){
		$("#mmdept201911date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-11',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2019年11月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201911data',datazft,layoutzft);
	});
	// 受理部门2019年11月耗时天数 最小值  统计  直方图
	$("#mmdept201911datamin").click(function(){
		$("#mmdept201911data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-11',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年11月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201911data',datazft,layoutzft);
	});
	// 受理部门2019年11月耗时天数  极差  统计  直方图
	$("#mmdept201911datarange").click(function(){
		$("#mmdept201911data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-11',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年11月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201911data',datazft,layoutzft);

	});
	// 受理部门2019年11月耗时天数  中位数  统计  直方图
	$("#mmdept201911datamedian").click(function(){
		$("#mmdept201911data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-11',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年11月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201911data',datazft,layoutzft);
	});
	// 受理部门2019年11月耗时天数  众数  统计  直方图
	$("#mmdept201911datamode").click(function(){
		$("#mmdept201911data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-11',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年11月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201911data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~受理部门2019年12月统计
	// 受理部门2019年12月统计 左侧导航 默认
	$("#mmdept201912").click(function(){
		$("#showcvs").children().hide();
		$("#mmdept201912datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2019-12'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2019年12月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept201912data',datazft,layoutzft);
	});
	// 受理部门2019年12月统计  直方图
	$("#mmdept201912datazft").click(function(){
		$("#mmdept201912date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2019-12'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2019年12月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept201912data',datazft,layoutzft);
	});
	// 受理部门2019年12月统计  饼图
	$("#mmdept201912databt").click(function(){
		$("#mmdept201912date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2019-12'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'受理部门2019年12月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmdept201912data', databt,layoutbt);

	});
	// 受理部门2019年12月耗时天数 最大值  统计  直方图
	$("#mmdept201912datamax").click(function(){
		$("#mmdept201912date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-12',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2019年12月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201912data',datazft,layoutzft);
	});
	// 受理部门2019年12月耗时天数 最小值  统计  直方图
	$("#mmdept201912datamin").click(function(){
		$("#mmdept201912data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-12',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年12月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201912data',datazft,layoutzft);
	});
	// 受理部门2019年12月耗时天数  极差  统计  直方图
	$("#mmdept201912datarange").click(function(){
		$("#mmdept201912data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-12',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年12月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201912data',datazft,layoutzft);

	});
	// 受理部门2019年12月耗时天数  中位数  统计  直方图
	$("#mmdept201912datamedian").click(function(){
		$("#mmdept201912data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-12',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年12月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201912data',datazft,layoutzft);
	});
	// 受理部门2019年12月耗时天数  众数  统计  直方图
	$("#mmdept201912datamode").click(function(){
		$("#mmdept201912data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2019-12',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2019年12月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept201912data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~受理部门2020年1月统计
	// 受理部门2020年1月统计 左侧导航 默认
	$("#mmdept202001").click(function(){
		$("#showcvs").children().hide();
		$("#mmdept202001datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2020-01'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2020年1月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept202001data',datazft,layoutzft);
	});
	// 受理部门2020年1月统计  直方图
	$("#mmdept202001datazft").click(function(){
		$("#mmdept202001date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2020-01'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2020年1月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept202001data',datazft,layoutzft);
	});
	// 受理部门2020年1月统计  饼图
	$("#mmdept202001databt").click(function(){
		$("#mmdept202001date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2020-01'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'受理部门2020年1月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmdept202001data', databt,layoutbt);

	});
	// 受理部门2020年1月耗时天数 最大值  统计  直方图
	$("#mmdept202001datamax").click(function(){
		$("#mmdept202001date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-01',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2020年1月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202001data',datazft,layoutzft);
	});
	// 受理部门2020年1月耗时天数 最小值  统计  直方图
	$("#mmdept202001datamin").click(function(){
		$("#mmdept202001data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-01',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年1月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202001data',datazft,layoutzft);
	});
	// 受理部门2020年1月耗时天数  极差  统计  直方图
	$("#mmdept202001datarange").click(function(){
		$("#mmdept202001data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-01',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年1月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202001data',datazft,layoutzft);

	});
	// 受理部门2020年1月耗时天数  中位数  统计  直方图
	$("#mmdept202001datamedian").click(function(){
		$("#mmdept202001data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-01',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年1月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202001data',datazft,layoutzft);
	});
	// 受理部门2020年1月耗时天数  众数  统计  直方图
	$("#mmdept202001datamode").click(function(){
		$("#mmdept202001data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-01',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年1月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202001data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~受理部门2020年2月统计
	// 受理部门2020年2月统计 左侧导航 默认
	$("#mmdept202002").click(function(){
		$("#showcvs").children().hide();
		$("#mmdept202002datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2020-02'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2020年2月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept202002data',datazft,layoutzft);
	});
	// 受理部门2020年2月统计  直方图
	$("#mmdept202002datazft").click(function(){
		$("#mmdept202002date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2020-02'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2020年2月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept202002data',datazft,layoutzft);
	});
	// 受理部门2020年2月统计  饼图
	$("#mmdept202002databt").click(function(){
		$("#mmdept202002date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2020-02'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'受理部门2020年2月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmdept202002data', databt,layoutbt);

	});
	// 受理部门2020年2月耗时天数 最大值  统计  直方图
	$("#mmdept202002datamax").click(function(){
		$("#mmdept202002date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-02',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2020年2月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202002data',datazft,layoutzft);
	});
	// 受理部门2020年2月耗时天数 最小值  统计  直方图
	$("#mmdept202002datamin").click(function(){
		$("#mmdept202002data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-02',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年2月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202002data',datazft,layoutzft);
	});
	// 受理部门2020年2月耗时天数  极差  统计  直方图
	$("#mmdept202002datarange").click(function(){
		$("#mmdept202002data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-02',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年2月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202002data',datazft,layoutzft);

	});
	// 受理部门2020年2月耗时天数  中位数  统计  直方图
	$("#mmdept202002datamedian").click(function(){
		$("#mmdept202002data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-02',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年2月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202002data',datazft,layoutzft);
	});
	// 受理部门2020年2月耗时天数  众数  统计  直方图
	$("#mmdept202002datamode").click(function(){
		$("#mmdept202002data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-02',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年2月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202002data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~受理部门2020年3月统计
	// 受理部门2020年3月统计 左侧导航 默认
	$("#mmdept202003").click(function(){
		$("#showcvs").children().hide();
		$("#mmdept202003datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2020-03'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2020年3月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept202003data',datazft,layoutzft);
	});
	// 受理部门2020年3月统计  直方图
	$("#mmdept202003datazft").click(function(){
		$("#mmdept202003date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2020-03'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2020年3月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept202003data',datazft,layoutzft);
	});
	// 受理部门2020年3月统计  饼图
	$("#mmdept202003databt").click(function(){
		$("#mmdept202003date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2020-03'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'受理部门2020年3月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmdept202003data', databt,layoutbt);

	});
	// 受理部门2020年3月耗时天数 最大值  统计  直方图
	$("#mmdept202003datamax").click(function(){
		$("#mmdept202003date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-03',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2020年3月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202003data',datazft,layoutzft);
	});
	// 受理部门2020年3月耗时天数 最小值  统计  直方图
	$("#mmdept202003datamin").click(function(){
		$("#mmdept202003data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-03',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年3月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202003data',datazft,layoutzft);
	});
	// 受理部门2020年3月耗时天数  极差  统计  直方图
	$("#mmdept202003datarange").click(function(){
		$("#mmdept202003data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-03',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年3月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202003data',datazft,layoutzft);

	});
	// 受理部门2020年3月耗时天数  中位数  统计  直方图
	$("#mmdept202003datamedian").click(function(){
		$("#mmdept202003data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-03',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年3月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202003data',datazft,layoutzft);
	});
	// 受理部门2020年3月耗时天数  众数  统计  直方图
	$("#mmdept202003datamode").click(function(){
		$("#mmdept202003data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-03',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年3月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202003data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~受理部门2020年4月统计
	// 受理部门2020年4月统计 左侧导航 默认
	$("#mmdept202004").click(function(){
		$("#showcvs").children().hide();
		$("#mmdept202004datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2020-04'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2020年4月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept202004data',datazft,layoutzft);
	});
	// 受理部门2020年4月统计  直方图
	$("#mmdept202004datazft").click(function(){
		$("#mmdept202004date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2020-04'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2020年4月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept202004data',datazft,layoutzft);
	});
	// 受理部门2020年4月统计  饼图
	$("#mmdept202004databt").click(function(){
		$("#mmdept202004date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2020-04'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'受理部门2020年4月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmdept202004data', databt,layoutbt);

	});
	// 受理部门2020年4月耗时天数 最大值  统计  直方图
	$("#mmdept202004datamax").click(function(){
		$("#mmdept202004date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-04',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2020年4月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202004data',datazft,layoutzft);
	});
	// 受理部门2020年4月耗时天数 最小值  统计  直方图
	$("#mmdept202004datamin").click(function(){
		$("#mmdept202004data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-04',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年4月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202004data',datazft,layoutzft);
	});
	// 受理部门2020年4月耗时天数  极差  统计  直方图
	$("#mmdept202004datarange").click(function(){
		$("#mmdept202004data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-04',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年4月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202004data',datazft,layoutzft);

	});
	// 受理部门2020年4月耗时天数  中位数  统计  直方图
	$("#mmdept202004datamedian").click(function(){
		$("#mmdept202004data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-04',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年4月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202004data',datazft,layoutzft);
	});
	// 受理部门2020年4月耗时天数  众数  统计  直方图
	$("#mmdept202004datamode").click(function(){
		$("#mmdept202004data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-04',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年4月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202004data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~受理部门2020年5月统计
	// 受理部门2020年5月统计 左侧导航 默认
	$("#mmdept202005").click(function(){
		$("#showcvs").children().hide();
		$("#mmdept202005datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2020-05'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2020年5月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept202005data',datazft,layoutzft);
	});
	// 受理部门2020年5月统计  直方图
	$("#mmdept202005datazft").click(function(){
		$("#mmdept202005date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2020-05'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2020年5月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept202005data',datazft,layoutzft);
	});
	// 受理部门2020年5月统计  饼图
	$("#mmdept202005databt").click(function(){
		$("#mmdept202005date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2020-05'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'受理部门2020年5月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmdept202005data', databt,layoutbt);

	});
	// 受理部门2020年5月耗时天数 最大值  统计  直方图
	$("#mmdept202005datamax").click(function(){
		$("#mmdept202005date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-05',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2020年5月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202005data',datazft,layoutzft);
	});
	// 受理部门2020年5月耗时天数 最小值  统计  直方图
	$("#mmdept202005datamin").click(function(){
		$("#mmdept202005data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-05',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年5月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202005data',datazft,layoutzft);
	});
	// 受理部门2020年5月耗时天数  极差  统计  直方图
	$("#mmdept202005datarange").click(function(){
		$("#mmdept202005data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-05',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年5月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202005data',datazft,layoutzft);

	});
	// 受理部门2020年5月耗时天数  中位数  统计  直方图
	$("#mmdept202005datamedian").click(function(){
		$("#mmdept202005data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-05',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年5月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202005data',datazft,layoutzft);
	});
	// 受理部门2020年5月耗时天数  众数  统计  直方图
	$("#mmdept202005datamode").click(function(){
		$("#mmdept202005data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-05',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年5月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202005data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~受理部门2020年6月统计
	// 受理部门2020年6月统计 左侧导航 默认
	$("#mmdept202006").click(function(){
		$("#showcvs").children().hide();
		$("#mmdept202006datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2020-06'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2020年6月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept202006data',datazft,layoutzft);
	});
	// 受理部门2020年6月统计  直方图
	$("#mmdept202006datazft").click(function(){
		$("#mmdept202006date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2020-06'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2020年6月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept202006data',datazft,layoutzft);
	});
	// 受理部门2020年6月统计  饼图
	$("#mmdept202006databt").click(function(){
		$("#mmdept202006date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2020-06'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'受理部门2020年6月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmdept202006data', databt,layoutbt);

	});
	// 受理部门2020年6月耗时天数 最大值  统计  直方图
	$("#mmdept202006datamax").click(function(){
		$("#mmdept202006date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-06',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2020年6月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202006data',datazft,layoutzft);
	});
	// 受理部门2020年6月耗时天数 最小值  统计  直方图
	$("#mmdept202006datamin").click(function(){
		$("#mmdept202006data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-06',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年6月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202006data',datazft,layoutzft);
	});
	// 受理部门2020年6月耗时天数  极差  统计  直方图
	$("#mmdept202006datarange").click(function(){
		$("#mmdept202006data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-06',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年6月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202006data',datazft,layoutzft);

	});
	// 受理部门2020年6月耗时天数  中位数  统计  直方图
	$("#mmdept202006datamedian").click(function(){
		$("#mmdept202006data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-06',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年6月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202006data',datazft,layoutzft);
	});
	// 受理部门2020年6月耗时天数  众数  统计  直方图
	$("#mmdept202006datamode").click(function(){
		$("#mmdept202006data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-06',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年6月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202006data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~受理部门2020年7月统计
	// 受理部门2020年7月统计 左侧导航 默认
	$("#mmdept202007").click(function(){
		$("#showcvs").children().hide();
		$("#mmdept202007datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2020-07'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2020年7月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept202007data',datazft,layoutzft);
	});
	// 受理部门2020年7月统计  直方图
	$("#mmdept202007datazft").click(function(){
		$("#mmdept202007date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2020-07'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2020年7月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept202007data',datazft,layoutzft);
	});
	// 受理部门2020年7月统计  饼图
	$("#mmdept202007databt").click(function(){
		$("#mmdept202007date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2020-07'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'受理部门2020年7月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmdept202007data', databt,layoutbt);

	});
	// 受理部门2020年7月耗时天数 最大值  统计  直方图
	$("#mmdept202007datamax").click(function(){
		$("#mmdept202007date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-07',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2020年7月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202007data',datazft,layoutzft);
	});
	// 受理部门2020年7月耗时天数 最小值  统计  直方图
	$("#mmdept202007datamin").click(function(){
		$("#mmdept202007data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-07',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年7月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202007data',datazft,layoutzft);
	});
	// 受理部门2020年7月耗时天数  极差  统计  直方图
	$("#mmdept202007datarange").click(function(){
		$("#mmdept202007data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-07',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年7月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202007data',datazft,layoutzft);

	});
	// 受理部门2020年7月耗时天数  中位数  统计  直方图
	$("#mmdept202007datamedian").click(function(){
		$("#mmdept202007data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-07',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年7月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202007data',datazft,layoutzft);
	});
	// 受理部门2020年7月耗时天数  众数  统计  直方图
	$("#mmdept202007datamode").click(function(){
		$("#mmdept202007data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-07',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年7月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202007data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~受理部门2020年8月统计
	// 受理部门2020年8月统计 左侧导航 默认
	$("#mmdept202008").click(function(){
		$("#showcvs").children().hide();
		$("#mmdept202008datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2020-08'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2020年8月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept202008data',datazft,layoutzft);
	});
	// 受理部门2020年8月统计  直方图
	$("#mmdept202008datazft").click(function(){
		$("#mmdept202008date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2020-08'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2020年8月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept202008data',datazft,layoutzft);
	});
	// 受理部门2020年8月统计  饼图
	$("#mmdept202008databt").click(function(){
		$("#mmdept202008date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2020-08'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'受理部门2020年8月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmdept202008data', databt,layoutbt);

	});
	// 受理部门2020年8月耗时天数 最大值  统计  直方图
	$("#mmdept202008datamax").click(function(){
		$("#mmdept202008date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-08',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2020年8月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202008data',datazft,layoutzft);
	});
	// 受理部门2020年8月耗时天数 最小值  统计  直方图
	$("#mmdept202008datamin").click(function(){
		$("#mmdept202008data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-08',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年8月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202008data',datazft,layoutzft);
	});
	// 受理部门2020年8月耗时天数  极差  统计  直方图
	$("#mmdept202008datarange").click(function(){
		$("#mmdept202008data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-08',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年8月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202008data',datazft,layoutzft);

	});
	// 受理部门2020年8月耗时天数  中位数  统计  直方图
	$("#mmdept202008datamedian").click(function(){
		$("#mmdept202008data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-08',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年8月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202008data',datazft,layoutzft);
	});
	// 受理部门2020年8月耗时天数  众数  统计  直方图
	$("#mmdept202008datamode").click(function(){
		$("#mmdept202008data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-08',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年8月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202008data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~受理部门2020年9月统计
	// 受理部门2020年9月统计 左侧导航 默认
	$("#mmdept202009").click(function(){
		$("#showcvs").children().hide();
		$("#mmdept202009datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2020-09'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2020年9月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept202009data',datazft,layoutzft);
	});
	// 受理部门2020年9月统计  直方图
	$("#mmdept202009datazft").click(function(){
		$("#mmdept202009date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2020-09'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2020年9月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmdept202009data',datazft,layoutzft);
	});
	// 受理部门2020年9月统计  饼图
	$("#mmdept202009databt").click(function(){
		$("#mmdept202009date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmdeptdata/selectAll.do",
			data: {
				"date" : '2020-09'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'受理部门2020年9月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmdept202009data', databt,layoutbt);

	});
	// 受理部门2020年9月耗时天数 最大值  统计  直方图
	$("#mmdept202009datamax").click(function(){
		$("#mmdept202009date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-09',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'受理部门2020年9月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202009data',datazft,layoutzft);
	});
	// 受理部门2020年9月耗时天数 最小值  统计  直方图
	$("#mmdept202009datamin").click(function(){
		$("#mmdept202009data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-09',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年9月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202009data',datazft,layoutzft);
	});
	// 受理部门2020年9月耗时天数  极差  统计  直方图
	$("#mmdept202009datarange").click(function(){
		$("#mmdept202009data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-09',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年9月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202009data',datazft,layoutzft);

	});
	// 受理部门2020年9月耗时天数  中位数  统计  直方图
	$("#mmdept202009datamedian").click(function(){
		$("#mmdept202009data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-09',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年9月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202009data',datazft,layoutzft);
	});
	// 受理部门2020年9月耗时天数  众数  统计  直方图
	$("#mmdept202009datamode").click(function(){
		$("#mmdept202009data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptAll.do",
			data: {
				"yy" : '2020-09',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'受理部门2020年9月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmdept202009data',datazft,layoutzft);
	});












	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

















	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	



	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~办件提供单位年统计
	// 办件提供单位年统计 左侧导航 默认
	$("#yyunit").click(function(){
		$("#showcvs").children().hide();
		$("#yyunitdatashow").show();

		var dateList = ['2019','2020'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/yyunitdata/selectAll.do",
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
			x: mapx[1],y: mapy[1],type: "histogram",histfunc: "sum",name: dateList[1]}]

		var layoutzft ={
			title:'办件提供单位每年办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('yyunitdata',datazft,layoutzft);
	});
	// 办件提供单位年统计  直方图
	$("#yyunitdatazft").click(function(){
		$("#yyunitdata").empty();
		var dateList = ['2019','2020'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/yyunitdata/selectAll.do",
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
			x: mapx[1],y: mapy[1],type: "histogram",histfunc: "sum",name: dateList[1]}]

		var layoutzft ={
			title:'办件提供单位每年办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('yyunitdata',datazft,layoutzft);
	});
	// 办件提供单位年统计  饼图
	$("#yyunitdatabt").click(function(){
		$("#yyunitdata").empty();
		var dateList = ['2019','2020'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/yyunitdata/selectAll.do",
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
			title:'办件提供单位每年办件量饼图',
			width: 1600,
			height: 750,
			grid: {rows: 3, columns: 5}
		};
		Plotly.newPlot('yyunitdata', databt,layoutbt);
	});
	// 办件提供单位年耗时天数 最大值  统计  直方图
	$("#yyunitdatamax").click(function(){
		$("#yyunitdata").empty();
		var dateList = ['2019','2020'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectUnitAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "max"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cUnit);
						y.push(data[i].maxDate);
					}
					mapx.push(x);
					mapy.push(y);
				}
			});
		}
		var datazft = [{x: mapx[0],y: mapy[0],type: "histogram",histfunc: "sum",name: dateList[0]},{
			x: mapx[1],y: mapy[1],type: "histogram",histfunc: "sum",name: dateList[1]}]

		var layoutzft ={
			title:'办件提供单位年耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyunitdata',datazft,layoutzft);
	});
	// 办件提供单位年耗时天数 最小值  统计  直方图
	$("#yyunitdatamin").click(function(){
		$("#yyunitdata").empty();
		var dateList = ['2019','2020'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectUnitAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "min"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cUnit);
						y.push(data[i].minDate);
					}
					mapx.push(x);
					mapy.push(y);
				}
			});
		}
		var datazft = [{x: mapx[0],y: mapy[0],type: "histogram",histfunc: "sum",name: dateList[0]},{
			x: mapx[1],y: mapy[1],type: "histogram",histfunc: "sum",name: dateList[1]}]

		var layoutzft ={
			title:'办件提供单位年耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyunitdata',datazft,layoutzft);
	});
	// 办件提供单位年耗时天数  极差  统计  直方图
	$("#yyunitdatarange").click(function(){
		$("#yyunitdata").empty();
		var dateList = ['2019','2020'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectUnitAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "range"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cUnit);
						y.push(data[i].rangeDate);
					}
					mapx.push(x);
					mapy.push(y);
				}
			});
		}
		var datazft = [{x: mapx[0],y: mapy[0],type: "histogram",histfunc: "sum",name: dateList[0]},{
			x: mapx[1],y: mapy[1],type: "histogram",histfunc: "sum",name: dateList[1]}]

		var layoutzft ={
			title:'办件提供单位年耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyunitdata',datazft,layoutzft);
	});
	// 办件提供单位年耗时天数  中位数  统计  直方图
	$("#yyunitdatamedian").click(function(){
		$("#yyunitdata").empty();
		var dateList = ['2019','2020'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectUnitAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "median"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cUnit);
						y.push(data[i].median);
					}
					mapx.push(x);
					mapy.push(y);
				}
			});
		}
		var datazft = [{x: mapx[0],y: mapy[0],type: "histogram",histfunc: "sum",name: dateList[0]},{
			x: mapx[1],y: mapy[1],type: "histogram",histfunc: "sum",name: dateList[1]}]

		var layoutzft ={
			title:'办件提供单位年耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyunitdata',datazft,layoutzft);
	});
	// 办件提供单位年耗时天数  众数  统计  直方图
	$("#yyunitdatamode").click(function(){
		$("#yyunitdata").empty();
		var dateList = ['2019','2020'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectUnitAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "mode"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cUnit);
						y.push(data[i].mode);
					}
					mapx.push(x);
					mapy.push(y);
				}
			});
		}
		var datazft = [{x: mapx[0],y: mapy[0],type: "histogram",histfunc: "sum",name: dateList[0]},{
			x: mapx[1],y: mapy[1],type: "histogram",histfunc: "sum",name: dateList[1]}]

		var layoutzft ={
			title:'办件提供单位年耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyunitdata',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~办件提供单位2019年统计
	// 办件提供单位2019年统计 左侧导航 默认
	$("#yyunit2019").click(function(){
		$("#showcvs").children().hide();
		$("#yyunit2019dateshow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/yyunitdata/selectAll.do",
			data: {
				"date" : '2019'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2019}]
		var layoutzft ={
			title:'办件提供单位2019年办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('yyunit2019date',datazft,layoutzft);
	});
	// 办件提供单位2019年统计  直方图
	$("#yyunit2019datazft").click(function(){
		$("#yyunit2019date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/yyunitdata/selectAll.do",
			data: {
				"date" : '2019'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2019}]
		var layoutzft ={
			title:'办件提供单位2019年办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('yyunit2019date',datazft,layoutzft);
	});
	// 办件提供单位2019年统计  饼图
	$("#yyunit2019databt").click(function(){
		$("#yyunit2019date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/yyunitdata/selectAll.do",
			data: {
				"date" : '2019'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2019,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'办件提供单位2019年办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 1, columns: 2}
		};
		Plotly.newPlot('yyunit2019date', databt,layoutbt);
	});
	// 办件提供单位2019年耗时天数 最大值  统计  直方图
	$("#yyunit2019datamax").click(function(){
		$("#yyunit2019date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2019}]
		var layoutzft ={
			title:'办件提供单位2019耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyunit2019date',datazft,layoutzft);
	});
	// 办件提供单位2019年耗时天数 最小值  统计  直方图
	$("#yyunit2019datamin").click(function(){
		$("#yyunit2019data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2019}]

		var layoutzft ={
			title:'办件提供单位2019年耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyunit2019date',datazft,layoutzft);
	});
	// 办件提供单位2019年耗时天数  极差  统计  直方图
	$("#yyunit2019datarange").click(function(){
		$("#yyunit2019data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2019}]

		var layoutzft ={
			title:'办件提供单位2019年耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyunit2019date',datazft,layoutzft);
	});
	// 办件提供单位2019年耗时天数  中位数  统计  直方图
	$("#yyunit2019datamedian").click(function(){
		$("#yyunit2019data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2019}]

		var layoutzft ={
			title:'办件提供单位2019年耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyunit2019date',datazft,layoutzft);
	});
	// 办件提供单位2019年耗时天数  众数  统计  直方图
	$("#yyunit2019datamode").click(function(){
		$("#yyunit2019data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2019}]

		var layoutzft ={
			title:'办件提供单位2019年耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyunit2019date',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~办件提供单位2020年统计
	// 办件提供单位2020年统计 左侧导航 默认
	$("#yyunit2020").click(function(){
		$("#showcvs").children().hide();
		$("#yyunit2020dateshow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/yyunitdata/selectAll.do",
			data: {
				"date" : '2020'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2020年办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('yyunit2020data',datazft,layoutzft);
	});
	// 办件提供单位2020年统计  直方图
	$("#yyunit2020datazft").click(function(){
		$("#yyunit2020date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/yyunitdata/selectAll.do",
			data: {
				"date" : '2020'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2020年办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('yyunit2020data',datazft,layoutzft);
	});
	// 办件提供单位2020年统计  饼图
	$("#yyunit2020databt").click(function(){
		$("#yyunit2020date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/yyunitdata/selectAll.do",
			data: {
				"date" : '2020'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'办件提供单位2020年办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('yyunit2020data', databt,layoutbt);

	});
	// 办件提供单位2020年耗时天数 最大值  统计  直方图
	$("#yyunit2020datamax").click(function(){
		$("#yyunit2020date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2020耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyunit2020data',datazft,layoutzft);
	});
	// 办件提供单位2020年耗时天数 最小值  统计  直方图
	$("#yyunit2020datamin").click(function(){
		$("#yyunit2020data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyunit2020data',datazft,layoutzft);
	});
	// 办件提供单位2020年耗时天数  极差  统计  直方图
	$("#yyunit2020datarange").click(function(){
		$("#yyunit2020data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyunit2020data',datazft,layoutzft);

	});
	// 办件提供单位2020年耗时天数  中位数  统计  直方图
	$("#yyunit2020datamedian").click(function(){
		$("#yyunit2020data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyunit2020data',datazft,layoutzft);
	});
	// 办件提供单位2020年耗时天数  众数  统计  直方图
	$("#yyunit2020datamode").click(function(){
		$("#yyunit2020data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('yyunit2020data',datazft,layoutzft);
	});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~办件提供单位月统计
	// 办件提供单位月统计 左侧导航 默认
	$("#mmunit").click(function(){
		$("#showcvs").children().hide();
		$("#mmunitdatashow").show();
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
			title:'办件提供单位每个月办件量直方图',width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunitdata',datazft,layoutzft);
	});
	// 办件提供单位月统计  直方图
	$("#mmunitdatazft").click(function(){
		$("#mmunitdata").empty();
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
			title:'办件提供单位每个月办件量直方图',width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunitdata',datazft,layoutzft);
	});
	// 办件提供单位年统计  饼图
	$("#mmunitdatabt").click(function(){
		$("#mmunitdata").empty();
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
			height: 790,
			grid: {rows: 3, columns: 8}
		};

		Plotly.newPlot('mmunitdata', databt,layoutbt);
	});
	// 办件提供单位年耗时天数 最大值  统计  直方图
	$("#mmunitdatamax").click(function(){
		$("#mmunitdata").empty();
		var dateList = ['2019-01','2019-02','2019-03','2019-04','2019-05','2019-06','2019-07','2019-08','2019-09','2019-10','2019-11','2019-12',
			'2020-01','2020-02','2020-03','2020-04','2020-05','2020-06','2020-07','2020-08','2020-09'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectUnitAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "max"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cUnit);
						y.push(data[i].maxDate);
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
			title:'办件提供单位月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunitdata',datazft,layoutzft);
	});
	// 办件提供单位年耗时天数 最小值  统计  直方图
	$("#mmunitdatamin").click(function(){
		$("#mmunitdata").empty();
		var dateList = ['2019-01','2019-02','2019-03','2019-04','2019-05','2019-06','2019-07','2019-08','2019-09','2019-10','2019-11','2019-12',
			'2020-01','2020-02','2020-03','2020-04','2020-05','2020-06','2020-07','2020-08','2020-09'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectUnitAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "min"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cUnit);
						y.push(data[i].minDate);
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
			title:'办件提供单位月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunitdata',datazft,layoutzft);
	});
	// 办件提供单位年耗时天数  极差  统计  直方图
	$("#mmunitdatarange").click(function(){
		$("#mmunitdata").empty();
		var dateList = ['2019-01','2019-02','2019-03','2019-04','2019-05','2019-06','2019-07','2019-08','2019-09','2019-10','2019-11','2019-12',
			'2020-01','2020-02','2020-03','2020-04','2020-05','2020-06','2020-07','2020-08','2020-09'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectUnitAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "range"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cUnit);
						y.push(data[i].rangeDate);
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
			title:'办件提供单位月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunitdata',datazft,layoutzft);
	});
	// 办件提供单位年耗时天数  中位数  统计  直方图
	$("#mmunitdatamedian").click(function(){
		$("#mmunitdata").empty();
		var dateList = ['2019-01','2019-02','2019-03','2019-04','2019-05','2019-06','2019-07','2019-08','2019-09','2019-10','2019-11','2019-12',
			'2020-01','2020-02','2020-03','2020-04','2020-05','2020-06','2020-07','2020-08','2020-09'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectUnitAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "median"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cUnit);
						y.push(data[i].median);
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
			title:'办件提供单位月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunitdata',datazft,layoutzft);
	});
	// 办件提供单位年耗时天数  众数  统计  直方图
	$("#mmunitdatamode").click(function(){
		$("#mmunitdata").empty();
		var dateList = ['2019-01','2019-02','2019-03','2019-04','2019-05','2019-06','2019-07','2019-08','2019-09','2019-10','2019-11','2019-12',
			'2020-01','2020-02','2020-03','2020-04','2020-05','2020-06','2020-07','2020-08','2020-09'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectUnitAll.do",
				data: {
					"yy" : dateList[i],
					"value" : "mode"
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cUnit);
						y.push(data[i].mode);
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
			title:'办件提供单位月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunitdata',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~办件提供单位2019年1月统计
	// 办件提供单位2019年1月统计 左侧导航 默认
	$("#mmunit201901").click(function(){
		$("#showcvs").children().hide();
		$("#mmunit201901datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2019-01'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2019年1月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit201901data',datazft,layoutzft);
	});
	// 办件提供单位2019年1月统计  直方图
	$("#mmunit201901datazft").click(function(){
		$("#mmunit201901date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2019-01'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2019年1月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit201901data',datazft,layoutzft);
	});
	// 办件提供单位2019年1月统计  饼图
	$("#mmunit201901databt").click(function(){
		$("#mmunit201901date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2019-01'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'办件提供单位2019年1月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmunit201901data', databt,layoutbt);

	});
	// 办件提供单位2019年1月耗时天数 最大值  统计  直方图
	$("#mmunit201901datamax").click(function(){
		$("#mmunit201901date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-01',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2019年1月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201901data',datazft,layoutzft);
	});
	// 办件提供单位2019年1月耗时天数 最小值  统计  直方图
	$("#mmunit201901datamin").click(function(){
		$("#mmunit201901data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-01',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年1月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201901data',datazft,layoutzft);
	});
	// 办件提供单位2019年1月耗时天数  极差  统计  直方图
	$("#mmunit201901datarange").click(function(){
		$("#mmunit201901data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-01',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年1月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201901data',datazft,layoutzft);

	});
	// 办件提供单位2019年1月耗时天数  中位数  统计  直方图
	$("#mmunit201901datamedian").click(function(){
		$("#mmunit201901data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-01',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年1月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201901data',datazft,layoutzft);
	});
	// 办件提供单位2019年1月耗时天数  众数  统计  直方图
	$("#mmunit201901datamode").click(function(){
		$("#mmunit201901data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-01',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年1月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201901data',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~办件提供单位2019年2月统计
	// 办件提供单位2019年2月统计 左侧导航 默认
	$("#mmunit201902").click(function(){
		$("#showcvs").children().hide();
		$("#mmunit201902datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2019-02'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2019年2月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit201902data',datazft,layoutzft);
	});
	// 办件提供单位2019年2月统计  直方图
	$("#mmunit201902datazft").click(function(){
		$("#mmunit201902date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2019-02'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2019年2月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit201902data',datazft,layoutzft);
	});
	// 办件提供单位2019年2月统计  饼图
	$("#mmunit201902databt").click(function(){
		$("#mmunit201902date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2019-02'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'办件提供单位2019年2月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmunit201902data', databt,layoutbt);

	});
	// 办件提供单位2019年2月耗时天数 最大值  统计  直方图
	$("#mmunit201902datamax").click(function(){
		$("#mmunit201902date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-02',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2019年2月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201902data',datazft,layoutzft);
	});
	// 办件提供单位2019年2月耗时天数 最小值  统计  直方图
	$("#mmunit201902datamin").click(function(){
		$("#mmunit201902data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-02',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年2月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201902data',datazft,layoutzft);
	});
	// 办件提供单位2019年2月耗时天数  极差  统计  直方图
	$("#mmunit201902datarange").click(function(){
		$("#mmunit201902data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-02',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年2月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201902data',datazft,layoutzft);

	});
	// 办件提供单位2019年2月耗时天数  中位数  统计  直方图
	$("#mmunit201902datamedian").click(function(){
		$("#mmunit201902data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-02',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年2月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201902data',datazft,layoutzft);
	});
	// 办件提供单位2019年2月耗时天数  众数  统计  直方图
	$("#mmunit201902datamode").click(function(){
		$("#mmunit201902data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-02',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年2月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201902data',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~办件提供单位2019年3月统计
	// 办件提供单位2019年3月统计 左侧导航 默认
	$("#mmunit201903").click(function(){
		$("#showcvs").children().hide();
		$("#mmunit201903datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2019-03'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2019年3月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit201903data',datazft,layoutzft);
	});
	// 办件提供单位2019年3月统计  直方图
	$("#mmunit201903datazft").click(function(){
		$("#mmunit201903date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2019-03'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2019年3月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit201903data',datazft,layoutzft);
	});
	// 办件提供单位2019年3月统计  饼图
	$("#mmunit201903databt").click(function(){
		$("#mmunit201903date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2019-03'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'办件提供单位2019年3月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmunit201903data', databt,layoutbt);

	});
	// 办件提供单位2019年3月耗时天数 最大值  统计  直方图
	$("#mmunit201903datamax").click(function(){
		$("#mmunit201903date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-03',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2019年3月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201903data',datazft,layoutzft);
	});
	// 办件提供单位2019年3月耗时天数 最小值  统计  直方图
	$("#mmunit201903datamin").click(function(){
		$("#mmunit201903data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-03',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年3月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201903data',datazft,layoutzft);
	});
	// 办件提供单位2019年3月耗时天数  极差  统计  直方图
	$("#mmunit201903datarange").click(function(){
		$("#mmunit201903data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-03',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年3月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201903data',datazft,layoutzft);

	});
	// 办件提供单位2019年3月耗时天数  中位数  统计  直方图
	$("#mmunit201903datamedian").click(function(){
		$("#mmunit201903data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-03',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年3月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201903data',datazft,layoutzft);
	});
	// 办件提供单位2019年3月耗时天数  众数  统计  直方图
	$("#mmunit201903datamode").click(function(){
		$("#mmunit201903data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-03',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年3月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201903data',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~办件提供单位2019年4月统计
	// 办件提供单位2019年4月统计 左侧导航 默认
	$("#mmunit201904").click(function(){
		$("#showcvs").children().hide();
		$("#mmunit201904datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2019-04'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2019年4月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit201904data',datazft,layoutzft);
	});
	// 办件提供单位2019年4月统计  直方图
	$("#mmunit201904datazft").click(function(){
		$("#mmunit201904date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2019-04'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2019年4月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit201904data',datazft,layoutzft);
	});
	// 办件提供单位2019年4月统计  饼图
	$("#mmunit201904databt").click(function(){
		$("#mmunit201904date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2019-04'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'办件提供单位2019年4月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmunit201904data', databt,layoutbt);

	});
	// 办件提供单位2019年4月耗时天数 最大值  统计  直方图
	$("#mmunit201904datamax").click(function(){
		$("#mmunit201904date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-04',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2019年4月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201904data',datazft,layoutzft);
	});
	// 办件提供单位2019年4月耗时天数 最小值  统计  直方图
	$("#mmunit201904datamin").click(function(){
		$("#mmunit201904data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-04',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年4月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201904data',datazft,layoutzft);
	});
	// 办件提供单位2019年4月耗时天数  极差  统计  直方图
	$("#mmunit201904datarange").click(function(){
		$("#mmunit201904data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-04',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年4月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201904data',datazft,layoutzft);

	});
	// 办件提供单位2019年4月耗时天数  中位数  统计  直方图
	$("#mmunit201904datamedian").click(function(){
		$("#mmunit201904data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-04',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年4月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201904data',datazft,layoutzft);
	});
	// 办件提供单位2019年4月耗时天数  众数  统计  直方图
	$("#mmunit201904datamode").click(function(){
		$("#mmunit201904data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-04',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年4月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201904data',datazft,layoutzft);
	});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~办件提供单位2019年5月统计
	// 办件提供单位2019年5月统计 左侧导航 默认
	$("#mmunit201905").click(function(){
		$("#showcvs").children().hide();
		$("#mmunit201905datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2019-05'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2019年5月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit201905data',datazft,layoutzft);
	});
	// 办件提供单位2019年5月统计  直方图
	$("#mmunit201905datazft").click(function(){
		$("#mmunit201905date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2019-05'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2019年5月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit201905data',datazft,layoutzft);
	});
	// 办件提供单位2019年5月统计  饼图
	$("#mmunit201905databt").click(function(){
		$("#mmunit201905date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2019-05'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'办件提供单位2019年5月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmunit201905data', databt,layoutbt);

	});
	// 办件提供单位2019年5月耗时天数 最大值  统计  直方图
	$("#mmunit201905datamax").click(function(){
		$("#mmunit201905date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-05',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2019年5月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201905data',datazft,layoutzft);
	});
	// 办件提供单位2019年5月耗时天数 最小值  统计  直方图
	$("#mmunit201905datamin").click(function(){
		$("#mmunit201905data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-05',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年5月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201905data',datazft,layoutzft);
	});
	// 办件提供单位2019年5月耗时天数  极差  统计  直方图
	$("#mmunit201905datarange").click(function(){
		$("#mmunit201905data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-05',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年5月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201905data',datazft,layoutzft);

	});
	// 办件提供单位2019年5月耗时天数  中位数  统计  直方图
	$("#mmunit201905datamedian").click(function(){
		$("#mmunit201905data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-05',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年5月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201905data',datazft,layoutzft);
	});
	// 办件提供单位2019年5月耗时天数  众数  统计  直方图
	$("#mmunit201905datamode").click(function(){
		$("#mmunit201905data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-05',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年5月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201905data',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~办件提供单位2019年6月统计
	// 办件提供单位2019年6月统计 左侧导航 默认
	$("#mmunit201906").click(function(){
		$("#showcvs").children().hide();
		$("#mmunit201906datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2019-06'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2019年6月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit201906data',datazft,layoutzft);
	});
	// 办件提供单位2019年6月统计  直方图
	$("#mmunit201906datazft").click(function(){
		$("#mmunit201906date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2019-06'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2019年6月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit201906data',datazft,layoutzft);
	});
	// 办件提供单位2019年6月统计  饼图
	$("#mmunit201906databt").click(function(){
		$("#mmunit201906date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2019-06'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'办件提供单位2019年6月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmunit201906data', databt,layoutbt);

	});
	// 办件提供单位2019年6月耗时天数 最大值  统计  直方图
	$("#mmunit201906datamax").click(function(){
		$("#mmunit201906date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-06',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2019年6月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201906data',datazft,layoutzft);
	});
	// 办件提供单位2019年6月耗时天数 最小值  统计  直方图
	$("#mmunit201906datamin").click(function(){
		$("#mmunit201906data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-06',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年6月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201906data',datazft,layoutzft);
	});
	// 办件提供单位2019年6月耗时天数  极差  统计  直方图
	$("#mmunit201906datarange").click(function(){
		$("#mmunit201906data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-06',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年6月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201906data',datazft,layoutzft);

	});
	// 办件提供单位2019年6月耗时天数  中位数  统计  直方图
	$("#mmunit201906datamedian").click(function(){
		$("#mmunit201906data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-06',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年6月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201906data',datazft,layoutzft);
	});
	// 办件提供单位2019年6月耗时天数  众数  统计  直方图
	$("#mmunit201906datamode").click(function(){
		$("#mmunit201906data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-06',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年6月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201906data',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~办件提供单位2019年7月统计
	// 办件提供单位2019年7月统计 左侧导航 默认
	$("#mmunit201907").click(function(){
		$("#showcvs").children().hide();
		$("#mmunit201907datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2019-07'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2019年7月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit201907data',datazft,layoutzft);
	});
	// 办件提供单位2019年7月统计  直方图
	$("#mmunit201907datazft").click(function(){
		$("#mmunit201907date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2019-07'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2019年7月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit201907data',datazft,layoutzft);
	});
	// 办件提供单位2019年7月统计  饼图
	$("#mmunit201907databt").click(function(){
		$("#mmunit201907date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2019-07'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'办件提供单位2019年7月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmunit201907data', databt,layoutbt);

	});
	// 办件提供单位2019年7月耗时天数 最大值  统计  直方图
	$("#mmunit201907datamax").click(function(){
		$("#mmunit201907date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-07',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2019年7月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201907data',datazft,layoutzft);
	});
	// 办件提供单位2019年7月耗时天数 最小值  统计  直方图
	$("#mmunit201907datamin").click(function(){
		$("#mmunit201907data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-07',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年7月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201907data',datazft,layoutzft);
	});
	// 办件提供单位2019年7月耗时天数  极差  统计  直方图
	$("#mmunit201907datarange").click(function(){
		$("#mmunit201907data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-07',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年7月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201907data',datazft,layoutzft);

	});
	// 办件提供单位2019年7月耗时天数  中位数  统计  直方图
	$("#mmunit201907datamedian").click(function(){
		$("#mmunit201907data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-07',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年7月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201907data',datazft,layoutzft);
	});
	// 办件提供单位2019年7月耗时天数  众数  统计  直方图
	$("#mmunit201907datamode").click(function(){
		$("#mmunit201907data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-07',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年7月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201907data',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~办件提供单位2019年8月统计
	// 办件提供单位2019年8月统计 左侧导航 默认
	$("#mmunit201908").click(function(){
		$("#showcvs").children().hide();
		$("#mmunit201908datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2019-08'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2019年8月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit201908data',datazft,layoutzft);
	});
	// 办件提供单位2019年8月统计  直方图
	$("#mmunit201908datazft").click(function(){
		$("#mmunit201908date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2019-08'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2019年8月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit201908data',datazft,layoutzft);
	});
	// 办件提供单位2019年8月统计  饼图
	$("#mmunit201908databt").click(function(){
		$("#mmunit201908date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2019-08'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'办件提供单位2019年8月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmunit201908data', databt,layoutbt);

	});
	// 办件提供单位2019年8月耗时天数 最大值  统计  直方图
	$("#mmunit201908datamax").click(function(){
		$("#mmunit201908date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-08',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2019年8月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201908data',datazft,layoutzft);
	});
	// 办件提供单位2019年8月耗时天数 最小值  统计  直方图
	$("#mmunit201908datamin").click(function(){
		$("#mmunit201908data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-08',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年8月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201908data',datazft,layoutzft);
	});
	// 办件提供单位2019年8月耗时天数  极差  统计  直方图
	$("#mmunit201908datarange").click(function(){
		$("#mmunit201908data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-08',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年8月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201908data',datazft,layoutzft);

	});
	// 办件提供单位2019年8月耗时天数  中位数  统计  直方图
	$("#mmunit201908datamedian").click(function(){
		$("#mmunit201908data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-08',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年8月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201908data',datazft,layoutzft);
	});
	// 办件提供单位2019年8月耗时天数  众数  统计  直方图
	$("#mmunit201908datamode").click(function(){
		$("#mmunit201908data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-08',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年8月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201908data',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~办件提供单位2019年9月统计
	// 办件提供单位2019年9月统计 左侧导航 默认
	$("#mmunit201909").click(function(){
		$("#showcvs").children().hide();
		$("#mmunit201909datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2019-09'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2019年9月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit201909data',datazft,layoutzft);
	});
	// 办件提供单位2019年9月统计  直方图
	$("#mmunit201909datazft").click(function(){
		$("#mmunit201909date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2019-09'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2019年9月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit201909data',datazft,layoutzft);
	});
	// 办件提供单位2019年9月统计  饼图
	$("#mmunit201909databt").click(function(){
		$("#mmunit201909date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2019-09'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'办件提供单位2019年9月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmunit201909data', databt,layoutbt);

	});
	// 办件提供单位2019年9月耗时天数 最大值  统计  直方图
	$("#mmunit201909datamax").click(function(){
		$("#mmunit201909date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-09',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2019年9月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201909data',datazft,layoutzft);
	});
	// 办件提供单位2019年9月耗时天数 最小值  统计  直方图
	$("#mmunit201909datamin").click(function(){
		$("#mmunit201909data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-09',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年9月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201909data',datazft,layoutzft);
	});
	// 办件提供单位2019年9月耗时天数  极差  统计  直方图
	$("#mmunit201909datarange").click(function(){
		$("#mmunit201909data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-09',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年9月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201909data',datazft,layoutzft);

	});
	// 办件提供单位2019年9月耗时天数  中位数  统计  直方图
	$("#mmunit201909datamedian").click(function(){
		$("#mmunit201909data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-09',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年9月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201909data',datazft,layoutzft);
	});
	// 办件提供单位2019年9月耗时天数  众数  统计  直方图
	$("#mmunit201909datamode").click(function(){
		$("#mmunit201909data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-09',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年9月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201909data',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~办件提供单位2019年10月统计
	// 办件提供单位2019年10月统计 左侧导航 默认
	$("#mmunit201910").click(function(){
		$("#showcvs").children().hide();
		$("#mmunit201910datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2019-10'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2019年10月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit201910data',datazft,layoutzft);
	});
	// 办件提供单位2019年10月统计  直方图
	$("#mmunit201910datazft").click(function(){
		$("#mmunit201910date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2019-10'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2019年10月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit201910data',datazft,layoutzft);
	});
	// 办件提供单位2019年10月统计  饼图
	$("#mmunit201910databt").click(function(){
		$("#mmunit201910date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2019-10'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'办件提供单位2019年10月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmunit201910data', databt,layoutbt);

	});
	// 办件提供单位2019年10月耗时天数 最大值  统计  直方图
	$("#mmunit201910datamax").click(function(){
		$("#mmunit201910date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-10',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2019年10月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201910data',datazft,layoutzft);
	});
	// 办件提供单位2019年10月耗时天数 最小值  统计  直方图
	$("#mmunit201910datamin").click(function(){
		$("#mmunit201910data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-10',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年10月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201910data',datazft,layoutzft);
	});
	// 办件提供单位2019年10月耗时天数  极差  统计  直方图
	$("#mmunit201910datarange").click(function(){
		$("#mmunit201910data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-10',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年10月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201910data',datazft,layoutzft);

	});
	// 办件提供单位2019年10月耗时天数  中位数  统计  直方图
	$("#mmunit201910datamedian").click(function(){
		$("#mmunit201910data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-10',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年10月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201910data',datazft,layoutzft);
	});
	// 办件提供单位2019年10月耗时天数  众数  统计  直方图
	$("#mmunit201910datamode").click(function(){
		$("#mmunit201910data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-10',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年10月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201910data',datazft,layoutzft);
	});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~办件提供单位2019年11月统计
	// 办件提供单位2019年11月统计 左侧导航 默认
	$("#mmunit201911").click(function(){
		$("#showcvs").children().hide();
		$("#mmunit201911datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2019-11'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2019年11月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit201911data',datazft,layoutzft);
	});
	// 办件提供单位2019年11月统计  直方图
	$("#mmunit201911datazft").click(function(){
		$("#mmunit201911date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2019-11'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2019年11月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit201911data',datazft,layoutzft);
	});
	// 办件提供单位2019年11月统计  饼图
	$("#mmunit201911databt").click(function(){
		$("#mmunit201911date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2019-11'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'办件提供单位2019年11月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmunit201911data', databt,layoutbt);

	});
	// 办件提供单位2019年11月耗时天数 最大值  统计  直方图
	$("#mmunit201911datamax").click(function(){
		$("#mmunit201911date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-11',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2019年11月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201911data',datazft,layoutzft);
	});
	// 办件提供单位2019年11月耗时天数 最小值  统计  直方图
	$("#mmunit201911datamin").click(function(){
		$("#mmunit201911data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-11',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年11月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201911data',datazft,layoutzft);
	});
	// 办件提供单位2019年11月耗时天数  极差  统计  直方图
	$("#mmunit201911datarange").click(function(){
		$("#mmunit201911data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-11',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年11月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201911data',datazft,layoutzft);

	});
	// 办件提供单位2019年11月耗时天数  中位数  统计  直方图
	$("#mmunit201911datamedian").click(function(){
		$("#mmunit201911data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-11',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年11月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201911data',datazft,layoutzft);
	});
	// 办件提供单位2019年11月耗时天数  众数  统计  直方图
	$("#mmunit201911datamode").click(function(){
		$("#mmunit201911data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-11',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年11月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201911data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~办件提供单位2019年12月统计
	// 办件提供单位2019年12月统计 左侧导航 默认
	$("#mmunit201912").click(function(){
		$("#showcvs").children().hide();
		$("#mmunit201912datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2019-12'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2019年12月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit201912data',datazft,layoutzft);
	});
	// 办件提供单位2019年12月统计  直方图
	$("#mmunit201912datazft").click(function(){
		$("#mmunit201912date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2019-12'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2019年12月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit201912data',datazft,layoutzft);
	});
	// 办件提供单位2019年12月统计  饼图
	$("#mmunit201912databt").click(function(){
		$("#mmunit201912date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2019-12'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'办件提供单位2019年12月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmunit201912data', databt,layoutbt);

	});
	// 办件提供单位2019年12月耗时天数 最大值  统计  直方图
	$("#mmunit201912datamax").click(function(){
		$("#mmunit201912date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-12',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2019年12月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201912data',datazft,layoutzft);
	});
	// 办件提供单位2019年12月耗时天数 最小值  统计  直方图
	$("#mmunit201912datamin").click(function(){
		$("#mmunit201912data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-12',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年12月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201912data',datazft,layoutzft);
	});
	// 办件提供单位2019年12月耗时天数  极差  统计  直方图
	$("#mmunit201912datarange").click(function(){
		$("#mmunit201912data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-12',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年12月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201912data',datazft,layoutzft);

	});
	// 办件提供单位2019年12月耗时天数  中位数  统计  直方图
	$("#mmunit201912datamedian").click(function(){
		$("#mmunit201912data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-12',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年12月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201912data',datazft,layoutzft);
	});
	// 办件提供单位2019年12月耗时天数  众数  统计  直方图
	$("#mmunit201912datamode").click(function(){
		$("#mmunit201912data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2019-12',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2019年12月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit201912data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~办件提供单位2020年1月统计
	// 办件提供单位2020年1月统计 左侧导航 默认
	$("#mmunit202001").click(function(){
		$("#showcvs").children().hide();
		$("#mmunit202001datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2020-01'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2020年1月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit202001data',datazft,layoutzft);
	});
	// 办件提供单位2020年1月统计  直方图
	$("#mmunit202001datazft").click(function(){
		$("#mmunit202001date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2020-01'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2020年1月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit202001data',datazft,layoutzft);
	});
	// 办件提供单位2020年1月统计  饼图
	$("#mmunit202001databt").click(function(){
		$("#mmunit202001date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2020-01'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'办件提供单位2020年1月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmunit202001data', databt,layoutbt);

	});
	// 办件提供单位2020年1月耗时天数 最大值  统计  直方图
	$("#mmunit202001datamax").click(function(){
		$("#mmunit202001date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-01',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2020年1月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202001data',datazft,layoutzft);
	});
	// 办件提供单位2020年1月耗时天数 最小值  统计  直方图
	$("#mmunit202001datamin").click(function(){
		$("#mmunit202001data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-01',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年1月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202001data',datazft,layoutzft);
	});
	// 办件提供单位2020年1月耗时天数  极差  统计  直方图
	$("#mmunit202001datarange").click(function(){
		$("#mmunit202001data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-01',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年1月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202001data',datazft,layoutzft);

	});
	// 办件提供单位2020年1月耗时天数  中位数  统计  直方图
	$("#mmunit202001datamedian").click(function(){
		$("#mmunit202001data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-01',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年1月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202001data',datazft,layoutzft);
	});
	// 办件提供单位2020年1月耗时天数  众数  统计  直方图
	$("#mmunit202001datamode").click(function(){
		$("#mmunit202001data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-01',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年1月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202001data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~办件提供单位2020年2月统计
	// 办件提供单位2020年2月统计 左侧导航 默认
	$("#mmunit202002").click(function(){
		$("#showcvs").children().hide();
		$("#mmunit202002datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2020-02'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2020年2月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit202002data',datazft,layoutzft);
	});
	// 办件提供单位2020年2月统计  直方图
	$("#mmunit202002datazft").click(function(){
		$("#mmunit202002date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2020-02'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2020年2月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit202002data',datazft,layoutzft);
	});
	// 办件提供单位2020年2月统计  饼图
	$("#mmunit202002databt").click(function(){
		$("#mmunit202002date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2020-02'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'办件提供单位2020年2月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmunit202002data', databt,layoutbt);

	});
	// 办件提供单位2020年2月耗时天数 最大值  统计  直方图
	$("#mmunit202002datamax").click(function(){
		$("#mmunit202002date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-02',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2020年2月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202002data',datazft,layoutzft);
	});
	// 办件提供单位2020年2月耗时天数 最小值  统计  直方图
	$("#mmunit202002datamin").click(function(){
		$("#mmunit202002data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-02',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年2月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202002data',datazft,layoutzft);
	});
	// 办件提供单位2020年2月耗时天数  极差  统计  直方图
	$("#mmunit202002datarange").click(function(){
		$("#mmunit202002data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-02',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年2月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202002data',datazft,layoutzft);

	});
	// 办件提供单位2020年2月耗时天数  中位数  统计  直方图
	$("#mmunit202002datamedian").click(function(){
		$("#mmunit202002data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-02',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年2月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202002data',datazft,layoutzft);
	});
	// 办件提供单位2020年2月耗时天数  众数  统计  直方图
	$("#mmunit202002datamode").click(function(){
		$("#mmunit202002data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-02',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年2月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202002data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~办件提供单位2020年3月统计
	// 办件提供单位2020年3月统计 左侧导航 默认
	$("#mmunit202003").click(function(){
		$("#showcvs").children().hide();
		$("#mmunit202003datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2020-03'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2020年3月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit202003data',datazft,layoutzft);
	});
	// 办件提供单位2020年3月统计  直方图
	$("#mmunit202003datazft").click(function(){
		$("#mmunit202003date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2020-03'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2020年3月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit202003data',datazft,layoutzft);
	});
	// 办件提供单位2020年3月统计  饼图
	$("#mmunit202003databt").click(function(){
		$("#mmunit202003date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2020-03'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'办件提供单位2020年3月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmunit202003data', databt,layoutbt);

	});
	// 办件提供单位2020年3月耗时天数 最大值  统计  直方图
	$("#mmunit202003datamax").click(function(){
		$("#mmunit202003date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-03',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2020年3月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202003data',datazft,layoutzft);
	});
	// 办件提供单位2020年3月耗时天数 最小值  统计  直方图
	$("#mmunit202003datamin").click(function(){
		$("#mmunit202003data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-03',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年3月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202003data',datazft,layoutzft);
	});
	// 办件提供单位2020年3月耗时天数  极差  统计  直方图
	$("#mmunit202003datarange").click(function(){
		$("#mmunit202003data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-03',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年3月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202003data',datazft,layoutzft);

	});
	// 办件提供单位2020年3月耗时天数  中位数  统计  直方图
	$("#mmunit202003datamedian").click(function(){
		$("#mmunit202003data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-03',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年3月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202003data',datazft,layoutzft);
	});
	// 办件提供单位2020年3月耗时天数  众数  统计  直方图
	$("#mmunit202003datamode").click(function(){
		$("#mmunit202003data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-03',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年3月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202003data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~办件提供单位2020年4月统计
	// 办件提供单位2020年4月统计 左侧导航 默认
	$("#mmunit202004").click(function(){
		$("#showcvs").children().hide();
		$("#mmunit202004datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2020-04'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2020年4月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit202004data',datazft,layoutzft);
	});
	// 办件提供单位2020年4月统计  直方图
	$("#mmunit202004datazft").click(function(){
		$("#mmunit202004date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2020-04'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2020年4月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit202004data',datazft,layoutzft);
	});
	// 办件提供单位2020年4月统计  饼图
	$("#mmunit202004databt").click(function(){
		$("#mmunit202004date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2020-04'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'办件提供单位2020年4月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmunit202004data', databt,layoutbt);

	});
	// 办件提供单位2020年4月耗时天数 最大值  统计  直方图
	$("#mmunit202004datamax").click(function(){
		$("#mmunit202004date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-04',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2020年4月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202004data',datazft,layoutzft);
	});
	// 办件提供单位2020年4月耗时天数 最小值  统计  直方图
	$("#mmunit202004datamin").click(function(){
		$("#mmunit202004data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-04',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年4月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202004data',datazft,layoutzft);
	});
	// 办件提供单位2020年4月耗时天数  极差  统计  直方图
	$("#mmunit202004datarange").click(function(){
		$("#mmunit202004data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-04',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年4月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202004data',datazft,layoutzft);

	});
	// 办件提供单位2020年4月耗时天数  中位数  统计  直方图
	$("#mmunit202004datamedian").click(function(){
		$("#mmunit202004data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-04',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年4月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202004data',datazft,layoutzft);
	});
	// 办件提供单位2020年4月耗时天数  众数  统计  直方图
	$("#mmunit202004datamode").click(function(){
		$("#mmunit202004data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-04',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年4月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202004data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~办件提供单位2020年5月统计
	// 办件提供单位2020年5月统计 左侧导航 默认
	$("#mmunit202005").click(function(){
		$("#showcvs").children().hide();
		$("#mmunit202005datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2020-05'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2020年5月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit202005data',datazft,layoutzft);
	});
	// 办件提供单位2020年5月统计  直方图
	$("#mmunit202005datazft").click(function(){
		$("#mmunit202005date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2020-05'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2020年5月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit202005data',datazft,layoutzft);
	});
	// 办件提供单位2020年5月统计  饼图
	$("#mmunit202005databt").click(function(){
		$("#mmunit202005date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2020-05'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'办件提供单位2020年5月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmunit202005data', databt,layoutbt);

	});
	// 办件提供单位2020年5月耗时天数 最大值  统计  直方图
	$("#mmunit202005datamax").click(function(){
		$("#mmunit202005date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-05',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2020年5月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202005data',datazft,layoutzft);
	});
	// 办件提供单位2020年5月耗时天数 最小值  统计  直方图
	$("#mmunit202005datamin").click(function(){
		$("#mmunit202005data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-05',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年5月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202005data',datazft,layoutzft);
	});
	// 办件提供单位2020年5月耗时天数  极差  统计  直方图
	$("#mmunit202005datarange").click(function(){
		$("#mmunit202005data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-05',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年5月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202005data',datazft,layoutzft);

	});
	// 办件提供单位2020年5月耗时天数  中位数  统计  直方图
	$("#mmunit202005datamedian").click(function(){
		$("#mmunit202005data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-05',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年5月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202005data',datazft,layoutzft);
	});
	// 办件提供单位2020年5月耗时天数  众数  统计  直方图
	$("#mmunit202005datamode").click(function(){
		$("#mmunit202005data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-05',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年5月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202005data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~办件提供单位2020年6月统计
	// 办件提供单位2020年6月统计 左侧导航 默认
	$("#mmunit202006").click(function(){
		$("#showcvs").children().hide();
		$("#mmunit202006datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2020-06'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2020年6月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit202006data',datazft,layoutzft);
	});
	// 办件提供单位2020年6月统计  直方图
	$("#mmunit202006datazft").click(function(){
		$("#mmunit202006date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2020-06'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2020年6月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit202006data',datazft,layoutzft);
	});
	// 办件提供单位2020年6月统计  饼图
	$("#mmunit202006databt").click(function(){
		$("#mmunit202006date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2020-06'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'办件提供单位2020年6月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmunit202006data', databt,layoutbt);

	});
	// 办件提供单位2020年6月耗时天数 最大值  统计  直方图
	$("#mmunit202006datamax").click(function(){
		$("#mmunit202006date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-06',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2020年6月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202006data',datazft,layoutzft);
	});
	// 办件提供单位2020年6月耗时天数 最小值  统计  直方图
	$("#mmunit202006datamin").click(function(){
		$("#mmunit202006data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-06',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年6月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202006data',datazft,layoutzft);
	});
	// 办件提供单位2020年6月耗时天数  极差  统计  直方图
	$("#mmunit202006datarange").click(function(){
		$("#mmunit202006data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-06',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年6月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202006data',datazft,layoutzft);

	});
	// 办件提供单位2020年6月耗时天数  中位数  统计  直方图
	$("#mmunit202006datamedian").click(function(){
		$("#mmunit202006data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-06',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年6月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202006data',datazft,layoutzft);
	});
	// 办件提供单位2020年6月耗时天数  众数  统计  直方图
	$("#mmunit202006datamode").click(function(){
		$("#mmunit202006data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-06',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年6月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202006data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~办件提供单位2020年7月统计
	// 办件提供单位2020年7月统计 左侧导航 默认
	$("#mmunit202007").click(function(){
		$("#showcvs").children().hide();
		$("#mmunit202007datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2020-07'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2020年7月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit202007data',datazft,layoutzft);
	});
	// 办件提供单位2020年7月统计  直方图
	$("#mmunit202007datazft").click(function(){
		$("#mmunit202007date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2020-07'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2020年7月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit202007data',datazft,layoutzft);
	});
	// 办件提供单位2020年7月统计  饼图
	$("#mmunit202007databt").click(function(){
		$("#mmunit202007date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2020-07'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'办件提供单位2020年7月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmunit202007data', databt,layoutbt);

	});
	// 办件提供单位2020年7月耗时天数 最大值  统计  直方图
	$("#mmunit202007datamax").click(function(){
		$("#mmunit202007date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-07',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2020年7月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202007data',datazft,layoutzft);
	});
	// 办件提供单位2020年7月耗时天数 最小值  统计  直方图
	$("#mmunit202007datamin").click(function(){
		$("#mmunit202007data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-07',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年7月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202007data',datazft,layoutzft);
	});
	// 办件提供单位2020年7月耗时天数  极差  统计  直方图
	$("#mmunit202007datarange").click(function(){
		$("#mmunit202007data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-07',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年7月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202007data',datazft,layoutzft);

	});
	// 办件提供单位2020年7月耗时天数  中位数  统计  直方图
	$("#mmunit202007datamedian").click(function(){
		$("#mmunit202007data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-07',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年7月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202007data',datazft,layoutzft);
	});
	// 办件提供单位2020年7月耗时天数  众数  统计  直方图
	$("#mmunit202007datamode").click(function(){
		$("#mmunit202007data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-07',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年7月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202007data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~办件提供单位2020年8月统计
	// 办件提供单位2020年8月统计 左侧导航 默认
	$("#mmunit202008").click(function(){
		$("#showcvs").children().hide();
		$("#mmunit202008datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2020-08'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2020年8月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit202008data',datazft,layoutzft);
	});
	// 办件提供单位2020年8月统计  直方图
	$("#mmunit202008datazft").click(function(){
		$("#mmunit202008date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2020-08'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2020年8月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit202008data',datazft,layoutzft);
	});
	// 办件提供单位2020年8月统计  饼图
	$("#mmunit202008databt").click(function(){
		$("#mmunit202008date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2020-08'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'办件提供单位2020年8月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmunit202008data', databt,layoutbt);

	});
	// 办件提供单位2020年8月耗时天数 最大值  统计  直方图
	$("#mmunit202008datamax").click(function(){
		$("#mmunit202008date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-08',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2020年8月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202008data',datazft,layoutzft);
	});
	// 办件提供单位2020年8月耗时天数 最小值  统计  直方图
	$("#mmunit202008datamin").click(function(){
		$("#mmunit202008data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-08',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年8月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202008data',datazft,layoutzft);
	});
	// 办件提供单位2020年8月耗时天数  极差  统计  直方图
	$("#mmunit202008datarange").click(function(){
		$("#mmunit202008data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-08',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年8月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202008data',datazft,layoutzft);

	});
	// 办件提供单位2020年8月耗时天数  中位数  统计  直方图
	$("#mmunit202008datamedian").click(function(){
		$("#mmunit202008data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-08',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年8月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202008data',datazft,layoutzft);
	});
	// 办件提供单位2020年8月耗时天数  众数  统计  直方图
	$("#mmunit202008datamode").click(function(){
		$("#mmunit202008data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-08',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年8月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202008data',datazft,layoutzft);
	});
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~办件提供单位2020年9月统计
	// 办件提供单位2020年9月统计 左侧导航 默认
	$("#mmunit202009").click(function(){
		$("#showcvs").children().hide();
		$("#mmunit202009datashow").show();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2020-09'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2020年9月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit202009data',datazft,layoutzft);
	});
	// 办件提供单位2020年9月统计  直方图
	$("#mmunit202009datazft").click(function(){
		$("#mmunit202009date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2020-09'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var datazft = [{x: x,y:y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2020年9月办件量直方图',
			width: 1600, height: 790,
			yaxis: {title: '数量'}
		}
		Plotly.newPlot('mmunit202009data',datazft,layoutzft);
	});
	// 办件提供单位2020年9月统计  饼图
	$("#mmunit202009databt").click(function(){
		$("#mmunit202009date").empty();
		var x = [];
		var y = [];
		$.ajax
		({
			type: 'POST',
			url: "/mmunitdata/selectAll.do",
			data: {
				"date" : '2020-09'
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].cCount);
				}
			}
		});
		var databt = [{
			values: y,labels: x,type: 'pie',name: 2020,domain: {row: 0,column: 0},
			hoverinfo: 'label+percent+name',textinfo: 'none'
		}];
		var layoutbt = {
			title:'办件提供单位2020年9月办件量饼图',
			width: 1600,height: 750,
			grid: {rows: 2, columns: 3}
		};
		Plotly.newPlot('mmunit202009data', databt,layoutbt);

	});
	// 办件提供单位2020年9月耗时天数 最大值  统计  直方图
	$("#mmunit202009datamax").click(function(){
		$("#mmunit202009date").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-09',
				"value" : "max"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].maxDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]
		var layoutzft ={
			title:'办件提供单位2020年9月耗时天数最大值统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202009data',datazft,layoutzft);
	});
	// 办件提供单位2020年9月耗时天数 最小值  统计  直方图
	$("#mmunit202009datamin").click(function(){
		$("#mmunit202009data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-09',
				"value" : "min"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].minDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年9月耗时天数最小值统计 ',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202009data',datazft,layoutzft);
	});
	// 办件提供单位2020年9月耗时天数  极差  统计  直方图
	$("#mmunit202009datarange").click(function(){
		$("#mmunit202009data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-09',
				"value" : "range"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].rangeDate);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年9月耗时天数极差统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202009data',datazft,layoutzft);

	});
	// 办件提供单位2020年9月耗时天数  中位数  统计  直方图
	$("#mmunit202009datamedian").click(function(){
		$("#mmunit202009data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-09',
				"value" : "median"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].median);
				}
			}
		});

		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年9月耗时天数中位数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202009data',datazft,layoutzft);
	});
	// 办件提供单位2020年9月耗时天数  众数  统计  直方图
	$("#mmunit202009datamode").click(function(){
		$("#mmunit202009data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitAll.do",
			data: {
				"yy" : '2020-09',
				"value" : "mode"
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].mode);
				}
			}
		});
		var datazft = [{x: x,y: y,type: "histogram",histfunc: "sum",name: 2020}]

		var layoutzft ={
			title:'办件提供单位2020年9月耗时天数众数统计',
			width: 1600, height: 790,
			yaxis: {title: '天数'}
		}
		Plotly.newPlot('mmunit202009data',datazft,layoutzft);
	});

	
});