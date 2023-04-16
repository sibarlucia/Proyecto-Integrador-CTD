package com.example.digitalbooking.model.mappers;

import com.example.digitalbooking.model.Categoria;
import com.example.digitalbooking.model.DTOs.CategoriaDTO.CategoriaResponseDTO;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface CategoriaResponseMapper {

    CategoriaResponseMapper INSTANCE = Mappers.getMapper( CategoriaResponseMapper.class );

    Categoria toEntity(CategoriaResponseDTO dto);

    CategoriaResponseDTO toDTO(Categoria entity);
}
