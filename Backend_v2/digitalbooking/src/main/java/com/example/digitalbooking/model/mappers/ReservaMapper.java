package com.example.digitalbooking.model.mappers;

import com.example.digitalbooking.model.DTOs.ReservaDTO.ReservaResponseDTO;
import com.example.digitalbooking.model.Reserva;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface ReservaMapper {

    ReservaMapper INSTANCE = Mappers.getMapper( ReservaMapper.class );

    @Mapping(source = "producto.productoId", target = "productoId")
    @Mapping(source = "usuario.usuarioId", target = "usuarioId")
    @Mapping(source = "ciudadUsuario", target = "ciudadUsuario")
    ReservaResponseDTO toDTO(Reserva reserva);

    @Mapping(source = "productoId", target = "producto.productoId")
    @Mapping(source = "usuarioId", target = "usuario.usuarioId")
    @Mapping(source = "ciudadUsuario", target = "ciudadUsuario")
    Reserva toEntity(ReservaResponseDTO reservaDTO);

}
