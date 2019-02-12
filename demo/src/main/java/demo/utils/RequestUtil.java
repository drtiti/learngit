package demo.utils;

import java.io.BufferedReader;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

public class RequestUtil {
	public static Map requestToMap(HttpServletRequest rs) {
		if(rs ==null)
			return null;
		HashMap result = new HashMap();
		if("POST".equals(rs.getMethod())) {
			StringBuffer jb = new StringBuffer();
			String line = null;
			try {
			  BufferedReader reader = rs.getReader();
			  while ((line = reader.readLine()) != null)
				  jb.append(line);
			  } catch (Exception e) {
				  /*report an error*/ 
				  }
		}else {
			String queryString = rs.getQueryString();
			if(null!=queryString) {
				String args[]=queryString.split("&");
				String tmp[]=new String[2];
				for(String x:args) {
					tmp=x.split("=");
					result.put(tmp[0], tmp[1]);
				}
			}
		}	
		return result;
	}
}
