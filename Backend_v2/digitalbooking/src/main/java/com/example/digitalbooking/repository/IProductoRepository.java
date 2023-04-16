package com.example.digitalbooking.repository;

import com.example.digitalbooking.model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface IProductoRepository extends JpaRepository<Producto, Integer> {
    @Query(value = "SELECT * FROM productos ORDER BY RAND() LIMIT 10", nativeQuery = true)
    List<Producto> getProductosRandom();

    List<Producto> findByCiudadNombre(String ciudadNombre);

    List<Producto> findByCategoriaTitulo(String categoriaTitulo);

    List<Producto> findByCiudadNombreAndCategoriaTitulo(String ciudadNombre, String categoriaTitulo);

    @Query("SELECT p FROM Producto p LEFT JOIN p.ciudad c LEFT JOIN p.categoria cat "
            + "WHERE (:ciudadId IS NULL OR c.ciudadID = :ciudadId) "
            + "AND (:categoriaId IS NULL OR cat.idCategoria = :categoriaId) "
            + "AND NOT EXISTS ("
            + "     SELECT r FROM Reserva r "
            + "     WHERE r.producto = p "
            + "     AND ((r.fechaIngreso <= :fechaFin AND r.fechaIngreso >= :fechaInicio) "
            + "     OR (r.fechaEgreso <= :fechaFin AND r.fechaEgreso >= :fechaInicio) "
            + "     OR (r.fechaIngreso >= :fechaInicio AND r.fechaEgreso <= :fechaFin))"
            + ")")
    List<Producto> filtrarProductosByCiudadIdAndCategoriaIdAndFechas(
            @Param("ciudadId") Integer ciudadId,
            @Param("categoriaId") Integer categoriaId,
            @Param("fechaInicio") LocalDateTime fechaInicio,
            @Param("fechaFin") LocalDateTime fechaFin
    );

    Integer countByCategoriaIdCategoria(Integer idCategoria);
}
