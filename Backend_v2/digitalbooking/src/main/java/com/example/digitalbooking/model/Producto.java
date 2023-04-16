package com.example.digitalbooking.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.text.Normalizer;
import java.util.*;

@Entity
@Table(name="productos")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "producto_id")
    private Integer productoId;

    @Column(name = "titulo")
    private String titulo;

    @Column(name = "descripcion")
    private String descripcion;

    @Column(name = "ubicacion")
    private String ubicacion;

    @Column(name = "frase")
    private String frase;

    @Column(name = "longitud")
    private Double longitud;

    @Column(name = "latitud")
    private Double latitud;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "ciudad_id")
    private Ciudad ciudad;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "categoria_id")
    private Categoria categoria;

    @ManyToMany(cascade = CascadeType.PERSIST)
    @JoinTable(name = "productos_caracteristicas",
            joinColumns = @JoinColumn(name = "producto_id", referencedColumnName = "producto_id"),
            inverseJoinColumns = @JoinColumn(name = "caracteristica_id", referencedColumnName = "caracteristica_id"))
    private List<Caracteristica> caracteristicas = new ArrayList();

    @OneToMany(mappedBy = "producto", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Imagen> imagenes = new ArrayList();

    @OneToMany(mappedBy = "producto", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Politica> politicas;

    @OneToMany(mappedBy = "producto", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<Reserva> reservas = new ArrayList();

    @Transient
    private Map<String, List<Politica>> politicasAgrupadasPorTipo;

    //@Transient
    /*public List<Map<String, Object>> getReseniasConPromedio() {
        List<Map<String, Object>> reseniasConPromedio = new ArrayList<>();
        float promedio = 0;
        for (Resenia resenia : resenias) {
            promedio += resenia.getPuntaje();
            Map<String, Object> reseniaMap = new HashMap<>();
            reseniaMap.put("id", resenia.getId());
            reseniaMap.put("puntaje", resenia.getPuntaje());
            reseniaMap.put("comentario", resenia.getComentario());
            reseniaMap.put("creadoEn", resenia.getCreadoEn());
            reseniaMap.put("actualizadoEn", resenia.getActualizadoEn());
            Map<String, Object> reservaMap = new HashMap<>();
            reservaMap.put("id", resenia.getReserva().getId());
            reservaMap.put("fechaIngreso", resenia.getReserva().getFechaIngreso());
            reservaMap.put("fechaEgreso", resenia.getReserva().getFechaEgreso());
            reseniaMap.put("reserva", reservaMap);
            reseniasConPromedio.add(reseniaMap);
        }

        Map<String, Object> calificacionInfo = new HashMap<>();
        calificacionInfo.put("cantidad resenias", resenias.size());

        if (resenias.size() > 0) {
            calificacionInfo.put("promedio", 0);
        }

        if (resenias.size() > 0) {
            promedio = promedio / resenias.size();
            calificacionInfo.put("promedio", promedio);
        }

        reseniasConPromedio.add(0, calificacionInfo);
        return reseniasConPromedio;
    }*/

    /*@OneToMany(mappedBy = "producto", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Resenia> resenias = new ArrayList();*/



    public Producto() {
    }

    public Producto(Integer productoId, String titulo, String descripcion, String ubicacion, String frase, Ciudad ciudad, Categoria categoria, List<Caracteristica> caracteristicas, List<Imagen> imagenes, List<Politica> politicas, List<Reserva> reservas, Map<String, List<Politica>> politicasAgrupadasPorTipo) {
        this.productoId = productoId;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.ubicacion = ubicacion;
        this.frase = frase;
        this.ciudad = ciudad;
        this.categoria = categoria;
        this.caracteristicas = caracteristicas;
        this.imagenes = imagenes;
        this.politicas = politicas;
        this.reservas = reservas;
        this.politicasAgrupadasPorTipo = politicasAgrupadasPorTipo;
    }

    public Producto(Integer productoId, String titulo, String descripcion, String ubicacion, String frase, Double longitud, Double latitud, Ciudad ciudad, Categoria categoria, List<Caracteristica> caracteristicas, List<Imagen> imagenes, List<Politica> politicas, List<Reserva> reservas, Map<String, List<Politica>> politicasAgrupadasPorTipo) {
        this.productoId = productoId;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.ubicacion = ubicacion;
        this.frase = frase;
        this.longitud = longitud;
        this.latitud = latitud;
        this.ciudad = ciudad;
        this.categoria = categoria;
        this.caracteristicas = caracteristicas;
        this.imagenes = imagenes;
        this.politicas = politicas;
        this.reservas = reservas;
        this.politicasAgrupadasPorTipo = politicasAgrupadasPorTipo;
    }

    public Producto(String titulo, String descripcion, String ubicacion, String frase, Ciudad ciudad, Categoria categoria, List<Caracteristica> caracteristicas, List<Imagen> imagenes, List<Politica> politicas, List<Reserva> reservas, Map<String, List<Politica>> politicasAgrupadasPorTipo) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.ubicacion = ubicacion;
        this.frase = frase;
        this.ciudad = ciudad;
        this.categoria = categoria;
        this.caracteristicas = caracteristicas;
        this.imagenes = imagenes;
        this.politicas = politicas;
        this.reservas = reservas;
        this.politicasAgrupadasPorTipo = politicasAgrupadasPorTipo;
    }

    public Producto(String titulo, String descripcion, String ubicacion, String frase, Ciudad ciudad, Categoria categoria, List<Caracteristica> caracteristicas, List<Imagen> imagenes, List<Politica> politicas, List<Reserva> reservas) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.ubicacion = ubicacion;
        this.frase = frase;
        this.ciudad = ciudad;
        this.categoria = categoria;
        this.caracteristicas = caracteristicas;
        this.imagenes = imagenes;
        this.politicas = politicas;
        this.reservas = reservas;
    }


    public Integer getProductoId() {
        return productoId;
    }

    public void setProductoId(Integer productoId) {
        this.productoId = productoId;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }

    public String getFrase() {
        return frase;
    }

    public void setFrase(String frase) {
        this.frase = frase;
    }

    public Ciudad getCiudad() {
        return ciudad;
    }

    public void setCiudad(Ciudad ciudad) {
        this.ciudad = ciudad;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public List<Caracteristica> getCaracteristicas() {
        return caracteristicas;
    }

    public void setCaracteristicas(List<Caracteristica> caracteristicas) {
        this.caracteristicas = caracteristicas;
    }

    public List<Imagen> getImagenes() {
        return imagenes;
    }

    public void setImagenes(List<Imagen> imagenes) {
        this.imagenes = imagenes;
    }

    public List<Politica> getPoliticas() {
        return politicas;
    }

    public void setPoliticas(List<Politica> politicas) {
        this.politicas = politicas;
    }

    public List<Reserva> getReservas() {
        return reservas;
    }

    public void setReservas(List<Reserva> reservas) {
        this.reservas = reservas;
    }

    public Map<String, List<Politica>> getPoliticasAgrupadasPorTipo() {
        if (politicasAgrupadasPorTipo == null) {
            politicasAgrupadasPorTipo = new HashMap<>();
            for (Politica politica : politicas) {
                String tipo = politica.getTipo().toString();
                String tipoCamelCase = Producto.convertirCamelCase(tipo);
                if (!politicasAgrupadasPorTipo.containsKey(tipoCamelCase)) {
                    politicasAgrupadasPorTipo.put(tipoCamelCase, new ArrayList<>());
                }
                politicasAgrupadasPorTipo.get(tipoCamelCase).add(politica);
            }
        }
        return politicasAgrupadasPorTipo;
    }

    public void setPoliticasAgrupadasPorTipo(Map<String, List<Politica>> politicasAgrupadasPorTipo) {
        this.politicasAgrupadasPorTipo = politicasAgrupadasPorTipo;
    }

    public static String convertirCamelCase(String texto) {

        String textoSinTildes = Normalizer.normalize(texto, Normalizer.Form.NFD)
                .replaceAll("[^\\p{ASCII}]", "");


        String[] palabras = textoSinTildes.toLowerCase().split(" ");
        StringBuilder resultado = new StringBuilder(palabras[0]);
        for (int i = 1; i < palabras.length; i++) {
            resultado.append(palabras[i].substring(0, 1).toUpperCase());
            resultado.append(palabras[i].substring(1));
        }
        return resultado.toString();
    }

    public Double getLongitud() {
        return longitud;
    }

    public void setLongitud(Double longitud) {
        this.longitud = longitud;
    }

    public Double getLatitud() {
        return latitud;
    }

    public void setLatitud(Double latitud) {
        this.latitud = latitud;
    }
}
