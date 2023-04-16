package com.example.digitalbooking.model.DTOs.CaracteristicaDTO;

public class CaracteristicaLigthDTO {

    private Integer id;
    private String icono;

    public CaracteristicaLigthDTO() {
    }

    public CaracteristicaLigthDTO(Integer id, String icono) {
        this.id = id;
        this.icono = icono;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getIcono() {
        return icono;
    }

    public void setIcono(String icono) {
        this.icono = icono;
    }
}
