
package com.example.api.repositories;

import com.example.api.models.AttemptedQuestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.persistence.Table;
import java.util.List;

    @Table(name = "attemptedQuestions")
    @Repository
    public interface AttemptedQuestionRepository extends JpaRepository<AttemptedQuestion, Long> {

        // READ

        //Get the number of attempts made for a specific question:
        @Query(value = "SELECT COUNT(*) FROM attemptedQuestions WHERE questionId = :questionId")
        int countAttemptsByQuestionId(@Param("questionId") int questionId);

        //Get the number of questions attempted by a specific user:
        @Query(value = "SELECT COUNT(DISTINCT questionId) FROM attemptedQuestions WHERE userId = :userId")
        int countQuestionsAttemptedByUserId(@Param("userId") long userId);

        //Get the number of correct attempts made by a specific user:
        @Query(value = "SELECT COUNT(*) FROM attemptedQuestions WHERE userId = :userId AND isCorrect = true")
        int countCorrectAttemptsByUserId(@Param("userId") long userId);

        //query for retrieving the top 5 most attempted questions
        @Query(value = "SELECT questionId, COUNT(*) AS attempts FROM AttemptedQuestion GROUP BY questionId ORDER BY attempts DESC LIMIT 5", nativeQuery = true)
        List<Object[]> findTop5MostAttemptedQuestions();

        //Top 5 users with the most correct attempts
        @Query(value = "SELECT userId, COUNT(*) AS correctAttempts FROM AttemptedQuestion WHERE isCorrect = true GROUP BY userId ORDER BY correctAttempts DESC LIMIT 5", nativeQuery = true)
        List<Object[]> findTop5UsersWithMostCorrectAttempts();



        @Query(value = "SELECT DISTINCT id FROM attemptedQuestions ORDER BY id", nativeQuery = true)
        List<Long> getDistinctIds();

}

    //By placing these queries in the repository interface,
    //it makes them accessible to the service layer for executing database operations.
    // This approach adheres to the principle of encapsulating data access logic within the repository layer,
    // keeping the service layer focused on business logic.
