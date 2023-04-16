package com.example.digitalbooking.model.DTOs.ReservaDTO;

import com.example.digitalbooking.model.DTOs.ProductoDTO.ProductoLightDTO;
import com.example.digitalbooking.model.Resenia;

import java.time.LocalDateTime;

public class ReservaUsuarioDTO {
    private Integer id;
    private LocalDateTime fechaIngreso;
    private LocalDateTime fechaEgreso;
    private ProductoLightDTO producto;
    private Integer usuarioId;
    private Resenia resenia;
    private String ciudadUsuario;

    public ReservaUsuarioDTO() {
    }

    public ReservaUsuarioDTO(Integer id, LocalDateTime fechaIngreso, LocalDateTime fechaEgreso, ProductoLightDTO producto, Integer usuarioId, Resenia resenia, String ciudadUsuario) {
        this.id = id;
        this.fechaIngreso = fechaIngreso;
        this.fechaEgreso = fechaEgreso;
        this.producto = producto;
        this.usuarioId = usuarioId;
        this.resenia = resenia;
        this.ciudadUsuario = ciudadUsuario;
    }

    public ReservaUsuarioDTO(LocalDateTime fechaIngreso, LocalDateTime fechaEgreso, ProductoLightDTO producto, Integer usuarioId, Resenia resenia, String ciudadUsuario) {
        this.fechaIngreso = fechaIngreso;
        this.fechaEgreso = fechaEgreso;
        this.producto = producto;
        this.usuarioId = usuarioId;
        this.resenia = resenia;
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

    public ProductoLightDTO getProducto() {
        return producto;
    }

    public void setProducto(ProductoLightDTO producto) {
        this.producto = producto;
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

    public String getCiudadUsuario() {
        return ciudadUsuario;
    }

    public void setCiudadUsuario(String ciudadUsuario) {
        this.ciudadUsuario = ciudadUsuario;
    }
}
