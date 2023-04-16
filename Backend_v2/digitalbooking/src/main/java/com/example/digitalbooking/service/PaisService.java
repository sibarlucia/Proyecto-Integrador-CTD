package com.example.digitalbooking.service;

import com.example.digitalbooking.exceptionHandlers.BadRequestException;
import com.example.digitalbooking.exceptionHandlers.ResourceNotFoundException;
import com.example.digitalbooking.model.DTOs.PaisDTO.PaisCreateDTO;
import com.example.digitalbooking.model.Pais;
import com.example.digitalbooking.model.mappers.PaisMapper;
import com.example.digitalbooking.repository.IPaisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PaisService {

    @Autowired
    private IPaisRepository paisRepository;

    @Autowired
    private PaisMapper paisMapper;

    public List<PaisCreateDTO> getAllPaises() {
        List<Pais> paises = paisRepository.findAll();
        List<PaisCreateDTO> paisesDTOs = new ArrayList<>();

        for (Pais pais : paises) {
            paisesDTOs.add(paisMapper.toDTO(pais));
        }

        return paisesDTOs;
    }

    public PaisCreateDTO getPaisById(Integer id) throws ResourceNotFoundException {
        Pais pais= paisRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Pais no encontrado"));
        return paisMapper.toDTO(pais);
    }

    public boolean existsPaisNombre(String nombre){
        return !paisRepository.findByPaisNombre(nombre).isEmpty();
    }


    public PaisCreateDTO addPais(PaisCreateDTO paisDTO) throws BadRequestException {
        Pais pais = paisMapper.toEntity(paisDTO);

        if (pais.getNombre() == null || pais.getNombre().equals("") ){
            throw new BadRequestException("El nombre del pais no puede estar vacío");
        }

        if (existsPaisNombre(pais.getNombre())){
            throw new BadRequestException("Este pais ya existe");
        }

        Pais paisGuardado = paisRepository.save(pais);
        return paisMapper.toDTO(paisGuardado);
    }

    public PaisCreateDTO updatePais(PaisCreateDTO paisDTO, Integer id) throws ResourceNotFoundException, BadRequestException {

        Pais pais = paisMapper.toEntity(paisDTO);

        Pais paisExistente = paisMapper.toEntity(this.getPaisById(id));

        if(paisDTO.getNombre()==null || pais.getNombre().equals("")){
            throw new ResourceNotFoundException("El Pais debe tener un nombre");
            }

        paisExistente.setNombre(pais.getNombre());

        Pais paisGuardado = paisRepository.save(paisExistente);

        return paisMapper.toDTO(paisGuardado);

    }

    public void deletePais(Integer id) throws ResourceNotFoundException {
        this.getPaisById(id); //Llama a metodo para corroborar si existe id en Base de Datos
        paisRepository.deleteById(id);
    }

}

