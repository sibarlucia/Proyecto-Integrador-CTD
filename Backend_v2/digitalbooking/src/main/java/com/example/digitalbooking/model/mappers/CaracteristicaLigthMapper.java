package com.example.digitalbooking.model.mappers;

import com.example.digitalbooking.model.Caracteristica;
import com.example.digitalbooking.model.DTOs.CaracteristicaDTO.CaracteristicaLigthDTO;
import com.example.digitalbooking.model.DTOs.PaisDTO.PaisCreateDTO;
import com.example.digitalbooking.model.Pais;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface CaracteristicaLigthMapper {
    CaracteristicaLigthMapper INSTANCE = Mappers.getMapper( CaracteristicaLigthMapper.class );

    @Mapping(source="id", target = "id")
    Caracteristica toEntity(CaracteristicaLigthDTO dto);

    CaracteristicaLigthDTO toDTO(Caracteristica entity);
}
