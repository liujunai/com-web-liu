package com.example.demo.controller;

import com.example.demo.model.bean.YyUnitData;
import com.example.demo.service.YyUnitDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/yyunitdata")
public class YyUnitDataController {

	@Autowired
	private YyUnitDataService yyUnitDataService;

	@PostMapping(value = "/selectAll.do")
	public List<YyUnitData> selectAll(String date){
		return yyUnitDataService.selectAll(date);
	}

}
