package com.example.digitalbooking.model.mappers;

import com.example.digitalbooking.model.Caracteristica;
import com.example.digitalbooking.model.DTOs.ProductoDTO.ProductoRealDataBaseDTO;
import com.example.digitalbooking.model.Producto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface ProductoRealDataBaseMapper {
    ProductoRealDataBaseMapper INSTANCE = Mappers.getMapper(ProductoRealDataBaseMapper.class);

    @Mapping(source = "ciudad.ciudadID", target = "ciudadID")
    @Mapping(source = "categoria.idCategoria", target = "idCategoria")
    @Mapping(target = "caracteristicasId", expression = "java(toCaracteristicasIdList(producto.getCaracteristicas()))")
    ProductoRealDataBaseDTO toDTO(Producto producto);

    @Mapping(source = "ciudadID", target = "ciudad.ciudadID")
    @Mapping(source = "idCategoria", target = "categoria.idCategoria")
    @Mapping(target = "caracteristicas", expression = "java(toCaracteristicasList(productoRealDataBaseDTO.getCaracteristicasId()))")
    Producto toEntity(ProductoRealDataBaseDTO productoRealDataBaseDTO);


    default List<Integer> toCaracteristicasIdList(List<Caracteristica> caracteristicas) {
        return caracteristicas.stream()
                .map(Caracteristica::getId)
                .collect(Collectors.toList());
    }

    default List<Caracteristica> toCaracteristicasList(List<Integer> caracteristicasId) {
        return caracteristicasId.stream()
                .map(id -> {
                    Caracteristica caracteristica = new Caracteristica();
                    caracteristica.setId(id);
                    return caracteristica;
                })
                .collect(Collectors.toList());
    }
}
