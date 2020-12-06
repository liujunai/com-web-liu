package com.example.demo.controller;

import com.example.demo.model.bean.MmNameData;
import com.example.demo.service.MmNameDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/mmnamedata")
public class MmNameDataController {

	@Autowired
	private MmNameDataService mmNameDataService;


	@PostMapping(value = "/selectAll.do")
	public List<MmNameData> selectAll(String date){
		return mmNameDataService.selectAll(date);
	}

}
