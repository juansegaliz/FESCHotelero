-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema fesc_hotelero
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema fesc_hotelero
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `fesc_hotelero` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `fesc_hotelero` ;

-- -----------------------------------------------------
-- Table `fesc_hotelero`.`Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `fesc_hotelero`.`Users` (
  `UserId` INT NOT NULL AUTO_INCREMENT,
  `Email` VARCHAR(150) NOT NULL,
  `Password` TEXT NOT NULL,
  `FullName` VARCHAR(200) NOT NULL,
  `RoleId` INT NULL DEFAULT '0',
  `DepartmentId` INT NULL DEFAULT '0',
  `Phone` VARCHAR(20) NOT NULL,
  `CreatedAt` DATETIME NOT NULL,
  `UpdatedAt` DATETIME NOT NULL,
  `CreatedByUserId` INT NOT NULL,
  `UpdatedByUserId` INT NOT NULL,
  `StatusId` INT NOT NULL,
  PRIMARY KEY (`UserId`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
