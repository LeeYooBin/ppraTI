package com.example;

import java.util.Scanner;

public class Main {

  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    TextEditor editor = new TextEditor();
    String input;

  while (true) {
      System.out.println("\nTexto atual: " + editor.getText());
      System.out.println("Opções:");
      System.out.println("1. Inserir texto");
      System.out.println("2. Deletar texto");
      System.out.println("3. Desfazer (Undo)");
      System.out.println("4. Refazer (Redo)");
      System.out.println("5. Sair");
      System.out.print("Escolha uma opção: ");
      
      input = scanner.nextLine();

      switch (input) {
          case "1":
            System.out.print("Digite o texto a ser inserido: ");
            String textToInsert = scanner.nextLine();
            editor.insertText(textToInsert);
            break;

          case "2":
            System.out.print("Digite o texto a ser deletado: ");
            String textToDelete = scanner.nextLine();
            editor.deleteText(textToDelete.length());
            break;

          case "3":
            editor.undo();
            break;

          case "4":
            editor.redo();
            break;

          case "5":
            System.out.println("Encerrando o editor...");
            scanner.close();
            return;

          default:
            System.out.println("Opção inválida. Tente novamente.");
      }
    }
  }
}