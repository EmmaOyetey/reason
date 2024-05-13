package com.example.api.responses;

import com.example.api.responses.Option;
import com.example.api.models.Question;
import com.example.api.models.User;
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

    @PostMapping("/User")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User newUser = reasonService.addUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(newUser);
    }

    @GetMappping("/question/ids")
    public ResponseEntity<List<Long>> getQuestionIds() {
            return ResponseEntity.status(HttpStatus.OK).body(reasonService.getQuestionIds());
        }

        @GetMapping("/question/{id}/")
        public ResponseEntity<Question> getQuestionById(@PathVariable long id) {
            return ResponseEntity.status(HttpStatus.OK).body(reasonService.getQuestionById(id));
        }



}
