package com.example.digitalbooking.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "imagenes")
public class Imagen {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "imagen_id")
    private Integer id;

    @Column(name = "url_imagen")
    private String urlImagen;

    @Lob
    @Column(name = "imagen")
    private byte[] imagen;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "producto_id", nullable = false)
    private Producto producto;

    public Imagen() {
    }

    public Imagen(String urlImagen, byte[] imagen, Producto producto) {
        this.urlImagen = urlImagen;
        this.imagen = imagen;
//        this.producto = producto;
    }

    public Imagen(Integer id, String urlImagen, byte[] imagen, Producto producto) {
        this.id = id;
        this.urlImagen = urlImagen;
        this.imagen = imagen;
//        this.producto = producto;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUrlImagen() {
        return urlImagen;
    }

    public void setUrlImagen(String urlImagen) {
        this.urlImagen = urlImagen;
    }

    public byte[] getImagen() {
        return imagen;
    }

    public void setImagen(byte[] imagen) {
        this.imagen = imagen;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }


}