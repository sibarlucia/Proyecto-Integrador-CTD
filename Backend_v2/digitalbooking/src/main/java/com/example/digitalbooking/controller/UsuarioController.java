package com.example.digitalbooking.controller;

import com.example.digitalbooking.exceptionHandlers.BadRequestException;
import com.example.digitalbooking.exceptionHandlers.ResourceNotFoundException;
import com.example.digitalbooking.model.Usuario;
import com.example.digitalbooking.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping
    public List<Usuario> getUsuario() {
        return usuarioService.getAllUsuarios();
    }

    @GetMapping("{id}")
    public ResponseEntity<Usuario> getUsuarioById(@PathVariable Integer id) throws ResourceNotFoundException {
        return new ResponseEntity<Usuario>(usuarioService.getUsuarioById(id), HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<Usuario> updateUsuario(@PathVariable Integer id, @RequestBody Usuario usuario) throws ResourceNotFoundException, BadRequestException {
        return new ResponseEntity<Usuario>(usuarioService.updateUsuario(usuario,id), HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deletePais(@PathVariable Integer id) throws ResourceNotFoundException {
        usuarioService.deleteUsuario(id);
        return new ResponseEntity<String>("El Usuario ha sido eliminado correctamente", HttpStatus.OK);
    }
}
