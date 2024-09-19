package com.example;

public class Main {
  public static void main(String[] args) {
    BrowserHistory browserHistory = new BrowserHistory(5);
    View view = new View(browserHistory);
    view.init();
  }
}