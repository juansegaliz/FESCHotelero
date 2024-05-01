﻿CREATE TABLE `fesc_hotelero`.`Hotels` (
  `HotelId` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(250) NOT NULL,
  `Address` VARCHAR(250) NOT NULL,
  `CityId` INT NOT NULL,
  `CountryId` INT NOT NULL,
  `Phone` VARCHAR(20) NOT NULL,
  `Email` VARCHAR(100) NOT NULL,
  `CreatedAt` DATETIME NOT NULL,
  `UpdatedAt` DATETIME NOT NULL,
  `CreatedByUserId` INT NOT NULL,
  `UpdatedByUserId` INT NOT NULL,
  `StatusId` INT NOT NULL,
  PRIMARY KEY (`HotelId`));