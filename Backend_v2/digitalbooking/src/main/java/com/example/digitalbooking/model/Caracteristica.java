package com.example.digitalbooking.model;

import jakarta.persistence.*;

@Entity
@Table(name = "caracteristicas")
public class Caracteristica {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "caracteristica_id")
    private Integer id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "icono")
    private String icono;

    public Caracteristica() {
    }

    public Caracteristica(String nombre, String icono) {
        this.nombre = nombre;
        this.icono = icono;
    }

    public Caracteristica(Integer id, String nombre, String icono) {
        this.id = id;
        this.nombre = nombre;
        this.icono = icono;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getIcono() {
        return icono;
    }

    public void setIcono(String icono) {
        this.icono = icono;
    }

    @Override
    public String toString() {
        return "Caracteristica{" +
                "nombre:'" + nombre + '\'' +
                ", icono:'" + icono + '\'' +
                '}';
    }
}
