package com.example.digitalbooking.service;

import com.example.digitalbooking.exceptionHandlers.BadRequestException;
import com.example.digitalbooking.exceptionHandlers.ResourceNotFoundException;
import com.example.digitalbooking.model.DTOs.ReservaDTO.ReservaCreateDTO;
import com.example.digitalbooking.model.DTOs.ReservaDTO.ReservaResponseDTO;
import com.example.digitalbooking.model.DTOs.ReservaDTO.ReservaUsuarioDTO;
import com.example.digitalbooking.model.Producto;
import com.example.digitalbooking.model.Resenia;
import com.example.digitalbooking.model.Reserva;
import com.example.digitalbooking.model.Usuario;
import com.example.digitalbooking.model.mappers.ReservaCreateMapper;
import com.example.digitalbooking.model.mappers.ReservaMapper;
import com.example.digitalbooking.model.mappers.ReservaUsuarioMapper;
import com.example.digitalbooking.repository.IReseniaRepository;
import com.example.digitalbooking.repository.IReservaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class ReservaService {

    @Autowired
    private IReservaRepository reservaRepository;
    @Autowired
    private ProductoService productoService;
    @Autowired
    private UsuarioService usuarioService;
    @Autowired
    private IReseniaRepository reseniaRepository;
    @Autowired
    private ReservaMapper reservaMapper;
    @Autowired
    private ReservaCreateMapper reservaCreateMapper;

    @Autowired
    private ReservaUsuarioMapper reservaUsuarioMapper;


    public List<ReservaResponseDTO> getAllReservas() {
        List<Reserva> reservas = reservaRepository.findAll();
        List<ReservaResponseDTO> reservasDTOs = new ArrayList<>();

        for (Reserva reserva : reservas) {
            reservasDTOs.add(reservaMapper.toDTO(reserva));
        }

        return reservasDTOs;
    }

    public List<ReservaResponseDTO> getReservaByProductoId(Integer id){
        List<Reserva> reservas = reservaRepository.findByProductoProductoId(id);
        List<ReservaResponseDTO> reservasDTOs = new ArrayList<>();

        for (Reserva reserva : reservas) {
            reservasDTOs.add(reservaMapper.toDTO(reserva));
        }

        return reservasDTOs;
    }

    public List<ReservaUsuarioDTO> getReservaByUsuarioId(Integer id){
        List<Reserva> reservas = reservaRepository.findByUsuarioUsuarioId(id);
        List<ReservaUsuarioDTO> reservasUsuarioDTOs = new ArrayList<>();
        for (Reserva reserva : reservas) {
            reservasUsuarioDTOs.add(reservaUsuarioMapper.toDTO(reserva));
        }

        return reservasUsuarioDTOs;
    }


    public ReservaResponseDTO getReservaById(Integer id) throws ResourceNotFoundException {
        Reserva reserva = reservaRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Reserva no encontrada"));
        return reservaMapper.toDTO(reserva);
    }

    public ReservaResponseDTO addReserva(ReservaCreateDTO reservaCreateDTO) throws BadRequestException, ResourceNotFoundException {

        Reserva reservaACrear = reservaCreateMapper.toEntity(reservaCreateDTO);

        if(reservaACrear.getFechaIngreso()==null){
            throw new BadRequestException("La reserva debe tener fecha de inicio");
        }

        if(reservaACrear.getFechaEgreso()==null){
            throw new BadRequestException("La reserva debe tener fecha de egreso");
        }

        if(reservaACrear.getFechaIngreso().compareTo(reservaACrear.getFechaEgreso())>0){
            throw new BadRequestException("La fecha de Egreso debe ser posterior a la fecha de ingreso");
        }

        if(reservaACrear.getProducto()!=null) {
            Producto producto= productoService.getProductoById(reservaACrear.getProducto().getProductoId());
            reservaACrear.setProducto(producto);
        } else {throw new BadRequestException("La reserva debe tener asignado un producto");}

        if(reservaRepository.existsReservaEnRangoDeFechasByProductoId(reservaACrear.getProducto().getProductoId(),
        reservaACrear.getFechaIngreso(),reservaACrear.getFechaEgreso())){
            throw new BadRequestException("Ya existe una reserva para ese producto en ese rango de fechas");
        }
        if(reservaACrear.getUsuario()!=null) {
            Usuario usuario= usuarioService.getUsuarioById(reservaACrear.getUsuario().getUsuarioId());
            reservaACrear.setUsuario(usuario);
        } else { throw new BadRequestException("La reserva debe tener asignado un usuario");}

        if(reservaACrear.getCiudadUsuario()==null){
            throw new BadRequestException("La reserva debe tener la ciudad del Usuario");
        }

        return reservaMapper.toDTO(reservaRepository.save(reservaACrear));
    }

    public Reserva updateReserva(Reserva reservaUpdate, Integer id) throws ResourceNotFoundException{

        Reserva reservaExistente = reservaRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Reserva no encontrada"));
        if(reservaUpdate.getFechaIngreso()!=null){
            reservaExistente.setFechaIngreso(reservaUpdate.getFechaIngreso());
        }

        if(reservaUpdate.getFechaEgreso()!=null) {
            reservaExistente.setFechaEgreso(reservaUpdate.getFechaEgreso());
        }

        if(reservaUpdate.getProducto()!=null) {
            Producto producto= productoService.getProductoById(reservaUpdate.getProducto().getProductoId());
            reservaExistente.setProducto(producto);
        }

        if(reservaUpdate.getUsuario()!=null) {
            Usuario usuario= usuarioService.getUsuarioById(reservaUpdate.getUsuario().getUsuarioId());
            reservaExistente.setUsuario(usuario);
        }

        if(reservaUpdate.getResenia()!=null) {

            reservaExistente.setResenia(reservaUpdate.getResenia());
        }

        if(reservaUpdate.getCiudadUsuario()!=null){
            reservaExistente.setCiudadUsuario(reservaUpdate.getCiudadUsuario());
        }

        return reservaRepository.save(reservaExistente);
    }
    public void deleteReserva(Integer id) throws ResourceNotFoundException {
        this.getReservaById(id); //Llama a metodo para corroborar si existe id en Base de Datos
        reservaRepository.deleteById(id);
    }

    public boolean existsReservaEnRangoDeFechasByProductoId(Integer productoId, LocalDateTime fechaIngreso, LocalDateTime fechaEgreso){
        return reservaRepository.existsReservaEnRangoDeFechasByProductoId(productoId, fechaIngreso, fechaEgreso);
    }

    public ReservaResponseDTO agregarResenia(Integer reservaId, Resenia resenia) throws ResourceNotFoundException {
        Reserva reservaExistente = reservaRepository.findById(reservaId)
                .orElseThrow(()-> new ResourceNotFoundException("Reserva no encontrada"));
            reservaExistente.setResenia(reseniaRepository.save(resenia));
            return reservaMapper.toDTO(reservaRepository.save(reservaExistente));
    }


}
