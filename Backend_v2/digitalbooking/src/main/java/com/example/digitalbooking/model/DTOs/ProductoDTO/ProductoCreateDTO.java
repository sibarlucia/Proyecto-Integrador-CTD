package com.example.digitalbooking.model.DTOs.ProductoDTO;

import com.example.digitalbooking.model.*;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

public class ProductoCreateDTO {
    private String titulo;
    private String descripcion;
    private String ubicacion;
    private Ciudad ciudad;
    private Categoria categoria;
    private List<Caracteristica> caracteristicas;
    private List<Imagen> imagenes;
    private List<Politica> politicas;
    //private List<Resenia> resenias;


    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }

    public Ciudad getCiudad() {
        return ciudad;
    }

    public void setCiudad(Ciudad ciudad) {
        this.ciudad = ciudad;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public List<Caracteristica> getCaracteristicas() {
        return caracteristicas;
    }

    public void setCaracteristicas(List<Caracteristica> caracteristicas) {
        this.caracteristicas = caracteristicas;
    }

    public List<Imagen> getImagenes() {
        return imagenes;
    }

    public void setImagenes(List<Imagen> imagenes) {
        this.imagenes = imagenes;
    }

    public List<Politica> getPoliticas() {
        return politicas;
    }

    public void setPoliticas(List<Politica> politicas) {
        this.politicas = politicas;
    }

    //public List<Resenia> getResenias() {
        //return resenias;
    //}

    //public void setResenias(List<Resenia> resenias) {
        //this.resenias = resenias;
    //}
}
