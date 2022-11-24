package com.example.mainapp.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.mainapp.models.UserModel;

@Repository
public interface UserRepository extends CrudRepository<UserModel,String> {

}
