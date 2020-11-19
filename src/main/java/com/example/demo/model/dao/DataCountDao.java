package com.example.demo.model.dao;

import com.example.demo.model.bean.DataCount;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface DataCountDao {

	List<DataCount> selectAll();

}
