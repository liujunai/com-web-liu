package com.example.demo.model.dao;

import com.example.demo.model.bean.MmDeptData;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MmDeptDataDao {

	/**
	 * 每月 部门 办事量
	 * @param date
	 * @return
	 */
	List<MmDeptData> selectAll(String date);


}
