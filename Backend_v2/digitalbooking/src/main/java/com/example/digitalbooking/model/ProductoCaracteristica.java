package com.example.digitalbooking.model;

import jakarta.persistence.*;

@Entity
@Table(name = "productos_caracteristicas")
public class ProductoCaracteristica {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "productos_caracteristicas_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "producto_id")
    private Producto producto;

    @ManyToOne
    @JoinColumn(name = "caracteristica_id")
    private Caracteristica caracteristica;

    public ProductoCaracteristica() {
    }

    public ProductoCaracteristica(Producto producto, Caracteristica caracteristica) {
        this.producto = producto;
        this.caracteristica = caracteristica;
    }

    public ProductoCaracteristica(Long id, Producto producto, Caracteristica caracteristica) {
        this.id = id;
        this.producto = producto;
        this.caracteristica = caracteristica;
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

    public Caracteristica getCaracteristica() {
        return caracteristica;
    }

    public void setCaracteristica(Caracteristica caracteristica) {
        this.caracteristica = caracteristica;
    }

    @Override
    public String toString() {
        return "ProductoCaracteristica{" +
                "caracteristica:" + caracteristica +
                '}';
    }
}