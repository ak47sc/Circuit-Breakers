package com.example.mainapp.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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
		List<JobModel> jobs = new ArrayList<>();
        Streamable.of(jobRepo.findAll()).forEach(jobs::add);
        return jobs;
		
		//return (List<JobModel>) jobRepo.findAll();
	}
	
	public boolean searchid(int id)
	{
		return jobRepo.existsById(id);
	}
	
	public void deletebyId(JobModel data) {
		jobRepo.delete(data);
	}
	
	public Optional<JobModel> findbyId(int id)
	{
		return jobRepo.findById(id);
	}
	
}
