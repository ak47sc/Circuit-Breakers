package com.example.mainapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.mainapp.models.JobModel;
import com.example.mainapp.service.JobService;

@RestController
@CrossOrigin(origins = "*")
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
		return jobService.getAll();
	}
}
