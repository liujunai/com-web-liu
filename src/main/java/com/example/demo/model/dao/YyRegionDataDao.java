package com.example.demo.model.dao;

import com.example.demo.model.bean.YyRegionData;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface YyRegionDataDao {

	List<YyRegionData> selectAll(String date);

}