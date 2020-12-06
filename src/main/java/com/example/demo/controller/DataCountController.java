package com.example.demo.controller;


import com.example.demo.model.bean.DataCount;
import com.example.demo.service.DataCountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@RestController
@RequestMapping("/datacount")
public class DataCountController {

	@Autowired
	private DataCountService dataCountService;

	@RequestMapping(value = "/view.do")
	public ModelAndView datacount(){
		ModelAndView mv = new ModelAndView("view");
		return mv;
	}

	@PostMapping(value = "/selectAll.do")
	public List<DataCount> selectAll(){
		return dataCountService.selectAll();
	}

}
