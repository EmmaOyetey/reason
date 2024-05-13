package com.example.api.repositories;

import com.example.api.models.School;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.Table;

@Table(name = "schools")
@Repository
public interface SchoolRepository extends JpaRepository<School, Long> {
}