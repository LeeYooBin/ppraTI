package com.example.atividade_15.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.atividade_15.model.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {
  Optional<Course> findByName(String name);
}
