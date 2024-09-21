package com.example;

public class Action {
  private final String text;
  private final ActionType type;

  public enum ActionType {
    INSERT, DELETE
  }

  public Action(String text, ActionType type) {
    this.text = text;
    this.type = type;
  }

  public String getText() {
    return text;
  }

  public ActionType getType() {
    return type;
  }
}

