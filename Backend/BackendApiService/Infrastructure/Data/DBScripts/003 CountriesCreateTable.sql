CREATE TABLE `fesc_hotelero`.`Countries` (
  `CountryId` INT NOT NULL,
  `Name` VARCHAR(100) NOT NULL,
  `Code` CHAR(3) NOT NULL,
  `CreatedAt` DATETIME NOT NULL,
  `UpdatedAt` DATETIME NOT NULL,
  `CreatedByUserId` INT NOT NULL,
  `UpdatedByUserId` INT NOT NULL,
  `StatusId` INT NOT NULL,
  PRIMARY KEY (`CountryId`));

ALTER TABLE `fesc_hotelero`.`Countries` 
CHANGE COLUMN `CountryId` `CountryId` INT NOT NULL AUTO_INCREMENT ;
