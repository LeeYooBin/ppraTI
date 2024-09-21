package com.example;

public class TextEditor {
  private final UndoRedoManager undoRedoManager;
  private StringBuilder text;

  public TextEditor() {
    this.undoRedoManager = new UndoRedoManager();
    this.text = new StringBuilder();
  }

  public void insertText(String textToInsert) {
    undoRedoManager.addAction(new Action(textToInsert, Action.ActionType.INSERT));
    text.append(textToInsert);
  }

  public void deleteText(int length) {
    if (length > text.length()) length = text.length();
    String deletedText = text.substring(text.length() - length);
    undoRedoManager.addAction(new Action(deletedText, Action.ActionType.DELETE));
    text.delete(text.length() - length, text.length());
  }

  public void undo() {
    Action action = undoRedoManager.undo();
    if (action != null) {
      if (action.getType() == Action.ActionType.INSERT) {
        text.delete(text.length() - action.getText().length(), text.length());
      } else if (action.getType() == Action.ActionType.DELETE) {
        text.append(action.getText());
      }
    }
  }

  public void redo() {
    Action action = undoRedoManager.redo();
    if (action != null) {
      if (action.getType() == Action.ActionType.INSERT) {
        text.append(action.getText());
      } else if (action.getType() == Action.ActionType.DELETE) {
        text.delete(text.length() - action.getText().length(), text.length());
      }
    }
  }

  public String getText() {
    return text.toString();
  }
}
