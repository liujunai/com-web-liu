package com.example.demo.controller;

import com.example.demo.model.bean.MmRegionData;
import com.example.demo.service.MmRegionDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/mmregiondata")
public class MmRegionDataController {

	@Autowired
	private MmRegionDataService mmRegionDataService;


	@PostMapping(value = "/selectAll.do")
	public List<MmRegionData> selectAll(String date){
		return mmRegionDataService.selectAll(date);
	}

}
