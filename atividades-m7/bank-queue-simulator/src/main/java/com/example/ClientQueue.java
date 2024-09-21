package com.example;

public class ClientQueue {
  private ClientNode front;
  private ClientNode rear;
  private int clientIdCounter = 1;

  private static class ClientNode {
    Client client;
    ClientNode next;

    ClientNode(Client client) {
      this.client = client;
    }
  }

  public void addClient(String name) {
    Client newClient = new Client(name, clientIdCounter++);
    ClientNode newNode = new ClientNode(newClient);
    if (rear == null) {
      front = rear = newNode;
    } else {
      rear.next = newNode;
      rear = newNode;
    }
    System.out.println(newClient + " adicionado à fila.");
  }

  public void callNextClient() {
    if (front == null) {
      System.out.println("Não há clientes na fila.");
      return;
    }
    System.out.println("Chamando " + front.client);
    front = front.next;
    if (front == null) {
      rear = null;
    }
  }

  public void showQueue() {
    if (front == null) {
      System.out.println("Fila vazia.");
      return;
    }
    System.out.println("Clientes na fila:");
    ClientNode current = front;
    while (current != null) {
      System.out.println(current.client);
      current = current.next;
    }
  }
}
