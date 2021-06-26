package com.piyush.hospital.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Entity
public @Data class Appointment {
	@Id
	@GeneratedValue
	private int id;
	
	@Column(nullable = false)
	private String date;
	
	@Column(nullable = false)
	private int patientId;
	
	@Column(nullable = false)
	private int doctorId;
	
	@Column(nullable = false)
	private int slotNo;
	
	@Column(nullable = false)
	private int status;
	
	@Column(nullable = false)
	private String prescription;
	
	@Column(nullable = false)
	private String problem;
	

}
