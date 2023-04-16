CREATE DATABASE  IF NOT EXISTS `db_prod`;
USE `db_prod`;

-- crear tabla productos-caracteristicas
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
ALTER TABLE productos_caracteristicas AUTO_INCREMENT = 1;