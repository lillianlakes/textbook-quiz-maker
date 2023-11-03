package com.wwwcode.textbookquizmaker.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "quiz")
public class Quiz {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int quiz_id;
    @ManyToOne
    @JoinColumn(name = "textbook_id")
    private TextBook textbook;
    
	public int getId() {
		return quiz_id;
	}
	public void setId(int quiz_id) {
		this.quiz_id = quiz_id;
	}
	public TextBook getTextbook() {
		return textbook;
	}
	public void setTextbook(TextBook textbook) {
		this.textbook = textbook;
	}
	
	public Quiz() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Quiz(int quiz_id, TextBook textbook) {
		super();
		this.quiz_id = quiz_id;
		this.textbook = textbook;
	}

}
