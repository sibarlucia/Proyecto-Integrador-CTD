package com.example.digitalbooking.repository;

import com.example.digitalbooking.model.Rol;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRolRepository extends JpaRepository<Rol,Integer> {

    Rol findByNombre(String nombre);
}
