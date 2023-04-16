package com.example.digitalbooking.model.DTOs.PaisDTO;

public class PaisCreateDTO {

    private Integer paisID;

    private String nombre;



    public PaisCreateDTO(Integer paisID, String nombre) {
        this.paisID = paisID;
        this.nombre = nombre;
    }

    public Integer getPaisID() {
        return paisID;
    }

    public void setPaisID(Integer paisID) {
        this.paisID = paisID;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
