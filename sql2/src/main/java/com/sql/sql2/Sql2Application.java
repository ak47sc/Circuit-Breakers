package com.sql.sql2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
public class Sql2Application implements CommandLineRunner{

	@Autowired
	private JdbcTemplate template ;
	public static void main(String[] args) {
		SpringApplication.run(Sql2Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		String sql="UPDATE student SET name=(?) WHERE id=(?)";

		int result=template.update(sql,"AKASh",15);


		if(result > 0){
			System.out.println("Success");
		}

	}

}
