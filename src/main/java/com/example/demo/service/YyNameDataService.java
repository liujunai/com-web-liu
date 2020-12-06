package com.example.demo.service;

import com.example.demo.model.bean.YyNameData;
import com.example.demo.model.dao.YyNameDataDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class YyNameDataService {

	@Autowired
	private YyNameDataDao yyNameDataDao;

	public List<YyNameData> selectAll(String date){
		return yyNameDataDao.selectAll(date);
	}

}