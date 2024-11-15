package com.example.atividade_15.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.atividade_15.model.Course;
import com.example.atividade_15.model.Student;
import com.example.atividade_15.service.CourseService;

import java.util.List;

@RestController
@RequestMapping("/courses")
public class CourseController {
  private final CourseService courseService;

  public CourseController(CourseService courseService) {
    this.courseService = courseService;
  }

  @PostMapping
  public ResponseEntity<Course> createCourse(@RequestBody Course course) {
    return ResponseEntity.ok(courseService.saveCourse(course));
  }

  @GetMapping("/{id}/students")
  public ResponseEntity<List<Student>> listStudents(@PathVariable Long id) {
    return ResponseEntity.ok(courseService.listStudentsOfCourse(id));
  }
}

