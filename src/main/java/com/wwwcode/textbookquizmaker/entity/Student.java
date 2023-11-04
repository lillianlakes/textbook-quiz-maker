package com.wwwcode.textbookquizmaker.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "student")
public class Student {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int student_id;
    private String username;
    private String password;
    private String first_name;
    private String last_name;
    private String school_name;
    private Character grade;
    
	public int getStudentId() {
		return student_id;
	}
	public void setStudentId(int student_id) {
		this.student_id = student_id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getFirstName() {
		return first_name;
	}
	public void setFirstName(String first_name) {
		this.first_name = first_name;
	}
	public String getLastName() {
		return last_name;
	}
	public void setLastName(String last_name) {
		this.last_name = last_name;
	}
	public String getSchoolName() {
		return school_name;
	}
	public void setSchoolName(String school_name) {
		this.school_name = school_name;
	}
	public Character getGrade() {
		return grade;
	}
	public void setGrade(Character grade) {
		this.grade = grade;
	}
	
	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Student(int id, String username, String password, String firstName, String lastName, String schoolName,
			Character grade) {
		super();
		this.student_id = id;
		this.username = username;
		this.password = password;
		this.first_name = firstName;
		this.last_name = lastName;
		this.school_name = schoolName;
		this.grade = grade;
	}
	
	
    
    

}
