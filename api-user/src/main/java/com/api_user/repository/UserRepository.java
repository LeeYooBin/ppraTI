package com.api_user.repository;

import org.springframework.data.jpa.repository.JpaRepository; 
import com.api_user.model.User;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
  User findByUsername(String username);
  Optional<User> findById(int id);
}
