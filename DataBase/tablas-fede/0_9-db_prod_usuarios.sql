CREATE DATABASE  IF NOT EXISTS `0223TDPRON1C7LAED0621PT_GRUPO5`;
USE `0223TDPRON1C7LAED0621PT_GRUPO5`;

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `usuario_id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `apellido` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `contrasenia` varchar(100) DEFAULT NULL,
  `rol_id` int NOT NULL,
  PRIMARY KEY (`usuario_id`),
  KEY `fk_Usuarios_roles1_idx` (`rol_id`),
  CONSTRAINT `fk_Usuarios_roles1` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`rol_id`)
);
ALTER TABLE usuarios AUTO_INCREMENT = 1;