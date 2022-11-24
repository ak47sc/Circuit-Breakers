package com.example.mainapp.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Streamable;
import org.springframework.stereotype.Service;

import com.example.mainapp.models.JobModel;
import com.example.mainapp.repository.JobRepository;

@Service
public class JobService {
	
	@Autowired
	private JobRepository jobRepo;
	
	public JobModel save(JobModel data)
    {
        return jobRepo.save(data);
    }
	
	public List<JobModel> getAll()
	{
		List<JobModel> students = new ArrayList<>();
        Streamable.of(jobRepo.findAll()).forEach(students::add);
        return students;
	}
}
