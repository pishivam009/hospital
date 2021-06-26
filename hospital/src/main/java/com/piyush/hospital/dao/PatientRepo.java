package com.piyush.hospital.dao;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.piyush.hospital.model.Patient;

public interface PatientRepo extends JpaRepository<Patient, Integer> {

	boolean existsByEmail(String email);

	boolean existsByGovtId(String govtId);

	Patient findByEmail(String emailid);
	
	@Transactional
	@Modifying
	@Query(value="UPDATE Patient u SET u.name = :name , u.password = :password , u.contact = :contact , u.bloodGroup = :bloodGroup, u.address=:address where u.govtId = :govtId")
	void updateByEmail(@Param("name") String name, @Param("password") String password, @Param("contact")String contact, @Param("bloodGroup")String bloodGroup, @Param("address")String address, @Param("govtId")String govtId);

}
