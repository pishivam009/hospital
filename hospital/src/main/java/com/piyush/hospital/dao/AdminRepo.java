package com.piyush.hospital.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.piyush.hospital.model.Admin;

public interface AdminRepo extends JpaRepository<Admin, Integer> {

	Admin findByEmail(String emailid);

}
