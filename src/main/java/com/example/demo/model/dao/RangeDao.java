package com.example.demo.model.dao;

import com.example.demo.model.bean.Range;
import com.example.demo.model.bean.RangeMode;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface RangeDao {

	/**
	 * 获取 事项名称 c_name 月 最大值
	 * @param    date
	 * @return
	 */
	List<Range> selectMmNameMaxAll(String  date);
	/**
	 * 获取 事项名称 c_name 月 最小值
	 * @param    date
	 * @return
	 */
	List<Range> selectMmNameMinAll(String  date);
	/**
	 * 获取 事项名称 c_name 月 极差
	 * @param    date
	 * @return
	 */
	List<Range> selectMmNameRangeAll(String  date);
	/**
	 * 获取 事项名称 c_name 月 中位数
	 * @param    date
	 * @return
	 */
	List<Range> selectMmNameMedianAll(String  date);
	/**
	 * 获取 事项名称 c_name 月 众数
	 * @param    date
	 * @return
	 */
	List<Range> selectMmNameModeAll(String  date);



	/**
	 * 获取 事项名称 c_name 年 最大值
	 * @param    date
	 * @return
	 */
	List<Range> selectYyNameMaxAll(String  date);
	/**
	 * 获取 事项名称 c_name 年 最小值
	 * @param    date
	 * @return
	 */
	List<Range> selectYyNameMinAll(String  date);
	/**
	 * 获取 事项名称 c_name 年 极差
	 * @param    date
	 * @return
	 */
	List<Range> selectYyNameRangeAll(String  date);
	/**
	 * 获取 事项名称 c_name 年 中位数
	 * @param    date
	 * @return
	 */
	List<Range> selectYyNameMedianAll(String  date);
	/**
	 * 获取 事项名称 c_name 年 众数
	 * @param    date
	 * @return
	 */
	List<Range> selectYyNameModeAll(String  date);





	/**
	 * 获取 区划  c_region 月 最大值
	 * @param    date
	 * @return
	 */
	List<Range> selectMmRegionMaxAll(String  date);
	/**
	 * 获取 区划  c_region  月 最小值
	 * @param    date
	 * @return
	 */
	List<Range> selectMmRegionMinAll(String  date);
	/**
	 * 获取 区划  c_region 月 极差
	 * @param    date
	 * @return
	 */
	List<Range> selectMmRegionRangeAll(String  date);
	/**
	 * 获取 区划 c_region  月 中位数
	 * @param    date
	 * @return
	 */
	List<Range> selectMmRegionMedianAll(String  date);
	/**
	 * 获取 区划 c_region  月 众数
	 * @param    date
	 * @return
	 */
	List<Range> selectMmRegionModeAll(String  date);




	/**
	 * 获取 区划  c_region 年 最大值
	 * @param    date
	 * @return
	 */
	List<Range> selectYyRegionMaxAll(String  date);
	/**
	 * 获取 区划  c_region 年 最小值
	 * @param    date
	 * @return
	 */
	List<Range> selectYyRegionMinAll(String  date);
	/**
	 * 获取 区划  c_region 年 极差
	 * @param    date
	 * @return
	 */
	List<Range> selectYyRegionRangeAll(String  date);
	/**
	 * 获取 区划 c_region  年 中位数
	 * @param    date
	 * @return
	 */
	List<Range> selectYyRegionMedianAll(String  date);
	/**
	 * 获取 区划 c_region  年 众数
	 * @param    date
	 * @return
	 */
	List<Range> selectYyRegionModeAll(String  date);







	/**
	 * 获取 受理部门  c_dept 月 最大值
	 * @param    date
	 * @return
	 */
	List<Range> selectMmDeptMaxAll(String  date);
	/**
	 * 获取 受理部门  c_dept 月 最小值
	 * @param    date
	 * @return
	 */
	List<Range> selectMmDeptMinAll(String  date);
	/**
	 * 获取 受理部门  c_dept 月 极差
	 * @param    date
	 * @return
	 */
	List<Range> selectMmDeptRangeAll(String  date);
	/**
	 * 获取 受理部门  c_dept 月  中位数
	 * @param    date
	 * @return
	 */
	List<Range> selectMmDeptMedianAll(String  date);
	/**
	 * 获取 受理部门  c_dept 月  众数
	 * @param    date
	 * @return
	 */
	List<Range> selectMmDeptModeAll(String  date);




	/**
	 * 获取 受理部门  c_dept 年 最大值
	 * @param    date
	 * @return
	 */
	List<Range> selectYyDeptMaxAll(String  date);
	/**
	 * 获取 受理部门  c_dept 年 最小值
	 * @param    date
	 * @return
	 */
	List<Range> selectYyDeptMinAll(String  date);
	/**
	 * 获取 受理部门  c_dept 年 极差
	 * @param    date
	 * @return
	 */
	List<Range> selectYyDeptRangeAll(String  date);
	/**
	 * 获取 受理部门  c_dept 年  中位数
	 * @param    date
	 * @return
	 */
	List<Range> selectYyDeptMedianAll(String  date);
	/**
	 * 获取 受理部门  c_dept 年  众数
	 * @param    date
	 * @return
	 */
	List<Range> selectYyDeptModeAll(String  date);





	/**
	 * 获取 办件提供单位  c_unit 月 最大值
	 * @param    date
	 * @return
	 */
	List<Range> selectMmUnitMaxAll(String  date);
	/**
	 * 获取 办件提供单位  c_unit 月 最小值
	 * @param    date
	 * @return
	 */
	List<Range> selectMmUnitMinAll(String  date);
	/**
	 * 获取 办件提供单位  c_unit 月 极差
	 * @param    date
	 * @return
	 */
	List<Range> selectMmUnitRangeAll(String  date);
	/**
	 * 获取 办件提供单位  c_unit 月  中位数
	 * @param    date
	 * @return
	 */
	List<Range> selectMmUnitMedianAll(String  date);
	/**
	 * 获取 办件提供单位  c_unit 月  众数
	 * @param    date
	 * @return
	 */
	List<Range> selectMmUnitModeAll(String  date);



	/**
	 * 获取 办件提供单位  c_unit 年 最大值
	 * @param    date
	 * @return
	 */
	List<Range> selectYyUnitMaxAll(String  date);
	/**
	 * 获取 办件提供单位  c_unit 年 最小值
	 * @param    date
	 * @return
	 */
	List<Range> selectYyUnitMinAll(String  date);
	/**
	 * 获取 办件提供单位  c_unit 年 极差
	 * @param    date
	 * @return
	 */
	List<Range> selectYyUnitRangeAll(String  date);
	/**
	 * 获取 办件提供单位  c_unit 年  中位数
	 * @param    date
	 * @return
	 */
	List<Range> selectYyUnitMedianAll(String  date);
	/**
	 * 获取 办件提供单位  c_unit 年  众数
	 * @param    date
	 * @return
	 */
	List<Range> selectYyUnitModeAll(String  date);




	/**
	 * 获取  事项名称  年 耗时天数 集合
	 * @param    date
	 * @return
	 */
	List<Range> selectYyNameDateAll(String  date);
	/**
	 * 获取  事项名称  月 耗时天数 集合
	 * @param    date
	 * @return
	 */
	List<Range> selectMmNameDateAll(String  date);

	/**
	 * 获取  区划  年 耗时天数 集合
	 * @param    date
	 * @return
	 */
	List<Range> selectYyRegionDateAll(String  date);
	/**
	 * 获取  区划  月 耗时天数 集合
	 * @param    date
	 * @return
	 */
	List<Range> selectMmRegionDateAll(String  date);

	/**
	 * 获取  受理部门  年 耗时天数 集合
	 * @param    date
	 * @return
	 */
	List<Range> selectYyDeptDateAll(String  date);
	/**
	 * 获取  受理部门  月 耗时天数 集合
	 * @param    date
	 * @return
	 */
	List<Range> selectMmDeptDateAll(String  date);

	/**
	 * 获取  办件提供单位  年 耗时天数 集合
	 * @param    date
	 * @return
	 */
	List<Range> selectYyUnitDateAll(String  date);
	/**
	 * 获取  办件提供单位  月 耗时天数 集合
	 * @param    date
	 * @return
	 */
	List<Range> selectMmUnitDateAll(String  date);


}
