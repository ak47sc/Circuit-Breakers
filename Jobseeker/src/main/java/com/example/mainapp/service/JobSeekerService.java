package com.example.mainapp.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Streamable;
import org.springframework.stereotype.Service;

import com.example.mainapp.models.JobModel;
import com.example.mainapp.models.JobseekerModel;
import com.example.mainapp.repository.JobseekerRepository;

@Service
public class JobSeekerService {
	
	@Autowired
	private JobseekerRepository jobseekerrepo;
	
	public JobseekerModel save(JobseekerModel jobseekerdata) {
		return jobseekerrepo.save(jobseekerdata);
	}

	public List<JobseekerModel> getAll() {
		List<JobseekerModel> jobseeker = new ArrayList<>();
        Streamable.of(jobseekerrepo.findAll()).forEach(jobseeker::add);
        return jobseeker;
	}

	public Optional<JobseekerModel> findbyId(int id) {
		return jobseekerrepo.findById(id);
	}

	public void deletebyId(JobseekerModel jobseekerModel) {
		jobseekerrepo.delete(jobseekerModel);
		
	}
	
	
}
