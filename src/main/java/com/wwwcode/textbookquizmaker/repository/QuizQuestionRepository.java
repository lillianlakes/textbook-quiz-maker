package com.wwwcode.textbookquizmaker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.wwwcode.textbookquizmaker.entity.QuizQuestion;

@Repository
public interface QuizQuestionRepository extends JpaRepository<QuizQuestion, Integer> {
    // You can define custom query methods here if needed.
	
	QuizQuestion findByFullSentence(String full_sentence);

}
