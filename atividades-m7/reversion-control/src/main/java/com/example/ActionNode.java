package com.example;

public class ActionNode {
  private final Action action;
  private ActionNode next;

  public ActionNode(Action action) {
    this.action = action;
    this.next = null;
  }

  public Action getAction() {
    return action;
  }

  public ActionNode getNext() {
    return next;
  }

  public void setNext(ActionNode next) {
    this.next = next;
  }
}
