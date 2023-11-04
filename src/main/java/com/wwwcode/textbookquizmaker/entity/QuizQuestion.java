package com.wwwcode.textbookquizmaker.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "quiz_question")
public class QuizQuestion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int quiz_question_id;

    @ManyToOne
    @JoinColumn(name = "textbook_id")
    private TextBook textbook;

    @ManyToOne
    @JoinColumn(name = "quiz_id")
    private Quiz quiz;

    private String highlighted_ext;

    private String full_sentence;

    private String quiz_question;

	public int getQuiz_question_id() {
		return quiz_question_id;
	}

	public void setQuiz_question_id(int quiz_question_id) {
		this.quiz_question_id = quiz_question_id;
	}

	public TextBook getTextbook() {
		return textbook;
	}

	public void setTextbook(TextBook textbook) {
		this.textbook = textbook;
	}

	public Quiz getQuiz() {
		return quiz;
	}

	public void setQuiz(Quiz quiz) {
		this.quiz = quiz;
	}

	public String getHighlighted_ext() {
		return highlighted_ext;
	}

	public void setHighlighted_ext(String highlighted_ext) {
		this.highlighted_ext = highlighted_ext;
	}

	public String getFull_sentence() {
		return full_sentence;
	}

	public void setFull_sentence(String full_sentence) {
		this.full_sentence = full_sentence;
	}

	public String getQuiz_question() {
		return quiz_question;
	}

	public void setQuiz_question(String quiz_question) {
		this.quiz_question = quiz_question;
	}

	public QuizQuestion(int quiz_question_id, TextBook textbook, Quiz quiz, String highlighted_ext,
			String full_sentence, String quiz_question) {
		super();
		this.quiz_question_id = quiz_question_id;
		this.textbook = textbook;
		this.quiz = quiz;
		this.highlighted_ext = highlighted_ext;
		this.full_sentence = full_sentence;
		this.quiz_question = quiz_question;
	}
    
    
    
    
}
