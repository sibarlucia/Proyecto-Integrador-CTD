package com.example.digitalbooking.model.mappers;

import com.example.digitalbooking.model.Caracteristica;
import com.example.digitalbooking.model.DTOs.ProductoDTO.ProductoLightDTO;
import com.example.digitalbooking.model.Imagen;
import com.example.digitalbooking.model.Producto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;
import org.mapstruct.factory.Mappers;

import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring", uses = CaracteristicaLigthMapper.class)
public interface ProductoLightMapper {

    ProductoLightMapper INSTANCE = Mappers.getMapper(ProductoLightMapper.class);

    @Mapping(source = "producto.categoria.titulo", target = "categoriaTitulo")
    @Mapping(source = "caracteristicas", target = "caracteristicas")
    @Mapping(source = "producto.imagenes", target = "imagen", qualifiedByName = "primerImagen")
    ProductoLightDTO toDto(Producto producto);


    @Named("primerImagen")
    default Imagen getPrimerImagen(List<Imagen> imagenes) {
        return imagenes.isEmpty() ? null : imagenes.get(0);

    }
}
