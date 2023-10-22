package com.wwwcode.textbookquizmaker.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "textbook")
public class TextBook {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int textbook_id;
    private String title;
    private String author;
    private String subject;
    private String epub_link;
    
	public int getTextBookId() {
		return textbook_id;
	}
	public void setTextBookId(int textbook_id) {
		this.textbook_id = textbook_id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getEpubLink() {
		return epub_link;
	}
	public void setEpubLink(String epub_link) {
		this.epub_link = epub_link;
	}
	public TextBook() {
		super();
		// TODO Auto-generated constructor stub
	}
	public TextBook(int textbook_id, String title, String author, String subject, String epub_link) {
		super();
		this.textbook_id = textbook_id;
		this.title = title;
		this.author = author;
		this.subject = subject;
		this.epub_link = epub_link;
	}
    
}
