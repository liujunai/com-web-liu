package com.example.demo.controller;

import com.example.demo.model.bean.YyNameData;
import com.example.demo.service.YyNameDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/yynamedata")
public class YyNameDataController {

	@Autowired
	private YyNameDataService yyNameDataService;

	@PostMapping(value = "/selectAll.do")
	public List<YyNameData> selectAll(String date){
		return yyNameDataService.selectAll(date);
	}

}
