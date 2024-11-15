package com.example.atividade_16.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import com.example.atividade_16.model.Product;
import com.example.atividade_16.repository.ProductRepository;

class ProductServiceTest {
  private ProductService productService;
  private ProductRepository productRepository;

  @BeforeEach
  void setup() {
    productRepository = Mockito.mock(ProductRepository.class);
    productService = new ProductService(productRepository);
  }

  @Test
  void createProduct_shouldReturnCreatedProduct() {
    Product product = new Product();
    product.setName("Test Product");

    when(productRepository.save(product)).thenReturn(product);

    Product result = productService.createProduct(product);

    assertNotNull(result);
    assertEquals("Test Product", result.getName());
  }

  @Test
  void getProductById_shouldReturnProductIfExists() {
    Product product = new Product();
    product.setId(1L);

    when(productRepository.findById(1L)).thenReturn(Optional.of(product));

    Optional<Product> result = productService.getProductById(1L);

    assertTrue(result.isPresent());
    assertEquals(1L, result.get().getId());
  }

  @Test
  void updateProduct_shouldThrowExceptionIfNotFound() {
    Product updatedProduct = new Product();
    when(productRepository.findById(1L)).thenReturn(Optional.empty());
    assertThrows(RuntimeException.class, () -> productService.updateProduct(1L, updatedProduct));
  }

  @Test
  void deleteProduct_shouldThrowExceptionIfNotFound() {
    when(productRepository.existsById(1L)).thenReturn(false);
    assertThrows(RuntimeException.class, () -> productService.deleteProduct(1L));
  }
}
