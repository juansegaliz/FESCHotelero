CREATE TABLE `fesc_hotelero`.`Guests` (
  `GuestId` INT NOT NULL,
  `Name` VARCHAR(100) NOT NULL,
  `Lastname` VARCHAR(100) NOT NULL,
  `Email` VARCHAR(100) NOT NULL,
  `Phone` VARCHAR(20) NULL,
  `Address` VARCHAR(200) NULL,
  `CityId` INT NULL,
  `CountryId` INT NULL,
  `CreatedAt` DATETIME NOT NULL,
  `UpdatedAt` DATETIME NOT NULL,
  `CreatedByUserId` INT NOT NULL,
  `UpdatedByUserId` INT NOT NULL,
  `StatusId` INT NOT NULL,
  `HotelId` INT NOT NULL,
  PRIMARY KEY (`GuestId`),
  UNIQUE INDEX `Email_UNIQUE` (`Email` ASC) VISIBLE);

ALTER TABLE `fesc_hotelero`.`Guests` 
CHANGE COLUMN `GuestId` `GuestId` INT NOT NULL AUTO_INCREMENT ;