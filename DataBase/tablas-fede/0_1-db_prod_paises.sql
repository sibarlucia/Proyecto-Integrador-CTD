CREATE DATABASE  IF NOT EXISTS `0223TDPRON1C7LAED0621PT_GRUPO5`;
USE `0223TDPRON1C7LAED0621PT_GRUPO5`;

DROP TABLE IF EXISTS `paises`;
CREATE TABLE `paises` (
  `pais_id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`pais_id`)
);
ALTER TABLE paises AUTO_INCREMENT = 1;