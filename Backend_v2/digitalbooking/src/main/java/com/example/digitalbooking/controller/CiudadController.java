package com.example.digitalbooking.controller;

import com.example.digitalbooking.exceptionHandlers.BadRequestException;
import com.example.digitalbooking.exceptionHandlers.ResourceNotFoundException;
import com.example.digitalbooking.model.Ciudad;
import com.example.digitalbooking.model.DTOs.CiudadDTO.CiudadCreateDTO;
import com.example.digitalbooking.model.mappers.CiudadMapper;
import com.example.digitalbooking.service.CiudadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ciudades")
public class CiudadController {

    @Autowired
    private CiudadService ciudadService;

    @Autowired
    private CiudadMapper ciudadMapper;

    @GetMapping
    public List<Ciudad> getCiudades() {
        return ciudadService.getAllCiudades();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ciudad> getCiudadById(@PathVariable Integer id) throws ResourceNotFoundException{
        Ciudad ciudad = ciudadService.getCiudadById(id);

        return new ResponseEntity<Ciudad>(ciudad, HttpStatus.OK);
    }

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Ciudad> addCiudad(@RequestBody CiudadCreateDTO c) throws BadRequestException {
        Ciudad ciudad = ciudadMapper.toEntity(c);

        return new ResponseEntity<Ciudad>(ciudadService.addCiudad(ciudad), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Ciudad> updateCiudad(@PathVariable Integer id, @RequestBody CiudadCreateDTO c) throws ResourceNotFoundException, BadRequestException {
        Ciudad ciudad = CiudadMapper.INSTANCE.toEntity(c);
        ciudad.setCiudadID(id);

        return ResponseEntity.ok(ciudadService.updateCiudad(ciudad));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCiudad(@PathVariable Integer id) throws ResourceNotFoundException {
        ciudadService.deleteCiudad(id);

        return ResponseEntity.noContent().build();
    }

}
