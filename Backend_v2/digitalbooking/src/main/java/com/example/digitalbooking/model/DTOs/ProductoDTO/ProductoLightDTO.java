package com.example.digitalbooking.model.DTOs.ProductoDTO;

import com.example.digitalbooking.model.Ciudad;
import com.example.digitalbooking.model.DTOs.CaracteristicaDTO.CaracteristicaLigthDTO;
import com.example.digitalbooking.model.Imagen;

import java.util.List;
import java.util.Random;

public class ProductoLightDTO {

    private Integer productoId;
    private String titulo;
    private String descripcion;
    private boolean esFavorito=new Random().nextBoolean();

    private Double longitud;

    private Double latitud;
    private Ciudad ciudad;
    private String categoriaTitulo;
    private List<CaracteristicaLigthDTO> caracteristicas;
    private Imagen imagen;

    private float puntajePromedio;

    public ProductoLightDTO() {
    }

    public ProductoLightDTO(Integer productoId, String titulo, String descripcion, boolean esFavorito, Ciudad ciudad, String categoriaTitulo, List<CaracteristicaLigthDTO> caracteristicas, Imagen imagen, float puntajePromedio) {
        this.productoId = productoId;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.esFavorito = esFavorito;
        this.ciudad = ciudad;
        this.categoriaTitulo = categoriaTitulo;
        this.caracteristicas = caracteristicas;
        this.imagen = imagen;
        this.puntajePromedio = puntajePromedio;
    }

    public ProductoLightDTO(String titulo, String descripcion, boolean esFavorito, Ciudad ciudad, String categoriaTitulo, List<CaracteristicaLigthDTO> caracteristicas, Imagen imagen, float puntajePromedio) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.esFavorito = esFavorito;
        this.ciudad = ciudad;
        this.categoriaTitulo = categoriaTitulo;
        this.caracteristicas = caracteristicas;
        this.imagen = imagen;
        this.puntajePromedio = puntajePromedio;
    }

    public ProductoLightDTO(Integer productoId, String titulo, String descripcion, boolean esFavorito, Double longitud, Double latitud, Ciudad ciudad, String categoriaTitulo, List<CaracteristicaLigthDTO> caracteristicas, Imagen imagen, float puntajePromedio) {
        this.productoId = productoId;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.esFavorito = esFavorito;
        this.longitud = longitud;
        this.latitud = latitud;
        this.ciudad = ciudad;
        this.categoriaTitulo = categoriaTitulo;
        this.caracteristicas = caracteristicas;
        this.imagen = imagen;
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

    public String getCategoriaTitulo() {
        return categoriaTitulo;
    }

    public void setCategoriaTitulo(String categoriaTitulo) {
        this.categoriaTitulo = categoriaTitulo;
    }

    public List<CaracteristicaLigthDTO> getCaracteristicas() {
        return caracteristicas;
    }

    public void setCaracteristicas(List<CaracteristicaLigthDTO> caracteristicas) {
        this.caracteristicas = caracteristicas;
    }

    public Imagen getImagen() {
        return imagen;
    }

    public void setImagen(Imagen imagen) {
        this.imagen = imagen;
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
