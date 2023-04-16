package com.example.digitalbooking.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "politicas")
public class Politica {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "politica_id")
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "producto_id")
    @JsonIgnore
    private Producto producto;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "politicas_types_id")
    private PoliticaTipo tipo;

    @Column(name = "descripcion", length = 3000)
    private String descripcion;

    public Politica() {
    }

    public Politica(Producto producto, PoliticaTipo tipo, String descripcion) {
        this.producto = producto;
        this.tipo = tipo;
        this.descripcion = descripcion;
    }

    public Politica(Long id, Producto producto, PoliticaTipo tipo, String descripcion) {
        this.id = id;
        this.producto = producto;
        this.tipo = tipo;
        this.descripcion = descripcion;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    public PoliticaTipo getTipo() {
        return tipo;
    }

    public void setTipo(PoliticaTipo tipo) {
        this.tipo = tipo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    @Override
    public String toString() {
        return tipo.toString();
    }
}
