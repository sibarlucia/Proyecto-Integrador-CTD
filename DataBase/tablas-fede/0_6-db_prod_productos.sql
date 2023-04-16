CREATE DATABASE  IF NOT EXISTS `0223TDPRON1C7LAED0621PT_GRUPO5`;
USE `0223TDPRON1C7LAED0621PT_GRUPO5`;

DROP TABLE IF EXISTS `productos`;
CREATE TABLE `productos` (
  `producto_id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) DEFAULT NULL,
  `descripcion` varchar(300) DEFAULT NULL,
  `frase` varchar(150) DEFAULT NULL,
  `ubicacion` varchar(45) DEFAULT NULL,
  `ciudad_id` int DEFAULT NULL,
  `categoria_id` int DEFAULT NULL,
  `latitud` decimal (9,6) DEFAULT NULL,
  `longitud` decimal (9,6) DEFAULT NULL,
  PRIMARY KEY (`producto_id`),
  KEY `ciudadid_idx` (`ciudad_id`),
  KEY `categoriaid_idx` (`categoria_id`),
  CONSTRAINT `categoriaid` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`categoria_id`),
  CONSTRAINT `ciudadid` FOREIGN KEY (`ciudad_id`) REFERENCES `ciudades` (`ciudad_id`)
);
ALTER TABLE productos AUTO_INCREMENT = 1;