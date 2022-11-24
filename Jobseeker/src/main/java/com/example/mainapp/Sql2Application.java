package com.example.mainapp;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"com.example"})
public class Sql2Application{
	public static void main(String[] args) {
		SpringApplication.run(Sql2Application.class, args);
	}

}