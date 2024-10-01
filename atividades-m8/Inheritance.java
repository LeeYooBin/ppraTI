// 3. Criação de uma Hierarquia de Classes
// 4. Sobrescrita de Métodos
public class Inheritance {
  public static class Employee {
    protected String name;
    protected Double salary;

    public Employee() {}

    public Employee(String name, Double salary) {
      this.name = name;
      this.salary = salary;
    }

    public void work() {
      System.out.println("Working...");
    }

    public String getName() {
      return name;
    }

    public Double getSalary() {
      return salary;
    }

    public void setName(String name) {
      this.name = name;
    }

    public void setSalary(Double salary) {
      this.salary = salary;
    }
  }

  public static class Manager extends Employee {
    public Manager() {}

    public Manager(String name, Double salary) {
      super(name, salary);
    }

    public void calculateBonus() {
      setSalary(getSalary() + getSalary() * 0.2);
    }

    @Override
    public void work() {
      System.out.println("Managing...");
    }
  }

  public static class Developer extends Employee {
    public Developer() {}

    public Developer(String name, Double salary) {
      super(name, salary);
    }

    public void calculateBonus() {
      setSalary(getSalary() + getSalary() * 0.1);
    }

    @Override
    public void work() {
      System.out.println("Developing...");
    }
  }

  // main
  public static void main(String[] args) {
    var manager = new Manager("Alice", 5000.0);
    var developer = new Developer("Bob", 3000.0);

    System.out.println(manager.getName() + " - Salário antes do bônus: " + manager.getSalary());
    manager.calculateBonus();
    System.out.println(manager.getName() + " - Salário após o bônus: " + manager.getSalary());
    manager.work();

    System.out.println(developer.getName() + " - Salário antes do bônus: " + developer.getSalary());
    developer.calculateBonus();
    System.out.println(developer.getName() + " - Salário após o bônus: " + developer.getSalary());
    developer.work();
  }
}
