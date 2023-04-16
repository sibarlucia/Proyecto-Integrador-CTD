package com.example.digitalbooking.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "resenias")
public class Resenia {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "resenia_id")
        private Integer id;

        @Column(name = "puntaje")
        private Float puntaje;

        public Resenia() {
        }

        public Resenia(Integer id, Float puntaje) {
                this.id = id;
                this.puntaje = puntaje;
        }

        public Integer getId() {
                return id;
        }

        public void setId(Integer id) {
                this.id = id;
        }

        public Float getPuntaje() {
                return puntaje;
        }

        public void setPuntaje(Float puntaje) {
                this.puntaje = puntaje;
        }
}
