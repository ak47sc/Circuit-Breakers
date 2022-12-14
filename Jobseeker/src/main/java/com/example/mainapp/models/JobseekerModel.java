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
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "Jobseekerprofiles")
public class JobseekerModel {
	
	@Id
	@Column(name="personId")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int personId;
	
	@Column(name="personName")
	private String personName;
	
	@Column(name="personAddress")
	private String personAddress;
	
	@Column(name="personExp")
	private String personExp;
	
	@Column(name="personPhone")
	private String personPhone;
	
	@Column(name="personEmail")
	private String personEmail;
	
	@ManyToMany(fetch = FetchType.LAZY , cascade = CascadeType.MERGE)
	@JoinTable(name = "jobs_jobseekers",
	joinColumns = { @JoinColumn(name = "Jobseeker_id",referencedColumnName = "personId")},
	inverseJoinColumns = { @JoinColumn(name="job_id" , referencedColumnName = "JobId") })
	private Collection<JobModel> jobmodel;

	public int getPersonId() {
		return personId;
	}

	public void setPersonId(int personId) {
		this.personId = personId;
	}

	public String getPersonName() {
		return personName;
	}

	public void setPersonName(String personName) {
		this.personName = personName;
	}

	public String getPersonAddress() {
		return personAddress;
	}

	public void setPersonAddress(String personAddress) {
		this.personAddress = personAddress;
	}

	public String getPersonExp() {
		return personExp;
	}

	public void setPersonExp(String personExp) {
		this.personExp = personExp;
	}

	public String getPersonPhone() {
		return personPhone;
	}

	public void setPersonPhone(String personPhone) {
		this.personPhone = personPhone;
	}

	public String getPersonEmail() {
		return personEmail;
	}

	public void setPersonEmail(String personEmail) {
		this.personEmail = personEmail;
	}

	public Collection<JobModel> getJobmodel() {
		return jobmodel;
	}

	public void setJobmodel(Collection<JobModel> jobmodel) {
		this.jobmodel = jobmodel;
	}

	public JobseekerModel(String personName, String personAddress, String personExp, String personPhone,
			String personEmail, Collection<JobModel> jobmodel) {
		super();
		this.personName = personName;
		this.personAddress = personAddress;
		this.personExp = personExp;
		this.personPhone = personPhone;
		this.personEmail = personEmail;
		this.jobmodel = jobmodel;
	}

	public JobseekerModel() {
		
	}

}
