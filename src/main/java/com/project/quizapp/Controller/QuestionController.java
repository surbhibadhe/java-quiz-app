package com.project.quizapp.Controller;

import com.project.quizapp.model.Question;
import com.project.quizapp.Service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("question")
public class QuestionController {

    @Autowired
    QuestionService questionService;


    @GetMapping("/allQuestions")
    public ResponseEntity<List<Question>> getAllQuestions() {
        return questionService.getAllQuestion();
    }

    @GetMapping("/{id}")
    public Question getQuestionById(@PathVariable Integer id) {
        return questionService.findById(id);
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<List<Question>> getQuestionByCategory(@PathVariable String category) {
        return questionService.findByCategory(category);
    }

    @PostMapping("add")
    public ResponseEntity<String> addQuestion(@RequestBody Question question) {
        return questionService.addQuestion(question);
    }




}
