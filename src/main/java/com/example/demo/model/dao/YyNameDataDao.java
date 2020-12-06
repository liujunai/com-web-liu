package com.example.demo.model.dao;

import com.example.demo.model.bean.YyNameData;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface YyNameDataDao {

	List<YyNameData> selectAll(String date);
}
