package com.example;

import java.util.Scanner;

class View {
  private final BrowserHistory browserHistory;
  private final Scanner scanner;

  public View(BrowserHistory browserHistory) {
    this.browserHistory = browserHistory;
    this.scanner = new Scanner(System.in);
  }

  public void init() {
    int option;
    while (true) {
      clearScreen();
      showMenu();
      option = getValidIntegerInput();

      if (option == 4) {
        clearScreen();
        System.out.println("Programa Encerrado.");
        break;
      }

      clearScreen();
      handleOption(option);
    }
  }

  private void showMenu() {
    System.out.println("\n--- Histórico de Navegação ---");
    System.out.println("1. Adicionar nova URL");
    System.out.println("2. Ver histórico");
    System.out.println("3. Limpar histórico");
    System.out.println("4. Sair");
    System.out.print("Escolha uma opção: ");
  }

  private void handleOption(int option) {
    switch (option) {
      case 1 -> addUrl();
      case 2 -> browserHistory.showHistory();
      case 3 -> browserHistory.clearHistory();
      default -> System.out.println("\nOpção inválida.");
    }
    pressEnterToContinue();
  }

  private void addUrl() {
    System.out.print("Digite a URL para adicionar: ");
    String url = scanner.nextLine().trim();
    
    if (!url.isEmpty()) {
      browserHistory.addUrl(url);
    } else {
      System.out.println("A URL não pode ser vazia.");
    }
  }

  private int getValidIntegerInput() {
    while (true) {
      try {
        return Integer.parseInt(scanner.nextLine());
      } catch (NumberFormatException e) {
        System.out.print("Entrada inválida. Digite um número: ");
      }
    }
  }

  private void clearScreen() {
    System.out.print("\033[H\033[2J");
    System.out.flush();
  }

  private void pressEnterToContinue() {
    System.out.println("\nPressione Enter para continuar...");
    scanner.nextLine();
  }
}