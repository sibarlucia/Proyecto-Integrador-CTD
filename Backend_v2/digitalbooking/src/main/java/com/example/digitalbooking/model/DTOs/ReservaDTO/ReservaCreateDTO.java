package com.example.digitalbooking.model.DTOs.ReservaDTO;

import com.example.digitalbooking.model.Resenia;

import java.time.LocalDateTime;

public class ReservaCreateDTO {
    private LocalDateTime fechaIngreso;
    private LocalDateTime fechaEgreso;
    private Integer productoId;
    private Integer usuarioId;
    private Resenia resenia;
    private String ciudadUsuario;

    public ReservaCreateDTO() {
    }


    public ReservaCreateDTO(LocalDateTime fechaIngreso, LocalDateTime fechaEgreso, Integer productoId, Integer usuarioId, Resenia resenia, String ciudadUsuario) {
        this.fechaIngreso = fechaIngreso;
        this.fechaEgreso = fechaEgreso;
        this.productoId = productoId;
        this.usuarioId = usuarioId;
        this.resenia = resenia;
        this.ciudadUsuario = ciudadUsuario;
    }

    public ReservaCreateDTO(LocalDateTime fechaIngreso, LocalDateTime fechaEgreso, Integer productoId, Integer usuarioId, String ciudadUsuario) {
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
