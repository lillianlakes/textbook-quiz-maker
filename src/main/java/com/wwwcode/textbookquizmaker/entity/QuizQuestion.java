package com.wwwcode.textbookquizmaker.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "quiz_question")
public class QuizQuestion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int quiz_question_id;

    @ManyToOne
    @JoinColumn(name = "textbook_id")
    private int textbook_id;
    private String highlighted_text;
    private String full_sentence;
    private String quiz_question;

    // Constructors, getters, and setters

    // Default constructor
    public QuizQuestion() {
    }

    public QuizQuestion(int textbook_id, String highlighted_text, String full_sentence, String quiz_question) {
        this.textbook_id = textbook_id;
        this.highlighted_text = highlighted_text;
        this.full_sentence = full_sentence;
        this.quiz_question = quiz_question;
    }

    // Getters and setters for fields

    public int getId() {
        return quiz_question_id;
    }

    public void setId(int quiz_question_id) {
        this.quiz_question_id = quiz_question_id;
    }

    public int getTextbookId() {
        return textbook_id;
    }

    public void setTextbookId(int textbook_id) {
        this.textbook_id = textbook_id;
    }

    public String getHighlightedText() {
        return highlighted_text;
    }

    public void setHighlightedText(String highlighted_text) {
        this.highlighted_text = highlighted_text;
    }

    public String getFullSentence() {
        return full_sentence;
    }

    public void setFullSentence(String full_sentence) {
        this.full_sentence = full_sentence;
    }

    public String getQuizQuestion() {
        return quiz_question;
    }

    public void setQuizQuestion(String quiz_question) {
        this.quiz_question = quiz_question;
    }
    
    
}
