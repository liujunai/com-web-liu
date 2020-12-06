package com.example.demo.controller;

import com.example.demo.model.bean.MmUnitData;
import com.example.demo.service.MmUnitDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/mmunitdata")
public class MmUnitDataController {

	@Autowired
	private MmUnitDataService mmUnitDataService;


	@PostMapping(value = "/selectAll.do")
	public List<MmUnitData> selectAll(String date){
		return mmUnitDataService.selectAll(date);
	}

}
