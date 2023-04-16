package com.example.digitalbooking.repository;

import com.example.digitalbooking.model.Politica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPoliticaRepository extends JpaRepository<Politica,Long> {

}
