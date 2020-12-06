package com.example.demo.service;


import com.example.demo.model.bean.MmDeptData;
import com.example.demo.model.dao.MmDeptDataDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MmDeptDataService {

	@Autowired
	private MmDeptDataDao mmDeptDataDao;

	public List<MmDeptData> selectAll(String date){
		return mmDeptDataDao.selectAll(date);
	}



}
