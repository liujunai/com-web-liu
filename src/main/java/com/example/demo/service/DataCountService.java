package com.example.demo.service;

import com.example.demo.model.bean.DataCount;
import com.example.demo.model.dao.DataCountDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DataCountService {

	@Autowired
	private DataCountDao dataCountDao;

	public List<DataCount> selectAll(){
		return dataCountDao.selectAll();
	}


}
