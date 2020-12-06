package com.example.demo.model.dao;


import com.example.demo.model.bean.YyDeptData;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface YyDeptDataDao {

	List<YyDeptData> selectAll(String date);

}
