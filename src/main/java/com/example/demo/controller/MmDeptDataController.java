package com.example.demo.controller;


import com.example.demo.model.bean.MmDeptData;
import com.example.demo.service.MmDeptDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/mmdeptdata")
public class MmDeptDataController {

	@Autowired
	private MmDeptDataService mmDeptDataService;

	@PostMapping(value = "/selectAll.do")
	public List<MmDeptData> selectAll(String date){
		return mmDeptDataService.selectAll(date);
	}

}
