package com.example.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.Table;

@Table(name = "questions")
@Repository
public interface QuestionRepository extends JpaRepository<QuestionRepository, Integer> {
}
