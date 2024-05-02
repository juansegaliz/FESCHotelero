CREATE TABLE `fesc_hotelero`.`HotelEvents` (
  `HotelEventId` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(150) NULL,
  `Description` TEXT NULL,
  `StartDate` DATE NOT NULL,
  `EndDate` DATE NOT NULL,
  `StartTime` TIME NULL,
  `EndTime` TIME NULL,
  `Location` VARCHAR(100) NULL,
  `Capacity` INT NULL,
  `Price` DECIMAL(10,2) NULL,
  `CreatedAt` DATETIME NOT NULL,
  `UpdatedAt` DATETIME NOT NULL,
  `CreatedByUserId` INT NOT NULL,
  `UpdatedByUserId` INT NOT NULL,
  `StatusId` INT NOT NULL,
  `HotelId` INT NOT NULL,
  PRIMARY KEY (`HotelEventId`));

ALTER TABLE `fesc_hotelero`.`HotelEvents` 
CHANGE COLUMN `Name` `Name` VARCHAR(150) NOT NULL ;