package com.example.demo.model.dao;


import com.example.demo.model.bean.MmRegionData;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MmRegionDataDao {

	List<MmRegionData> selectAll(String date);

}
