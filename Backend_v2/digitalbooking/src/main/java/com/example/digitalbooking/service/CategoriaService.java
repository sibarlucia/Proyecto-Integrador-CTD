package com.example.digitalbooking.service;

import com.example.digitalbooking.exceptionHandlers.BadRequestException;
import com.example.digitalbooking.exceptionHandlers.ResourceNotFoundException;
import com.example.digitalbooking.model.Categoria;
import com.example.digitalbooking.model.DTOs.CategoriaDTO.CategoriaResponseDTO;
import com.example.digitalbooking.model.mappers.CategoriaResponseMapper;
import com.example.digitalbooking.repository.ICategoriaRepository;
import com.example.digitalbooking.repository.IProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CategoriaService {

    @Autowired
    private ICategoriaRepository categoriaRepository;

    @Autowired
    private CategoriaResponseMapper categoriaResponseMapper;

    @Autowired
    private IProductoRepository productoRepository;

    public List<CategoriaResponseDTO> getAllCategoriasResponseDTO() {
        List<Categoria> categorias = categoriaRepository.findAll();
        List<CategoriaResponseDTO> categoriasResponseDTO = new ArrayList<>();
        for(Categoria categoria: categorias){
            CategoriaResponseDTO categoriaResponseDTO = categoriaResponseMapper.toDTO(categoria);
            categoriaResponseDTO.setCantidadProductos(productoRepository.countByCategoriaIdCategoria(categoriaResponseDTO.getIdCategoria()));
            categoriasResponseDTO.add(categoriaResponseDTO);
        }
        return categoriasResponseDTO;
    }

    public Categoria getCategoriaById(Integer id) throws ResourceNotFoundException {
        Categoria c = categoriaRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Categoria no encontrada"));
        return c;
    }

    public CategoriaResponseDTO getCategoriaResponseById(Integer id) throws ResourceNotFoundException {
        Categoria categoria = categoriaRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Categoria no encontrada"));
        CategoriaResponseDTO categoriaResponseDTO = categoriaResponseMapper.toDTO(categoria);
        categoriaResponseDTO.setCantidadProductos(productoRepository.countByCategoriaIdCategoria(categoriaResponseDTO.getIdCategoria()));
        return categoriaResponseDTO;
    }

    private Optional<Categoria> getCategoriaByTitulo(String titulo){
        Optional<Categoria> c = categoriaRepository.findFirstByTitulo(titulo);
        return c;
    }

    public Categoria addCategoria(Categoria c) throws BadRequestException {

        if (c.getTitulo() == null || c.getTitulo() == "" ){
            throw new BadRequestException("El título no puede estar vacío");
        }

        if (c.getDescripcion() == null || c.getDescripcion() == "") {
            throw new BadRequestException("La descripción no puede estar vacía");
        }

        return categoriaRepository.save(c);
    }

    public Categoria updateCategoria(Categoria c) throws ResourceNotFoundException, BadRequestException {
        Categoria oldCategoria = this.getCategoriaById(c.getIdCategoria());


        Optional<Categoria> tituloExiste = this.getCategoriaByTitulo(c.getTitulo());

        if (tituloExiste.isPresent()){
            throw new BadRequestException("No se puede modificar la categoria debido a que el título ya existe con el id: " + tituloExiste.get().getIdCategoria());
        }

        String newTitulo =  c.getTitulo() != null ? c.getTitulo() : oldCategoria.getTitulo();
        String newDescripcion = c.getDescripcion() != null ? c.getDescripcion() : oldCategoria.getDescripcion();
        String newURL = c.getUrlImagen() != null ? c.getUrlImagen() : oldCategoria.getUrlImagen();

        Categoria newCategoria = new Categoria(c.getIdCategoria(), newTitulo,newDescripcion,newURL);

        return  categoriaRepository.save(newCategoria);
    }

    public void deleteCategoria(Integer id) throws ResourceNotFoundException {
        this.getCategoriaById(id);
        categoriaRepository.deleteById(id);
    }
}
