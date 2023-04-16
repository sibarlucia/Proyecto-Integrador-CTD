package com.example.digitalbooking.controller;

import com.example.digitalbooking.exceptionHandlers.BadRequestException;
import com.example.digitalbooking.exceptionHandlers.ResourceNotFoundException;
import com.example.digitalbooking.model.DTOs.PaisDTO.PaisCreateDTO;
import com.example.digitalbooking.service.PaisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/paises")
public class PaisController {

        @Autowired
        private PaisService paisService;

        @GetMapping
        public List<PaisCreateDTO> getPaises() {
            return paisService.getAllPaises();
        }

        @GetMapping("{id}")
        public ResponseEntity<PaisCreateDTO> getCiudadById(@PathVariable Integer id) throws ResourceNotFoundException {
            return new ResponseEntity<PaisCreateDTO>(paisService.getPaisById(id), HttpStatus.OK);
        }

        @PostMapping
        @ResponseStatus(HttpStatus.CREATED)
        public ResponseEntity<PaisCreateDTO> addPais(@RequestBody PaisCreateDTO paisDTO) throws BadRequestException {

            return new ResponseEntity<PaisCreateDTO>(paisService.addPais(paisDTO), HttpStatus.CREATED);
        }

        @PutMapping("{id}")
        public ResponseEntity<PaisCreateDTO> updatePais(@PathVariable Integer id, @RequestBody PaisCreateDTO paisDTO) throws ResourceNotFoundException, BadRequestException {
            return new ResponseEntity<PaisCreateDTO>(paisService.updatePais(paisDTO,id), HttpStatus.OK);
        }

        @DeleteMapping("{id}")
        public ResponseEntity<String> deletePais(@PathVariable Integer id) throws ResourceNotFoundException {
            paisService.deletePais(id);
            return new ResponseEntity<String>("El Pais ha sido eliminado correctamente", HttpStatus.OK);
        }

}
