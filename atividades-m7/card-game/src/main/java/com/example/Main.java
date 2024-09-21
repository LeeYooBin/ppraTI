package com.example;

import java.util.Scanner;

public class Main {

  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    Hand hand = new Hand();

    while (true) {
      clearScreen();
      System.out.println("\n--- Jogo de Cartas ---");
      System.out.println("1. Adicionar Carta à Mão");
      System.out.println("2. Remover Carta da Mão");
      System.out.println("3. Mostrar Cartas na Mão");
      System.out.println("4. Mover Carta para o Início");
      System.out.println("5. Sair");
      System.out.print("Escolha uma opção: ");
      String option = scanner.nextLine();

      switch (option) {
        case "1":
          System.out.print("Digite o valor da carta (Ex: Ás, 2, 3, ...): ");
          String value = scanner.nextLine();
          System.out.print("Digite o naipe da carta (Ex: Copas, Espadas, ...): ");
          String suit = scanner.nextLine();
          hand.addCardToEnd(new Card(suit, value));
          break;
        case "2":
          System.out.print("Digite o valor da carta a ser removida: ");
          String valueToRemove = scanner.nextLine();
          System.out.print("Digite o naipe da carta a ser removida: ");
          String suitToRemove = scanner.nextLine();
          hand.removeCard(valueToRemove, suitToRemove);
          break;
        case "3":
          hand.showHand();
          pressEnterToContinue(scanner);
          break;
        case "4":
          System.out.print("Digite o valor da carta a ser movida para a frente: ");
          String valueToMove = scanner.nextLine();
          System.out.print("Digite o naipe da carta a ser movida para a frente: ");
          String suitToMove = scanner.nextLine();
          hand.moveCardToFront(valueToMove, suitToMove);
          pressEnterToContinue(scanner);
          break;
        case "5":
          System.out.println("Saindo do jogo...");
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