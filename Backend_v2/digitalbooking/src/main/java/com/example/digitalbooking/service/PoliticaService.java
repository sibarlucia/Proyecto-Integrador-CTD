package com.example.digitalbooking.service;

import com.example.digitalbooking.exceptionHandlers.BadRequestException;
import com.example.digitalbooking.exceptionHandlers.ResourceNotFoundException;
import com.example.digitalbooking.model.Politica;
import com.example.digitalbooking.model.PoliticaTipo;
import com.example.digitalbooking.repository.IPoliticaRepository;
import com.example.digitalbooking.repository.IPoliticaTipoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PoliticaService {
    @Autowired
    private IPoliticaRepository politicaRepository;
    @Autowired
    private IPoliticaTipoRepository politicaTipoRepository;

    public List<Politica> getAllPoliticas(){
        return politicaRepository.findAll();
    }

    public Politica getPoliticaById(Long politicaId) throws ResourceNotFoundException {
        return politicaRepository.findById(politicaId)
                .orElseThrow(()-> new ResourceNotFoundException("Politica no encontrada"));
    }

    public Politica addPolitica(Politica politica) throws BadRequestException, ResourceNotFoundException {
        Politica politicaCreada = new Politica();
        if(politica.getTipo()==null){
            throw new BadRequestException("La Politica debe tener un tipo");
        }
        PoliticaTipo politicaTipo = politicaTipoRepository.findById(politica.getTipo().getId())
                .orElseThrow(()-> new ResourceNotFoundException("Politica no encontrada"));

        politicaCreada.setTipo(politicaTipo);
        politicaCreada.setDescripcion(politica.getDescripcion());
        politicaCreada.setProducto(politica.getProducto());
        return politicaRepository.save(politicaCreada);
    }

}
