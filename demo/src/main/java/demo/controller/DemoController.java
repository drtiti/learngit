package demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class DemoController {

	public DemoController(){
		System.out.println(DemoController.class.getName()+" is constructing.");
	}
@RequestMapping("stringtest")
@ResponseBody
public String test(){
	return "this.is.a.test";
}
}
