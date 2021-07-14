package com.cykj.springboot.controll;

import com.cykj.springboot.mapper.StudentMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @version 1.0
 * @author: yitong
 * @date: 2021/7/12 15:00
 * @desc:
 */
@Controller
@RequestMapping("/admin")
public class HelloWorld {
	@Autowired
	private StudentMapper studentMapper;
	@ResponseBody
	@RequestMapping("/hello")
	public String Hello() {
		System.out.println("=====");
		System.out.println(studentMapper.selectAll());

		return "Hello World";

	}
}
