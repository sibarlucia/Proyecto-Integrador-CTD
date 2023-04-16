package com.example.digitalbooking.repository;

import com.example.digitalbooking.model.Resenia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IReseniaRepository extends JpaRepository<Resenia,Integer> {
}
