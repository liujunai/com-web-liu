package com.example.demo.controller;

import com.example.demo.model.bean.Range;
import com.example.demo.model.bean.RangeMode;
import com.example.demo.service.RangeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * 事项名称,区划,受理部门,办件提供单位  年、月  最大值  最小值  极差  中位数  众数
 */
@RestController
@RequestMapping("/range")
public class RangeController {

	@Autowired
	private RangeService rangeService;

	/**
	 * 事项名称  年、月  最大值  最小值  极差  中位数  众数
	 * @return
	 */
	@PostMapping(value = "/selectNameAll.do")
	public List<Range> selectNameAll(RangeMode rangeMode){
		return rangeService.selectNameAll(rangeMode);
	}

	/**
	 * 区划  年、月  最大值  最小值  极差  中位数  众数
	 * @return
	 */
	@PostMapping(value = "/selectRegionAll.do")
	public List<Range> selectRegionAll(RangeMode rangeMode){
		return rangeService.selectRegionAll(rangeMode);
	}

	/**
	 * 受理部门  年、月  最大值  最小值  极差  中位数  众数
	 * @return
	 */
	@PostMapping(value = "/selectDeptAll.do")
	public List<Range> selectDeptAll(RangeMode rangeMode){
		return rangeService.selectDeptAll(rangeMode);
	}

	/**
	 * 办件提供单位   年、月  最大值  最小值  极差  中位数  众数
	 * @return
	 */
	@PostMapping(value = "/selectUnitAll.do")
	public List<Range> selectUnitAll(RangeMode rangeMode){
		return rangeService.selectUnitAll(rangeMode);
	}






	/**
	 * 事项名称  年、月  耗时天数 集合
	 * @return
	 */
	@PostMapping(value = "/selectNameDateAll.do")
	public List<Range> selectNameDateAll(RangeMode rangeMode){
		return rangeService.selectNameDateAll(rangeMode);
	}

	/**
	 * 区划  年、月   耗时天数 集合
	 * @return
	 */
	@PostMapping(value = "/selectRegionDateAll.do")
	public List<Range> selectRegionDateAll(RangeMode rangeMode){
		return rangeService.selectRegionDateAll(rangeMode);
	}

	/**
	 * 受理部门  年、月  耗时天数 集合
	 * @return
	 */
	@PostMapping(value = "/selectDeptDateAll.do")
	public List<Range> selectDeptDateAll(RangeMode rangeMode){
		return rangeService.selectDeptDateAll(rangeMode);
	}

	/**
	 * 办件提供单位   年、月   耗时天数 集合
	 * @return
	 */
	@PostMapping(value = "/selectUnitDateAll.do")
	public List<Range> selectUnitDateAll(RangeMode rangeMode){
		return rangeService.selectUnitDateAll(rangeMode);
	}

}
