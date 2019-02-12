package demo.controller;


import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;


import com.alibaba.fastjson.JSONObject;

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
//用这种写法，前端URL为http://127.0.0.1:8080/demo/jsontest，demo是上下文根，jsontest对应value的值
@RequestMapping(value="jsontest",method = {RequestMethod.POST})
@ResponseBody
public JSONObject jsontest(HttpServletRequest request){
	Map m = request.getParameterMap();//获取前端参数
	
	JSONObject obj = new JSONObject();
	obj.put("val1", "string1");
	obj.put("val2", "string2");
	obj.put("val3", "string3");
	return obj;
}
}
