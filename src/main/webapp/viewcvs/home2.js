$(function () {

	// 事项年耗时天数  箱形图  统计
	$("#yynamedataxxt").click(function () {
		$("#yynamedata").empty();
		var dateList = ['2019', '2020'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectNameDateAll.do",
				data: {
					"yy" : dateList[i],
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cName);
						y.push(data[i].dateList);
					}
					mapx.push(x);
					mapy.push(y);
				}
			});
		}
		var data = [];
		for (var l=0;l<mapy.length;l++){
			yy = mapy[l];
			xx = mapx[l];
			for ( var i = 0; i < yy.length; i ++ ) {
				var result = {
					type: 'box',y: yy[i],name: dateList[l]+xx[i],boxpoints: false,boxmean: true
				};
				data.push(result);
			}
		}
		var layout = {
			title:'事项年耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('yynamedata', data, layout);
	});

	// 事项2019年耗时天数箱形图统计
	$("#yyname2019dataxxt").click(function(){
		$("#yyname2019data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameDateAll.do",
			data: {
				"yy" : '2019',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'事项2019年耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('yyname2019date',data,layout);
	});

	// 事项2020年耗时天数箱形图统计
	$("#yyname2020dataxxt").click(function(){
		$("#yyname2020data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameDateAll.do",
			data: {
				"yy" : '2020',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'事项2020年耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('yyname2020data',data,layout);
	});

	// 事项月耗时天数  箱形图  统计
	$("#mmnamedataxxt").click(function () {
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
				url: "/range/selectNameDateAll.do",
				data: {
					"yy" : dateList[i],
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cName);
						y.push(data[i].dateList);
					}
					mapx.push(x);
					mapy.push(y);
				}
			});
		}
		var data = [];
		for (var l=0;l<mapy.length;l++){
			yy = mapy[l];
			xx = mapx[l];
			for ( var i = 0; i < yy.length; i ++ ) {
				var result = {
					type: 'box',y: yy[i],name: dateList[l]+xx[i],boxpoints: false,boxmean: true
				};
				data.push(result);
			}
		}
		var layout = {
			title:'事项月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmnamedata', data, layout);
	});

	// 事项2019年1月耗时天数箱形图统计
	$("#mmname201901dataxxt").click(function(){
		$("#mmname201901data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameDateAll.do",
			data: {
				"yy" : '2019-01',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'事项2019年1月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmname201901data',data,layout);
	});
	// 事项2019年2月耗时天数箱形图统计
	$("#mmname201902dataxxt").click(function(){
		$("#mmname201902data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameDateAll.do",
			data: {
				"yy" : '2019-02',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'事项2019年2月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmname201902data',data,layout);
	});
	// 事项2019年3月耗时天数箱形图统计
	$("#mmname201903dataxxt").click(function(){
		$("#mmname201903data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameDateAll.do",
			data: {
				"yy" : '2019-03',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'事项2019年3月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmname201903data',data,layout);
	});
	// 事项2019年4月耗时天数箱形图统计
	$("#mmname201904dataxxt").click(function(){
		$("#mmname201904data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameDateAll.do",
			data: {
				"yy" : '2019-04',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'事项2019年4月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmname201904data',data,layout);
	});
	// 事项2019年5月耗时天数箱形图统计
	$("#mmname201905dataxxt").click(function(){
		$("#mmname201905data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameDateAll.do",
			data: {
				"yy" : '2019-05',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'事项2019年5月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmname201905data',data,layout);
	});
	// 事项2019年6月耗时天数箱形图统计
	$("#mmname201906dataxxt").click(function(){
		$("#mmname201906data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameDateAll.do",
			data: {
				"yy" : '2019-06',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'事项2019年6月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmname201906data',data,layout);
	});
	// 事项2019年7月耗时天数箱形图统计
	$("#mmname201907dataxxt").click(function(){
		$("#mmname201907data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameDateAll.do",
			data: {
				"yy" : '2019-07',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'事项2019年7月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmname201907data',data,layout);
	});
	// 事项2019年8月耗时天数箱形图统计
	$("#mmname201908dataxxt").click(function(){
		$("#mmname201908data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameDateAll.do",
			data: {
				"yy" : '2019-08',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'事项2019年8月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmname201908data',data,layout);
	});
	// 事项2019年9月耗时天数箱形图统计
	$("#mmname201909dataxxt").click(function(){
		$("#mmname201909data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameDateAll.do",
			data: {
				"yy" : '2019-09',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'事项2019年9月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmname201909data',data,layout);
	});
	// 事项2019年10月耗时天数箱形图统计
	$("#mmname201910dataxxt").click(function(){
		$("#mmname201910data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameDateAll.do",
			data: {
				"yy" : '2019-10',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'事项2019年10月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmname201910data',data,layout);
	});
	// 事项2019年11月耗时天数箱形图统计
	$("#mmname201911dataxxt").click(function(){
		$("#mmname201911data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameDateAll.do",
			data: {
				"yy" : '2019-11',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'事项2019年11月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmname201911data',data,layout);
	});
	// 事项2019年12月耗时天数箱形图统计
	$("#mmname201912dataxxt").click(function(){
		$("#mmname201912data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameDateAll.do",
			data: {
				"yy" : '2019-12',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'事项2019年12月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmname201912data',data,layout);
	});
	// 事项2020年01月耗时天数箱形图统计
	$("#mmname202001dataxxt").click(function(){
		$("#mmname202001data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameDateAll.do",
			data: {
				"yy" : '2020-01',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'事项2020年01月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmname202001data',data,layout);
	});
	// 事项2020年02月耗时天数箱形图统计
	$("#mmname202002dataxxt").click(function(){
		$("#mmname202002data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameDateAll.do",
			data: {
				"yy" : '2020-02',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'事项2020年02月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmname202002data',data,layout);
	});
	// 事项2020年03月耗时天数箱形图统计
	$("#mmname202003dataxxt").click(function(){
		$("#mmname202003data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameDateAll.do",
			data: {
				"yy" : '2020-03',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'事项2020年03月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmname202003data',data,layout);
	});
	// 事项2020年04月耗时天数箱形图统计
	$("#mmname202004dataxxt").click(function(){
		$("#mmname202004data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameDateAll.do",
			data: {
				"yy" : '2020-04',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'事项2020年04月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmname202004data',data,layout);
	});
	// 事项2020年05月耗时天数箱形图统计
	$("#mmname202005dataxxt").click(function(){
		$("#mmname202005data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameDateAll.do",
			data: {
				"yy" : '2020-05',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'事项2020年05月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmname202005data',data,layout);
	});
	// 事项2020年06月耗时天数箱形图统计
	$("#mmname202006dataxxt").click(function(){
		$("#mmname202006data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameDateAll.do",
			data: {
				"yy" : '2020-06',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'事项2020年06月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmname202006data',data,layout);
	});
	// 事项2020年07月耗时天数箱形图统计
	$("#mmname202007dataxxt").click(function(){
		$("#mmname202007data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameDateAll.do",
			data: {
				"yy" : '2020-07',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'事项2020年07月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmname202007data',data,layout);
	});
	// 事项2020年08月耗时天数箱形图统计
	$("#mmname202008dataxxt").click(function(){
		$("#mmname202008data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameDateAll.do",
			data: {
				"yy" : '2020-08',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'事项2020年08月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmname202008data',data,layout);
	});
	// 事项2020年09月耗时天数箱形图统计
	$("#mmname202009dataxxt").click(function(){
		$("#mmname202009data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectNameDateAll.do",
			data: {
				"yy" : '2020-09',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cName);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'事项2020年09月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmname202009data',data,layout);
	});


// 区划年耗时天数  箱形图  统计
	$("#yyregiondataxxt").click(function () {
		$("#yyregiondata").empty();
		var dateList = ['2019', '2020'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectRegionDateAll.do",
				data: {
					"yy" : dateList[i],
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cRegion);
						y.push(data[i].dateList);
					}
					mapx.push(x);
					mapy.push(y);
				}
			});
		}
		var data = [];
		for (var l=0;l<mapy.length;l++){
			yy = mapy[l];
			xx = mapx[l];
			for ( var i = 0; i < yy.length; i ++ ) {
				var result = {
					type: 'box',y: yy[i],name: dateList[l]+xx[i],boxpoints: false,boxmean: true
				};
				data.push(result);
			}
		}
		var layout = {
			title:'区划年耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('yyregiondata', data, layout);
	});

// 区划2019年耗时天数箱形图统计
	$("#yyregion2019dataxxt").click(function(){
		$("#yyregion2019data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionDateAll.do",
			data: {
				"yy" : '2019',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'区划2019年耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('yyregion2019date',data,layout);
	});

// 区划2020年耗时天数箱形图统计
	$("#yyregion2020dataxxt").click(function(){
		$("#yyregion2020data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionDateAll.do",
			data: {
				"yy" : '2020',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'区划2020年耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('yyregion2020data',data,layout);
	});

// 区划月耗时天数  箱形图  统计
	$("#mmregiondataxxt").click(function () {
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
				url: "/range/selectRegionDateAll.do",
				data: {
					"yy" : dateList[i],
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cRegion);
						y.push(data[i].dateList);
					}
					mapx.push(x);
					mapy.push(y);
				}
			});
		}
		var data = [];
		for (var l=0;l<mapy.length;l++){
			yy = mapy[l];
			xx = mapx[l];
			for ( var i = 0; i < yy.length; i ++ ) {
				var result = {
					type: 'box',y: yy[i],name: dateList[l]+xx[i],boxpoints: false,boxmean: true
				};
				data.push(result);
			}
		}
		var layout = {
			title:'区划月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmregiondata', data, layout);
	});

// 区划2019年1月耗时天数箱形图统计
	$("#mmregion201901dataxxt").click(function(){
		$("#mmregion201901data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionDateAll.do",
			data: {
				"yy" : '2019-01',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'区划2019年1月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmregion201901data',data,layout);
	});
// 区划2019年2月耗时天数箱形图统计
	$("#mmregion201902dataxxt").click(function(){
		$("#mmregion201902data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionDateAll.do",
			data: {
				"yy" : '2019-02',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'区划2019年2月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmregion201902data',data,layout);
	});
// 区划2019年3月耗时天数箱形图统计
	$("#mmregion201903dataxxt").click(function(){
		$("#mmregion201903data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionDateAll.do",
			data: {
				"yy" : '2019-03',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'区划2019年3月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmregion201903data',data,layout);
	});
// 区划2019年4月耗时天数箱形图统计
	$("#mmregion201904dataxxt").click(function(){
		$("#mmregion201904data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionDateAll.do",
			data: {
				"yy" : '2019-04',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'区划2019年4月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmregion201904data',data,layout);
	});
// 区划2019年5月耗时天数箱形图统计
	$("#mmregion201905dataxxt").click(function(){
		$("#mmregion201905data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionDateAll.do",
			data: {
				"yy" : '2019-05',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'区划2019年5月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmregion201905data',data,layout);
	});
// 区划2019年6月耗时天数箱形图统计
	$("#mmregion201906dataxxt").click(function(){
		$("#mmregion201906data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionDateAll.do",
			data: {
				"yy" : '2019-06',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'区划2019年6月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmregion201906data',data,layout);
	});
// 区划2019年7月耗时天数箱形图统计
	$("#mmregion201907dataxxt").click(function(){
		$("#mmregion201907data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionDateAll.do",
			data: {
				"yy" : '2019-07',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'区划2019年7月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmregion201907data',data,layout);
	});
// 区划2019年8月耗时天数箱形图统计
	$("#mmregion201908dataxxt").click(function(){
		$("#mmregion201908data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionDateAll.do",
			data: {
				"yy" : '2019-08',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'区划2019年8月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmregion201908data',data,layout);
	});
// 区划2019年9月耗时天数箱形图统计
	$("#mmregion201909dataxxt").click(function(){
		$("#mmregion201909data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionDateAll.do",
			data: {
				"yy" : '2019-09',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'区划2019年9月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmregion201909data',data,layout);
	});
// 区划2019年10月耗时天数箱形图统计
	$("#mmregion201910dataxxt").click(function(){
		$("#mmregion201910data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionDateAll.do",
			data: {
				"yy" : '2019-10',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'区划2019年10月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmregion201910data',data,layout);
	});
// 区划2019年11月耗时天数箱形图统计
	$("#mmregion201911dataxxt").click(function(){
		$("#mmregion201911data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionDateAll.do",
			data: {
				"yy" : '2019-11',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'区划2019年11月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmregion201911data',data,layout);
	});
// 区划2019年12月耗时天数箱形图统计
	$("#mmregion201912dataxxt").click(function(){
		$("#mmregion201912data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionDateAll.do",
			data: {
				"yy" : '2019-12',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'区划2019年12月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmregion201912data',data,layout);
	});
// 区划2020年01月耗时天数箱形图统计
	$("#mmregion202001dataxxt").click(function(){
		$("#mmregion202001data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionDateAll.do",
			data: {
				"yy" : '2020-01',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'区划2020年01月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmregion202001data',data,layout);
	});
// 区划2020年02月耗时天数箱形图统计
	$("#mmregion202002dataxxt").click(function(){
		$("#mmregion202002data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionDateAll.do",
			data: {
				"yy" : '2020-02',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'区划2020年02月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmregion202002data',data,layout);
	});
// 区划2020年03月耗时天数箱形图统计
	$("#mmregion202003dataxxt").click(function(){
		$("#mmregion202003data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionDateAll.do",
			data: {
				"yy" : '2020-03',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'区划2020年03月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmregion202003data',data,layout);
	});
// 区划2020年04月耗时天数箱形图统计
	$("#mmregion202004dataxxt").click(function(){
		$("#mmregion202004data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionDateAll.do",
			data: {
				"yy" : '2020-04',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'区划2020年04月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmregion202004data',data,layout);
	});
// 区划2020年05月耗时天数箱形图统计
	$("#mmregion202005dataxxt").click(function(){
		$("#mmregion202005data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionDateAll.do",
			data: {
				"yy" : '2020-05',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'区划2020年05月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmregion202005data',data,layout);
	});
// 区划2020年06月耗时天数箱形图统计
	$("#mmregion202006dataxxt").click(function(){
		$("#mmregion202006data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionDateAll.do",
			data: {
				"yy" : '2020-06',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'区划2020年06月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmregion202006data',data,layout);
	});
// 区划2020年07月耗时天数箱形图统计
	$("#mmregion202007dataxxt").click(function(){
		$("#mmregion202007data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionDateAll.do",
			data: {
				"yy" : '2020-07',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'区划2020年07月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmregion202007data',data,layout);
	});
// 区划2020年08月耗时天数箱形图统计
	$("#mmregion202008dataxxt").click(function(){
		$("#mmregion202008data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionDateAll.do",
			data: {
				"yy" : '2020-08',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'区划2020年08月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmregion202008data',data,layout);
	});
// 区划2020年09月耗时天数箱形图统计
	$("#mmregion202009dataxxt").click(function(){
		$("#mmregion202009data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectRegionDateAll.do",
			data: {
				"yy" : '2020-09',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cRegion);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'区划2020年09月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmregion202009data',data,layout);
	});


	// 受理部门年耗时天数  箱形图  统计
	$("#yydeptdataxxt").click(function () {
		$("#yydeptdata").empty();
		var dateList = ['2019', '2020'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectDeptDateAll.do",
				data: {
					"yy" : dateList[i],
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cDept);
						y.push(data[i].dateList);
					}
					mapx.push(x);
					mapy.push(y);
				}
			});
		}
		var data = [];
		for (var l=0;l<mapy.length;l++){
			yy = mapy[l];
			xx = mapx[l];
			for ( var i = 0; i < yy.length; i ++ ) {
				var result = {
					type: 'box',y: yy[i],name: dateList[l]+xx[i],boxpoints: false,boxmean: true
				};
				data.push(result);
			}
		}
		var layout = {
			title:'受理部门年耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('yydeptdata', data, layout);
	});

// 受理部门2019年耗时天数箱形图统计
	$("#yydept2019dataxxt").click(function(){
		$("#yydept2019data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptDateAll.do",
			data: {
				"yy" : '2019',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'受理部门2019年耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('yydept2019date',data,layout);
	});

// 受理部门2020年耗时天数箱形图统计
	$("#yydept2020dataxxt").click(function(){
		$("#yydept2020data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptDateAll.do",
			data: {
				"yy" : '2020',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'受理部门2020年耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('yydept2020data',data,layout);
	});

// 受理部门月耗时天数  箱形图  统计
	$("#mmdeptdataxxt").click(function () {
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
				url: "/range/selectDeptDateAll.do",
				data: {
					"yy" : dateList[i],
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cDept);
						y.push(data[i].dateList);
					}
					mapx.push(x);
					mapy.push(y);
				}
			});
		}
		var data = [];
		for (var l=0;l<mapy.length;l++){
			yy = mapy[l];
			xx = mapx[l];
			for ( var i = 0; i < yy.length; i ++ ) {
				var result = {
					type: 'box',y: yy[i],name: dateList[l]+xx[i],boxpoints: false,boxmean: true
				};
				data.push(result);
			}
		}
		var layout = {
			title:'受理部门月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmdeptdata', data, layout);
	});

// 受理部门2019年1月耗时天数箱形图统计
	$("#mmdept201901dataxxt").click(function(){
		$("#mmdept201901data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptDateAll.do",
			data: {
				"yy" : '2019-01',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'受理部门2019年1月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmdept201901data',data,layout);
	});
// 受理部门2019年2月耗时天数箱形图统计
	$("#mmdept201902dataxxt").click(function(){
		$("#mmdept201902data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptDateAll.do",
			data: {
				"yy" : '2019-02',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'受理部门2019年2月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmdept201902data',data,layout);
	});
// 受理部门2019年3月耗时天数箱形图统计
	$("#mmdept201903dataxxt").click(function(){
		$("#mmdept201903data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptDateAll.do",
			data: {
				"yy" : '2019-03',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'受理部门2019年3月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmdept201903data',data,layout);
	});
// 受理部门2019年4月耗时天数箱形图统计
	$("#mmdept201904dataxxt").click(function(){
		$("#mmdept201904data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptDateAll.do",
			data: {
				"yy" : '2019-04',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'受理部门2019年4月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmdept201904data',data,layout);
	});
// 受理部门2019年5月耗时天数箱形图统计
	$("#mmdept201905dataxxt").click(function(){
		$("#mmdept201905data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptDateAll.do",
			data: {
				"yy" : '2019-05',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'受理部门2019年5月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmdept201905data',data,layout);
	});
// 受理部门2019年6月耗时天数箱形图统计
	$("#mmdept201906dataxxt").click(function(){
		$("#mmdept201906data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptDateAll.do",
			data: {
				"yy" : '2019-06',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'受理部门2019年6月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmdept201906data',data,layout);
	});
// 受理部门2019年7月耗时天数箱形图统计
	$("#mmdept201907dataxxt").click(function(){
		$("#mmdept201907data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptDateAll.do",
			data: {
				"yy" : '2019-07',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'受理部门2019年7月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmdept201907data',data,layout);
	});
// 受理部门2019年8月耗时天数箱形图统计
	$("#mmdept201908dataxxt").click(function(){
		$("#mmdept201908data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptDateAll.do",
			data: {
				"yy" : '2019-08',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'受理部门2019年8月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmdept201908data',data,layout);
	});
// 受理部门2019年9月耗时天数箱形图统计
	$("#mmdept201909dataxxt").click(function(){
		$("#mmdept201909data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptDateAll.do",
			data: {
				"yy" : '2019-09',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'受理部门2019年9月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmdept201909data',data,layout);
	});
// 受理部门2019年10月耗时天数箱形图统计
	$("#mmdept201910dataxxt").click(function(){
		$("#mmdept201910data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptDateAll.do",
			data: {
				"yy" : '2019-10',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'受理部门2019年10月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmdept201910data',data,layout);
	});
// 受理部门2019年11月耗时天数箱形图统计
	$("#mmdept201911dataxxt").click(function(){
		$("#mmdept201911data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptDateAll.do",
			data: {
				"yy" : '2019-11',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'受理部门2019年11月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmdept201911data',data,layout);
	});
// 受理部门2019年12月耗时天数箱形图统计
	$("#mmdept201912dataxxt").click(function(){
		$("#mmdept201912data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptDateAll.do",
			data: {
				"yy" : '2019-12',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'受理部门2019年12月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmdept201912data',data,layout);
	});
// 受理部门2020年01月耗时天数箱形图统计
	$("#mmdept202001dataxxt").click(function(){
		$("#mmdept202001data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptDateAll.do",
			data: {
				"yy" : '2020-01',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'受理部门2020年01月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmdept202001data',data,layout);
	});
// 受理部门2020年02月耗时天数箱形图统计
	$("#mmdept202002dataxxt").click(function(){
		$("#mmdept202002data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptDateAll.do",
			data: {
				"yy" : '2020-02',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'受理部门2020年02月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmdept202002data',data,layout);
	});
// 受理部门2020年03月耗时天数箱形图统计
	$("#mmdept202003dataxxt").click(function(){
		$("#mmdept202003data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptDateAll.do",
			data: {
				"yy" : '2020-03',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'受理部门2020年03月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmdept202003data',data,layout);
	});
// 受理部门2020年04月耗时天数箱形图统计
	$("#mmdept202004dataxxt").click(function(){
		$("#mmdept202004data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptDateAll.do",
			data: {
				"yy" : '2020-04',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'受理部门2020年04月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmdept202004data',data,layout);
	});
// 受理部门2020年05月耗时天数箱形图统计
	$("#mmdept202005dataxxt").click(function(){
		$("#mmdept202005data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptDateAll.do",
			data: {
				"yy" : '2020-05',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'受理部门2020年05月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmdept202005data',data,layout);
	});
// 受理部门2020年06月耗时天数箱形图统计
	$("#mmdept202006dataxxt").click(function(){
		$("#mmdept202006data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptDateAll.do",
			data: {
				"yy" : '2020-06',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'受理部门2020年06月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmdept202006data',data,layout);
	});
// 受理部门2020年07月耗时天数箱形图统计
	$("#mmdept202007dataxxt").click(function(){
		$("#mmdept202007data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptDateAll.do",
			data: {
				"yy" : '2020-07',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'受理部门2020年07月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmdept202007data',data,layout);
	});
// 受理部门2020年08月耗时天数箱形图统计
	$("#mmdept202008dataxxt").click(function(){
		$("#mmdept202008data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptDateAll.do",
			data: {
				"yy" : '2020-08',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'受理部门2020年08月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmdept202008data',data,layout);
	});
// 受理部门2020年09月耗时天数箱形图统计
	$("#mmdept202009dataxxt").click(function(){
		$("#mmdept202009data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectDeptDateAll.do",
			data: {
				"yy" : '2020-09',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cDept);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'受理部门2020年09月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmdept202009data',data,layout);
	});


	// 办件提供单位年耗时天数  箱形图  统计
	$("#yyunitdataxxt").click(function () {
		$("#yyunitdata").empty();
		var dateList = ['2019', '2020'];
		var mapx = [];
		var mapy = [];
		for (var i=0;i<dateList.length;i++) {
			var x = [];
			var y = [];
			$.ajax({
				type: 'POST',
				url: "/range/selectUnitDateAll.do",
				data: {
					"yy" : dateList[i],
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cUnit);
						y.push(data[i].dateList);
					}
					mapx.push(x);
					mapy.push(y);
				}
			});
		}
		var data = [];
		for (var l=0;l<mapy.length;l++){
			yy = mapy[l];
			xx = mapx[l];
			for ( var i = 0; i < yy.length; i ++ ) {
				var result = {
					type: 'box',y: yy[i],name: dateList[l]+xx[i],boxpoints: false,boxmean: true
				};
				data.push(result);
			}
		}
		var layout = {
			title:'办件提供单位年耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('yyunitdata', data, layout);
	});

// 办件提供单位2019年耗时天数箱形图统计
	$("#yyunit2019dataxxt").click(function(){
		$("#yyunit2019data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitDateAll.do",
			data: {
				"yy" : '2019',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'办件提供单位2019年耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('yyunit2019date',data,layout);
	});

// 办件提供单位2020年耗时天数箱形图统计
	$("#yyunit2020dataxxt").click(function(){
		$("#yyunit2020data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitDateAll.do",
			data: {
				"yy" : '2020',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'办件提供单位2020年耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('yyunit2020data',data,layout);
	});

// 办件提供单位月耗时天数  箱形图  统计
	$("#mmunitdataxxt").click(function () {
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
				url: "/range/selectUnitDateAll.do",
				data: {
					"yy" : dateList[i],
				},
				dataType: "json",
				async: false,
				crossDomain: true == !(document.all),
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						x.push(data[i].cUnit);
						y.push(data[i].dateList);
					}
					mapx.push(x);
					mapy.push(y);
				}
			});
		}
		var data = [];
		for (var l=0;l<mapy.length;l++){
			yy = mapy[l];
			xx = mapx[l];
			for ( var i = 0; i < yy.length; i ++ ) {
				var result = {
					type: 'box',y: yy[i],name: dateList[l]+xx[i],boxpoints: false,boxmean: true
				};
				data.push(result);
			}
		}
		var layout = {
			title:'办件提供单位月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmunitdata', data, layout);
	});

// 办件提供单位2019年1月耗时天数箱形图统计
	$("#mmunit201901dataxxt").click(function(){
		$("#mmunit201901data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitDateAll.do",
			data: {
				"yy" : '2019-01',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'办件提供单位2019年1月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmunit201901data',data,layout);
	});
// 办件提供单位2019年2月耗时天数箱形图统计
	$("#mmunit201902dataxxt").click(function(){
		$("#mmunit201902data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitDateAll.do",
			data: {
				"yy" : '2019-02',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'办件提供单位2019年2月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmunit201902data',data,layout);
	});
// 办件提供单位2019年3月耗时天数箱形图统计
	$("#mmunit201903dataxxt").click(function(){
		$("#mmunit201903data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitDateAll.do",
			data: {
				"yy" : '2019-03',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'办件提供单位2019年3月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmunit201903data',data,layout);
	});
// 办件提供单位2019年4月耗时天数箱形图统计
	$("#mmunit201904dataxxt").click(function(){
		$("#mmunit201904data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitDateAll.do",
			data: {
				"yy" : '2019-04',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'办件提供单位2019年4月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmunit201904data',data,layout);
	});
// 办件提供单位2019年5月耗时天数箱形图统计
	$("#mmunit201905dataxxt").click(function(){
		$("#mmunit201905data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitDateAll.do",
			data: {
				"yy" : '2019-05',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'办件提供单位2019年5月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmunit201905data',data,layout);
	});
// 办件提供单位2019年6月耗时天数箱形图统计
	$("#mmunit201906dataxxt").click(function(){
		$("#mmunit201906data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitDateAll.do",
			data: {
				"yy" : '2019-06',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'办件提供单位2019年6月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmunit201906data',data,layout);
	});
// 办件提供单位2019年7月耗时天数箱形图统计
	$("#mmunit201907dataxxt").click(function(){
		$("#mmunit201907data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitDateAll.do",
			data: {
				"yy" : '2019-07',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'办件提供单位2019年7月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmunit201907data',data,layout);
	});
// 办件提供单位2019年8月耗时天数箱形图统计
	$("#mmunit201908dataxxt").click(function(){
		$("#mmunit201908data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitDateAll.do",
			data: {
				"yy" : '2019-08',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'办件提供单位2019年8月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmunit201908data',data,layout);
	});
// 办件提供单位2019年9月耗时天数箱形图统计
	$("#mmunit201909dataxxt").click(function(){
		$("#mmunit201909data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitDateAll.do",
			data: {
				"yy" : '2019-09',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'办件提供单位2019年9月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmunit201909data',data,layout);
	});
// 办件提供单位2019年10月耗时天数箱形图统计
	$("#mmunit201910dataxxt").click(function(){
		$("#mmunit201910data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitDateAll.do",
			data: {
				"yy" : '2019-10',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'办件提供单位2019年10月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmunit201910data',data,layout);
	});
// 办件提供单位2019年11月耗时天数箱形图统计
	$("#mmunit201911dataxxt").click(function(){
		$("#mmunit201911data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitDateAll.do",
			data: {
				"yy" : '2019-11',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'办件提供单位2019年11月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmunit201911data',data,layout);
	});
// 办件提供单位2019年12月耗时天数箱形图统计
	$("#mmunit201912dataxxt").click(function(){
		$("#mmunit201912data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitDateAll.do",
			data: {
				"yy" : '2019-12',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'办件提供单位2019年12月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmunit201912data',data,layout);
	});
// 办件提供单位2020年01月耗时天数箱形图统计
	$("#mmunit202001dataxxt").click(function(){
		$("#mmunit202001data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitDateAll.do",
			data: {
				"yy" : '2020-01',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'办件提供单位2020年01月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmunit202001data',data,layout);
	});
// 办件提供单位2020年02月耗时天数箱形图统计
	$("#mmunit202002dataxxt").click(function(){
		$("#mmunit202002data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitDateAll.do",
			data: {
				"yy" : '2020-02',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'办件提供单位2020年02月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmunit202002data',data,layout);
	});
// 办件提供单位2020年03月耗时天数箱形图统计
	$("#mmunit202003dataxxt").click(function(){
		$("#mmunit202003data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitDateAll.do",
			data: {
				"yy" : '2020-03',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'办件提供单位2020年03月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmunit202003data',data,layout);
	});
// 办件提供单位2020年04月耗时天数箱形图统计
	$("#mmunit202004dataxxt").click(function(){
		$("#mmunit202004data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitDateAll.do",
			data: {
				"yy" : '2020-04',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'办件提供单位2020年04月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmunit202004data',data,layout);
	});
// 办件提供单位2020年05月耗时天数箱形图统计
	$("#mmunit202005dataxxt").click(function(){
		$("#mmunit202005data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitDateAll.do",
			data: {
				"yy" : '2020-05',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'办件提供单位2020年05月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmunit202005data',data,layout);
	});
// 办件提供单位2020年06月耗时天数箱形图统计
	$("#mmunit202006dataxxt").click(function(){
		$("#mmunit202006data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitDateAll.do",
			data: {
				"yy" : '2020-06',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'办件提供单位2020年06月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmunit202006data',data,layout);
	});
// 办件提供单位2020年07月耗时天数箱形图统计
	$("#mmunit202007dataxxt").click(function(){
		$("#mmunit202007data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitDateAll.do",
			data: {
				"yy" : '2020-07',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'办件提供单位2020年07月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmunit202007data',data,layout);
	});
// 办件提供单位2020年08月耗时天数箱形图统计
	$("#mmunit202008dataxxt").click(function(){
		$("#mmunit202008data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitDateAll.do",
			data: {
				"yy" : '2020-08',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'办件提供单位2020年08月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmunit202008data',data,layout);
	});
// 办件提供单位2020年09月耗时天数箱形图统计
	$("#mmunit202009dataxxt").click(function(){
		$("#mmunit202009data").empty();
		var x = [];
		var y = [];
		$.ajax({
			type: 'POST',
			url: "/range/selectUnitDateAll.do",
			data: {
				"yy" : '2020-09',
			},
			dataType: "json",
			async: false,
			crossDomain: true == !(document.all),
			success: function (data) {
				for (var i = 0; i < data.length; i++) {
					x.push(data[i].cUnit);
					y.push(data[i].dateList);
				}
			}
		});
		var data = [];
		for ( var i = 0; i < y.length; i ++ ) {
			var result = {
				type: 'box',y: y[i],name: x[i],	boxpoints: false,boxmean: true
			};
			data.push(result);
		}
		var layout = {
			title:'办件提供单位2020年09月耗时天数箱形图统计',width: 2200,height: 790,yaxis: {title: '天数'}
		};
		Plotly.newPlot('mmunit202009data',data,layout);
	});


});


