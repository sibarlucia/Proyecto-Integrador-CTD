package com.example.digitalbooking.repository;

import com.example.digitalbooking.model.PoliticaTipo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPoliticaTipoRepository extends JpaRepository<PoliticaTipo, Long> {
    
}
