package com.example.digitalbooking.model;

import jakarta.persistence.*;

@Entity
@Table(name = "politicas_types")
public class PoliticaTipo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "politicas_types_id")
    private Long id;

    @Column(name = "descripcion")
    private String descripcion;

    public PoliticaTipo(Long id, String descripcion) {
        this.id = id;
        this.descripcion = descripcion;
    }

    public PoliticaTipo(String descripcion) {
        this.descripcion = descripcion;
    }

    public PoliticaTipo() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    @Override
    public String toString() {
        return descripcion;
    }
}
