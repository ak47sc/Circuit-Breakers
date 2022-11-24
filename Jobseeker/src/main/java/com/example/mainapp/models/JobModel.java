package com.example.mainapp.models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

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
	
	
}