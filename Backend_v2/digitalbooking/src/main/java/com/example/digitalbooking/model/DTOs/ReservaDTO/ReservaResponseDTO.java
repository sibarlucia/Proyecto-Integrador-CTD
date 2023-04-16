package com.example.digitalbooking.model.DTOs.ReservaDTO;

import com.example.digitalbooking.model.Producto;
import com.example.digitalbooking.model.Resenia;
import jakarta.persistence.criteria.CriteriaBuilder;

import java.time.LocalDateTime;

public class ReservaResponseDTO {
    private Integer id;
    private LocalDateTime fechaIngreso;
    private LocalDateTime fechaEgreso;
    private Integer productoId;
    private Integer usuarioId;
    private Resenia resenia;
    private String ciudadUsuario;

    public ReservaResponseDTO() {
    }

    public ReservaResponseDTO(Integer id, LocalDateTime fechaIngreso, LocalDateTime fechaEgreso, Integer productoId, Integer usuarioId, Resenia resenia, String ciudadUsuario) {
        this.id = id;
        this.fechaIngreso = fechaIngreso;
        this.fechaEgreso = fechaEgreso;
        this.productoId = productoId;
        this.usuarioId = usuarioId;
        this.resenia = resenia;
        this.ciudadUsuario = ciudadUsuario;
    }

    public ReservaResponseDTO(LocalDateTime fechaIngreso, LocalDateTime fechaEgreso, Integer productoId, Integer usuarioId, Resenia resenia, String ciudadUsuario) {
        this.fechaIngreso = fechaIngreso;
        this.fechaEgreso = fechaEgreso;
        this.productoId = productoId;
        this.usuarioId = usuarioId;
        this.resenia = resenia;
        this.ciudadUsuario = ciudadUsuario;
    }

    public ReservaResponseDTO(LocalDateTime fechaIngreso, LocalDateTime fechaEgreso, Integer productoId, Integer usuarioId, String ciudadUsuario) {
        this.fechaIngreso = fechaIngreso;
        this.fechaEgreso = fechaEgreso;
        this.productoId = productoId;
        this.usuarioId = usuarioId;
        this.ciudadUsuario = ciudadUsuario;
    }

    public String getCiudadUsuario() {
        return ciudadUsuario;
    }

    public void setCiudadUsuario(String ciudadUsuario) {
        this.ciudadUsuario = ciudadUsuario;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public LocalDateTime getFechaIngreso() {
        return fechaIngreso;
    }

    public void setFechaIngreso(LocalDateTime fechaIngreso) {
        this.fechaIngreso = fechaIngreso;
    }

    public LocalDateTime getFechaEgreso() {
        return fechaEgreso;
    }

    public void setFechaEgreso(LocalDateTime fechaEgreso) {
        this.fechaEgreso = fechaEgreso;
    }

    public Integer getProductoId() {
        return productoId;
    }

    public void setProductoId(Integer productoId) {
        this.productoId = productoId;
    }

    public Integer getUsuarioId() {
        return usuarioId;
    }

    public void setUsuarioId(Integer usuarioId) {
        this.usuarioId = usuarioId;
    }

    public Resenia getResenia() {
        return resenia;
    }

    public void setResenia(Resenia resenia) {
        this.resenia = resenia;
    }
}
