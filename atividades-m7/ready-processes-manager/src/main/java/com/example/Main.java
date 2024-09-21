package com.example;

import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    ProcessQueue processQueue = new ProcessQueue();

    while (true) {
      clearScreen();
      System.out.println("\n--- Sistema de Gerenciamento de Processos ---");
      System.out.println("1. Adicionar Processo");
      System.out.println("2. Executar Próximo Processo");
      System.out.println("3. Mostrar Fila de Processos");
      System.out.println("4. Sair");
      System.out.print("Escolha uma opção: ");
      String option = scanner.nextLine();

      switch (option) {
        case "1":
          System.out.print("Digite o nome do processo: ");
          String processName = scanner.nextLine();
          processQueue.addProcess(processName);
          break;
        case "2":
          processQueue.executeNextProcess();
          pressEnterToContinue(scanner);
          break;
        case "3":
          processQueue.showProcessQueue();
          pressEnterToContinue(scanner);
          break;
        case "4":
          System.out.println("Encerrando o sistema de gerenciamento de processos...");
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