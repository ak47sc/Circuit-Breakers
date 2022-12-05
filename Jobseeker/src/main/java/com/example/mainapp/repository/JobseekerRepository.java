package com.example.mainapp.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.mainapp.models.JobseekerModel;

@Repository
public interface JobseekerRepository extends CrudRepository<JobseekerModel,Integer> {
}
