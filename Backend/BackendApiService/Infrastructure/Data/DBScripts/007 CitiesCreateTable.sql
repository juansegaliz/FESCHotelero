CREATE TABLE `fesc_hotelero`.`Cities` (
  `CityId` INT NOT NULL,
  `Name` VARCHAR(100) NOT NULL,
  `CountryId` INT NOT NULL,
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `CreatedByUserId` int NOT NULL,
  `UpdatedByUserId` int NOT NULL,
  `StatusId` int NOT NULL,
  PRIMARY KEY (`CityId`));

ALTER TABLE `fesc_hotelero`.`Cities` 
CHANGE COLUMN `CityId` `CityId` INT NOT NULL AUTO_INCREMENT ;

ALTER TABLE `fesc_hotelero`.`Cities` 
ADD COLUMN `StateId` INT NOT NULL AFTER `CountryId`;
