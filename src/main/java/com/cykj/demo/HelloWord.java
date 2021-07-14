package com.cykj.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.xml.ws.RequestWrapper;

@Controller
@RequestMapping("/admin")
public class HelloWord {
    @ResponseBody
    @RequestMapping("/hello")
    public String hello(){
        return "AAA";
    }
}
