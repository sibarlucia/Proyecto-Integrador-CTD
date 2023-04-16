package com.example.digitalbooking.repository;

import com.example.digitalbooking.model.Ciudad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.swing.text.html.Option;
import java.util.Optional;


@Repository
public interface ICiudadRepository extends JpaRepository<Ciudad, Integer> {

    @Query("SELECT c FROM Ciudad c WHERE REPLACE(LOWER(c.nombre), ' ', '') LIKE REPLACE(LOWER(CONCAT('%', :nombre, '%')), ' ', '') AND c.pais.id = :paisId")
    Optional<Ciudad> findByNombreAndPaisId(@Param("nombre") String nombre, @Param("paisId") Integer paisId);


}
