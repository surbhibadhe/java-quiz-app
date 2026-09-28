package com.project.quizapp.Service;

import com.project.quizapp.Question;
import com.project.quizapp.dao.QuestionDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {

    @Autowired
    QuestionDao questionDao;

    public List<Question> getAllQuestion() {
        return questionDao.findAll();

    }
}
