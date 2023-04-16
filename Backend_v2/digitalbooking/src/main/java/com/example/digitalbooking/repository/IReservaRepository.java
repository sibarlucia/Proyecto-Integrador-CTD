package com.example.digitalbooking.repository;

import com.example.digitalbooking.model.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface IReservaRepository extends JpaRepository<Reserva,Integer> {

    List<Reserva> findByProductoProductoId(Integer productoId);

    List<Reserva> findByUsuarioUsuarioId(Integer usuarioId);

    @Query("SELECT CASE WHEN COUNT(r) > 0 THEN true ELSE false END FROM Reserva r WHERE r.producto.id = :productoId AND ((r.fechaIngreso BETWEEN :fechaIngreso AND :fechaEgreso) OR (r.fechaEgreso BETWEEN :fechaIngreso AND :fechaEgreso))")
    boolean existsReservaEnRangoDeFechasByProductoId(@Param("productoId") Integer productoId, @Param("fechaIngreso") LocalDateTime fechaIngreso, @Param("fechaEgreso") LocalDateTime fechaEgreso);


}
