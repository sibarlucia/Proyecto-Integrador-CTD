package com.example.digitalbooking.repository;

import com.example.digitalbooking.model.Imagen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IImagenRepository extends JpaRepository<Imagen, Integer> {

}
