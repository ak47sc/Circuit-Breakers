package com.example.mainapp.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.mainapp.models.JobModel;

@Repository
public interface JobRepository extends CrudRepository<JobModel,Integer> {

}
