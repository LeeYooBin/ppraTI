package com.example;

public class UndoRedoManager {
  private ActionNode currentAction;

  public UndoRedoManager() {
    currentAction = null;
  }

  public void addAction(Action action) {
    ActionNode newNode = new ActionNode(action);

    if (currentAction == null) {
      currentAction = newNode;
    } else {
      newNode.setPrev(currentAction);
      currentAction.setNext(newNode);
      currentAction = newNode;
    }

    if (currentAction.getNext() != null) {
      currentAction.setNext(null);
    }
  }

  public Action undo() {
    if (currentAction == null || currentAction.getPrev() == null) {
      System.out.println("Nenhuma ação para desfazer.");
      return null;
    }

    Action actionToUndo = currentAction.getAction();
    currentAction = currentAction.getPrev();
    return actionToUndo;
  }

  public Action redo() {
    if (currentAction == null || currentAction.getNext() == null) {
      System.out.println("Nenhuma ação para refazer.");
      return null;
    }

    currentAction = currentAction.getNext();
    return currentAction.getAction();
  }
}
