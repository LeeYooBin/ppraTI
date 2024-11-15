package com.example.atividade_15.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.atividade_15.model.Course;
import com.example.atividade_15.model.Student;
import com.example.atividade_15.repository.CourseRepository;
import com.example.atividade_15.repository.StudentRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class CourseService {
  private final CourseRepository courseRepository;
  private final StudentRepository studentRepository;

  public CourseService(CourseRepository courseRepository, StudentRepository studentRepository) {
    this.courseRepository = courseRepository;
    this.studentRepository = studentRepository;
  }

  public Course saveCourse(Course course) {
    return courseRepository.save(course);
  }

  public List<Student> listStudentsOfCourse(Long courseId) {
    Course course = courseRepository.findById(courseId)
      .orElseThrow(() -> new EntityNotFoundException("Course not found"));

    return List.copyOf(course.getStudents());
  }
}
