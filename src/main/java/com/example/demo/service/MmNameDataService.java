package com.example.demo.service;

import com.example.demo.model.bean.MmNameData;
import com.example.demo.model.dao.MmNameDataDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MmNameDataService {

	@Autowired
	private MmNameDataDao mmNameDataDao;

	public List<MmNameData> selectAll(String date){
		return mmNameDataDao.selectAll(date);
	}

}
