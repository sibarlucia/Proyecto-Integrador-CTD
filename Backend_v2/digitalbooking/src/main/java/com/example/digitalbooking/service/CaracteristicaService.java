package com.example.digitalbooking.service;

import com.example.digitalbooking.exceptionHandlers.ResourceNotFoundException;
import com.example.digitalbooking.model.Caracteristica;
import com.example.digitalbooking.repository.ICaracteristicaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CaracteristicaService {

    @Autowired
    private ICaracteristicaRepository caracteristicaRepository;

    public List<Caracteristica> getAllCaracteristicas(){
        return caracteristicaRepository.findAll();
    }

    public Caracteristica getCaracteristicaById(Integer caracteristicaId) throws ResourceNotFoundException {
        return caracteristicaRepository.findById(caracteristicaId)
                .orElseThrow(()-> new ResourceNotFoundException("Caracteristica no encontrada"));
    }


}
