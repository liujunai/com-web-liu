package com.example.demo.model.dao;

import com.example.demo.model.bean.MmNameData;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MmNameDataDao {

	List<MmNameData> selectAll(String date);
}
