package com.piyush.hospital.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

@Entity
public @Data class Doctor {
	@Id
	@GeneratedValue
	private int id;
	
	@Column(nullable = false)
	private String name;
	
	@Column(nullable = false, unique = true)
	private String email;
	
	@Column(nullable = false)
	private String password;
	
	@Column(nullable = false)
	private String contact;
	
	@Column(nullable = false, unique = true)
	private String govtId;
	
	@Column(nullable = false)
	private String address;
	
	@Column(nullable = false)
	private String dept;
	
	@Column(nullable = false)
	private int maxSlot;

}
