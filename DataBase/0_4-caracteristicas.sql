CREATE DATABASE  IF NOT EXISTS `db_prod`;
USE `db_prod`;

DROP TABLE IF EXISTS `caracteristicas`;
CREATE TABLE `caracteristicas` (
  `caracteristica_id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `icono` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`caracteristica_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
ALTER TABLE caracteristicas AUTO_INCREMENT = 1;