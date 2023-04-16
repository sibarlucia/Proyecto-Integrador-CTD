CREATE DATABASE  IF NOT EXISTS `0223TDPRON1C7LAED0621PT_GRUPO5`;
USE `0223TDPRON1C7LAED0621PT_GRUPO5`;

DROP TABLE IF EXISTS `imagenes`;
CREATE TABLE `imagenes` (
  `imagen_id` int NOT NULL AUTO_INCREMENT,
  `url_imagen` varchar(200) DEFAULT NULL,
  `imagen` tinyblob,
  `producto_id` int DEFAULT NULL,
  PRIMARY KEY (`imagen_id`),
  KEY `productoid_idx` (`producto_id`),
  CONSTRAINT `productoid` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`producto_id`)
);
ALTER TABLE imagenes AUTO_INCREMENT = 1;