package com.example.digitalbooking.controller;

import com.example.digitalbooking.exceptionHandlers.BadRequestException;
import com.example.digitalbooking.exceptionHandlers.ResourceNotFoundException;
import com.example.digitalbooking.model.DTOs.ProductoDTO.ProductoCreateDTO;
import com.example.digitalbooking.model.DTOs.ProductoDTO.ProductoDetailDTO;
import com.example.digitalbooking.model.DTOs.ProductoDTO.ProductoLightDTO;
import com.example.digitalbooking.model.DTOs.ProductoDTO.ProductoRealDataBaseDTO;
import com.example.digitalbooking.model.Producto;
import com.example.digitalbooking.model.mappers.ProductoDetailMapper;
import com.example.digitalbooking.model.mappers.ProductoLightMapper;
import com.example.digitalbooking.model.mappers.ProductoMapper;
import com.example.digitalbooking.model.mappers.ProductoRealDataBaseMapper;
import com.example.digitalbooking.service.ProductoService;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/productos")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class ProductoController {

    @Autowired
    private ProductoService productoService;
    @Autowired
    private ProductoDetailMapper productoDetailMapper;
    @Autowired
    private ProductoLightMapper productoLightMapper;
    @Autowired
    private ProductoRealDataBaseMapper productoRealDataBaseMapper;

    @GetMapping
    public List<ProductoLightDTO> getProductosLightDTO() {
        return productoService.getAllProductosLightDTO();
    }

    @GetMapping("/detail")
    public List<ProductoDetailDTO> getProductosDetailDTO() {
        return productoService.getAllProductosDetailDTO();
    }

    @GetMapping("/random")
    public List<ProductoLightDTO> getProductosRandom() {
        return productoService.getProductosLigthDTORandom();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductoDetailDTO> getProductoById(@PathVariable Integer id) throws ResourceNotFoundException{
        return new ResponseEntity<ProductoDetailDTO>(productoService.getProductoDetailById(id), HttpStatus.OK);
    }

    @GetMapping("/real/{id}")
    public ResponseEntity<ProductoRealDataBaseDTO> getProductoRealById(@PathVariable Integer id) throws ResourceNotFoundException{
        Producto producto = productoService.getProductoById(id);
        ProductoRealDataBaseDTO productoRealDataBaseDTO = productoRealDataBaseMapper.toDTO(producto);
        return new ResponseEntity<ProductoRealDataBaseDTO>(productoRealDataBaseDTO, HttpStatus.OK);
    }

    //Metodo de Solicitado en Sprint 2, reemplazado por endopoint "/buscar"
    /*@GetMapping("/filtro")
    public List<Producto> getProductoByCiudadNombreAndCategoriaNombre
            (@RequestParam(value = "ciudad", required = false) String ciudadNombre,
             @RequestParam(value = "categoria", required = false) String categoriaTitulo) {
        return productoService.getProductosByCiudadAndCategoria(ciudadNombre,categoriaTitulo);
    }*/

    @GetMapping("/buscar")
    public List<ProductoLightDTO> getProductoByCiudadNombreAndCategoriaNombre
            (@RequestParam(value="ciudadId", required = false) Integer ciudadId,
             @RequestParam(value="categoriaId", required = false) Integer categoriaId,
             @RequestParam(value="fechaInicio", required = false) LocalDateTime fechaInicio,
             @RequestParam(value="fechaFin", required = false) LocalDateTime fechaFin){
        return productoService.getProductoProductosByCiudadNombreAndCategoriaTituloAndFechas
                (ciudadId,categoriaId,fechaInicio,fechaFin);
    }

    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<ProductoRealDataBaseDTO> addProducto(@RequestBody ProductoRealDataBaseDTO p) throws BadRequestException, ResourceNotFoundException {
        return new ResponseEntity<ProductoRealDataBaseDTO>(productoService.addProducto(p), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Producto> updateProducto(@PathVariable Integer id, @RequestBody ProductoCreateDTO p) throws ResourceNotFoundException {
        Producto producto = ProductoMapper.INSTANCE.toEntity(p);
        producto.setProductoId(id);

        return ResponseEntity.ok(productoService.updateProducto(producto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProducto(@PathVariable Integer id) throws ResourceNotFoundException {
        productoService.deleteProducto(id);

        return ResponseEntity.noContent().build();
    }

}
