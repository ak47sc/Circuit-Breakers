package com.example.mainapp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.mainapp.models.JobModel;
import com.example.mainapp.models.JobseekerModel;
import com.example.mainapp.service.JobSeekerService;
import com.example.mainapp.service.JobService;

@RestController
@CrossOrigin(origins = "*")
public class JobseekerController {
	
	@Autowired
	public JobSeekerService jobseekerservice;
	
	@Autowired
	public JobService jobservice;
	
	@PostMapping("/jobseeker/applyjob")
	public String applyJob(@RequestBody JobseekerModel jobdata) {
		
		
		
		return "Job Apllied Successfully";
	}
	
	@GetMapping("/admin/profile")
	public List<JobseekerModel> getJob()
	{
		return jobseekerservice.getAll();
	}
	
	@PutMapping("/jobseeker/deleteJob/{id}")
	public String deleteJob(@PathVariable int id)
	{
		Optional<JobseekerModel> check = jobseekerservice.findbyId(id);
		
		if(check.isPresent())
		{
			jobseekerservice.deletebyId(check.get());
			return "Job Deleted";
		}
		else 
			return "Job Not Found";
	}
}
