package com.example.api.responses;

import com.example.api.models.School;
import com.example.api.models.Question;
import com.example.api.models.User;
import com.example.api.models.PersonalProgress;
import com.example.api.repositories.PersonalProgressRepository;
import com.example.api.repositories.QuestionRepository;
import com.example.api.repositories.SchoolRepository;
import com.example.api.repositories.UserRepository;
import com.example.api.responses.OptionContract;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ReasonService {
    @Autowired
    UserRepository userRepository;
    @Autowired
    QuestionRepository questionRepository;
    @Autowired
    PersonalProgressRepository personalProgressRepository;
    @Autowired
    SchoolRepository schoolsRepository;

    //create

    public void addUser(User user) {
            userRepository.save(user);
    }

    public void addSchool(School school) {
        schoolsRepository.save(school);
    }

    //read

    public User getUserByID(long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("User Not Found"));
    }

    public List<Option> getSchools() {
        return getFormOptions(schoolsRepository.findAll());
    }

    public PersonalProgess getPersonalProgressByUserID(long id) {
        return personalProgressRepository.findByUserId(userId)
                .orElseThrow(() -> new NotFoundException("Personal Progress Not Found"));
    }

    // HELPER
    private List<Option> getFormOptions(List<? extends OptionContract> options) {
        return options
                .stream()
                .distinct()
                .map(option -> new Option(option.getId(), option.getName()))
                .collect(Collectors.toList());
    }

}
