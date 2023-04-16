CREATE DATABASE  IF NOT EXISTS `0223TDPRON1C7LAED0621PT_GRUPO5`;
USE `0223TDPRON1C7LAED0621PT_GRUPO5`;

DROP TABLE IF EXISTS `productos_caracteristicas`;
CREATE TABLE `productos_caracteristicas` (
  `productos_caracteristicas_id` int NOT NULL AUTO_INCREMENT,
  `producto_id` int DEFAULT NULL,
  `caracteristica_id` int DEFAULT NULL,
  PRIMARY KEY (`productos_caracteristicas_id`),
  KEY `producto_id_idx` (`producto_id`),
  KEY `caracteristica_id_idx` (`caracteristica_id`),
  CONSTRAINT `caracteristica_id` FOREIGN KEY (`caracteristica_id`) REFERENCES `caracteristicas` (`caracteristica_id`),
  CONSTRAINT `id_producto` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`producto_id`)
);
ALTER TABLE productos_caracteristicas AUTO_INCREMENT = 1;