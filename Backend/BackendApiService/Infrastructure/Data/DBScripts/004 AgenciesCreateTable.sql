CREATE TABLE `fesc_hotelero`.`Agencies` (
  `Agencyid` INT NOT NULL,
  `Name` VARCHAR(250) NOT NULL,
  `Description` TEXT NULL DEFAULT NULL,
  `Email` VARCHAR(100) NULL DEFAULT NULL,
  `Phone` VARCHAR(20) NULL DEFAULT NULL,
  `Address` VARCHAR(250) NULL DEFAULT NULL,
  `CountryId` INT NOT NULL,
  `CityId` INT NOT NULL,
  `ZIP` VARCHAR(20) NULL DEFAULT NULL,
  `CreatedAt` DATETIME NOT NULL,
  `UpdatedAt` DATETIME NOT NULL,
  `CreatedByUserId` INT NOT NULL,
  `UpdatedByUserId` INT NOT NULL,
  `StatusId` INT NOT NULL);

ALTER TABLE `fesc_hotelero`.`Agencies` 
ADD COLUMN `HotelId` INT NOT NULL AFTER `StatusId`;

ALTER TABLE `fesc_hotelero`.`Agencies` 
CHANGE COLUMN `Agencyid` `Agencyid` INT NOT NULL AUTO_INCREMENT ,
ADD PRIMARY KEY (`Agencyid`);
;

ALTER TABLE `fesc_hotelero`.`Agencies` 
CHANGE COLUMN `Agencyid` `AgencyId` INT NOT NULL AUTO_INCREMENT ;