CREATE DATABASE  IF NOT EXISTS `0223TDPRON1C7LAED0621PT_GRUPO5`;
USE `0223TDPRON1C7LAED0621PT_GRUPO5`;

DROP TABLE IF EXISTS `ciudades`;
CREATE TABLE `ciudades` (
  `ciudad_id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `pais_id` int NOT NULL,
  PRIMARY KEY (`ciudad_id`),
  KEY `id_del_pais_idx` (`pais_id`),
  CONSTRAINT `id_del_pais` FOREIGN KEY (`pais_id`) REFERENCES `paises` (`pais_id`)
);
ALTER TABLE ciudades AUTO_INCREMENT = 1;