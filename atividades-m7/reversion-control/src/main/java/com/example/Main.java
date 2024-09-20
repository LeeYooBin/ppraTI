package com.example;

import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    TextEditor editor = new TextEditor();
    Scanner scanner = new Scanner(System.in);
    String command;

    while (true) {
      System.out.println("Texto atual: " + editor.getText());
      System.out.println("Comandos: ");
      System.out.println("1. Inserir texto");
      System.out.println("2. Deletar texto");
      System.out.println("3. Desfazer");
      System.out.println("4. Sair");
      System.out.print("Escolha um comando: ");
      command = scanner.nextLine();

      switch (command) {
        case "1":
          System.out.print("Digite o texto para inserir: ");
          String insertText = scanner.nextLine();
          editor.insertText(insertText);
          break;
        case "2":
          System.out.print("Digite o número de caracteres para deletar: ");
          int length = Integer.parseInt(scanner.nextLine());
          editor.deleteText(length);
          break;
        case "3":
          editor.undo();
          break;
        case "4":
          System.out.println("Saindo...");
          scanner.close();
          return;
        default:
          System.out.println("Comando inválido.");
          break;
      }
    }
  }
}