CREATE DATABASE  IF NOT EXISTS `0223TDPRON1C7LAED0621PT_GRUPO5`;
USE `0223TDPRON1C7LAED0621PT_GRUPO5`;

DROP TABLE IF EXISTS `politicas`;
CREATE TABLE `politicas` (
  `politica_id` int NOT NULL AUTO_INCREMENT,
  `producto_id` int NOT NULL,
  `politicas_types_id` int NOT NULL,
  `descripcion` varchar(3000) DEFAULT NULL,
  PRIMARY KEY (`politica_id`),
  KEY `producto_id_idx` (`producto_id`),
  KEY `id_tipodepoliticas_idx` (`politicas_types_id`),
  CONSTRAINT `id_del_producto` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`producto_id`),
  CONSTRAINT `id_tipodepoliticas` FOREIGN KEY (`politicas_types_id`) REFERENCES `politicas_types` (`politicas_types_id`)
);
ALTER TABLE politicas AUTO_INCREMENT = 1;