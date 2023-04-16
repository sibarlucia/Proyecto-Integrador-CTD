package com.example.digitalbooking.model.DTOs.CiudadDTO;

import com.example.digitalbooking.model.DTOs.PaisDTO.PaisCreateDTO;
import com.example.digitalbooking.model.Pais;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class CiudadCreateDTO {

    private Integer ciudadID;
    private String nombre;
    private PaisCreateDTO paisDTO;

    public CiudadCreateDTO() {
    }

    public CiudadCreateDTO(String nombre, PaisCreateDTO paisDTO) {
        this.nombre = nombre;
        this.paisDTO = paisDTO;
    }

    public Integer getCiudadID() {
        return ciudadID;
    }

    public void setCiudadID(Integer ciudadID) {
        this.ciudadID = ciudadID;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }



}
