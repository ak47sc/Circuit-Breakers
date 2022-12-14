package com.example.mainapp.models;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "JobRecords")
public class JobModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int JobId;
	
	@Column(name = "JobDescription")
	private String JobDescription;
	
	@Column(name = "JobLocation")
	private String JobLocation;

	@Column(name = "fromDate")
	private String fromDate;
	
	@Column(name = "toDate")
	private String toDate;
	
	@Column(name = "wagePerDay")
	private String wagePerDay;
	
	@Column(name = "phoneNumber")
	private String phoneNumber;
	
	/*@ManyToMany(fetch = FetchType.LAZY , cascade = CascadeType.ALL ,mappedBy = "jobmodel")
	private Collection<JobseekerModel> jobseeker;*/

	public int getJobId() {
		return JobId;
	}

	public void setJobId(int jobId) {
		JobId = jobId;
	}

	public String getJobDescription() {
		return JobDescription;
	}

	public void setJobDescription(String jobDescription) {
		JobDescription = jobDescription;
	}

	public String getJobLocation() {
		return JobLocation;
	}

	public void setJobLocation(String jobLocation) {
		JobLocation = jobLocation;
	}

	public String getFromDate() {
		return fromDate;
	}

	public void setFromDate(String fromDate) {
		this.fromDate = fromDate;
	}

	public String getToDate() {
		return toDate;
	}

	public void setToDate(String toDate) {
		this.toDate = toDate;
	}

	public String getWagePerDay() {
		return wagePerDay;
	}

	public void setWagePerDay(String wagePerDay) {
		this.wagePerDay = wagePerDay;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	/*public Collection<JobseekerModel> getJobseeker() {
		return jobseeker;
	}

	public void setJobseeker(Collection<JobseekerModel> jobseeker) {
		this.jobseeker = jobseeker;
	}*/
	
	public JobModel(String jobDescription, String jobLocation, String fromDate, String toDate, 
			String wagePerDay,
			String phoneNumber) {
		super();
		JobDescription = jobDescription;
		JobLocation = jobLocation;
		this.fromDate = fromDate;
		this.toDate = toDate;
		this.wagePerDay = wagePerDay;
		this.phoneNumber = phoneNumber;
	}

	public JobModel() {
		
	}
	
	
}
