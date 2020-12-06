<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
	<title>demo</title>
	<script type="text/javascript" src="/js/plotly.js"></script>
	<script type="text/javascript" src="/js/jquery.min.js"></script>
</head>
<body>
	<%--1.2019年1月-2020年9月，每个月的办件两--%>
	<span style="color: red">2019年1月-2020年9月，每个月的办件总量 </span>
		<span style="color: red;size: 10px">每个月的办件总量线形图</span>
		<div id="datacount"></div>
		<script type="text/javascript" src="/viewcvs/datacount/datacount.js"></script>

	<hr/>
	<%--2.2019年1月-2020年9月，部门每个月办件量--%>
	<span style="color: red;size: 20px">2019年1月-2020年9月,部门每个月办件量</span><br>
		<span style="color: red;size: 10px">部门每月办件量线形图</span>
		<div id="mmdeptdatazxt"></div>
		<span style="color: red;size: 10px">部门每月办件量饼图</span>
		<div id="mmdeptdatabt"></div>
		<script type="text/javascript" src="/viewcvs/mmdeptdata/mmdeptdata.js"></script>

	<hr/>
	<%--3.2019年1月-2020年9月，事项每个月办件量--%>
	<span style="color: red;size: 20px">2019年1月-2020年9月,事项每个月办件量</span><br>
		<span style="color: red;size: 10px">事项每月办件量直方图</span>
		<div id="mmnamedatazft"></div>
		<span style="color: red;size: 10px">事项每月办件量饼图</span>
		<div id="mmnamedatabt"></div>
		<script type="text/javascript" src="/viewcvs/mmnamedata/mmnamedata.js"></script>

	<hr/>
	<%--4.2019年1月-2020年9月，区每个月办件量 --%>
	<span style="color: red;size: 20px">2019年1月-2020年9月，区每个月办件量</span><br>
		<span style="color: red;size: 10px">区每月办件量直方图</span>
		<div id="mmregiondatazft"></div>
		<span style="color: red;size: 10px">区每月办件量饼图</span>
		<div id="mmregiondatabt"></div>
		<script type="text/javascript" src="/viewcvs/mmregiondata/mmregiondata.js"></script>

	<hr/>
	<%--5.2019年1月-2020年9月，办件提供单位每个月办件量--%>
	<span style="color: red;size: 20px">2019年1月-2020年9月，办件提供单位每个月办件量</span><br>
		<span style="color: red;size: 10px">办件提供单位每月办件量直方图</span>
		<div id="mmunitdatazft"></div>
		<span style="color: red;size: 10px">办件提供单位每月办件量饼图</span>
		<div id="mmunitdatabt"></div>
		<script type="text/javascript" src="/viewcvs/mmunitdata/mmunitdata.js"></script>
<%-- ``````````````````````````````````````````````````````````````````````````````````````````````` --%>
	<hr/>
	<%--6.2019年-2020年，部门每年办件量--%>
	<span style="color: red;size: 20px">2019年-2020年，部门每年办件量</span><br>
		<span style="color: red;size: 10px">部门每年办件量直方图</span>
		<div id="yydeptdatazft"></div>
		<span style="color: red;size: 10px">部门每年办件量饼图</span>
		<div id="yydeptdatabt"></div>
		<script type="text/javascript" src="/viewcvs/yydeptdata/yydeptdata.js"></script>

	<hr/>
	<%--7.2019年-2020年，事项每年办件量--%>
	<span style="color: red;size: 20px">2019年-2020年，事项每年办件量</span><br>
		<span style="color: red;size: 10px">事项每年办件量直方图</span>
		<div id="yynamedatazft"></div>
		<span style="color: red;size: 10px">事项每年办件量饼图</span>
		<div id="yynamedatabt"></div>
		<script type="text/javascript" src="/viewcvs/yynamedata/yynamedata.js"></script>

	<hr/>
	<%--8.2019年-2020年，区每年办件量--%>
	<span style="color: red;size: 20px">2019年-2020年，区每年办件量</span><br>
		<span style="color: red;size: 10px">区每年办件量直方图</span>
		<div id="yyregiondatazft"></div>
		<span style="color: red;size: 10px">区每年办件量饼图</span>
		<div id="yyregiondatabt"></div>
		<script type="text/javascript" src="/viewcvs/yyregiondata/yyregiondata.js"></script>

	<hr/>
	<%--9.2019年-2020年，办件提供单位每年办件量--%>
	<span style="color: red;size: 20px">2019年-2020年，办件提供单位每年办件量</span><br>
		<span style="color: red;size: 10px">办件提供单位每年办件量直方图</span>
		<div id="yyunitdatazft"></div>
		<span style="color: red;size: 10px">办件提供单位每年办件量饼图</span>
		<div id="yyunitdatabt"></div>
		<script type="text/javascript" src="/viewcvs/yyunitdata/yyunitdata.js"></script>

</body>
</html>
