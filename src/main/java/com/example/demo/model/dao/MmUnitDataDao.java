package com.example.demo.model.dao;


import com.example.demo.model.bean.MmUnitData;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MmUnitDataDao {

	List<MmUnitData> selectAll(String date);
}
