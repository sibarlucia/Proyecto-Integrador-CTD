package com.example.digitalbooking.model.mappers;
import com.example.digitalbooking.model.Categoria;
import com.example.digitalbooking.model.DTOs.CategoriaDTO.CategoriaCreateDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface CategoriaMapper {
    CategoriaMapper INSTANCE = Mappers.getMapper( CategoriaMapper.class );

    @Mapping(target = "idCategoria", ignore = true)
    Categoria toEntity(CategoriaCreateDTO dto);

    CategoriaCreateDTO toDTO(Categoria entity);
}
