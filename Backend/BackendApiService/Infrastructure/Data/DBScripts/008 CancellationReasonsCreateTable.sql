CREATE TABLE `fesc_hotelero`.`CancellationReasons` (
  `CancellationId` INT NOT NULL,
  `Name` VARCHAR(100) NOT NULL,
  `Description` TEXT NULL,
  `CreatedAt` DATETIME NOT NULL,
  `UpdatedAt` DATETIME NOT NULL,
  `CreatedByUserId` INT NOT NULL,
  `UpdatedByUserId` INT NOT NULL,
  `StatusId` INT NOT NULL,
  PRIMARY KEY (`CancellationId`));

ALTER TABLE `fesc_hotelero`.`CancellationReasons` 
CHANGE COLUMN `CancellationId` `CancellationId` INT NOT NULL AUTO_INCREMENT ;
