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
import com.example.mainapp.models.UserModel;
import com.example.mainapp.service.JobService;

@RestController
@CrossOrigin(origins = "*",allowedHeaders = "*")
public class JobController {
	
	@Autowired
	private JobService jobService;
	
	@PostMapping("/customer/addjob")
	public String addJob(@RequestBody JobModel data)
	{
		jobService.save(data);
		return "Job added successfully";
	}
	
	@GetMapping("/admin/getAlljobs")
	public List<JobModel> getJob()
	{
		List<JobModel> jobs = jobService.getAll();
		return jobs;
	}
	
	@PutMapping("/admin/updateJob/{id}")
	public String editJob(@RequestBody JobModel data , @PathVariable int id)
	{
		JobModel update = new JobModel(data.getJobDescription(),data.getJobLocation(),data.getFromDate(),data.getToDate(),data.getWagePerDay(),data.getPhoneNumber());
		
		update.setJobId(id);
		
		if(jobService.searchid(id))
		{
			jobService.save(update);
			
			return "updated";
		}
		else return "Job not exists";
	}
	
	@PutMapping("/admin/deleteJob/{id}")
	public String deleteJob(@PathVariable int id)
	{
		Optional<JobModel> check = jobService.findbyId(id);
		
		if(check.isPresent())
		{
			jobService.deletebyId(check.get());
			return "Job Deleted";
		}
		else 
			return "Job Not Found";
	}
}

