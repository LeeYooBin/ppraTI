package com.api_user.controller;

import com.api_user.dto.LoginDTO;
import com.api_user.model.User;
import com.api_user.repository.UserRepository;
import com.api_user.security.JwtTokenProvider;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {
  private final AuthenticationManager authenticationManager;
  private final JwtTokenProvider jwtTokenProvider;
  private final UserDetailsService userDetailsService;
  private final UserRepository userRepository;

  public AuthController(
    AuthenticationManager authenticationManager, 
    JwtTokenProvider jwtTokenProvider, 
    UserDetailsService userDetailsService,
    UserRepository userRepository
  ) {
    this.authenticationManager = authenticationManager;
    this.jwtTokenProvider = jwtTokenProvider;
    this.userDetailsService = userDetailsService;
    this.userRepository = userRepository;
  }

  @PostMapping("/login")
  public String login(@RequestBody LoginDTO loginDTO) {
    try {
      Authentication authentication = authenticationManager.authenticate(
        new UsernamePasswordAuthenticationToken(loginDTO.getUsername(), loginDTO.getPassword())
      );

      UserDetails user = (UserDetails) authentication.getPrincipal();
      return jwtTokenProvider.generateToken(user);
    } catch (AuthenticationException error) {
      throw new RuntimeException("Credenciais inválidas");
    }
  }

  @GetMapping("/token/{id}")
  public String getTokenById(@PathVariable int id) {
    User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
    return jwtTokenProvider.generateToken(userDetailsService.loadUserByUsername(user.getUsername()));
  }
}

