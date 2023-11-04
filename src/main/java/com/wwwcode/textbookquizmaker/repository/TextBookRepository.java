package com.wwwcode.textbookquizmaker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.wwwcode.textbookquizmaker.entity.TextBook;

public interface TextBookRepository extends JpaRepository<TextBook, Integer> {
    // You can add custom query methods here if needed
}

