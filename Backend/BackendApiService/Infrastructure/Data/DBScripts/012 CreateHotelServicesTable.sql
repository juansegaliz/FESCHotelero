CREATE TABLE `fesc_hotelero`.`HotelServices` (
  `HotelServiceId` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(250) NOT NULL,
  `Value` DECIMAL(10, 2) NOT NULL,
  `ApplyAdditionalNight` BOOLEAN NOT NULL,
  `Periodicity` INT NOT NULL,
  `FromNightNumber` INT NOT NULL,
  `FromAdditionalNightNumber` INT NOT NULL,
  `MandatoryPerPerson` BOOLEAN NOT NULL,
  `CreatedAt` DATETIME NOT NULL,
  `UpdatedAt` DATETIME NOT NULL,
  `CreatedByUserId` INT NOT NULL,
  `UpdatedByUserId` INT NOT NULL,
  `StatusId` INT NOT NULL,
  `HotelId` INT NOT NULL,
  PRIMARY KEY (`HotelServiceId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `fesc_hotelero`.`HotelServices` (
  `Name`, `Value`, `ApplyAdditionalNight`, `Periodicity`, `FromNightNumber`, `FromAdditionalNightNumber`, 
  `MandatoryPerPerson`, `CreatedAt`, `UpdatedAt`, `CreatedByUserId`, `UpdatedByUserId`, `StatusId`, `HotelId`
) VALUES (
  'Alojamiento', 0, TRUE, 999, 0, 1, FALSE, NOW(), NOW(), 1, 1, 1, 1
), (
  'Desayuno', 10000, TRUE, 999, 1, 1, TRUE, NOW(), NOW(), 1, 1, 1, 1
), (
  'Almuerzo', 100000, FALSE, 999, 0, 0, TRUE, NOW(), NOW(), 1, 1, 1, 1
), (
  'Cena', 120000, FALSE, 999, 0, 0, TRUE, NOW(), NOW(), 1, 1, 1, 1
), (
  'Room Service', 17000, FALSE, 999, 0, 0, TRUE, NOW(), NOW(), 1, 1, 1, 1
);