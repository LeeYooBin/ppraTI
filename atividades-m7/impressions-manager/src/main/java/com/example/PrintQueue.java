package com.example;

public class PrintQueue {
  private PrintJobNode front;
  private PrintJobNode rear;
  private int jobCounter = 1;

  private static class PrintJobNode {
    PrintJob job;
    PrintJobNode next;

    PrintJobNode(PrintJob job) {
      this.job = job;
    }
  }

  public void addPrintJob(String fileName) {
    PrintJob newJob = new PrintJob(fileName, jobCounter++);
    PrintJobNode newNode = new PrintJobNode(newJob);
    if (rear == null) {
      front = rear = newNode;
    } else {
      rear.next = newNode;
      rear = newNode;
    }
    System.out.println(newJob + " adicionado à fila de impressão.");
  }

  public void processNextJob() {
    if (front == null) {
      System.out.println("Não há trabalhos de impressão na fila.");
      return;
    }
    System.out.println("Processando " + front.job);
    front = front.next;
    if (front == null) {
      rear = null;
    }
  }

  public void showPrintQueue() {
    if (front == null) {
      System.out.println("Fila de impressão vazia.");
      return;
    }
    System.out.println("Trabalhos de impressão na fila:");
    PrintJobNode current = front;
    while (current != null) {
      System.out.println(current.job);
      current = current.next;
    }
  }
}
