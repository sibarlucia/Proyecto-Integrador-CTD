CREATE DATABASE  IF NOT EXISTS `db_prod`;
USE `db_prod`;

-- crear tabla imagenes
DROP TABLE IF EXISTS `imagenes`;
CREATE TABLE `imagenes` (
  `imagen_id` int NOT NULL AUTO_INCREMENT,
  `url_imagen` varchar(200) DEFAULT NULL,
  `imagen` tinyblob,
  `producto_id` int DEFAULT NULL,
  PRIMARY KEY (`imagen_id`),
  KEY `productoid_idx` (`producto_id`),
  CONSTRAINT `productoid` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`producto_id`)
) ENGINE=InnoDB AUTO_INCREMENT=191 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
ALTER TABLE imagenes AUTO_INCREMENT = 1;