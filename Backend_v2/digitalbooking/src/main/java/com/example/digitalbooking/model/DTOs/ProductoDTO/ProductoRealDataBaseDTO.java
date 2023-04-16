package com.example.digitalbooking.model.DTOs.ProductoDTO;

import com.example.digitalbooking.model.*;

import java.util.List;

public class ProductoRealDataBaseDTO {
    private Integer productoId;
    private String titulo;
    private String descripcion;
    private String ubicacion;
    private String frase;
    private Double longitud;
    private Double latitud;
    private Integer ciudadID;
    private Integer idCategoria;
    private List<Integer> caracteristicasId;
    private List<Imagen> imagenes;
    private List<Politica> politicas;

    public ProductoRealDataBaseDTO() {
    }

    public ProductoRealDataBaseDTO(Integer productoId, String titulo, String descripcion, String ubicacion, String frase, Double longitud, Double latitud, Integer ciudadID, Integer idCategoria, List<Integer> caracteristicasId, List<Imagen> imagenes, List<Politica> politicas) {
        this.productoId = productoId;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.ubicacion = ubicacion;
        this.frase = frase;
        this.longitud = longitud;
        this.latitud = latitud;
        this.ciudadID = ciudadID;
        this.idCategoria = idCategoria;
        this.caracteristicasId = caracteristicasId;
        this.imagenes = imagenes;
        this.politicas = politicas;
    }

    public ProductoRealDataBaseDTO(String titulo, String descripcion, String ubicacion, String frase, Double longitud, Double latitud, Integer ciudadID, Integer idCategoria, List<Integer> caracteristicasId, List<Imagen> imagenes, List<Politica> politicas) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.ubicacion = ubicacion;
        this.frase = frase;
        this.longitud = longitud;
        this.latitud = latitud;
        this.ciudadID = ciudadID;
        this.idCategoria = idCategoria;
        this.caracteristicasId = caracteristicasId;
        this.imagenes = imagenes;
        this.politicas = politicas;
    }

    public Integer getProductoId() {
        return productoId;
    }

    public void setProductoId(Integer productoId) {
        this.productoId = productoId;
    }

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

    public String getFrase() {
        return frase;
    }

    public void setFrase(String frase) {
        this.frase = frase;
    }


    public Integer getCiudadID() {
        return ciudadID;
    }

    public void setCiudadID(Integer ciudadID) {
        this.ciudadID = ciudadID;
    }

    public Integer getIdCategoria() {
        return idCategoria;
    }

    public void setIdCategoria(Integer idCategoria) {
        this.idCategoria = idCategoria;
    }

    public List<Integer> getCaracteristicasId() {
        return caracteristicasId;
    }

    public void setCaracteristicasId(List<Integer> caracteristicasId) {
        this.caracteristicasId = caracteristicasId;
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

    public Double getLongitud() {
        return longitud;
    }

    public void setLongitud(Double longitud) {
        this.longitud = longitud;
    }

    public Double getLatitud() {
        return latitud;
    }

    public void setLatitud(Double latitud) {
        this.latitud = latitud;
    }
}
