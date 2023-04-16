CREATE DATABASE  IF NOT EXISTS `db_prod`;
USE `db_prod`;

-- crear tabla reservas
DROP TABLE IF EXISTS `reservas`;
CREATE TABLE `reservas` (
  `reserva_id` int NOT NULL AUTO_INCREMENT,
  `fecha_ingreso` date DEFAULT NULL,
  `fecha_egreso` date DEFAULT NULL,
  `producto_id` date DEFAULT NULL,
  PRIMARY KEY (`reserva_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
ALTER TABLE reservas ADD CONSTRAINT `reservas_producto_id`
  FOREIGN KEY (`producto_id`)
  REFERENCES `db_prod`.`productos` (`producto_id`);
ALTER TABLE reservas AUTO_INCREMENT = 1;