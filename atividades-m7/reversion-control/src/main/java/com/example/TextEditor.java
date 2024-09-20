package com.example;

public class TextEditor {
  private final UndoManager undoManager;
  private StringBuilder text;

  public TextEditor() {
    this.undoManager = new UndoManager();
    this.text = new StringBuilder();
  }

  public void insertText(String textToInsert) {
    undoManager.addAction(new Action(textToInsert, Action.ActionType.INSERT));
    text.append(textToInsert);
  }

  public void deleteText(int length) {
    if (length > text.length()) length = text.length();
    String deletedText = text.substring(text.length() - length);
    undoManager.addAction(new Action(deletedText, Action.ActionType.DELETE));
    text.delete(text.length() - length, text.length());
  }

  public void undo() {
    Action action = undoManager.undo();
    if (action != null) {
      if (action.getType() == Action.ActionType.INSERT) {
        text.delete(text.length() - action.getText().length(), text.length());
      } else if (action.getType() == Action.ActionType.DELETE) {
        text.append(action.getText());
      }
    }
  }

  public String getText() {
    return text.toString();
  }
}
