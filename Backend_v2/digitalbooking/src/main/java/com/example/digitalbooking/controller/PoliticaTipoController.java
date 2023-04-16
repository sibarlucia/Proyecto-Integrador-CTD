package com.example.digitalbooking.controller;

import com.example.digitalbooking.exceptionHandlers.ResourceNotFoundException;
import com.example.digitalbooking.model.PoliticaTipo;
import com.example.digitalbooking.service.PoliticaTipoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/politicaTipo")
public class PoliticaTipoController {

    @Autowired
    private PoliticaTipoService politicaTipoService;

    @GetMapping
    public List<PoliticaTipo> getPoliticaTipos() {
        return politicaTipoService.getAllPoliticaTipos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<PoliticaTipo> getPoliticaTipoById(@PathVariable Long id) throws ResourceNotFoundException {
        PoliticaTipo politicaTipo = politicaTipoService.getPoliticaTipoById(id);

        return new ResponseEntity<PoliticaTipo>(politicaTipo, HttpStatus.OK);
    }
}
