package com.example.api.repositories;

import com.example.api.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.Table;

@Table(name = "users")
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
