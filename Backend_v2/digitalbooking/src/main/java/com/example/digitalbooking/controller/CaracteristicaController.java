package com.example.digitalbooking.controller;

import com.example.digitalbooking.exceptionHandlers.ResourceNotFoundException;
import com.example.digitalbooking.model.Caracteristica;
import com.example.digitalbooking.service.CaracteristicaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/caracteristicas")
public class CaracteristicaController {

    @Autowired
    private CaracteristicaService caracteristicaService;

    @GetMapping
    public List<Caracteristica> getCaracteristicas() {
        return caracteristicaService.getAllCaracteristicas();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Caracteristica> getCaracteristicaById(@PathVariable Integer id) throws ResourceNotFoundException {
        Caracteristica caracteristica = caracteristicaService.getCaracteristicaById(id);

        return new ResponseEntity<Caracteristica>(caracteristica, HttpStatus.OK);
    }
}
