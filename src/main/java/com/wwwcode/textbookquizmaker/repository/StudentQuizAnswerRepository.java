package com.wwwcode.textbookquizmaker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.wwwcode.textbookquizmaker.entity.StudentQuizAnswer;

public interface StudentQuizAnswerRepository extends JpaRepository<StudentQuizAnswer, Integer> {
    // You can add custom query methods here if needed
}

