package com.example.api.responses;

import com.example.api.models.School;
import com.example.api.repositories.PersonalProgressRepository;
import com.example.api.repositories.QuestionRepository;
import com.example.api.repositories.UserRepository;
import com.example.api.repositories.SchoolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReasonService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    QuestionRepository questionRepository;
    @Autowired
    PersonalProgressRepository personalProgressRepository;
    @Autowired
    SchoolsRepository schoolsRepository;

    //create

    public void addUser(User user) {
            userRepository.save(user);
    }

    public void addSchool(School school) {
        schoolRepository.save(school);
    }

    //read



}
