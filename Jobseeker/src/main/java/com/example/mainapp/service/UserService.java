package com.example.mainapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mainapp.models.UserModel;
import com.example.mainapp.repository.UserRepository;

@Service
public class UserService {
	@Autowired
    private UserRepository repository;

    public UserModel save(UserModel user)
    {
        return repository.save(user);
    }
    
    public Optional<UserModel> findById(String id)
    {
    	return repository.findById(id);
    }
}

