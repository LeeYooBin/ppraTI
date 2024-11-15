package com.example.atividade_15.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.atividade_15.model.Student;

import java.util.Optional;

public interface StudentRepository extends JpaRepository<Student, Long> {
  Optional<Student> findByEmail(String email);
}

