public class Abstraction {
  // 7. Abstração em um Sistema de Pagamentos
  public static abstract class PaymentMethod {
    abstract void processPayment();
    abstract void validatePayment();
  }

  public static class CreditCard extends PaymentMethod {
    @Override
    void processPayment() {
      System.out.println("Processando pagamento com Cartão de Crédito...");
    }

    @Override
    void validatePayment() {
      System.out.println("Validando Cartão de Crédito...");
      boolean isValid = true;
      if (isValid) {
        System.out.println("Cartão de Crédito validado com sucesso!");
      } else {
        System.out.println("Cartão de Crédito inválido!");
      }
    }
  }

  public static class BankSlip extends PaymentMethod {
    @Override
    void processPayment() {
      System.out.println("Processando pagamento com Boleto...");
    }

    @Override
    void validatePayment() {
      System.out.println("Validando Boleto...");
    
      boolean isValid = true;
      if (isValid) {
        System.out.println("Boleto validado com sucesso!");
      } else {
        System.out.println("Boleto inválido!");
      }
    }
  }

  public static class Pix extends PaymentMethod {
    @Override
    void processPayment() {
      System.out.println("Processando pagamento com Pix...");
    }

    @Override
    void validatePayment() {
      System.out.println("Validando Pix...");
      boolean isValid = true;
      if (isValid) {
        System.out.println("Pix validado com sucesso!");
      } else {
        System.out.println("Pix inválido!");
      }
    }
  }


  // 8. Sistema de Gestão de Funcionários
  public static abstract class Employee {
    protected String name;
    protected double baseSalary;

    public Employee(String name, double baseSalary) {
      this.name = name;
      this.baseSalary = baseSalary;
    }

    abstract double calculateSalary();
    abstract double calculateBonus();

    public String getName() {
      return name;
    }

    public void promote() {
      System.out.println(name + " foi promovido!");
    }
  }

  public static class Manager extends Employee {
    public Manager(String name, double baseSalary) {
    super(name, baseSalary);
    }

    @Override
    double calculateSalary() {
      return baseSalary * 1.2;
    }

    @Override
    double calculateBonus() {
      return baseSalary * 0.1;
    }
  }

  public static class Developer extends Employee {
    public Developer(String name, double baseSalary) {
      super(name, baseSalary);
    }

    @Override
    double calculateSalary() {
      return baseSalary;
    }

    @Override
    double calculateBonus() {
      return baseSalary * 0.05;
    }
  }

  public static class Intern extends Employee {
    public Intern(String name, double baseSalary) {
      super(name, baseSalary);
    }

    @Override
    double calculateSalary() {
      return baseSalary * 0.8;
    }

    @Override
    double calculateBonus() {
      return 0;
    }
  }

  public static void calculatePayroll(Employee[] employees) {
    double totalSalaries = 0;
    double totalBonuses = 0;

    for (Employee employee : employees) {
      double salary = employee.calculateSalary();
      double bonus = employee.calculateBonus();
      totalSalaries += salary;
      totalBonuses += bonus;

      System.out.printf("Funcionário: %s, Salário: %.2f, Bônus: %.2f%n", employee.getName(), salary, bonus);
    }

    System.out.printf("Total de Salários: %.2f, Total de Bônus: %.2f%n", totalSalaries, totalBonuses);
  }

  // main
  public static void main(String[] args) {
    // Sistema de Pagamentos
    PaymentMethod[] paymentMethods = new PaymentMethod[] {
      new CreditCard(),
      new BankSlip(),
      new Pix()
    };

    for (PaymentMethod paymentMethod : paymentMethods) {
      paymentMethod.validatePayment();
      paymentMethod.processPayment();
      System.out.println();
    }

    System.out.println();

    // Sistema de Gestão de Funcionários
    Employee[] employees = new Employee[] {
      new Manager("Alice", 5000),
      new Developer("Bob", 4000),
      new Intern("Charlie", 2000)
    };

    calculatePayroll(employees);
  }
}
