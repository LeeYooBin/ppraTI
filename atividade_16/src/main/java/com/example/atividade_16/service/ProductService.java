package com.example.atividade_16.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.atividade_16.model.Product;
import com.example.atividade_16.repository.ProductRepository;

@Service
public class ProductService {
  private final ProductRepository productRepository;

  public ProductService(ProductRepository productRepository) {
    this.productRepository = productRepository;
  }

  public Product createProduct(Product product) {
    return productRepository.save(product);
  }

  public List<Product> getAllProducts() {
    return productRepository.findAll();
  }

  public Optional<Product> getProductById(Long id) {
    return productRepository.findById(id);
  }

  public Product updateProduct(Long id, Product updatedProduct) {
    Product product = productRepository.findById(id)
      .orElseThrow(() -> new RuntimeException("Product not found"));

    product.setName(updatedProduct.getName());
    product.setDescription(updatedProduct.getDescription());
    product.setPrice(updatedProduct.getPrice());
    product.setStockQuantity(updatedProduct.getStockQuantity());

    return productRepository.save(product);
  }

  public void deleteProduct(Long id) {
    if (!productRepository.existsById(id)) {
      throw new RuntimeException("Product not found");
    }
    productRepository.deleteById(id);
  }
}
