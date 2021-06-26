package com.piyush.hospital.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.piyush.hospital.model.Appointment;

public interface AppointmentRepo extends JpaRepository<Appointment, Integer> {

	@Transactional
	@Query("from Appointment u WHERE u.date= :date AND u.doctorId = :did AND u.patientId = :pid AND u.status > -1")
	Appointment searchDuplicate(@Param("date")String date, @Param("did") int did, @Param("pid")int pid);

	@Transactional
	@Modifying
	@Query("UPDATE Appointment u SET u.prescription = :prescription WHERE u.id= :id")
	void addPrescription(@Param("id")int id, @Param("prescription")String prescription);
	
	
	@Transactional
	@Modifying
	@Query("UPDATE Appointment u SET u.status = 1 WHERE u.id= :id")
	void confirmAppointment(@Param("id")int id);
	
	@Transactional
	@Modifying
	@Query("UPDATE Appointment u SET u.status = -1 WHERE u.id= :id")
	void rejectAppointment(@Param("id")int id);

	
	@Transactional
	@Query("from Appointment u WHERE u.date= :date AND u.doctorId = :did AND u.slotNo = :slot" )
	Integer check(@Param("date") String date,@Param("did")  int did, @Param("slot")int slot);

	List<Appointment> findAllByPatientId(int pid);

	List<Appointment> findAllByDoctorId(int did);

	

}
