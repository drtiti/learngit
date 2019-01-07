package demo;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.junit.Before;
import org.junit.Test;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import demo.Dao.DemoDaoMapper;
import demo.entity.DemoEntity;

public class DBTester {
	private DemoDaoMapper demoDao; 
	@Before
	public void init() {	
		ClassPathXmlApplicationContext classPathXmlApplicationContext = new ClassPathXmlApplicationContext("classpath:applicationContext.xml");
		SqlSessionFactory sqlSessionFactory = (SqlSessionFactory) classPathXmlApplicationContext.getBean("sqlSessionFactory");
		SqlSession sqlSession = sqlSessionFactory.openSession();
		demoDao = sqlSession.getMapper(DemoDaoMapper.class);
		classPathXmlApplicationContext.close();
	}
	@Test
	public void test1(){
		DemoEntity d =  demoDao.selectDemoByID("FF");
		System.out.println(d.getColA());
		System.out.println(d.getColB());
		System.out.println(d.getColC());
	}
}
