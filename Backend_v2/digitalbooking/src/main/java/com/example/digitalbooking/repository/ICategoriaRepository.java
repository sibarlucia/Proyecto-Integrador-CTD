package com.example.digitalbooking.repository;

import com.example.digitalbooking.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface ICategoriaRepository extends JpaRepository<Categoria, Integer> {
    public Optional<Categoria> findFirstByTitulo(String titulo);
}
