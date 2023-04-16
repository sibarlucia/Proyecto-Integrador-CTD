package com.example.digitalbooking.model.DTOs.CategoriaDTO;

public class CategoriaResponseDTO {

    private Integer idCategoria;
    private String titulo;
    private String descripcion;
    private String urlImagen;
    private Integer cantidadProductos;

    public CategoriaResponseDTO() {
    }

    public CategoriaResponseDTO(Integer idCategoria, String titulo, String descripcion, String urlImagen, Integer cantidadProductos) {
        this.idCategoria = idCategoria;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.urlImagen = urlImagen;
        this.cantidadProductos = cantidadProductos;
    }

    public CategoriaResponseDTO(String titulo, String descripcion, String urlImagen, Integer cantidadProductos) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.urlImagen = urlImagen;
        this.cantidadProductos = cantidadProductos;
    }

    public Integer getIdCategoria() {
        return idCategoria;
    }

    public void setIdCategoria(Integer idCategoria) {
        this.idCategoria = idCategoria;
    }

    public Integer getCantidadProductos() {
        return cantidadProductos;
    }

    public void setCantidadProductos(Integer cantidadProductos) {
        this.cantidadProductos = cantidadProductos;
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

    public String getUrlImagen() {
        return urlImagen;
    }

    public void setUrlImagen(String urlImagen) {
        this.urlImagen = urlImagen;
    }
}
