import java.util.Scanner;

class View {
  private final TaskManager taskManager;
  private final Scanner scanner;

  public View(TaskManager taskManager) {
    this.taskManager = taskManager;
    this.scanner = new Scanner(System.in);
  }

  public void init() {
    int option;
    while (true) {
      clearScreen();
      showMenu();
      option = getValidIntegerInput();

      if (option == 5) {
        clearScreen();
        System.out.println("Programa Encerrado.");
        break;
      }

      clearScreen();
      handleOption(option);
    }
  }

  private void showMenu() {
    System.out.println("\n--- Gerenciador de Tarefas ---");
    System.out.println("1. Adicionar Tarefa");
    System.out.println("2. Remover Tarefa");
    System.out.println("3. Marcar Tarefa como Concluída");
    System.out.println("4. Mostrar Tarefas");
    System.out.println("5. Sair");
    System.out.print("Escolha uma opção: ");
  }

  private void handleOption(int option) {
    switch (option) {
      case 1 -> addTask();
      case 2 -> removeTask();
      case 3 -> markTaskAsCompleted();
      case 4 -> taskManager.showTasks();
      default -> System.out.println("\nOpção inválida.");
    }
    pressEnterToContinue();
  }

  private void addTask() {
    System.out.print("Digite a descrição da tarefa: ");
    String description = scanner.nextLine().trim();
    
    if (!description.isEmpty()) {
      taskManager.addTask(description);
    } else {
      System.out.println("A descrição da tarefa não pode ser vazia.");
    }
  }

  private void removeTask() {
    System.out.print("Digite a descrição da tarefa que deseja remover: ");
    String description = scanner.nextLine().trim();
    
    if (!description.isEmpty()) {
      taskManager.removeTask(description);
    } else {
      System.out.println("A descrição da tarefa não pode ser vazia.");
    }
  }

  private void markTaskAsCompleted() {
    System.out.print("Digite a descrição da tarefa que deseja marcar como concluída: ");
    String description = scanner.nextLine().trim();
    
    if (!description.isEmpty()) {
      taskManager.markTaskAsCompleted(description);
    } else {
      System.out.println("A descrição da tarefa não pode ser vazia.");
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

