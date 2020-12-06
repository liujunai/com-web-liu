<%--
  Created by IntelliJ IDEA.
  User: liu
  Date: 2020/12/2
  Time: 下午6:02
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
	<title>home</title>
	<link rel="stylesheet" href="/css/bootstrap.min.css">
	<link rel="stylesheet" href="/css/style.css">
	<link rel="stylesheet" href="/css/style1.css">
	<link rel="stylesheet" href="/css/fontawesome-all.css">
	<link rel="stylesheet" href="/css/chartist.css">
	<link rel="stylesheet" href="/css/morris.css">
	<link rel="stylesheet" href="/css/materialdesignicons.min.css">
	<link rel="stylesheet" href="/css/c3.css">
	<link rel="stylesheet" href="/css/flag-icon.min.css">

	<script type="text/javascript" src="/js/jquery.min.js"></script>
	<script type="text/javascript" src="/js/bootstrap.bundle.min.js"></script>
	<script src="/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="/js/plotly.js"></script>

	<script type="text/javascript" src="/viewcvs/home.js"></script>
	<script type="text/javascript" src="/viewcvs/home2.js"></script>

</head>
<body>

<div class="dashboard-main-wrapper">

	<!-- ============================================================== -->
	<!-- 上部分导航 -->
	<div class="dashboard-header">
		<nav class="navbar navbar-expand-lg bg-white fixed-top">
			<a class="navbar-brand" href="login.do?username=admin&password=admin">数据分析图</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
			        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse " id="navbarSupportedContent">
			</div>
		</nav>
	</div>
	<!-- ============================================================== -->
	<!-- 左部分导航 -->
	<div class="nav-left-sidebar sidebar-dark">
		<div class="menu-list">
			<nav class="navbar navbar-expand-lg navbar-light">
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav flex-column">
						<li class="nav-divider">2019-01至2020-09数据图例</li>

						<li class="nav-item">
							<div id="zongti">
								<a class="nav-link" href="#"  aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1">
									2019-01至2020-09数据总览
								</a>
							</div>
						</li>

						<li class="nav-item ">
							<a class="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-2" aria-controls="submenu-2">
								事项名称统计
							</a>
							<div id="submenu-2" class="collapse submenu" style="">
								<ul class="nav flex-column">
									<li class="nav-item">
										<div id="yyname">
											<a class="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-2-1" aria-controls="submenu-2-1">
												事项名称年统
											</a>
										</div>
										<div id="submenu-2-1" class="collapse submenu" style="">
											<ul class="nav flex-column">
												<li class="nav-item">
													<div id="yyname2019">
														<a class="nav-link" href="#">2019年</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="yyname2020">
														<a class="nav-link" href="#">2020年</a>
													</div>
												</li>
											</ul>
										</div>
									</li>

									<li class="nav-item">
										<div id="mmname">
											<a class="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-2-2" aria-controls="submenu-2-2">
												事项名称月统计
											</a>
										</div>
										<div id="submenu-2-2" class="collapse submenu" style="">
											<ul class="nav flex-column">
												<li class="nav-item">
													<div id="mmname201901">
														<a class="nav-link" href="#">2019年1月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmname201902">
														<a class="nav-link" href="#">2019年2月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmname201903">
														<a class="nav-link" href="#">2019年3月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmname201904">
														<a class="nav-link" href="#">2019年4月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmname201905">
														<a class="nav-link" href="#">2019年5月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmname201906">
														<a class="nav-link" href="#">2019年6月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmname201907">
														<a class="nav-link" href="#">2019年7月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmname201908">
														<a class="nav-link" href="#">2019年8月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmname201909">
														<a class="nav-link" href="#">2019年9月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmname201910">
														<a class="nav-link" href="#">2019年10月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmname201911">
														<a class="nav-link" href="#">2019年11月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmname201912">
														<a class="nav-link" href="#">2019年12月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmname202001">
														<a class="nav-link" href="#">2020年1月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmname202002">
														<a class="nav-link" href="#">2020年2月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmname202003">
														<a class="nav-link" href="#">2020年3月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmname202004">
														<a class="nav-link" href="#">2020年4月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmname202005">
														<a class="nav-link" href="#">2020年5月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmname202006">
														<a class="nav-link" href="#">2020年6月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmname202007">
														<a class="nav-link" href="#">2020年7月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmname202008">
														<a class="nav-link" href="#">2020年8月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmname202009">
														<a class="nav-link" href="#">2020年9月</a>
													</div>
												</li>
											</ul>
										</div>
									</li>

								</ul>
							</div>
						</li>
						<li class="nav-item ">
							<a class="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-3" aria-controls="submenu-3">
								区划统计
							</a>
							<div id="submenu-3" class="collapse submenu" style="">
								<ul class="nav flex-column">
									<li class="nav-item">
										<div id="yyregion">
											<a class="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-3-1" aria-controls="submenu-3-1">
												区划年统
											</a>
										</div>
										<div id="submenu-3-1" class="collapse submenu" style="">
											<ul class="nav flex-column">
												<li class="nav-item">
													<div id="yyregion2019">
														<a class="nav-link" href="#">2019年</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="yyregion2020">
														<a class="nav-link" href="#">2020年</a>
													</div>
												</li>
											</ul>
										</div>
									</li>

									<li class="nav-item">
										<div id="mmregion">
											<a class="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-3-2" aria-controls="submenu-3-2">
												区划月统计
											</a>
										</div>
										<div id="submenu-3-2" class="collapse submenu" style="">
											<ul class="nav flex-column">
												<li class="nav-item">
													<div id="mmregion201901">
														<a class="nav-link" href="#">2019年1月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmregion201902">
														<a class="nav-link" href="#">2019年2月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmregion201903">
														<a class="nav-link" href="#">2019年3月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmregion201904">
														<a class="nav-link" href="#">2019年4月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmregion201905">
														<a class="nav-link" href="#">2019年5月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmregion201906">
														<a class="nav-link" href="#">2019年6月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmregion201907">
														<a class="nav-link" href="#">2019年7月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmregion201908">
														<a class="nav-link" href="#">2019年8月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmregion201909">
														<a class="nav-link" href="#">2019年9月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmregion201910">
														<a class="nav-link" href="#">2019年10月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmregion201911">
														<a class="nav-link" href="#">2019年11月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmregion201912">
														<a class="nav-link" href="#">2019年12月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmregion202001">
														<a class="nav-link" href="#">2020年1月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmregion202002">
														<a class="nav-link" href="#">2020年2月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmregion202003">
														<a class="nav-link" href="#">2020年3月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmregion202004">
														<a class="nav-link" href="#">2020年4月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmregion202005">
														<a class="nav-link" href="#">2020年5月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmregion202006">
														<a class="nav-link" href="#">2020年6月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmregion202007">
														<a class="nav-link" href="#">2020年7月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmregion202008">
														<a class="nav-link" href="#">2020年8月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmregion202009">
														<a class="nav-link" href="#">2020年9月</a>
													</div>
												</li>
											</ul>
										</div>
									</li>

								</ul>
							</div>
						</li>
						<li class="nav-item ">
							<a class="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-4" aria-controls="submenu-4">
								受理部门统计
							</a>
							<div id="submenu-4" class="collapse submenu" style="">
								<ul class="nav flex-column">
									<li class="nav-item">
										<div id="yydept">
											<a class="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-4-1" aria-controls="submenu-4-1">
												受理部门年统
											</a>
										</div>
										<div id="submenu-4-1" class="collapse submenu" style="">
											<ul class="nav flex-column">
												<li class="nav-item">
													<div id="yydept2019">
														<a class="nav-link" href="#">2019年</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="yydept2020">
														<a class="nav-link" href="#">2020年</a>
													</div>
												</li>
											</ul>
										</div>
									</li>

									<li class="nav-item">
										<div id="mmdept">
											<a class="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-4-2" aria-controls="submenu-4-2">
												受理部门月统计
											</a>
										</div>
										<div id="submenu-4-2" class="collapse submenu" style="">
											<ul class="nav flex-column">
												<li class="nav-item">
													<div id="mmdept201901">
														<a class="nav-link" href="#">2019年1月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmdept201902">
														<a class="nav-link" href="#">2019年2月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmdept201903">
														<a class="nav-link" href="#">2019年3月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmdept201904">
														<a class="nav-link" href="#">2019年4月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmdept201905">
														<a class="nav-link" href="#">2019年5月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmdept201906">
														<a class="nav-link" href="#">2019年6月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmdept201907">
														<a class="nav-link" href="#">2019年7月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmdept201908">
														<a class="nav-link" href="#">2019年8月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmdept201909">
														<a class="nav-link" href="#">2019年9月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmdept201910">
														<a class="nav-link" href="#">2019年10月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmdept201911">
														<a class="nav-link" href="#">2019年11月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmdept201912">
														<a class="nav-link" href="#">2019年12月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmdept202001">
														<a class="nav-link" href="#">2020年1月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmdept202002">
														<a class="nav-link" href="#">2020年2月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmdept202003">
														<a class="nav-link" href="#">2020年3月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmdept202004">
														<a class="nav-link" href="#">2020年4月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmdept202005">
														<a class="nav-link" href="#">2020年5月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmdept202006">
														<a class="nav-link" href="#">2020年6月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmdept202007">
														<a class="nav-link" href="#">2020年7月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmdept202008">
														<a class="nav-link" href="#">2020年8月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmdept202009">
														<a class="nav-link" href="#">2020年9月</a>
													</div>
												</li>
											</ul>
										</div>
									</li>

								</ul>
							</div>
						</li>
						<li class="nav-item ">
							<a class="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-5" aria-controls="submenu-5">
								办件提供单位统计
							</a>
							<div id="submenu-5" class="collapse submenu" style="">
								<ul class="nav flex-column">
									<li class="nav-item">
										<div id="yyunit">
											<a class="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-5-1" aria-controls="submenu-5-1">
												办件提供单位年统
											</a>
										</div>
										<div id="submenu-5-1" class="collapse submenu" style="">
											<ul class="nav flex-column">
												<li class="nav-item">
													<div id="yyunit2019">
														<a class="nav-link" href="#">2019年</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="yyunit2020">
														<a class="nav-link" href="#">2020年</a>
													</div>
												</li>
											</ul>
										</div>
									</li>

									<li class="nav-item">
										<div id="mmunit">
											<a class="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-5-2" aria-controls="submenu-5-2">
												办件提供单位月统计
											</a>
										</div>
										<div id="submenu-5-2" class="collapse submenu" style="">
											<ul class="nav flex-column">
												<li class="nav-item">
													<div id="mmunit201901">
														<a class="nav-link" href="#">2019年1月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmunit201902">
														<a class="nav-link" href="#">2019年2月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmunit201903">
														<a class="nav-link" href="#">2019年3月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmunit201904">
														<a class="nav-link" href="#">2019年4月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmunit201905">
														<a class="nav-link" href="#">2019年5月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmunit201906">
														<a class="nav-link" href="#">2019年6月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmunit201907">
														<a class="nav-link" href="#">2019年7月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmunit201908">
														<a class="nav-link" href="#">2019年8月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmunit201909">
														<a class="nav-link" href="#">2019年9月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmunit201910">
														<a class="nav-link" href="#">2019年10月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmunit201911">
														<a class="nav-link" href="#">2019年11月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmunit201912">
														<a class="nav-link" href="#">2019年12月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmunit202001">
														<a class="nav-link" href="#">2020年1月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmunit202002">
														<a class="nav-link" href="#">2020年2月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmunit202003">
														<a class="nav-link" href="#">2020年3月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmunit202004">
														<a class="nav-link" href="#">2020年4月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmunit202005">
														<a class="nav-link" href="#">2020年5月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmunit202006">
														<a class="nav-link" href="#">2020年6月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmunit202007">
														<a class="nav-link" href="#">2020年7月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmunit202008">
														<a class="nav-link" href="#">2020年8月</a>
													</div>
												</li>
												<li class="nav-item">
													<div id="mmunit202009">
														<a class="nav-link" href="#">2020年9月</a>
													</div>
												</li>
											</ul>
										</div>
									</li>

								</ul>
							</div>
						</li>


					</ul>
				</div>
			</nav>
		</div>
	</div>

	<!-- ============================================================== -->
	<!-- 右部分展示 -->
	<div class="dashboard-wrapper">
		<div class="dashboard-ecommerce">
			<div id="showcvs" class="container-fluid dashboard-content ">

				<%--1.   2019年1月-2020年9月，每个月的办件两--%>
				<div id="datacount"></div>

				<%--2.   2019年-2020年，事项每年办件量--%>
				<div id="yynamedatashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="yynamedatazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="yynamedatabt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>
						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="yynamedatamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="yynamedatamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="yynamedatarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="yynamedatamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="yynamedatamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="yynamedataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>

						</div>
					</div>
					<div id="yynamedata"></div>
				</div>
				<div id="yyname2019dateshow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="yyname2019datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="yyname2019databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>
						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="yyname2019datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="yyname2019datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="yyname2019datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="yyname2019datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="yyname2019datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="yyname2019dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="yyname2019date"></div>
				</div>
				<div id="yyname2020dateshow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="yyname2020datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="yyname2020databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>
						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="yyname2020datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="yyname2020datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="yyname2020datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="yyname2020datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="yyname2020datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="yyname2020dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="yyname2020data"></div>
				</div>
				<%--3.   2019年1月-2020年9月，事项每个月办件量--%>
				<div id="mmnamedatashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmnamedatazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmnamedatabt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>
						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmnamedatamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmnamedatamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmnamedatarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmnamedatamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmnamedatamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmnamedataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmnamedata"></div>
				</div>
				<div id="mmname201901datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmname201901datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmname201901databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmname201901datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmname201901datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmname201901datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmname201901datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmname201901datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmname201901dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmname201901data"></div>
				</div>
				<div id="mmname201902datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmname201902datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmname201902databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmname201902datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmname201902datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmname201902datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmname201902datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmname201902datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmname201902dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmname201902data"></div>
				</div>
				<div id="mmname201903datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmname201903datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmname201903databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmname201903datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmname201903datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmname201903datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmname201903datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmname201903datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmname201903dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmname201903data"></div>
				</div>
				<div id="mmname201904datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmname201904datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmname201904databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmname201904datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmname201904datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmname201904datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmname201904datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmname201904datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmname201904dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmname201904data"></div>
				</div>
				<div id="mmname201905datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmname201905datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmname201905databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmname201905datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmname201905datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmname201905datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmname201905datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmname201905datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmname201905dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmname201905data"></div>
				</div>
				<div id="mmname201906datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmname201906datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmname201906databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmname201906datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmname201906datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmname201906datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmname201906datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmname201906datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmname201906dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmname201906data"></div>
				</div>
				<div id="mmname201907datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmname201907datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmname201907databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmname201907datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmname201907datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmname201907datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmname201907datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmname201907datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmname201907dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmname201907data"></div>
				</div>
				<div id="mmname201908datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmname201908datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmname201908databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmname201908datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmname201908datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmname201908datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmname201908datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmname201908datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmname201908dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmname201908data"></div>
				</div>
				<div id="mmname201909datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmname201909datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmname201909databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmname201909datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmname201909datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmname201909datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmname201909datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmname201909datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmname201909dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmname201909data"></div>
				</div>
				<div id="mmname201910datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmname201910datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmname201910databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmname201910datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmname201910datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmname201910datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmname201910datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmname201910datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmname201910dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmname201910data"></div>
				</div>
				<div id="mmname201911datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmname201911datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmname201911databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmname201911datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmname201911datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmname201911datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmname201911datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmname201911datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmname201911dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmname201911data"></div>
				</div>
				<div id="mmname201912datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmname201912datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmname201912databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmname201912datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmname201912datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmname201912datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmname201912datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmname201912datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmname201912dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmname201912data"></div>
				</div>
				<div id="mmname202001datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmname202001datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmname202001databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmname202001datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmname202001datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmname202001datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmname202001datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmname202001datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmname202001dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmname202001data"></div>
				</div>
				<div id="mmname202002datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmname202002datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmname202002databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmname202002datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmname202002datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmname202002datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmname202002datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmname202002datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmname202002dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmname202002data"></div>
				</div>
				<div id="mmname202003datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmname202003datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmname202003databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmname202003datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmname202003datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmname202003datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmname202003datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmname202003datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmname202003dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmname202003data"></div>
				</div>
				<div id="mmname202004datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmname202004datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmname202004databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmname202004datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmname202004datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmname202004datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmname202004datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmname202004datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmname202004dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmname202004data"></div>
				</div>
				<div id="mmname202005datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmname202005datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmname202005databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmname202005datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmname202005datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmname202005datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmname202005datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmname202005datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmname202005dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmname202005data"></div>
				</div>
				<div id="mmname202006datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmname202006datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmname202006databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmname202006datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmname202006datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmname202006datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmname202006datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmname202006datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmname202006dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmname202006data"></div>
				</div>
				<div id="mmname202007datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmname202007datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmname202007databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmname202007datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmname202007datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmname202007datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmname202007datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmname202007datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmname202007dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmname202007data"></div>
				</div>
				<div id="mmname202008datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmname202008datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmname202008databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmname202008datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmname202008datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmname202008datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmname202008datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmname202008datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmname202008dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmname202008data"></div>
				</div>
				<div id="mmname202009datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmname202009datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmname202009databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmname202009datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmname202009datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmname202009datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmname202009datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmname202009datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmname202009dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmname202009data"></div>
				</div>
				<%--4.   2019年-2020年，区划每年办件量--%>
				<div id="yyregiondatashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="yyregiondatazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="yyregiondatabt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>
						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="yyregiondatamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="yyregiondatamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="yyregiondatarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="yyregiondatamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="yyregiondatamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="yyregiondataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="yyregiondata"></div>
				</div>
				<div id="yyregion2019dateshow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="yyregion2019datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="yyregion2019databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>
						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="yyregion2019datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="yyregion2019datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="yyregion2019datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="yyregion2019datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="yyregion2019datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="yyregion2019dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="yyregion2019date"></div>
				</div>
				<div id="yyregion2020dateshow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="yyregion2020datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="yyregion2020databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>
						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="yyregion2020datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="yyregion2020datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="yyregion2020datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="yyregion2020datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="yyregion2020datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="yyregion2020dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="yyregion2020data"></div>
				</div>
				<%--5.   2019年1月-2020年9月，区划每个月办件量--%>
				<div id="mmregiondatashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmregiondatazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmregiondatabt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>
						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmregiondatamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmregiondatamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmregiondatarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmregiondatamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmregiondatamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmregiondataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmregiondata"></div>
				</div>
				<div id="mmregion201901datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmregion201901datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmregion201901databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmregion201901datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmregion201901datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmregion201901datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmregion201901datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmregion201901datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmregion201901dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmregion201901data"></div>
				</div>
				<div id="mmregion201902datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmregion201902datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmregion201902databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmregion201902datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmregion201902datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmregion201902datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmregion201902datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmregion201902datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmregion201902dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmregion201902data"></div>
				</div>
				<div id="mmregion201903datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmregion201903datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmregion201903databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmregion201903datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmregion201903datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmregion201903datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmregion201903datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmregion201903datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmregion201903dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmregion201903data"></div>
				</div>
				<div id="mmregion201904datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmregion201904datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmregion201904databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmregion201904datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmregion201904datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmregion201904datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmregion201904datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmregion201904datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmregion201904dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmregion201904data"></div>
				</div>
				<div id="mmregion201905datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmregion201905datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmregion201905databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmregion201905datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmregion201905datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmregion201905datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmregion201905datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmregion201905datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmregion201905dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmregion201905data"></div>
				</div>
				<div id="mmregion201906datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmregion201906datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmregion201906databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmregion201906datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmregion201906datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmregion201906datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmregion201906datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmregion201906datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmregion201906dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmregion201906data"></div>
				</div>
				<div id="mmregion201907datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmregion201907datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmregion201907databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmregion201907datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmregion201907datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmregion201907datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmregion201907datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmregion201907datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmregion201907dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmregion201907data"></div>
				</div>
				<div id="mmregion201908datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmregion201908datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmregion201908databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmregion201908datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmregion201908datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmregion201908datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmregion201908datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmregion201908datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmregion201908dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmregion201908data"></div>
				</div>
				<div id="mmregion201909datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmregion201909datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmregion201909databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmregion201909datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmregion201909datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmregion201909datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmregion201909datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmregion201909datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmregion201909dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmregion201909data"></div>
				</div>
				<div id="mmregion201910datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmregion201910datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmregion201910databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmregion201910datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmregion201910datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmregion201910datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmregion201910datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmregion201910datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmregion201910dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmregion201910data"></div>
				</div>
				<div id="mmregion201911datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmregion201911datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmregion201911databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmregion201911datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmregion201911datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmregion201911datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmregion201911datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmregion201911datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmregion201911dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmregion201911data"></div>
				</div>
				<div id="mmregion201912datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmregion201912datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmregion201912databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmregion201912datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmregion201912datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmregion201912datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmregion201912datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmregion201912datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmregion201912dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmregion201912data"></div>
				</div>
				<div id="mmregion202001datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmregion202001datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmregion202001databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmregion202001datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmregion202001datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmregion202001datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmregion202001datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmregion202001datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmregion202001dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmregion202001data"></div>
				</div>
				<div id="mmregion202002datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmregion202002datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmregion202002databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmregion202002datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmregion202002datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmregion202002datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmregion202002datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmregion202002datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmregion202002dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmregion202002data"></div>
				</div>
				<div id="mmregion202003datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmregion202003datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmregion202003databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmregion202003datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmregion202003datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmregion202003datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmregion202003datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmregion202003datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmregion202003dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmregion202003data"></div>
				</div>
				<div id="mmregion202004datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmregion202004datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmregion202004databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmregion202004datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmregion202004datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmregion202004datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmregion202004datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmregion202004datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmregion202004dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmregion202004data"></div>
				</div>
				<div id="mmregion202005datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmregion202005datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmregion202005databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmregion202005datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmregion202005datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmregion202005datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmregion202005datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmregion202005datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmregion202005dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmregion202005data"></div>
				</div>
				<div id="mmregion202006datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmregion202006datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmregion202006databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmregion202006datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmregion202006datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmregion202006datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmregion202006datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmregion202006datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmregion202006dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmregion202006data"></div>
				</div>
				<div id="mmregion202007datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmregion202007datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmregion202007databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmregion202007datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmregion202007datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmregion202007datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmregion202007datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmregion202007datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmregion202007dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmregion202007data"></div>
				</div>
				<div id="mmregion202008datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmregion202008datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmregion202008databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmregion202008datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmregion202008datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmregion202008datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmregion202008datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmregion202008datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmregion202008dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmregion202008data"></div>
				</div>
				<div id="mmregion202009datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmregion202009datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmregion202009databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmregion202009datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmregion202009datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmregion202009datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmregion202009datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmregion202009datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmregion202009dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmregion202009data"></div>
				</div>
				<%--6.   2019年-2020年，受理部门每年办件量--%>
				<div id="yydeptdatashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="yydeptdatazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="yydeptdatabt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>
						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="yydeptdatamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="yydeptdatamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="yydeptdatarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="yydeptdatamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="yydeptdatamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="yydeptdataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="yydeptdata"></div>
				</div>
				<div id="yydept2019dateshow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="yydept2019datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="yydept2019databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>
						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="yydept2019datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="yydept2019datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="yydept2019datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="yydept2019datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="yydept2019datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="yydept2019dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="yydept2019date"></div>
				</div>
				<div id="yydept2020dateshow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="yydept2020datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="yydept2020databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>
						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="yydept2020datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="yydept2020datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="yydept2020datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="yydept2020datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="yydept2020datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="yydept2020dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="yydept2020data"></div>
				</div>
				<%--7.   2019年1月-2020年9月，受理部门每个月办件量--%>
				<div id="mmdeptdatashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmdeptdatazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmdeptdatabt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>
						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmdeptdatamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmdeptdatamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmdeptdatarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmdeptdatamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmdeptdatamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmdeptdataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmdeptdata"></div>
				</div>
				<div id="mmdept201901datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmdept201901datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmdept201901databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmdept201901datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmdept201901datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmdept201901datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmdept201901datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmdept201901datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmdept201901dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmdept201901data"></div>
				</div>
				<div id="mmdept201902datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmdept201902datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmdept201902databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmdept201902datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmdept201902datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmdept201902datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmdept201902datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmdept201902datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmdept201902dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmdept201902data"></div>
				</div>
				<div id="mmdept201903datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmdept201903datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmdept201903databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmdept201903datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmdept201903datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmdept201903datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmdept201903datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmdept201903datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmdept201903dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmdept201903data"></div>
				</div>
				<div id="mmdept201904datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmdept201904datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmdept201904databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmdept201904datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmdept201904datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmdept201904datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmdept201904datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmdept201904datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmdept201904dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmdept201904data"></div>
				</div>
				<div id="mmdept201905datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmdept201905datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmdept201905databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmdept201905datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmdept201905datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmdept201905datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmdept201905datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmdept201905datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmdept201905dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmdept201905data"></div>
				</div>
				<div id="mmdept201906datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmdept201906datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmdept201906databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmdept201906datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmdept201906datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmdept201906datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmdept201906datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmdept201906datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmdept201906dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmdept201906data"></div>
				</div>
				<div id="mmdept201907datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmdept201907datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmdept201907databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmdept201907datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmdept201907datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmdept201907datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmdept201907datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmdept201907datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmdept201907dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmdept201907data"></div>
				</div>
				<div id="mmdept201908datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmdept201908datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmdept201908databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmdept201908datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmdept201908datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmdept201908datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmdept201908datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmdept201908datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmdept201908dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmdept201908data"></div>
				</div>
				<div id="mmdept201909datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmdept201909datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmdept201909databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmdept201909datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmdept201909datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmdept201909datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmdept201909datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmdept201909datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmdept201909dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmdept201909data"></div>
				</div>
				<div id="mmdept201910datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmdept201910datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmdept201910databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmdept201910datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmdept201910datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmdept201910datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmdept201910datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmdept201910datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmdept201910dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmdept201910data"></div>
				</div>
				<div id="mmdept201911datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmdept201911datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmdept201911databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmdept201911datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmdept201911datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmdept201911datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmdept201911datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmdept201911datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmdept201911dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmdept201911data"></div>
				</div>
				<div id="mmdept201912datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmdept201912datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmdept201912databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmdept201912datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmdept201912datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmdept201912datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmdept201912datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmdept201912datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmdept201912dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmdept201912data"></div>
				</div>
				<div id="mmdept202001datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmdept202001datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmdept202001databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmdept202001datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmdept202001datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmdept202001datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmdept202001datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmdept202001datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmdept202001dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmdept202001data"></div>
				</div>
				<div id="mmdept202002datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmdept202002datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmdept202002databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmdept202002datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmdept202002datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmdept202002datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmdept202002datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmdept202002datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmdept202002dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmdept202002data"></div>
				</div>
				<div id="mmdept202003datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmdept202003datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmdept202003databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmdept202003datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmdept202003datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmdept202003datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmdept202003datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmdept202003datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmdept202003dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmdept202003data"></div>
				</div>
				<div id="mmdept202004datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmdept202004datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmdept202004databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmdept202004datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmdept202004datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmdept202004datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmdept202004datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmdept202004datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmdept202004dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmdept202004data"></div>
				</div>
				<div id="mmdept202005datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmdept202005datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmdept202005databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmdept202005datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmdept202005datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmdept202005datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmdept202005datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmdept202005datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmdept202005dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmdept202005data"></div>
				</div>
				<div id="mmdept202006datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmdept202006datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmdept202006databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmdept202006datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmdept202006datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmdept202006datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmdept202006datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmdept202006datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmdept202006dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmdept202006data"></div>
				</div>
				<div id="mmdept202007datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmdept202007datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmdept202007databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmdept202007datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmdept202007datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmdept202007datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmdept202007datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmdept202007datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmdept202007dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmdept202007data"></div>
				</div>
				<div id="mmdept202008datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmdept202008datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmdept202008databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmdept202008datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmdept202008datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmdept202008datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmdept202008datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmdept202008datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmdept202008dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmdept202008data"></div>
				</div>
				<div id="mmdept202009datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmdept202009datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmdept202009databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmdept202009datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmdept202009datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmdept202009datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmdept202009datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmdept202009datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmdept202009dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmdept202009data"></div>
				</div>
				<%--8.   2019年-2020年，办件提供单位每年办件量--%>
				<div id="yyunitdatashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="yyunitdatazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="yyunitdatabt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>
						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="yyunitdatamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="yyunitdatamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="yyunitdatarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="yyunitdatamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="yyunitdatamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="yyunitdataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="yyunitdata"></div>
				</div>
				<div id="yyunit2019dateshow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="yyunit2019datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="yyunit2019databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>
						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="yyunit2019datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="yyunit2019datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="yyunit2019datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="yyunit2019datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="yyunit2019datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="yyunit2019dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="yyunit2019date"></div>
				</div>
				<div id="yyunit2020dateshow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="yyunit2020datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="yyunit2020databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>
						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="yyunit2020datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="yyunit2020datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="yyunit2020datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="yyunit2020datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="yyunit2020datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="yyunit2020dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="yyunit2020data"></div>
				</div>
				<%--9.   2019年1月-2020年9月，办件提供单位每个月办件量--%>
				<div id="mmunitdatashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmunitdatazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmunitdatabt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>
						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmunitdatamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmunitdatamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmunitdatarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmunitdatamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmunitdatamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmunitdataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmunitdata"></div>
				</div>
				<div id="mmunit201901datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmunit201901datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmunit201901databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmunit201901datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmunit201901datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmunit201901datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmunit201901datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmunit201901datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmunit201901dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmunit201901data"></div>
				</div>
				<div id="mmunit201902datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmunit201902datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmunit201902databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmunit201902datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmunit201902datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmunit201902datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmunit201902datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmunit201902datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmunit201902dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmunit201902data"></div>
				</div>
				<div id="mmunit201903datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmunit201903datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmunit201903databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmunit201903datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmunit201903datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmunit201903datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmunit201903datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmunit201903datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmunit201903dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmunit201903data"></div>
				</div>
				<div id="mmunit201904datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmunit201904datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmunit201904databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmunit201904datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmunit201904datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmunit201904datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmunit201904datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmunit201904datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmunit201904dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmunit201904data"></div>
				</div>
				<div id="mmunit201905datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmunit201905datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmunit201905databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmunit201905datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmunit201905datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmunit201905datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmunit201905datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmunit201905datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmunit201905dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmunit201905data"></div>
				</div>
				<div id="mmunit201906datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmunit201906datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmunit201906databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmunit201906datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmunit201906datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmunit201906datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmunit201906datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmunit201906datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmunit201906dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmunit201906data"></div>
				</div>
				<div id="mmunit201907datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmunit201907datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmunit201907databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmunit201907datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmunit201907datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmunit201907datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmunit201907datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmunit201907datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmunit201907dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmunit201907data"></div>
				</div>
				<div id="mmunit201908datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmunit201908datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmunit201908databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmunit201908datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmunit201908datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmunit201908datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmunit201908datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmunit201908datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmunit201908dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmunit201908data"></div>
				</div>
				<div id="mmunit201909datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmunit201909datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmunit201909databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmunit201909datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmunit201909datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmunit201909datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmunit201909datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmunit201909datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmunit201909dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmunit201909data"></div>
				</div>
				<div id="mmunit201910datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmunit201910datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmunit201910databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmunit201910datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmunit201910datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmunit201910datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmunit201910datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmunit201910datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmunit201910dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmunit201910data"></div>
				</div>
				<div id="mmunit201911datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmunit201911datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmunit201911databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmunit201911datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmunit201911datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmunit201911datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmunit201911datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmunit201911datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmunit201911dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmunit201911data"></div>
				</div>
				<div id="mmunit201912datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmunit201912datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmunit201912databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmunit201912datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmunit201912datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmunit201912datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmunit201912datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmunit201912datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmunit201912dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmunit201912data"></div>
				</div>
				<div id="mmunit202001datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmunit202001datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmunit202001databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmunit202001datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmunit202001datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmunit202001datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmunit202001datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmunit202001datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmunit202001dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmunit202001data"></div>
				</div>
				<div id="mmunit202002datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmunit202002datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmunit202002databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmunit202002datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmunit202002datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmunit202002datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmunit202002datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmunit202002datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmunit202002dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmunit202002data"></div>
				</div>
				<div id="mmunit202003datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmunit202003datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmunit202003databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmunit202003datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmunit202003datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmunit202003datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmunit202003datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmunit202003datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmunit202003dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmunit202003data"></div>
				</div>
				<div id="mmunit202004datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmunit202004datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmunit202004databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmunit202004datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmunit202004datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmunit202004datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmunit202004datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmunit202004datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmunit202004dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmunit202004data"></div>
				</div>
				<div id="mmunit202005datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmunit202005datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmunit202005databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmunit202005datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmunit202005datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmunit202005datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmunit202005datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmunit202005datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmunit202005dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmunit202005data"></div>
				</div>
				<div id="mmunit202006datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmunit202006datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmunit202006databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmunit202006datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmunit202006datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmunit202006datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmunit202006datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmunit202006datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmunit202006dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmunit202006data"></div>
				</div>
				<div id="mmunit202007datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmunit202007datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmunit202007databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmunit202007datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmunit202007datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmunit202007datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmunit202007datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmunit202007datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmunit202007dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmunit202007data"></div>
				</div>
				<div id="mmunit202008datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmunit202008datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmunit202008databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmunit202008datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmunit202008datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmunit202008datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmunit202008datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmunit202008datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmunit202008dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmunit202008data"></div>
				</div>
				<div id="mmunit202009datashow">
					<div class="btn-group">
						<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							办件量
						</button>
						<div class="dropdown-menu">
							<div id="mmunit202009datazft">
								<a class="dropdown-item" href="#">直方图</a>
							</div>
							<div id="mmunit202009databt">
								<a class="dropdown-item" href="#">饼图</a>
							</div>

						</div>
					</div>
					<div class="btn-group">
						<button type="button" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							耗时天数
						</button>
						<div class="dropdown-menu">
							<div id="mmunit202009datamax">
								<a class="dropdown-item" href="#">最大值</a>
							</div>
							<div id="mmunit202009datamin">
								<a class="dropdown-item" href="#">最小值</a>
							</div>
							<div id="mmunit202009datarange">
								<a class="dropdown-item" href="#">极差</a>
							</div>
							<div id="mmunit202009datamedian">
								<a class="dropdown-item" href="#">中位数</a>
							</div>
							<div id="mmunit202009datamode">
								<a class="dropdown-item" href="#">众数</a>
							</div>
							<div id="mmunit202009dataxxt">
								<a class="dropdown-item" href="#">箱形图统计</a>
							</div>
						</div>
					</div>
					<div id="mmunit202009data"></div>
				</div>




			</div>
		</div>
	</div>

</div>
<%--1.  2019年1月-2020年9月，每个月的办件两--%>
<script type="text/javascript" src="/viewcvs/datacount/datacount.js"></script>
</body>
</html>