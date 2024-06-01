CREATE TABLE `fesc_hotelero`.`Cities` (
  `CityId` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(100) NOT NULL,
  `CountryId` INT NOT NULL,
  `StateId` INT NOT NULL,
  `CreatedAt` DATETIME NOT NULL,
  `UpdatedAt` DATETIME NOT NULL,
  `CreatedByUserId` INT NOT NULL,
  `UpdatedByUserId` INT NOT NULL,
  `StatusId` INT NOT NULL,
  PRIMARY KEY (`CityId`)
);


SET @col_country_id = (SELECT `CountryId` FROM `Countries` WHERE `Name` = 'Colombia');

INSERT INTO `fesc_hotelero`.`Cities` (`Name`, `CountryId`, `CreatedAt`, `UpdatedAt`, `CreatedByUserId`, `UpdatedByUserId`, `StatusId`, `StateId`) 
VALUES ('Cúcuta', @col_country_id, NOW(), NOW(), 1, 1, 1, (SELECT StateId FROM `States` WHERE `Name` = 'Norte de Santander'));



