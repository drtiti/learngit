package demo.Dao;

import demo.entity.DemoEntity;

public interface DemoDaoMapper {
	public DemoEntity selectDemoByID(String id);
}
