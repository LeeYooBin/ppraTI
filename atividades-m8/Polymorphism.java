public class Polymorphism {
  // 5. Polimorfismo com Interfaces
  public interface IMeansOfTransport {
    void accelerate();
    void brake();
  }

  public static class Car implements IMeansOfTransport {
    @Override
    public void accelerate() {
      System.out.println("Acelerando o carro...");
    }

    @Override
    public void brake() {
     System.out.println("Freando o carro...");
    }
  }

  public static class Bike implements IMeansOfTransport {
    @Override
    public void accelerate() {
      System.out.println("Acelerando a bicicleta...");
    }

    @Override
    public void brake() {
     System.out.println("Freando a bicicleta...");
    }
  }

  public static class Train implements IMeansOfTransport {
    @Override
    public void accelerate() {
      System.out.println("Acelerando o trem...");
    }

    @Override
    public void brake() {
     System.out.println("Freando o trem...");
    }
  }


  // 6. Polimorfismo com Classes Abstratas
  public static abstract class Animal {
    public void makeSound() {
      System.out.println("making some animal sound...");
    }
  }

  public static class Dog extends Animal {
    @Override
    public void makeSound() {
      System.out.println("Barking...");
    }
  }

  public static class Cat extends Animal {
    @Override
    public void makeSound() {
      System.out.println("Meovv...");
    }
  }

  public static class Cow extends Animal {
    @Override
    public void makeSound() {
      System.out.println("Muuuuuuuuu...");
    }
  }

  // main
  public static void main(String[] args) {
    // Meios de transportes iteração
    IMeansOfTransport[] transports = new IMeansOfTransport[] {
      new Car(),
      new Bike(),
      new Train()
    };

    for (IMeansOfTransport transport : transports) {
      transport.accelerate();
      transport.brake();
      System.out.println();
    }

    System.out.println();

    // Animais Iteração
    Animal[] animals = new Animal[] {
      new Dog(),
      new Cat(),
      new Cow()
    };

    for (Animal animal : animals) {
      animal.makeSound();
      System.out.println();
    }
  }
}
