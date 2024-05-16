package com.example.api;

//import com.example.api.responses.Option;

import com.example.api.models.Question;
import com.example.api.models.User;
import com.example.api.models.School;
import com.example.api.responses.ReasonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class ReasonController {

    @Autowired
    private ReasonService reasonService;

    @ExceptionHandler
    public ResponseEntity<String> handleExceptions(Exception exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }


    //CREATE

    @PostMapping("/user/register")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User newUser = reasonService.createUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(newUser);
    }

    // READ

//    @GetMapping("/questions")
//    public ResponseEntity<List<Question>> getGreetings(@RequestParam(required = false) String difficultyLevel, @RequestParam(defaultValue = "200") int limit) {
//
//        if (difficultyLevel != null) {
//            return ResponseEntity.status(HttpStatus.OK).body(reasonService.getQuestionByDifficultyLevel(difficultyLevel, limit));
//        }
//
//        return ResponseEntity.status(HttpStatus.OK).body(reasonService.getAllQuestions(limit));
//    }

    @GetMapping("/questions")
    public ResponseEntity<List<Question>> getQuestions(@RequestParam(required = false) String difficultyRating) {
        if (difficultyRating != null && !difficultyRating.isEmpty()) {
            // Filter questions by difficulty rating
            List<Question> filteredQuestions = reasonService.getQuestionsByDifficultyRating(difficultyRating);
            return ResponseEntity.status(HttpStatus.OK).body(filteredQuestions);
        } else {
            // Return all questions if no difficulty rating is specified
            List<Question> allQuestions = reasonService.getAllQuestions();
            return ResponseEntity.status(HttpStatus.OK).body(allQuestions);
        }
    }

//    @GetMapping("/questions")
//    public ResponseEntity<List<Question>> getQuestions() {
//        return ResponseEntity.status(HttpStatus.OK).body(reasonService.getQuestions());
//    }

    @GetMapping("/question/ids")
    public ResponseEntity<List<Long>> getQuestionIds() {
            return ResponseEntity.status(HttpStatus.OK).body(reasonService.getQuestionIds());
    }

    @GetMapping("/question/{id}/")
    public ResponseEntity<Question> getQuestionById(@PathVariable long id) {
            return ResponseEntity.status(HttpStatus.OK).body(reasonService.getQuestionById(id));
    }

    @GetMapping("/question/schools")
    public ResponseEntity<List<School>> getGreetingsCountries() {
        return ResponseEntity.status(HttpStatus.OK).body(reasonService.getSchools());
    }




}


//@PostMapping("/User/register")
//public ResponseEntity<?> createUser(@Valid @RequestBody User user, BindingResult result) {
//    // Check for validation errors
//    if (result.hasErrors()) {
//        // If validation errors exist, return a response with error details
//        List<String> errors = result.getFieldErrors()
//                .stream()
//                .map(DefaultMessageSourceResolvable::getDefaultMessage)
//                .collect(Collectors.toList());
//        return ResponseEntity.badRequest().body(errors);
//    }
//
//    // If input is valid, proceed with user creation
//    User newUser = reasonService.createUser(user);
//    return ResponseEntity.status(HttpStatus.CREATED).body(newUser);
//}