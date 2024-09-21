package com.example;

public class ProcessQueue {
  private ProcessNode front;
  private ProcessNode rear;
  private int processCounter = 1;

  private static class ProcessNode {
    Process process;
    ProcessNode next;

    ProcessNode(Process process) {
      this.process = process;
    }
  }

  public void addProcess(String processName) {
    Process newProcess = new Process(processCounter++, processName);
    ProcessNode newNode = new ProcessNode(newProcess);
    if (rear == null) {
      front = rear = newNode;
    } else {
      rear.next = newNode;
      rear = newNode;
    }
    System.out.println(newProcess + " adicionado à fila de processos.");
  }

  public void executeNextProcess() {
    if (front == null) {
      System.out.println("Não há processos na fila.");
      return;
    }
    System.out.println("Executando " + front.process);
    front = front.next;
    if (front == null) {
      rear = null;
    }
  }

  public void showProcessQueue() {
    if (front == null) {
      System.out.println("Fila de processos vazia.");
      return;
    }
    System.out.println("Processos na fila:");
    ProcessNode current = front;
    while (current != null) {
      System.out.println(current.process);
      current = current.next;
    }
  }
}
