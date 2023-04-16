package com.example.digitalbooking.service;

import com.example.digitalbooking.exceptionHandlers.ResourceNotFoundException;
import com.example.digitalbooking.model.PoliticaTipo;
import com.example.digitalbooking.repository.IPoliticaTipoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PoliticaTipoService {

    @Autowired
    private IPoliticaTipoRepository politicaTipoRepository;

    public List<PoliticaTipo> getAllPoliticaTipos(){
        return politicaTipoRepository.findAll();
    }

    public PoliticaTipo getPoliticaTipoById(Long politicaTipoId) throws ResourceNotFoundException {
        return politicaTipoRepository.findById(politicaTipoId)
                .orElseThrow(()-> new ResourceNotFoundException("Tipo de Politica no encontrada"));
    }
}
