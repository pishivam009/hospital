package com.piyush.hospital.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.piyush.hospital.dao.AdminRepo;
import com.piyush.hospital.dao.AppointmentRepo;
import com.piyush.hospital.dao.DoctorRepo;
import com.piyush.hospital.dao.PatientRepo;
import com.piyush.hospital.model.Admin;
import com.piyush.hospital.model.Appointment;
import com.piyush.hospital.model.Doctor;
import com.piyush.hospital.model.LoginDetails;
import com.piyush.hospital.model.Patient;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class Controller {
	
	@Autowired
	PatientRepo patientRepo;
	
	@Autowired
	DoctorRepo doctorRepo;
	
	@Autowired
	AdminRepo adminRepo;
	
	@Autowired
	AppointmentRepo appointmentRepo;
	
	
	
	@PostMapping("/addUser")
	public String addUser(@RequestBody Patient patient) {
		if (!patientRepo.existsByGovtId(patient.getGovtId())&& !patientRepo.existsByEmail(patient.getEmail())) {
			patientRepo.save(patient);
			System.out.println("Patient saved");
			return "Patient saved";
		} else {
			System.out.println("Patient already exists");
			return "Patient already exists";
			
		}
	}
	
	@PostMapping("/addDoctor")
	public String addDoctor(@RequestBody Doctor doctor) {
		if (!doctorRepo.existsByGovtId(doctor.getGovtId())&& !doctorRepo.existsByEmail(doctor.getEmail())) {
			doctorRepo.save(doctor);
			System.out.println("Doctor saved");
			return "Doctor saved";
		} else {
			System.out.println("Doctor already exists");
			return "Doctor already exists";
			
		}
	}
	

	@PostMapping("/addAppointment")
	public String addAppointment(@RequestBody Appointment appointment) {
		if(appointmentRepo.searchDuplicate(appointment.getDate(),appointment.getDoctorId(),appointment.getPatientId())==null) {
			appointmentRepo.save(appointment);
			return "Appointment added";
		}else {

			return "Appointment already Exists";
		}
	}
	
	@GetMapping("/addPrescription/{id}/{prescription}")
	public void addPrescription(@PathVariable ("id") int id, @PathVariable ("prescription") String prescription ) {
		appointmentRepo.addPrescription( id,  prescription);
		System.out.println("Prescription added");
	}
	
	@PostMapping("confirmAppointment/{id}")
	public void confirmAppointment(@PathVariable ("id") int id){
		appointmentRepo.confirmAppointment(id);
		System.out.println( "Appointment with ID="+ id+" confirmed");
		
	}
	
	@PostMapping("rejectAppointment/{id}")
	public void rejectAppointment(@PathVariable ("id") int id){
		appointmentRepo.rejectAppointment(id);
		System.out.println("Appointment with ID="+ id+" rejected");
		
	}
	
	@GetMapping("checkAvailability/{date}/{did}/{slot}")
	public String checkAvailability(@PathVariable ("date") String date, @PathVariable ("did") int did,@PathVariable ("slot") int slot) {
		System.out.println(date+did+slot);
		
		if(appointmentRepo.check(date, did, slot)==null) {
			return "Available";
		}else {
			return "Not Available";
		}
	}
	
	@PutMapping("/updateUser")
	public String updateUser(@RequestBody Patient patient) {
		if (patientRepo.existsByEmail(patient.getEmail()) || patientRepo.existsByGovtId(patient.getGovtId())) {
			patientRepo.updateByEmail(patient.getName(), patient.getPassword(), patient.getContact(), patient.getBloodGroup(), patient.getAddress(), patient.getGovtId());
			System.out.println(patient);
			return "Patient updated";
		} else {
			return "Patient does not exist";
		}
	}
	
	@PutMapping("/updateDoctor")
	public String updateDoctor(@RequestBody Doctor doctor) {
		if (doctorRepo.existsByEmail(doctor.getEmail()) || doctorRepo.existsByGovtId(doctor.getGovtId())) {
			doctorRepo.updateByEmail(doctor.getName(), doctor.getPassword(),doctor.getMaxSlot(), doctor.getDept(), doctor.getContact(), doctor.getAddress() ,doctor.getGovtId());
			System.out.println(doctor);
			return "Doctor updated";
		} else {
			return "Doctor does not exist";
		}
	}
	
	@PostMapping("/userLogin")
	public Patient userLogin(@RequestBody LoginDetails loginDetails) {
		Patient p = new Patient();
		Patient temp = patientRepo.findByEmail(loginDetails.getEmailid());
		if (temp != null && temp.getPassword().equals(loginDetails.getPassword())) {
			p = temp;
			p.setPassword(null);
			System.out.println("Patient found and logged in");
		}
		return p;
	}
	
	@PostMapping("/doctorLogin")
	public Doctor doctorLogin(@RequestBody LoginDetails loginDetails) {
		Doctor d = new Doctor();
		Doctor temp = doctorRepo.findByEmail(loginDetails.getEmailid());
		if (temp != null && temp.getPassword().equals(loginDetails.getPassword())) {
			d = temp;
			d.setPassword(null);
			System.out.println("Doctor found and logged in");
		}
		return d;
	}
	
	
	@PostMapping("/adminLogin")
	public Admin adminLogin(@RequestBody LoginDetails loginDetails) {
		Admin a = new Admin();
		Admin temp = adminRepo.findByEmail(loginDetails.getEmailid());
		if (temp != null && temp.getPassword().equals(loginDetails.getPassword())) {
			a = temp;
			a.setPassword(null);
			System.out.println("Admin found and logged in");
		}
		return a;
	}
	@GetMapping("/allDoctors")
	public List<Doctor> getAllDoctors() {
		return doctorRepo.findAll();
	}
	
	@GetMapping("/allPatients")
	public List<Patient> getAllPatients() {
		return patientRepo.findAll();
	}
	
	@GetMapping("/allAppointments")
	public List<Appointment> getAllAppointments() {
		return appointmentRepo.findAll();
	}
	
	@GetMapping("/appointmentsByPID/{pid}")
	public List<Appointment> getAppointmentsByUserID(@PathVariable("pid") int pid) {
		return appointmentRepo.findAllByPatientId(pid);
	}
	
	@GetMapping("/appointmentsByDID/{did}")
	public List<Appointment> getAppointmentsByDoctorID(@PathVariable("did") int did) {
		return appointmentRepo.findAllByDoctorId(did);
	}
		
	@GetMapping("/maxSlot/{id}")
	public int maxSlot(@PathVariable ("id") int id) {
		return doctorRepo.getById(id).getMaxSlot(); 
	}
	
	@DeleteMapping("/deleteDoctor/{id}")
	public String deleteDoctor(@PathVariable("id") int id) {
		Integer i = Integer.valueOf(id);
		doctorRepo.deleteById(i);
		return "Doctor with ID=" + id + " deleted";
	}
	
	@DeleteMapping("/deletePatient/{id}")
	public String deletePatient(@PathVariable("id") int id) {
		Integer i = Integer.valueOf(id);
		patientRepo.deleteById(i);
		return "Patient with ID=" + id + " deleted";
	}
	
	
	
	


}
