package com.piyush.hospital.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;
/**
 * {
"name":"Piyush",
"email":"abc@xyz.com",
"password":"12345",
"contact":"9334419919",
"govtId":"777014501592",
"address":"Patna, Bihar",
"bloodGroup":"O+"
}
 * @author piyus
 *
 */

@Entity
public @Data class Patient {
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
	private String bloodGroup;
	
	@Column(nullable = false)
	private int age;

}
