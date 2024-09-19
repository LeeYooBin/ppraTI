package com.example;

class TaskNode {
  String description;
  boolean isCompleted;
  TaskNode next;

  public TaskNode(String description) {
    this.description = description;
    this.isCompleted = false;
    this.next = null;
  }

  public void markAsCompleted() {
    this.isCompleted = true;
  }

  @Override
  public String toString() {
    return description + (isCompleted ? " [Concluída]" : " [Pendente]");
  }
}
