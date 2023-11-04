package com.wwwcode.textbookquizmaker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.wwwcode.textbookquizmaker.entity.Quiz;

@Repository
public interface QuizRepository extends JpaRepository<Quiz, Integer> {
    // You can define custom query methods here if needed.
}
