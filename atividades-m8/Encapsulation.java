public class Encapsulation {
  // 1. Criação de uma Classe Simples
  public static class Product {
    protected String name;
    protected Double price;
    protected Integer quantity;
  
    public Product() {}
  
    public Product(String name, Double price, Integer quantity) {
      setName(name);
      setPrice(price);
      setQuantity(quantity);
    }
  
    public String getName() {
      return name;
    }
  
    public void setName(String name) {
      if (name == null || name.trim().isEmpty()) {
        throw new IllegalArgumentException("Nome não pode ser vazio ou nulo");
      }
      this.name = name;
    }
  
    public Double getPrice() {
      return price;
    }
  
    public void setPrice(Double price) {
      if (price == null || price < 0) {
        throw new IllegalArgumentException("Preço não pode ser negativo ou nulo");
      }
      this.price = price;
    }
  
    public Integer getQuantity() {
      return quantity;
    }
  
    public void setQuantity(Integer quantity) {
      if (quantity == null || quantity < 0) {
        throw new IllegalArgumentException("Quantidade não pode ser negativa ou nula");
      }
      this.quantity = quantity;
    }
  }

  // 2. Melhorando a Classe com Validação
  public static class ProductWithDiscount extends Product {
    public ProductWithDiscount() {}
  
    public ProductWithDiscount(String name, Double price, Integer quantity) { 
      super(name, price, quantity);
    }
  
    public void applyDiscount(Double percentage) {
      if (percentage == null || percentage <= 0 || percentage > 50) {
        throw new IllegalArgumentException("Desconto inválido");
      }
      else {
        this.price -= this.price * percentage / 100;
      }
    }
  }

  // main
  public static void main(String[] args) {
    var product = new Product("Mouse", 50.0, 10);
    System.out.println("Produto: " + product.getName() + ", Preço: " + product.getPrice() + ", Quantidade: " + product.getQuantity());

    var discountedProduct = new ProductWithDiscount("Teclado", 200.0, 5);
    System.out.println("Antes do desconto: " + discountedProduct.getName() + ", Preço: " + discountedProduct.getPrice() + ", Quantidade: " + discountedProduct.getQuantity());

    discountedProduct.applyDiscount(15.0);
    System.out.println("Após 15% de desconto: " + discountedProduct.getName() + ", Preço: " + discountedProduct.getPrice());

    try {
      discountedProduct.applyDiscount(60.0);
    } catch (IllegalArgumentException e) {
      System.out.println(e.getMessage());
    }

    try {
      discountedProduct.applyDiscount(-10.0);
    } catch (IllegalArgumentException e) {
      System.out.println(e.getMessage());
    }
  }
}
