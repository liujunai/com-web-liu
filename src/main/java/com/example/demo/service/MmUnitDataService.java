package com.example.demo.service;


import com.example.demo.model.bean.MmUnitData;
import com.example.demo.model.dao.MmUnitDataDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MmUnitDataService {

	@Autowired
	private MmUnitDataDao mmUnitDataDao;

	public List<MmUnitData> selectAll(String date){
		return mmUnitDataDao.selectAll(date);
	}

}
