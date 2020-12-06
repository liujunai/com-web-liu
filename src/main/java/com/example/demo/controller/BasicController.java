package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.model.bean.User;
import com.example.demo.model.dao.UserDAO;

// @RestController = @Controller + @ResponseBody
@RestController 
public class BasicController {
	
	@Autowired
	private UserDAO userDAO;

	@GetMapping(value = "index.do")
	public ModelAndView index2() {
		return new ModelAndView("login"); //跳转登录页面
	}

	@GetMapping(value = "demo.do")
	public ModelAndView demo() {
		return new ModelAndView("demo"); //测试页面
	}

	@GetMapping(value = "login.do")
	public Object login(String username, String password) {
		System.out.println("传入参数：username=" + username + ", password=" + password);
		if (StringUtils.isEmpty(username)) {
			return "username不能为空";
		} else if (StringUtils.isEmpty(password)) {
			return "password不能为空";
		}
		User user = userDAO.find(username, password);
		if (user != null) {
			return new ModelAndView("home");
		} else {
			return "用户名或密码错误";
		}
	}

}
