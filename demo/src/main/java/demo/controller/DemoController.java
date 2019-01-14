package demo.controller;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import demo.utils.RequestUtil;

@Controller
public class DemoController {

	public DemoController(){
		System.out.println(DemoController.class.getName()+" is constructing.");
	}
@RequestMapping("stringtest")
@ResponseBody
public String test(HttpServletRequest request, HttpServletResponse response){
	HashMap param = (HashMap)RequestUtil.requestToMap(request);
	String url = (String)request.getRequestURI();
	return "123";
}
}
