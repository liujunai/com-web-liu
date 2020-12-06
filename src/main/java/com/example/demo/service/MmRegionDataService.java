package com.example.demo.service;


import com.example.demo.model.bean.MmRegionData;
import com.example.demo.model.dao.MmRegionDataDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MmRegionDataService {

	@Autowired
	private MmRegionDataDao mmRegionDataDao;

	public List<MmRegionData> selectAll(String date){
		return mmRegionDataDao.selectAll(date);
	}
}
