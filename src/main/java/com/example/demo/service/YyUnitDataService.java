package com.example.demo.service;

import com.example.demo.model.bean.YyUnitData;
import com.example.demo.model.dao.YyUnitDataDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class YyUnitDataService {

	@Autowired
	private YyUnitDataDao yyUnitDataDao;

	public List<YyUnitData> selectAll(String date){
		return yyUnitDataDao.selectAll(date);
	}

}