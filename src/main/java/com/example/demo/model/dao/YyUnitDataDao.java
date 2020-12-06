package com.example.demo.model.dao;

import com.example.demo.model.bean.YyUnitData;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface YyUnitDataDao {

	List<YyUnitData> selectAll(String date);
}
