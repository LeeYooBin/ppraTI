package com.example;

public class Main {
  public static void main(String[] args) {
    TaskManager taskManager = new TaskManager();
    View view = new View(taskManager);

    view.init();
  }
}