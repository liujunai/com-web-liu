package com.example.demo.service;

import com.example.demo.model.bean.YyDeptData;
import com.example.demo.model.dao.YyDeptDataDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class YyDeptDataService {

	@Autowired
	private YyDeptDataDao yyDeptDataDao;

	public List<YyDeptData> selectAll(String date){
		return yyDeptDataDao.selectAll(date);
	}

}
