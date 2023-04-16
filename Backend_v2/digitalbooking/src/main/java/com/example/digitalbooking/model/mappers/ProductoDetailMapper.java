package com.example.digitalbooking.model.mappers;


import com.example.digitalbooking.model.DTOs.ProductoDTO.ProductoDetailDTO;
import com.example.digitalbooking.model.Producto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring", uses = ReservaMapper.class)
public interface ProductoDetailMapper {
    ProductoDetailMapper INSTANCE = Mappers.getMapper(ProductoDetailMapper.class);

    @Mapping(source = "reservas", target = "reservas")
    ProductoDetailDTO toDto(Producto producto);

    @Mapping(source = "reservas", target = "reservas")
    Producto toEntity(ProductoDetailDTO productoDetailDTO);
}
