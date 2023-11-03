package com.wwcode.textbookquizmaker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan("com.wwwcode.textbookquizmaker.entity")
public class TextbookquizmakerApplication {

	public static void main(String[] args) {
		SpringApplication.run(TextbookquizmakerApplication.class, args);
	}

}
