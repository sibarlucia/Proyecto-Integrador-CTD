package com.example.digitalbooking.service;

import com.example.digitalbooking.exceptionHandlers.BadRequestException;
import com.example.digitalbooking.exceptionHandlers.ResourceNotFoundException;
import com.example.digitalbooking.model.*;
import com.example.digitalbooking.model.DTOs.ProductoDTO.ProductoDetailDTO;
import com.example.digitalbooking.model.DTOs.ProductoDTO.ProductoLightDTO;
import com.example.digitalbooking.model.DTOs.ProductoDTO.ProductoRealDataBaseDTO;
import com.example.digitalbooking.model.mappers.ProductoDetailMapper;
import com.example.digitalbooking.model.mappers.ProductoLightMapper;
import com.example.digitalbooking.model.mappers.ProductoRealDataBaseMapper;
import com.example.digitalbooking.repository.IImagenRepository;
import com.example.digitalbooking.repository.IProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class ProductoService {

    @Autowired
    private IProductoRepository productoRepository;
    @Autowired
    private CiudadService ciudadService;
    @Autowired
    private CategoriaService categoriaService;

    @Autowired
    private CaracteristicaService caracteristicaService;

    @Autowired
    private  PoliticaService politicaService;

    @Autowired
    private IImagenRepository imagenRepository;

    @Autowired
    private ProductoDetailMapper productoDetailMapper;

    @Autowired
    private ProductoLightMapper productoLightMapper;

    @Autowired
    private ProductoRealDataBaseMapper productoRealDataBaseMapper;

    public List<ProductoDetailDTO> getAllProductosDetailDTO() {
        List<Producto> productos = productoRepository.findAll();
        List<ProductoDetailDTO> productosDetailDTO = new ArrayList<>();
        for (Producto producto : productos) {
            float promedio = this.calcularPuntajePromedio(producto);
            ProductoDetailDTO productoDetailDTO=productoDetailMapper.toDto(producto);
            productoDetailDTO.setPuntajePromedio(promedio);
            productosDetailDTO.add(productoDetailDTO);
        }
        return productosDetailDTO;

    }

    public List<ProductoLightDTO> getAllProductosLightDTO() {
        List<Producto> productos = productoRepository.findAll();
        List<ProductoLightDTO> productosLightDTO = new ArrayList<>();
        for (Producto producto : productos) {
            float promedio = this.calcularPuntajePromedio(producto);
            ProductoLightDTO productoLightDTO=productoLightMapper.toDto(producto);
            productoLightDTO.setPuntajePromedio(promedio);
            productosLightDTO.add(productoLightDTO);
        }
        return productosLightDTO;
    }

    public List<ProductoLightDTO> getProductosLigthDTORandom() {
        List<Producto> productos = productoRepository.findAll();
        List<ProductoLightDTO> productosLightDTO = new ArrayList<>();
        for (Producto producto : productos) {
            float promedio = this.calcularPuntajePromedio(producto);
            ProductoLightDTO productoLightDTO=productoLightMapper.toDto(producto);
            productoLightDTO.setPuntajePromedio(promedio);
            productoLightDTO.setEsFavorito(false);
            productosLightDTO.add(productoLightDTO);
        }

        Collections.shuffle(productosLightDTO);

        return productosLightDTO.subList(0,10);
    }

    //Metodo de Solicitado en Sprint 2, reemplazado por metodo: getProductoProductosByCiudadNombreAndCategoriaTituloAndFechas.
    /*public List<Producto> getProductosByCiudadAndCategoria(String ciudadNombre, String categoriaTitulo){
        if(ciudadNombre==null && categoriaTitulo!=null){
            return productoRepository.findByCategoriaTitulo(categoriaTitulo);
        }

        if(ciudadNombre!=null && categoriaTitulo==null){
            return productoRepository.findByCiudadNombre(ciudadNombre);
        }

        if(ciudadNombre==null && categoriaTitulo==null){
            return productoRepository.findAll();
        }

        return productoRepository.findByCiudadNombreAndCategoriaTitulo(ciudadNombre, categoriaTitulo);
    }*/

    public List<ProductoLightDTO> getProductoProductosByCiudadNombreAndCategoriaTituloAndFechas
            (Integer ciudadId, Integer categoriaId, LocalDateTime fechaInicio, LocalDateTime fechaFin){
        List<Producto> productos = productoRepository.filtrarProductosByCiudadIdAndCategoriaIdAndFechas
                (ciudadId,categoriaId,fechaInicio,fechaFin);
        List<ProductoLightDTO> productosLightDTO = new ArrayList<>();
        for (Producto producto : productos) {
            float promedio = this.calcularPuntajePromedio(producto);
            ProductoLightDTO productoLightDTO=productoLightMapper.toDto(producto);
            productoLightDTO.setPuntajePromedio(promedio);
            productosLightDTO.add(productoLightDTO);
        }
        return productosLightDTO;

    }

    public Producto getProductoById(Integer id) throws ResourceNotFoundException {
        Producto p = productoRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Producto no encontrado"));
        return p;
    }

    public ProductoDetailDTO getProductoDetailById(Integer id) throws ResourceNotFoundException {
        Producto producto = productoRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Producto no encontrado"));
        float promedio = this.calcularPuntajePromedio(producto);
        ProductoDetailDTO productoDetailDTO = productoDetailMapper.toDto(producto);
        productoDetailDTO.setPuntajePromedio(promedio);
        return productoDetailDTO;

    }

    public ProductoRealDataBaseDTO addProducto(ProductoRealDataBaseDTO productoRealDataBaseDTO) throws BadRequestException, ResourceNotFoundException {
        Producto p = productoRealDataBaseMapper.toEntity(productoRealDataBaseDTO);
        Producto productoCreado = new Producto();
        if(p.getTitulo()==null||p.getTitulo()==""){
            throw new BadRequestException("El Producto debe tener un titulo");
        }

        productoCreado.setTitulo(p.getTitulo());

        if(p.getDescripcion()==null||p.getDescripcion()=="") {
            throw new BadRequestException("El Producto debe tener una descripcion");
        }

        productoCreado.setDescripcion(p.getDescripcion());

        if(p.getUbicacion()==null){
            throw new BadRequestException("El Producto debe tener una ubicacion");
        }

        productoCreado.setUbicacion(p.getUbicacion());

        if(p.getFrase()==null){
            throw new BadRequestException("El Producto debe tener una frase");
        }

        productoCreado.setFrase(p.getFrase());

        if(p.getLongitud()== null){
            throw new BadRequestException("El Producto debe tener una Longitud");
        }

        productoCreado.setLongitud(p.getLongitud());

        if(p.getLatitud()== null){
            throw new BadRequestException("El Producto debe tener una Latitud");
        }

        productoCreado.setLatitud(p.getLatitud());


        if(p.getCiudad()==null){
            throw new BadRequestException("El Producto debe tener una ciudad");
        }
        Ciudad ciudad = ciudadService.getCiudadById(p.getCiudad().getCiudadID());
        productoCreado.setCiudad(ciudad);

        if(p.getCategoria()==null){
            throw new BadRequestException("El Producto debe tener una categoria");
        }
        Categoria categoria = categoriaService.getCategoriaById(p.getCategoria().getIdCategoria());
        productoCreado.setCategoria(categoria);

        List<Caracteristica> caracteristicas = p.getCaracteristicas();
        List<Caracteristica> caracteristicasAGuardar = new ArrayList<>();
        for (Caracteristica caracteristica: caracteristicas) {
            Caracteristica caracteristicaAGuardar = caracteristicaService.getCaracteristicaById(caracteristica.getId());
            caracteristicasAGuardar.add(caracteristicaAGuardar);
        }
        productoCreado.setCaracteristicas(caracteristicasAGuardar);

        Producto productoGuardado = productoRepository.save(productoCreado);

        List<Politica> politicas=p.getPoliticas();
        for (Politica politica: politicas) {
            Politica politicaCreada = new Politica();
            politicaCreada.setProducto(productoGuardado);
            politicaCreada.setTipo(politica.getTipo());
            politicaCreada.setDescripcion(politica.getDescripcion());
            politicaService.addPolitica(politicaCreada);
        }

        List<Imagen> imagenes = p.getImagenes();
        for (Imagen imagen: imagenes) {
            Imagen imagenCreada = new Imagen();
            imagenCreada.setProducto(productoGuardado);
            imagenCreada.setUrlImagen(imagen.getUrlImagen());
            imagenCreada.setImagen(imagen.getImagen());
            imagenRepository.save(imagenCreada);
        }

        Producto productoCargado = this.getProductoById(productoGuardado.getProductoId());
        return productoRealDataBaseMapper.toDTO(productoCargado);
    }

    public Producto updateProducto(Producto p) throws ResourceNotFoundException {
        return  productoRepository.save(p);
    }

    public void deleteProducto(Integer id) throws ResourceNotFoundException {
        this.getProductoById(id);
        productoRepository.deleteById(id);
    }

    public float calcularPuntajePromedio(Producto producto) {
            List<Reserva> reservas = producto.getReservas();
            float puntajeTotal = 0;
            int contador = 0;
            for (Reserva reserva : reservas) {
                if (reserva.getResenia() != null) {
                    puntajeTotal += reserva.getResenia().getPuntaje();
                    contador++;
                }
            }
            float puntajePromedio = 0;
            if(contador!=0) {
                puntajePromedio = (puntajeTotal / contador);
            }
            return puntajePromedio;
    }

}
