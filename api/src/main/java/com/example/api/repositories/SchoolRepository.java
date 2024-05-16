package com.example.api.repositories;

import com.example.api.models.School;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface SchoolRepository extends JpaRepository<School, Long> {

    @Query(value= "SELECT * FROM users", nativeQuery = true)
    List<School> getAllSchools();
}