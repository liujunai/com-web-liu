package com.example.demo.controller;

import com.example.demo.model.bean.YyDeptData;
import com.example.demo.service.YyDeptDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/yydeptdata")
public class YyDeptDataController {

	@Autowired
	private YyDeptDataService yyDeptDataService;

	@PostMapping(value = "/selectAll.do")
	public List<YyDeptData> selectAll(String date){
		return yyDeptDataService.selectAll(date);
	}

}