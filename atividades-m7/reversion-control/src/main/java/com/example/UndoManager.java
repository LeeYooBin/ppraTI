package com.example;

public class UndoManager {
  private ActionNode head;
  private ActionNode tail;

  public UndoManager() {
    this.head = null;
    this.tail = null;
  }

  public void addAction(Action action) {
    ActionNode newNode = new ActionNode(action);
    if (tail == null) {
      head = newNode;
      tail = newNode;
    } else {
      tail.setNext(newNode);
      tail = newNode;
    }
  }

  public Action undo() {
    if (head == null) {
      System.out.println("Nenhuma ação para desfazer.");
      return null;
    }

    ActionNode current = head;
    if (current == tail) {
      head = tail = null;
    } else {
      while (current.getNext() != tail) {
        current = current.getNext();
      }
      current.setNext(null);
      tail = current;
    }

    return tail.getAction();
  }
}
