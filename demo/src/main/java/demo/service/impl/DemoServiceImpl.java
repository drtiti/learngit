package demo.service.impl;

import javax.annotation.Resource;

import demo.Dao.DemoDaoMapper;
import demo.entity.DemoEntity;
import demo.service.DemoService;

public class DemoServiceImpl implements DemoService {

	@Resource
	private DemoDaoMapper demoDao;
	
	public DemoEntity queryForDemoEntityByID(String id) {
		return demoDao.selectDemoByID(id);
	}

}
