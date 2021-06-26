package com.piyush.hospital.dao;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.piyush.hospital.model.Doctor;

public interface DoctorRepo extends JpaRepository<Doctor, Integer> {

	Doctor findByEmail(String emailid);

	boolean existsByGovtId(String govtId);

	boolean existsByEmail(String email);

	@Transactional
	@Modifying
	@Query(value="UPDATE Doctor u SET u.name = :name , u.password = :password , u.maxSlot = :maxSlot , u.dept = :dept, u.contact=:contact, u.address=:address where u.govtId = :govtId")
	void updateByEmail(@Param("name")String name, @Param("password")String password, @Param("maxSlot")int maxSlot, @Param("dept")String dept,@Param("contact") String contact, @Param("address")String address,
			@Param("govtId")String govtId);

}
