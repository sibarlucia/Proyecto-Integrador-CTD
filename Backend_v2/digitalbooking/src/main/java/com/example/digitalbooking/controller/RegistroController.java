package com.example.digitalbooking.controller;

import com.example.digitalbooking.exceptionHandlers.BadRequestException;
import com.example.digitalbooking.model.DTOs.UsuarioDTO.UsuarioCreateDTO;
import com.example.digitalbooking.model.Usuario;
import com.example.digitalbooking.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/registro")
public class RegistroController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping("/listaUsuarios")
    public List<Usuario> getUsuario() {
        return usuarioService.getAllUsuarios();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Usuario> addUsuario(@RequestBody UsuarioCreateDTO usuarioCreateDTO) throws BadRequestException {

        return new ResponseEntity<Usuario>(usuarioService.addUsuario(usuarioCreateDTO), HttpStatus.CREATED);
    }
}
