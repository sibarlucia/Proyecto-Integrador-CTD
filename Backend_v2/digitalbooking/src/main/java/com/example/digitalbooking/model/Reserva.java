package com.example.digitalbooking.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "reservas")
public class Reserva {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "reserva_id")
    private Integer id;

    @Column(name = "fecha_ingreso")
    private LocalDateTime fechaIngreso;

    @Column(name = "fecha_egreso")
    private LocalDateTime fechaEgreso;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "producto_id")
    private Producto producto;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "resenia_id")
    private Resenia resenia;

    @Column(name="ciudad_usuario")
    private String ciudadUsuario;

    public Reserva() {
    }

    public Reserva(Integer id, LocalDateTime fechaIngreso, LocalDateTime fechaEgreso, Producto producto, Usuario usuario, Resenia resenia, String ciudadUsuario) {
        this.id = id;
        this.fechaIngreso = fechaIngreso;
        this.fechaEgreso = fechaEgreso;
        this.producto = producto;
        this.usuario = usuario;
        this.resenia = resenia;
        this.ciudadUsuario = ciudadUsuario;
    }

    public Reserva(LocalDateTime fechaIngreso, LocalDateTime fechaEgreso, Producto producto, Usuario usuario, Resenia resenia, String ciudadUsuario) {
        this.fechaIngreso = fechaIngreso;
        this.fechaEgreso = fechaEgreso;
        this.producto = producto;
        this.usuario = usuario;
        this.resenia = resenia;
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

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Resenia getResenia() {
        return resenia;
    }

    public void setResenia(Resenia resenia) {
        this.resenia = resenia;
    }
}
