package com.example.digitalbooking.model.DTOs.ProductoDTO;


import com.example.digitalbooking.model.*;
import com.example.digitalbooking.model.DTOs.ReservaDTO.ReservaResponseDTO;

import java.util.List;
import java.util.Map;
import java.util.Random;

public class ProductoDetailDTO {
    private Integer productoId;
    private String titulo;
    private String descripcion;
    private String ubicacion;
    private String frase;
    private boolean esFavorito=new Random().nextBoolean();

    private Double longitud;

    private Double latitud;
    private Ciudad ciudad;
    private Categoria categoria;
    private List<Caracteristica> caracteristicas;
    private List<Imagen> imagenes;
    private List<ReservaResponseDTO> reservas;

    private float puntajePromedio;
    private Map<String, List<Politica>> politicasAgrupadasPorTipo;

    public ProductoDetailDTO() {
    }

    public ProductoDetailDTO(Integer productoId, String titulo, String descripcion, String ubicacion, String frase, boolean esFavorito, Double longitud, Double latitud, Ciudad ciudad, Categoria categoria, List<Caracteristica> caracteristicas, List<Imagen> imagenes, List<ReservaResponseDTO> reservas, float puntajePromedio, Map<String, List<Politica>> politicasAgrupadasPorTipo) {
        this.productoId = productoId;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.ubicacion = ubicacion;
        this.frase = frase;
        this.esFavorito = esFavorito;
        this.longitud = longitud;
        this.latitud = latitud;
        this.ciudad = ciudad;
        this.categoria = categoria;
        this.caracteristicas = caracteristicas;
        this.imagenes = imagenes;
        this.reservas = reservas;
        this.puntajePromedio = puntajePromedio;
        this.politicasAgrupadasPorTipo = politicasAgrupadasPorTipo;
    }

    public ProductoDetailDTO(String titulo, String descripcion, String ubicacion, String frase, boolean esFavorito, Ciudad ciudad, Categoria categoria, List<Caracteristica> caracteristicas, List<Imagen> imagenes, List<ReservaResponseDTO> reservas, float puntajePromedio, Map<String, List<Politica>> politicasAgrupadasPorTipo) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.ubicacion = ubicacion;
        this.frase = frase;
        this.esFavorito = esFavorito;
        this.ciudad = ciudad;
        this.categoria = categoria;
        this.caracteristicas = caracteristicas;
        this.imagenes = imagenes;
        this.reservas = reservas;
        this.puntajePromedio = puntajePromedio;
        this.politicasAgrupadasPorTipo = politicasAgrupadasPorTipo;
    }

    public ProductoDetailDTO(String titulo, String descripcion, String ubicacion, String frase, boolean esFavorito, Ciudad ciudad, Categoria categoria, List<Caracteristica> caracteristicas, List<Imagen> imagenes, List<ReservaResponseDTO> reservas, float puntajePromedio) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.ubicacion = ubicacion;
        this.frase = frase;
        this.esFavorito = esFavorito;
        this.ciudad = ciudad;
        this.categoria = categoria;
        this.caracteristicas = caracteristicas;
        this.imagenes = imagenes;
        this.reservas = reservas;
        this.puntajePromedio = puntajePromedio;
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

    public boolean isEsFavorito() {
        return esFavorito;
    }

    public void setEsFavorito(boolean esFavorito) {
        this.esFavorito = esFavorito;
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

    public List<ReservaResponseDTO> getReservas() {
        return reservas;
    }

    public void setReservas(List<ReservaResponseDTO> reservas) {
        this.reservas = reservas;
    }

    public Map<String, List<Politica>> getPoliticasAgrupadasPorTipo() {
        return politicasAgrupadasPorTipo;
    }

    public void setPoliticasAgrupadasPorTipo(Map<String, List<Politica>> politicasAgrupadasPorTipo) {
        this.politicasAgrupadasPorTipo = politicasAgrupadasPorTipo;
    }

    public float getPuntajePromedio() {
        return puntajePromedio;
    }

    public void setPuntajePromedio(float puntajePromedio) {
        this.puntajePromedio = puntajePromedio;
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
