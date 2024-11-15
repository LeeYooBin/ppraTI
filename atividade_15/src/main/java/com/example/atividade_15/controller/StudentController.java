package com.example.atividade_15.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.atividade_15.model.Course;
import com.example.atividade_15.model.Student;
import com.example.atividade_15.service.StudentService;

@RestController
@RequestMapping("/students")
public class StudentController {
  private final StudentService studentService;

  public StudentController(StudentService studentService) {
    this.studentService = studentService;
  }

  @PostMapping
  public ResponseEntity<Student> createStudent(@RequestBody Student student) {
    return ResponseEntity.ok(studentService.saveStudent(student));
  }

  @PostMapping("/{id}/courses/{courseId}")
  public ResponseEntity<Void> enrollStudent(@PathVariable Long id, @PathVariable Long courseId) {
    studentService.enroll(id, courseId);
    return ResponseEntity.ok().build();
  }

  @DeleteMapping("/{id}/courses/{courseId}")
  public ResponseEntity<Void> removeEnrollment(@PathVariable Long id, @PathVariable Long courseId) {
    studentService.removeEnrollment(id, courseId);
    return ResponseEntity.ok().build();
  }

  @GetMapping("/{id}/courses")
  public ResponseEntity<List<Course>> listCourses(@PathVariable Long id) {
    return ResponseEntity.ok(studentService.listCoursesOfStudent(id));
  }
}
