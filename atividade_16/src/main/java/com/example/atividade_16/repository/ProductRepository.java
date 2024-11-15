package com.example.atividade_16.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.atividade_16.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
