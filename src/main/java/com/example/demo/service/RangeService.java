package com.example.demo.service;

import com.example.demo.model.bean.Range;
import com.example.demo.model.bean.RangeMode;
import com.example.demo.model.dao.RangeDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RangeService {

	@Autowired
	private RangeDao rangeDao;

	/**
	 * 事项名称  年、月  最大值  最小值  极差  中位数  众数
	 * @param rangeMode
	 * @return
	 */
	public List<Range> selectNameAll(RangeMode rangeMode) {
		List<Range> rangeList = null;
		String date = rangeMode.getYy();
		if (date.length() > 4){
			if (rangeMode.getValue().equals("max")) {
				// 获取 事项名称 c_name  月 最大值
				rangeList = rangeDao.selectMmNameMaxAll(date);
			}
			if (rangeMode.getValue().equals("min")) {
				// 获取 事项名称 c_name  月 最小值
				rangeList = rangeDao.selectMmNameMinAll(date);
			}
			if (rangeMode.getValue().equals("range")) {
				// 获取 事项名称 c_name  月 极差
				rangeList = rangeDao.selectMmNameRangeAll(date);
			}
			if (rangeMode.getValue().equals("median")) {
				// 获取 事项名称 c_name 月 中位数
		    	rangeList = rangeDao.selectMmNameMedianAll(date);
			}
			if (rangeMode.getValue().equals("mode")) {
				// 获取 事项名称 c_name 月 众数
		    	rangeList = rangeDao.selectMmNameModeAll(date);
			}
		}else {
			if (rangeMode.getValue().equals("max")) {
				// 获取 事项名称 c_name  年 最大值
				rangeList = rangeDao.selectYyNameMaxAll(date);
			}
			if (rangeMode.getValue().equals("min")) {
				// 获取 事项名称 c_name  年 最小值
				rangeList = rangeDao.selectYyNameMinAll(date);
			}
			if (rangeMode.getValue().equals("range")) {
				// 获取 事项名称 c_name  年 极差
				rangeList = rangeDao.selectYyNameRangeAll(date);
			}
			if (rangeMode.getValue().equals("median")) {
				// 获取 事项名称 c_name 年 中位数
				rangeList = rangeDao.selectYyNameMedianAll(date);
			}
			if (rangeMode.getValue().equals("mode")) {
				// 获取 事项名称 c_name 年 众数
				rangeList = rangeDao.selectYyNameModeAll(date);
			}
		}
		return rangeList;
	}

	/**
	 * 区划  年、月  最大值  最小值  极差  中位数  众数
	 * @param rangeMode
	 * @return
	 */
	public List<Range> selectRegionAll(RangeMode rangeMode) {
		List<Range> rangeList = null;
		String date = rangeMode.getYy();
		if (date.length() > 4){
			if (rangeMode.getValue().equals("max")) {
				// 获取  区划  c_region  月 最大值
				rangeList = rangeDao.selectMmRegionMaxAll(date);
			}
			if (rangeMode.getValue().equals("min")) {
				// 获取 区划  c_region  月 最小值
				rangeList = rangeDao.selectMmRegionMinAll(date);
			}
			if (rangeMode.getValue().equals("range")) {
				// 获取 区划  c_region  月 极差
				rangeList = rangeDao.selectMmRegionRangeAll(date);
			}
			if (rangeMode.getValue().equals("median")) {
				// 获取 区划 c_region  月 中位数
				rangeList = rangeDao.selectMmRegionMedianAll(date);
			}
			if (rangeMode.getValue().equals("mode")) {
				// 获取 区划 c_region  月 众数
				rangeList = rangeDao.selectMmRegionModeAll(date);
			}
		}else {
			if (rangeMode.getValue().equals("max")) {
				// 获取  区划  c_region  年 最大值
				rangeList = rangeDao.selectYyRegionMaxAll(date);
			}
			if (rangeMode.getValue().equals("min")) {
				// 获取 区划  c_region  年 最小值
				rangeList = rangeDao.selectYyRegionMinAll(date);
			}
			if (rangeMode.getValue().equals("range")) {
				// 获取 区划  c_region  年 极差
				rangeList = rangeDao.selectYyRegionRangeAll(date);
			}
			if (rangeMode.getValue().equals("median")) {
				// 获取 区划 c_region  年 中位数
				rangeList = rangeDao.selectYyRegionMedianAll(date);
			}
			if (rangeMode.getValue().equals("mode")) {
				// 获取 区划 c_region  年 众数
				rangeList = rangeDao.selectYyRegionModeAll(date);
			}
		}
		return rangeList;
	}

	/**
	 * 受理部门  年、月  最大值  最小值  极差  中位数  众数
	 * @param rangeMode
	 * @return
	 */
	public List<Range> selectDeptAll(RangeMode rangeMode) {
		List<Range> rangeList = null;
		String date = rangeMode.getYy();
		if (date.length() > 4){
			if (rangeMode.getValue().equals("max")) {
				// 获取 受理部门  c_dept 月  最大值
				rangeList = rangeDao.selectMmDeptMaxAll(date);
			}
			if (rangeMode.getValue().equals("min")) {
				// 获取 受理部门  c_dept 月  最小值
				rangeList = rangeDao.selectMmDeptMinAll(date);
			}
			if (rangeMode.getValue().equals("range")) {
				// 获取 受理部门  c_dept 月  极差
				rangeList = rangeDao.selectMmDeptRangeAll(date);
			}
			if (rangeMode.getValue().equals("median")) {
				// 获取 受理部门  c_dept 月  中位数
				rangeList = rangeDao.selectMmDeptMedianAll(date);
			}
			if (rangeMode.getValue().equals("mode")) {
				// 获取 受理部门  c_dept 月  众数
				rangeList = rangeDao.selectMmDeptModeAll(date);
			}
		}else {
			if (rangeMode.getValue().equals("max")) {
				// 获取 受理部门  c_dept 年  最大值
				rangeList = rangeDao.selectYyDeptMaxAll(date);
			}
			if (rangeMode.getValue().equals("min")) {
				// 获取 受理部门  c_dept 年  最小值
				rangeList = rangeDao.selectYyDeptMinAll(date);
			}
			if (rangeMode.getValue().equals("range")) {
				// 获取 受理部门  c_dept 年  极差
				rangeList = rangeDao.selectYyDeptRangeAll(date);
			}
			if (rangeMode.getValue().equals("median")) {
				// 获取 受理部门  c_dept 年  中位数
				rangeList = rangeDao.selectYyDeptMedianAll(date);
			}
			if (rangeMode.getValue().equals("mode")) {
				// 获取 受理部门  c_dept 年  众数
				rangeList = rangeDao.selectYyDeptModeAll(date);
			}
		}
		return rangeList;
	}

	/**
	 * 办件提供单位   年、月  最大值  最小值  极差  中位数  众数
	 * @param rangeMode
	 * @return
	 */
	public List<Range> selectUnitAll(RangeMode rangeMode) {
		List<Range> rangeList = null;
		String date = rangeMode.getYy();
		if (date.length() > 4){
			if (rangeMode.getValue().equals("max")) {
				// 获取 办件提供单位  c_unit 月  最大值
				rangeList = rangeDao.selectMmUnitMaxAll(date);
			}
			if (rangeMode.getValue().equals("min")) {
				// 获取 办件提供单位  c_unit 月  最小值
				rangeList = rangeDao.selectMmUnitMinAll(date);
			}
			if (rangeMode.getValue().equals("range")) {
				// 获取 办件提供单位  c_unit 月  极差
				rangeList = rangeDao.selectMmUnitRangeAll(date);
			}
			if (rangeMode.getValue().equals("median")) {
				// 获取 办件提供单位  c_unit 月  中位数
				rangeList = rangeDao.selectMmUnitMedianAll(date);
			}
			if (rangeMode.getValue().equals("mode")) {
				// 获取 办件提供单位  c_unit 月  众数
				rangeList = rangeDao.selectMmUnitModeAll(date);
			}
		}else {
			if (rangeMode.getValue().equals("max")) {
				// 获取 办件提供单位  c_unit 年  最大值
				rangeList = rangeDao.selectYyUnitMaxAll(date);
			}
			if (rangeMode.getValue().equals("min")) {
				// 获取 办件提供单位  c_unit 年  最小值
				rangeList = rangeDao.selectYyUnitMinAll(date);
			}
			if (rangeMode.getValue().equals("range")) {
				// 获取 办件提供单位  c_unit 年  极差
				rangeList = rangeDao.selectYyUnitRangeAll(date);
			}
			if (rangeMode.getValue().equals("median")) {
				// 获取 办件提供单位  c_unit 年  中位数
				rangeList = rangeDao.selectYyUnitMedianAll(date);
			}
			if (rangeMode.getValue().equals("mode")) {
				// 获取 办件提供单位  c_unit 年  众数
				rangeList = rangeDao.selectYyUnitModeAll(date);
			}
		}
		return rangeList;
	}



	/**
	 * 事项名称  年、月  耗时天数 集合
	 * @param rangeMode
	 * @return
	 */
	public List<Range> selectNameDateAll(RangeMode rangeMode) {
		List<Range> rangeList;
		String date = rangeMode.getYy();
		if (date.length() > 4){
			rangeList = rangeDao.selectMmNameDateAll(date);
			this.dateListInteger(rangeList);
		}else {
			rangeList = rangeDao.selectYyNameDateAll(date);
			this.dateListInteger(rangeList);
		}
		return rangeList;
	}

	/**
	 * 区划  年、月  耗时天数 集合
	 * @param rangeMode
	 * @return
	 */
	public List<Range> selectRegionDateAll(RangeMode rangeMode) {
		List<Range> rangeList;
		String date = rangeMode.getYy();
		if (date.length() > 4){
			rangeList = rangeDao.selectMmRegionDateAll(date);
			this.dateListInteger(rangeList);
		}else {
			rangeList = rangeDao.selectYyRegionDateAll(date);
			this.dateListInteger(rangeList);
		}
		return rangeList;
	}
	/**
	 * 受理部门  年、月  耗时天数 集合
	 * @param rangeMode
	 * @return
	 */
	public List<Range> selectDeptDateAll(RangeMode rangeMode) {
		List<Range> rangeList;
		String date = rangeMode.getYy();
		if (date.length() > 4){
			rangeList = rangeDao.selectMmDeptDateAll(date);
			this.dateListInteger(rangeList);
		}else {
			rangeList = rangeDao.selectYyDeptDateAll(date);
			this.dateListInteger(rangeList);
		}
		return rangeList;
	}
	/**
	 * 办件提供单位  年、月  耗时天数 集合
	 * @param rangeMode
	 * @return
	 */
	public List<Range> selectUnitDateAll(RangeMode rangeMode) {
		List<Range> rangeList;
		String date = rangeMode.getYy();
		if (date.length() > 4){
			rangeList = rangeDao.selectMmUnitDateAll(date);
			this.dateListInteger(rangeList);
		}else {
			rangeList = rangeDao.selectYyUnitDateAll(date);
			this.dateListInteger(rangeList);
		}
		return rangeList;
	}


	private void dateListInteger(List<Range> rangeList){
		for (Range range : rangeList) {
			String[] dateArray = range.getcDate().split("_");
			List<Integer> dateList = new ArrayList<>();
			for (String s : dateArray) {
				double date = Double.parseDouble(s);
				dateList.add((int) Math.floor(date));
			}
			range.setDateList(dateList);
		}
	}

}
