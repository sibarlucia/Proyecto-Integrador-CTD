package com.example.digitalbooking.controller;

import com.example.digitalbooking.exceptionHandlers.BadRequestException;
import com.example.digitalbooking.exceptionHandlers.ResourceNotFoundException;
import com.example.digitalbooking.model.DTOs.ReservaDTO.ReservaCreateDTO;
import com.example.digitalbooking.model.DTOs.ReservaDTO.ReservaResponseDTO;
import com.example.digitalbooking.model.DTOs.ReservaDTO.ReservaUsuarioDTO;
import com.example.digitalbooking.model.Resenia;
import com.example.digitalbooking.model.Reserva;
import com.example.digitalbooking.service.ReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/reservas")
public class ReservaController {

    @Autowired
    private ReservaService reservaService;

    @GetMapping
    public List<ReservaResponseDTO> getReserva() {
        return reservaService.getAllReservas();
    }

    @GetMapping("{id}")
    public ResponseEntity<ReservaResponseDTO> getReservaById(@PathVariable Integer id) throws ResourceNotFoundException {
        return new ResponseEntity<ReservaResponseDTO>(reservaService.getReservaById(id), HttpStatus.OK);
    }

    @GetMapping("/producto/{id}")
    public ResponseEntity<List<ReservaResponseDTO>> getReservaByProductoId(@PathVariable Integer id) {
        return new ResponseEntity<List<ReservaResponseDTO>>(reservaService.getReservaByProductoId(id), HttpStatus.OK);
    }

   /* @GetMapping("/usuario/{id}")
    public ResponseEntity<List<ReservaResponseDTO>> getReservaByUsuarioId(@PathVariable Integer id, HttpServletRequest request) {
        String token = request.getHeader("Authorization").substring(7); // Obtener token JWT sin "Bearer "
        TokenUtils tokenUtils = new TokenUtils();
        token

        if (!idUsuarioAutenticado.equals(usuarioId)) {
            throw new AccessDeniedException("No tiene permiso para acceder a las reservas de otro usuario");
        }


        return new ResponseEntity<List<ReservaResponseDTO>>(reservaService.getReservaByUsuarioId(id),HttpStatus.OK);
    }*/

    @GetMapping("/usuario/{id}")
    public ResponseEntity<List<ReservaUsuarioDTO>> getReservaByUsuarioId(@PathVariable Integer id) {
        return new ResponseEntity<List<ReservaUsuarioDTO>>(reservaService.getReservaByUsuarioId(id),HttpStatus.OK);
    }

    @GetMapping("/existeReserva")
    public boolean existeReserva
            (@RequestParam(value="productoId", required = false) Integer productoId,
             @RequestParam(value="fechaInicio", required = false) LocalDateTime fechaIngreso,
             @RequestParam(value="fechaFin", required = false) LocalDateTime fechaEgreso) {
        return reservaService.existsReservaEnRangoDeFechasByProductoId
                (productoId, fechaIngreso, fechaEgreso);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<ReservaResponseDTO> addPais(@RequestBody ReservaCreateDTO reservaCreateDTO) throws BadRequestException, ResourceNotFoundException {

        return new ResponseEntity<ReservaResponseDTO>(reservaService.addReserva(reservaCreateDTO), HttpStatus.CREATED);
    }

    @PutMapping("{id}")
    public ResponseEntity<Reserva> updatePais(@PathVariable Integer id, @RequestBody Reserva reserva) throws ResourceNotFoundException, BadRequestException {
        return new ResponseEntity<Reserva>(reservaService.updateReserva(reserva,id), HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deletePais(@PathVariable Integer id) throws ResourceNotFoundException {
        reservaService.deleteReserva(id);
        return new ResponseEntity<String>("La Reserva ha sido eliminada correctamente", HttpStatus.OK);
    }

    @PutMapping("/agregarResenia/{id}")
    public ResponseEntity<ReservaResponseDTO> agregarResenia
            (@PathVariable Integer id, @RequestBody Resenia resenia) throws ResourceNotFoundException {
        return new ResponseEntity<ReservaResponseDTO>(reservaService.agregarResenia(id,resenia),HttpStatus.OK);
    }

}
