package com.example.demo.model.bean;

import java.util.List;

/**
 * 事项名称,区划,受理部门,办件提供单位  年、月  最大值  最小值  极差
 */
public class Range {

	private String cName;

	private String cRegion;

	private String cDept;

	private String cUnit;

	private String yy;

	private String cDate;

	private String modeDate;

	private String maxDate;

	private String minDate;

	private String rangeDate;

	private String median;

	private String mode;

	private List<Integer> dateList;

	public String getcName() {
		return cName;
	}

	public void setcName(String cName) {
		this.cName = cName;
	}

	public String getcRegion() {
		return cRegion;
	}

	public void setcRegion(String cRegion) {
		this.cRegion = cRegion;
	}

	public String getcDept() {
		return cDept;
	}

	public void setcDept(String cDept) {
		this.cDept = cDept;
	}

	public String getcUnit() {
		return cUnit;
	}

	public void setcUnit(String cUnit) {
		this.cUnit = cUnit;
	}

	public String getYy() {
		return yy;
	}

	public void setYy(String yy) {
		this.yy = yy;
	}

	public String getMaxDate() {
		return maxDate;
	}

	public void setMaxDate(String maxDate) {
		this.maxDate = maxDate;
	}

	public String getMinDate() {
		return minDate;
	}

	public void setMinDate(String minDate) {
		this.minDate = minDate;
	}

	public String getRangeDate() {
		return rangeDate;
	}

	public void setRangeDate(String rangeDate) {
		this.rangeDate = rangeDate;
	}

	public String getMedian() {
		return median;
	}

	public void setMedian(String median) {
		this.median = median;
	}

	public String getMode() {
		return mode;
	}

	public void setMode(String mode) {
		this.mode = mode;
	}

	public String getcDate() {
		return cDate;
	}

	public void setcDate(String cDate) {
		this.cDate = cDate;
	}

	public List<Integer> getDateList() {
		return dateList;
	}

	public void setDateList(List<Integer> dateList) {
		this.dateList = dateList;
	}

	public String getModeDate() {
		return modeDate;
	}

	public void setModeDate(String modeDate) {
		this.modeDate = modeDate;
	}
}
