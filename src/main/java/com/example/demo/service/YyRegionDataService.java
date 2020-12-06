package com.example.demo.service;

import com.example.demo.model.bean.YyRegionData;
import com.example.demo.model.dao.YyRegionDataDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class YyRegionDataService {

	@Autowired
	private YyRegionDataDao yyRegionDataDao;

	public List<YyRegionData> selectAll(String date){
		return yyRegionDataDao.selectAll(date);
	}

}