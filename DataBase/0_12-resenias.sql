CREATE DATABASE  IF NOT EXISTS `db_prod`;
USE `db_prod`;

-- crear tabla resenias
DROP TABLE IF EXISTS `resenias`;
CREATE TABLE `resenias` (
 `resenia_id` int NOT NULL AUTO_INCREMENT,
  `puntaje` float DEFAULT NULL,
  `comentario` varchar(225) DEFAULT NULL,
  `creado_en` date DEFAULT NULL,
  `actualizado_en` date DEFAULT NULL,
  `reserva_id` int DEFAULT NULL,
  `producto_id` int DEFAULT NULL,
  PRIMARY KEY (`resenia_id`),
  KEY `reservaid_idx` (`reserva_id`),
  KEY `producto_idx` (`producto_id`),
  CONSTRAINT `resenia_producto_id` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`producto_id`),
  CONSTRAINT `resenia_reserva_id` FOREIGN KEY (`reserva_id`) REFERENCES `reservas` (`reserva_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
ALTER TABLE resenias AUTO_INCREMENT = 1;