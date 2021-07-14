package com.cykj.springboot.mapper;

import org.springframework.stereotype.Repository;

import java.nio.MappedByteBuffer;
import java.util.List;
import java.util.Map;

/**
 * @version 1.0
 * @author: yitong
 * @date: 2021/7/12 16:30
 * @desc:
 */
@Repository
public interface StudentMapper {
	 List<Map<String, Object>> selectAll();
}
