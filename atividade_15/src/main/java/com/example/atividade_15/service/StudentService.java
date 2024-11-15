package com.example.atividade_15.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.atividade_15.model.Course;
import com.example.atividade_15.model.Student;
import com.example.atividade_15.repository.CourseRepository;
import com.example.atividade_15.repository.StudentRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class StudentService {
  private final StudentRepository studentRepository;
  private final CourseRepository courseRepository;

  public StudentService(StudentRepository studentRepository, CourseRepository courseRepository) {
    this.studentRepository = studentRepository;
    this.courseRepository = courseRepository;
  }

  public Student saveStudent(Student student) {
    return studentRepository.save(student);
  }

  public void enroll(Long studentId, Long courseId) {
    Student student = studentRepository.findById(studentId)
      .orElseThrow(() -> new EntityNotFoundException("Student not found"));
    Course course = courseRepository.findById(courseId)
      .orElseThrow(() -> new EntityNotFoundException("Course not found"));

    student.getCourses().add(course);
    studentRepository.save(student);
  }

  public void removeEnrollment(Long studentId, Long courseId) {
    Student student = studentRepository.findById(studentId)
      .orElseThrow(() -> new EntityNotFoundException("Student not found"));
    Course course = courseRepository.findById(courseId)
      .orElseThrow(() -> new EntityNotFoundException("Course not found"));

    student.getCourses().remove(course);
    studentRepository.save(student);
  }

  public List<Course> listCoursesOfStudent(Long studentId) {
    Student student = studentRepository.findById(studentId)
      .orElseThrow(() -> new EntityNotFoundException("Student not found"));

    return List.copyOf(student.getCourses());
  }
}
