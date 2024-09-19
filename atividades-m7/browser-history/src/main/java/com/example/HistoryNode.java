package com.example;

class HistoryNode {
  String url;
  HistoryNode next;

  public HistoryNode(String url) {
    this.url = url;
    this.next = null;
  }
}
