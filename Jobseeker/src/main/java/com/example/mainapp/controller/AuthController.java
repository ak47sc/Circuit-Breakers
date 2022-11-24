package com.example.mainapp.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.mainapp.models.LoginModel;
import com.example.mainapp.models.UserModel;
import com.example.mainapp.service.UserService;

@RestController
@CrossOrigin(origins = "*")
public class AuthController {
	
	@Autowired
	private UserService userService;
	
	
	@PostMapping("/user/signup")
	public String saveUser(@RequestBody UserModel user) {
		Optional<UserModel> check = userService.findById(user.getEmail());
		if(check.isPresent() == false) {
			userService.save(user);
			return "User Created successfully";
		}
		else
			return "Email Already exists";
	}
	
	@PostMapping("/user/login")
	public String isPresent(@RequestBody LoginModel data) {
		Optional<UserModel> check = userService.findById(data.getEmail());
		
		if(check.isPresent() == false) {
			return "Email not Exists";
		}
		else if(check.get().getPassword().equals(data.getPassword())) {
			if(check.get().getUserRole().equalsIgnoreCase("User"))
				return "/customer/dashboard";
			else if(check.get().getUserRole().equalsIgnoreCase("Admin"))
				return "/admin/profile";
			else 
				return "/jobseeker/dashboard";
		}
		else 
			return "Password incorrect";
	}
}



