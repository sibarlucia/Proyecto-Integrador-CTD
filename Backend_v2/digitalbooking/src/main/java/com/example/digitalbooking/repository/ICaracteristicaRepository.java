package com.example.digitalbooking.repository;

import com.example.digitalbooking.model.Caracteristica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Repository
public interface ICaracteristicaRepository extends JpaRepository<Caracteristica,Integer> {
}
