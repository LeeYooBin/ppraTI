package com.example;

class BrowserHistory {
  private final int maxSize;
  private HistoryNode head;
  private int size;

  public BrowserHistory(int maxSize) {
    this.maxSize = maxSize;
    this.size = 0;
  }

  public void addUrl(String url) {
    HistoryNode newNode = new HistoryNode(url);
    if (head == null) {
      head = newNode;
    } else {
      HistoryNode current = head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = newNode;
    }
    size++;

    if (size > maxSize) {
      removeOldestUrl();
    }

    System.out.println("URL adicionada: " + url);
  }

  private void removeOldestUrl() {
    if (head != null) {
      head = head.next;
      size--;
      System.out.println("URL mais antiga removida automaticamente.");
    }
  }

  public void showHistory() {
    if (head == null) {
      System.out.println("Nenhuma URL no histórico.");
      return;
    }

    HistoryNode current = head;
    System.out.println("\nHistórico de navegação:");
    while (current != null) {
      System.out.println("- " + current.url);
      current = current.next;
    }
  }

  public void clearHistory() {
    head = null;
    size = 0;
    System.out.println("Histórico limpo.");
  }
}
