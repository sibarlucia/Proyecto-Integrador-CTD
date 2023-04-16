package com.example.digitalbooking.controller;

import com.example.digitalbooking.exceptionHandlers.BadRequestException;
import com.example.digitalbooking.exceptionHandlers.ResourceNotFoundException;
import com.example.digitalbooking.model.Categoria;
import com.example.digitalbooking.model.DTOs.CategoriaDTO.CategoriaCreateDTO;
import com.example.digitalbooking.model.DTOs.CategoriaDTO.CategoriaResponseDTO;
import com.example.digitalbooking.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categorias")
public class CategoriaController {

    @Autowired
    private CategoriaService categoriaService;

    @GetMapping
    public List<CategoriaResponseDTO> getCategorias() {
        return categoriaService.getAllCategoriasResponseDTO();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Categoria> getCategoriaById(@PathVariable Integer id) throws ResourceNotFoundException{
        Categoria categoria = categoriaService.getCategoriaById(id);

        return new ResponseEntity<Categoria>(categoria, HttpStatus.OK);
    }

    @GetMapping("/cantidad/{id}")
    public ResponseEntity<CategoriaResponseDTO> getCategoriaResponseById(@PathVariable Integer id) throws ResourceNotFoundException{
        CategoriaResponseDTO categoriaResponseDTO = categoriaService.getCategoriaResponseById(id);

        return new ResponseEntity<CategoriaResponseDTO>(categoriaResponseDTO, HttpStatus.OK);
    }

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Categoria> addCategoria(@RequestBody CategoriaCreateDTO c) throws BadRequestException {
        Categoria categoria = new Categoria(c.getTitulo(), c.getDescripcion(), c.getUrlImagen());

        return new ResponseEntity<Categoria>(categoriaService.addCategoria(categoria), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Categoria> updateCategoria(@PathVariable Integer id, @RequestBody CategoriaCreateDTO c) throws ResourceNotFoundException, BadRequestException {
        Categoria categoria = new Categoria(id, c.getTitulo(), c.getDescripcion(), c.getUrlImagen());

        return ResponseEntity.ok(categoriaService.updateCategoria(categoria));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCategoria(@PathVariable Integer id) throws ResourceNotFoundException {
        categoriaService.deleteCategoria(id);

        return ResponseEntity.noContent().build();
    }

}
