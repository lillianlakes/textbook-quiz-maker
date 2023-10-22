package com.wwwcode.textbookquizmaker.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;

@Entity
public class StudentQuizAnswer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    // Define the many-to-one relationship with the Student entity
    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;

    // Define the many-to-one relationship with the QuizQuestion entity
    @ManyToOne
    @JoinColumn(name = "quiz_question_id")
    private QuizQuestion quizQuestion;

    private String student_answer;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Student getStudent() {
		return student;
	}

	public void setStudent(Student student) {
		this.student = student;
	}

	public QuizQuestion getQuizQuestion() {
		return quizQuestion;
	}

	public void setQuizQuestion(QuizQuestion quizQuestion) {
		this.quizQuestion = quizQuestion;
	}

	public String getStudent_answer() {
		return student_answer;
	}

	public void setStudent_answer(String student_answer) {
		this.student_answer = student_answer;
	}

	public StudentQuizAnswer() {
		super();
		// TODO Auto-generated constructor stub
	}

	public StudentQuizAnswer(int id, Student student, QuizQuestion quizQuestion, String student_answer) {
		super();
		this.id = id;
		this.student = student;
		this.quizQuestion = quizQuestion;
		this.student_answer = student_answer;
	}    
    
}
