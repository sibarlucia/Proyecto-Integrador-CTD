CREATE DATABASE  IF NOT EXISTS `0223TDPRON1C7LAED0621PT_GRUPO5`;
USE `0223TDPRON1C7LAED0621PT_GRUPO5`;

DROP TABLE IF EXISTS `reservas`;
CREATE TABLE `reservas` (
  `reserva_id` int NOT NULL AUTO_INCREMENT,
  `fecha_ingreso` datetime DEFAULT NULL,
  `fecha_egreso` datetime DEFAULT NULL,
  `producto_id` int NOT NULL,
  `resenia_id` int DEFAULT NULL,
  `usuario_id` int NOT NULL,
  `ciudad_usuario` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`reserva_id`),
  KEY `fk_reservas_productos1_idx` (`producto_id`),
  KEY `fk_reservas_resenias1_idx` (`resenia_id`),
  KEY `fk_reservas_Usuarios1_idx` (`usuario_id`),
  CONSTRAINT `fk_reservas_productos1` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`producto_id`),
  CONSTRAINT `fk_reservas_resenias1` FOREIGN KEY (`resenia_id`) REFERENCES `resenias` (`resenia_id`),
  CONSTRAINT `fk_reservas_Usuarios1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`)
);
ALTER TABLE reservas AUTO_INCREMENT = 1;