CREATE DATABASE  IF NOT EXISTS `db_prod`;
USE `db_prod`;

-- crear tabla politicas_types
DROP TABLE IF EXISTS `politicas_types`;
CREATE TABLE `politicas_types` (
  `politicas_types_id` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(200) NOT NULL,
  PRIMARY KEY (`politicas_types_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
ALTER TABLE politicas_types AUTO_INCREMENT = 1;