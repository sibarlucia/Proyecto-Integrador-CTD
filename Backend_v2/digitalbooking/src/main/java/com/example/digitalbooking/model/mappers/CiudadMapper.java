package com.example.digitalbooking.model.mappers;
import com.example.digitalbooking.model.DTOs.CiudadDTO.CiudadCreateDTO;
import com.example.digitalbooking.model.Ciudad;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface CiudadMapper {
    CiudadMapper INSTANCE = Mappers.getMapper( CiudadMapper.class );

    Ciudad toEntity(CiudadCreateDTO dto);

    CiudadCreateDTO toDTO(Ciudad entity);
}
