CREATE DATABASE  IF NOT EXISTS `db_prod`;
USE `db_prod`;

-- crear tabla ciudades --
DROP TABLE IF EXISTS `ciudades`;
CREATE TABLE `ciudades` (
`ciudad_id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `pais_id` int NOT NULL,
  PRIMARY KEY (`ciudad_id`),
  KEY `id_del_pais_idx` (`pais_id`),
  CONSTRAINT `id_del_pais` FOREIGN KEY (`pais_id`) REFERENCES `paises` (`pais_id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
ALTER TABLE ciudades AUTO_INCREMENT = 1;