CREATE DATABASE  IF NOT EXISTS `0223TDPRON1C7LAED0621PT_GRUPO5`;
USE `0223TDPRON1C7LAED0621PT_GRUPO5`;
DROP TABLE IF EXISTS `categorias`;
CREATE TABLE `categorias` (
  `categoria_id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) DEFAULT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `url_imagen` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`categoria_id`)
);
ALTER TABLE categorias AUTO_INCREMENT = 1;