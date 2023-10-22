package com.wwwcode.textbookquizmaker.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wwwcode.textbookquizmaker.entity.QuizQuestion;
import com.wwwcode.textbookquizmaker.repository.QuizQuestionRepository;

@RestController
@RequestMapping("/api")
public class QuizQuestionController {

    @Autowired
    private QuizQuestionRepository quizQuestionRepository;

    @PostMapping("/compareSentences")
    public ResponseEntity<List<String>> compareSentences(@RequestBody List<String> highlightedSentences) {
        List<String> associatedQuestions = new ArrayList<>();

        for (String sentence : highlightedSentences) {
            // Query the database for the matching sentence
            QuizQuestion question = quizQuestionRepository.findByFullSentence(sentence);

            if (question != null) {
                // If a matching sentence is found, add the associated question to the list
                associatedQuestions.add(question.getQuiz_question());
            }
        }

        if (!associatedQuestions.isEmpty()) {
            return ResponseEntity.ok(associatedQuestions);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

