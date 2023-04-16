CREATE DATABASE  IF NOT EXISTS `db_prod`;
USE `db_prod`;

DROP TABLE IF EXISTS `productos_reservas`;
CREATE TABLE `productos_reservas` (
  `productos_reservas_id` int NOT NULL AUTO_INCREMENT,
  `producto_id` int DEFAULT NULL,
  `reserva_id` int DEFAULT NULL,
  PRIMARY KEY (`productos_reservas_id`),
  KEY `producto_id_idx` (`producto_id`),
  KEY `reserva_id_idx` (`reserva_id`),
  CONSTRAINT `producto_id` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`producto_id`),
  CONSTRAINT `reserva_id` FOREIGN KEY (`reserva_id`) REFERENCES `reservas` (`reserva_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
ALTER TABLE productos_reservas AUTO_INCREMENT = 1;