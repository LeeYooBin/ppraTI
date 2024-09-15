class TaskManager {
  private TaskNode head;

  public void addTask(String description) {
    TaskNode newTask = new TaskNode(description);
    if (head == null) {
      head = newTask;
    } else {
      TaskNode current = head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = newTask;
    }
    System.out.println("Tarefa adicionada: " + description);
  }

  public void removeTask(String description) {
    if (head == null) {
      System.out.println("Nenhuma tarefa para remover.");
      return;
    }

    if (head.description.equals(description)) {
      head = head.next;
      System.out.println("Tarefa removida: " + description);
      return;
    }

    TaskNode current = head;
    while (current.next != null && !current.next.description.equals(description)) {
      current = current.next;
    }

    if (current.next != null) {
      current.next = current.next.next;
      System.out.println("Tarefa removida: " + description);
    } else {
      System.out.println("Tarefa não encontrada: " + description);
    }
  }

  public void markTaskAsCompleted(String description) {
    TaskNode current = head;
    while (current != null && !current.description.equals(description)) {
      current = current.next;
    }

    if (current != null) {
      current.markAsCompleted();
      System.out.println("Tarefa marcada como concluída: " + description);
    } else {
      System.out.println("Tarefa não encontrada: " + description);
    }
  }

  public void showTasks() {
    System.out.println();
    if (head == null) {
      System.out.println("Nenhuma tarefa disponível.");
      return;
    }

    TaskNode current = head;
    while (current != null) {
      System.out.println(current);
      current = current.next;
    }
}
}