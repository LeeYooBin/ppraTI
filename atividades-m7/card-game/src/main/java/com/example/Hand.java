package com.example;

public class Hand {
  private CardNode head;
  private CardNode tail;

  private static class CardNode {
    Card card;
    CardNode next;
    CardNode prev;

    CardNode(Card card) {
      this.card = card;
    }
  }

  public void addCardToEnd(Card card) {
    CardNode newNode = new CardNode(card);
    if (tail == null) {
      head = tail = newNode;
    } else {
      tail.next = newNode;
      newNode.prev = tail;
      tail = newNode;
    }
    System.out.println("Carta adicionada: " + card);
  }

  public void removeCard(String value, String suit) {
    if (head == null) {
      System.out.println("Mão vazia. Não há cartas para remover.");
      return;
    }

    CardNode current = head;
    while (current != null) {
      if (current.card.getValue().equalsIgnoreCase(value) && current.card.getSuit().equalsIgnoreCase(suit)) {
        if (current == head) {
          head = head.next;
          if (head != null) head.prev = null;
        } else if (current == tail) {
          tail = tail.prev;
          if (tail != null) tail.next = null;
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
        System.out.println("Carta removida: " + current.card);
        return;
      }
      current = current.next;
    }
    System.out.println("Carta não encontrada.");
  }

  public void showHand() {
    if (head == null) {
      System.out.println("Mão vazia.");
      return;
    }
    System.out.println("Cartas na mão:");
    CardNode current = head;
    while (current != null) {
      System.out.println(current.card);
      current = current.next;
    }
  }

  public void moveCardToFront(String value, String suit) {
    CardNode current = head;
    while (current != null) {
      if (current.card.getValue().equalsIgnoreCase(value) && current.card.getSuit().equalsIgnoreCase(suit)) {
        if (current == head) {
          System.out.println("A carta já está na frente.");
          return;
        }
        if (current == tail) {
          tail = current.prev;
          tail.next = null;
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
        current.prev = null;
        current.next = head;
        head.prev = current;
        head = current;
        System.out.println("Carta movida para a frente: " + current.card);
        return;
      }
      current = current.next;
    }
    System.out.println("Carta não encontrada.");
  }
}
