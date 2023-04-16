CREATE DATABASE  IF NOT EXISTS `db_prod`;
USE `db_prod`;

-- crear tabla productos
DROP TABLE IF EXISTS `productos`;
CREATE TABLE `productos` (
  `producto_id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) DEFAULT NULL,
  `descripcion` varchar(300) DEFAULT NULL,
  `ubicacion` varchar(45) DEFAULT NULL,
  `ciudad_id` int DEFAULT NULL,
  `categoria_id` int DEFAULT NULL,
  PRIMARY KEY (`producto_id`),
  KEY `ciudadid_idx` (`ciudad_id`),
  KEY `categoriaid_idx` (`categoria_id`),
  CONSTRAINT `categoriaid` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`categoria_id`),
  CONSTRAINT `ciudadid` FOREIGN KEY (`ciudad_id`) REFERENCES `ciudades` (`ciudad_id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
ALTER TABLE productos AUTO_INCREMENT = 1;