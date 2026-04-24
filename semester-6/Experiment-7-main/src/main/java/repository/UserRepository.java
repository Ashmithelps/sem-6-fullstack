package com.example.experiment7.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.experiment7.entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}