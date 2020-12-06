package com.example.demo.controller;

import com.example.demo.model.bean.YyRegionData;
import com.example.demo.service.YyRegionDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/yyregiondata")
public class YyRegionDataController {

	@Autowired
	private YyRegionDataService yyRegionDataService;

	@PostMapping(value = "/selectAll.do")
	public List<YyRegionData> selectAll(String date){
		return yyRegionDataService.selectAll(date);
	}

}
