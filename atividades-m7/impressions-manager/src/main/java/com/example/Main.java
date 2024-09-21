package com.example;

import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    PrintQueue printQueue = new PrintQueue();

    while (true) {
      clearScreen();
      System.out.println("\n--- Sistema de Gerenciamento de Impressões ---");
      System.out.println("1. Adicionar Trabalho de Impressão");
      System.out.println("2. Processar Próximo Trabalho");
      System.out.println("3. Mostrar Fila de Impressão");
      System.out.println("4. Sair");
      System.out.print("Escolha uma opção: ");
      String option = scanner.nextLine();

      switch (option) {
        case "1":
          System.out.print("Digite o nome do arquivo para imprimir: ");
          String fileName = scanner.nextLine();
          printQueue.addPrintJob(fileName);
          break;
        case "2":
          printQueue.processNextJob();
          break;
        case "3":
          printQueue.showPrintQueue();
          pressEnterToContinue(scanner);
          break;
        case "4":
          System.out.println("Encerrando o sistema de gerenciamento de impressões...");
          return;
        default:
          System.out.println("Opção inválida. Tente novamente.");
          pressEnterToContinue(scanner);
      }
    }
  }

  private static void pressEnterToContinue(Scanner scanner) {
    System.out.println("\nPressione Enter para continuar...");
    scanner.nextLine();
  }

  private static void clearScreen() {
    System.out.print("\033[H\033[2J");
    System.out.flush();
  }
}