package com.example.digitalbooking.model.mappers;
import com.example.digitalbooking.model.DTOs.ProductoDTO.ProductoCreateDTO;

import com.example.digitalbooking.model.Producto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public interface ProductoMapper {
    ProductoMapper INSTANCE = Mappers.getMapper( ProductoMapper.class );

    @Mapping(target = "productoId", ignore = true)
    Producto toEntity(ProductoCreateDTO dto);

    ProductoCreateDTO toDTO(Producto entity);
}
