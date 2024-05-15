package com.example.api.responses;

import com.example.api.models.AttemptedQuestion;
import com.example.api.models.Question;
import com.example.api.models.School;
import com.example.api.models.User;
import com.example.api.repositories.AttemptedQuestionRepository;
import com.example.api.repositories.QuestionRepository;
import com.example.api.repositories.SchoolRepository;
import com.example.api.repositories.UserRepository;
//import com.example.api.responses.Option;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
//import java.util.stream.Collectors;

@Service
public class ReasonService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    QuestionRepository questionRepository;
    @Autowired
    SchoolRepository schoolsRepository;
    @Autowired
    AttemptedQuestionRepository attemptedQuestionRepository;

    //create

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public Question addQuestion(Question question) {
        return questionRepository.save(question);
    }


    public School addSchool(School school) {
        return schoolsRepository.save(school);
    }

    public AttemptedQuestion createAttemptedQuestion(AttemptedQuestion attemptedQuestion) {
        Question question = questionRepository.findById(attemptedQuestion.getQuestionId()).orElseThrow(() -> new NotFoundException("Question not found"));
        User user = userRepository.findById(attemptedQuestion.getUserId()).orElseThrow(() -> new NotFoundException("User not found"));

        AttemptedQuestion newAttemptedQuestion = attemptedQuestionRepository.save(attemptedQuestion);

        newAttemptedQuestion.setUser(user);
        newAttemptedQuestion.setQuestion(question);

        return newAttemptedQuestion;
    }

    //read
    public User getUserById(long id) {
        return userRepository.findById(id).orElseThrow(() -> new NotFoundException("User Not Found"));
    }

    public Question getQuestionById (long id) {
        return questionRepository.findById((int) id).orElseThrow(() -> new NotFoundException("Question Not Found"));
    }

    public Question getRandomQuestion() {
        return questionRepository.getRandomQuestion();
    }


    public List<Long> getQuestionIds() {
        return questionRepository.getDistinctIds();
    }

}





