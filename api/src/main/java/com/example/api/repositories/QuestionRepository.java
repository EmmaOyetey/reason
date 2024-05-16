package com.example.api.repositories;

import com.example.api.models.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface QuestionRepository extends JpaRepository<Question, Integer> {
    // READ
   // List<Question> getAllByOrderByDateCreatedDesc();

    List<Question> getAllByDifficultyRating(String difficultyRating);

    @Query(value = "SELECT DISTINCT id FROM questions ORDER BY id", nativeQuery = true)
    List<Long> getDistinctIds();

    @Query(value = "SELECT DISTINCT difficulty_rating FROM question", nativeQuery = true)
    List<String> getDistinctDifficultyLevel();

    //For selecting a random question with a specific difficulty rating:
    @Query(value = "SELECT * FROM questions WHERE difficulty_rating = ?1 ORDER BY RAND() LIMIT 1", nativeQuery = true)
    Question getRandomQuestionByDifficulty(String difficultyRating);

    //for generating 1 random question
    @Query(value = "SELECT * FROM questions ORDER BY RAND() LIMIT 1", nativeQuery = true)
    Question getRandomQuestion();

    //For generating a random set of questions (where n is the desired number of questions):
    @Query(value = "SELECT * FROM questions ORDER BY RAND() LIMIT ?1", nativeQuery = true)
    List<Question> getRandomQuestions(int n);
    


    @Query(value= "SELECT * FROM questions", nativeQuery = true)
    List<Question> getQuestions();

    @Query(value= "SELECT * FROM questions", nativeQuery = true)
    List<Question> getAllQuestions();

    @Query(value = "SELECT * FROM questions WHERE difficulty_rating = ?1 ORDER BY RAND()", nativeQuery = true)
    List<Question> getQuestionsByDifficultyRating();
}
