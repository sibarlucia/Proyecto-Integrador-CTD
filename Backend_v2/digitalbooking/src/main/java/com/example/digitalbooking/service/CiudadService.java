package com.example.digitalbooking.service;

import com.example.digitalbooking.exceptionHandlers.BadRequestException;
import com.example.digitalbooking.exceptionHandlers.ResourceNotFoundException;
import com.example.digitalbooking.model.Ciudad;
import com.example.digitalbooking.model.Pais;
import com.example.digitalbooking.repository.ICiudadRepository;
import com.example.digitalbooking.repository.IPaisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CiudadService {

    @Autowired
    private ICiudadRepository ciudadRepository;

    @Autowired
    private IPaisRepository paisRepository;

    public List<Ciudad> getAllCiudades() {
        return ciudadRepository.findAll();
    }

    public Ciudad getCiudadById(Integer id) throws ResourceNotFoundException {
        return ciudadRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Ciudad no encontrada"));
    }

    public Ciudad addCiudad(Ciudad c) throws BadRequestException {
        if (c.getPais() == null ) {
            throw new BadRequestException("La ciudad debe pertenecer a un país");
        }

        if(c.getPais().getPaisID()!=null) {

            if (c.getNombre() == null || c.getNombre() == "") {
                throw new BadRequestException("El nombre no puede estar vacío");
            }

            if (this.ciudadExiste(c.getNombre(), c.getPais().getPaisID())) {
                throw new BadRequestException("Esta ciudad ya existe");
            }

            if (paisRepository.findById(c.getPais().getPaisID()).isPresent()) {
                Pais paisCiudad = paisRepository.findById(c.getPais().getPaisID()).get();
                c.setPais(paisCiudad);
            }
        }

        return ciudadRepository.save(c);
    }

    public Ciudad updateCiudad2(Ciudad c){
        Boolean ciudadFede = ciudadRepository.existsById(c.getCiudadID());
        return c;
    }
    public Ciudad updateCiudad(Ciudad c) throws ResourceNotFoundException, BadRequestException {
        Ciudad oldCiudad = this.getCiudadById(c.getCiudadID());

        String newNombre =  c.getNombre() != null ? c.getNombre() : oldCiudad.getNombre();
        Pais newPais = c.getPais() != null ? c.getPais() : oldCiudad.getPais();

        Ciudad newCiudad = new Ciudad(c.getCiudadID(), newNombre,newPais);

        return  this.addCiudad(newCiudad);
    }

    public void deleteCiudad(Integer id) throws ResourceNotFoundException {
        this.getCiudadById(id);
        ciudadRepository.deleteById(id);
    }

    private boolean ciudadExiste(String nombre, Integer paisId) {
        Optional<Ciudad> ciudadOptional = ciudadRepository.findByNombreAndPaisId(nombre.toLowerCase(), paisId);
        return ciudadOptional.isPresent();
    }
}
