CREATE DATABASE  IF NOT EXISTS `db_prod`;
USE `db_prod`;

-- crear tabla politicas
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
ALTER TABLE politicas AUTO_INCREMENT = 1;
