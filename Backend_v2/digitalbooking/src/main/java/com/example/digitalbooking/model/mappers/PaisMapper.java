package com.example.digitalbooking.model.mappers;
import com.example.digitalbooking.model.DTOs.PaisDTO.PaisCreateDTO;
import com.example.digitalbooking.model.Pais;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface PaisMapper {

    PaisMapper INSTANCE = Mappers.getMapper( PaisMapper.class );

    @Mapping(source="paisID", target = "paisID")
    Pais toEntity(PaisCreateDTO dto);

    PaisCreateDTO toDTO(Pais entity);
}
