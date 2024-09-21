package com.example;

import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    ClientQueue clientQueue = new ClientQueue();

    while (true) {
      clearScreen();
      System.out.println("\n--- Simulador de Fila de Atendimento ---");
      System.out.println("1. Adicionar Cliente à Fila");
      System.out.println("2. Chamar Próximo Cliente");
      System.out.println("3. Mostrar Fila");
      System.out.println("4. Sair");
      System.out.print("Escolha uma opção: ");
      String option = scanner.nextLine();

      switch (option) {
        case "1":
          System.out.print("Digite o nome do cliente: ");
          String name = scanner.nextLine();
          clientQueue.addClient(name);
          break;
        case "2":
          clientQueue.callNextClient();
          break;
        case "3":
          clientQueue.showQueue();
          pressEnterToContinue(scanner);
          break;
        case "4":
          System.out.println("Saindo do simulador...");
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