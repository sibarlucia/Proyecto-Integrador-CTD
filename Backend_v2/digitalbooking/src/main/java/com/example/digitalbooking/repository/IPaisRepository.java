package com.example.digitalbooking.repository;

import com.example.digitalbooking.model.Pais;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface IPaisRepository extends JpaRepository<Pais,Integer> {

    List<Pais> findByNombre(String nombrePais);

    @Query("SELECT p FROM Pais p WHERE REPLACE(LOWER(p.nombre), ' ', '') LIKE REPLACE(LOWER(CONCAT('%', :paisNombre, '%')), ' ', '')")
    List<Pais> findByPaisNombre(String paisNombre);



}
