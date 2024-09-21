package com.example;

public class ActionNode {
  private final Action action;
  private ActionNode next;
  private ActionNode prev;

  public ActionNode(Action action) {
    this.action = action;
    this.next = null;
    this.prev = null;
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

  public ActionNode getPrev() {
    return prev;
  }

  public void setPrev(ActionNode prev) {
    this.prev = prev;
  }
}

