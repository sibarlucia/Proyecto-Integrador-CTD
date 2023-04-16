package com.example.digitalbooking.repository;

import com.example.digitalbooking.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IUsuarioRepository extends JpaRepository<Usuario,Integer> {
    Optional<Usuario> findOneByEmail(String email);
}