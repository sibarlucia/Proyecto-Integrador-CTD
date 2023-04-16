package com.example.digitalbooking.model.mappers;

import com.example.digitalbooking.model.DTOs.ReservaDTO.ReservaUsuarioDTO;
import com.example.digitalbooking.model.Reserva;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring", uses = ProductoLightMapper.class)
public interface ReservaUsuarioMapper {

    ReservaUsuarioMapper INSTANCE = Mappers.getMapper( ReservaUsuarioMapper.class );

    @Mapping(source = "producto", target = "producto")
    @Mapping(source = "usuario.usuarioId", target = "usuarioId")
    @Mapping(source = "ciudadUsuario", target = "ciudadUsuario")
    ReservaUsuarioDTO toDTO(Reserva reserva);

    @Mapping(source = "producto", target = "producto")
    @Mapping(source = "usuarioId", target = "usuario.usuarioId")
    @Mapping(source = "ciudadUsuario", target = "ciudadUsuario")
    Reserva toEntity(ReservaUsuarioDTO reservaUsuarioDTO);
}
