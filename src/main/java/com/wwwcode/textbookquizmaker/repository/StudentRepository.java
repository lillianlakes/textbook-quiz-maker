package com.wwwcode.textbookquizmaker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.wwwcode.textbookquizmaker.entity.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {
    // You can define custom query methods here if needed.
}
