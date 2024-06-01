
CREATE TABLE `fesc_hotelero`.`Companies` (
  `CompanyId` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(250) NOT NULL,
  `Address` VARCHAR(250) NOT NULL,
  `CityId` INT NOT NULL,
  `StateId` INT NOT NULL,
  `CountryId` INT NOT NULL,
  `Phone` VARCHAR(20) NOT NULL,
  `Email` VARCHAR(100) NOT NULL,
  `CreatedAt` DATETIME NOT NULL,
  `UpdatedAt` DATETIME NOT NULL,
  `CreatedByUserId` INT NOT NULL,
  `UpdatedByUserId` INT NOT NULL,
  `StatusId` INT NOT NULL,
  `HotelId` int NOT NULL,
  PRIMARY KEY (`CompanyId`));

  
SET @col_country_id = (SELECT `CountryId` FROM `Countries` WHERE `Name` = 'Colombia');
SET @nds_state_id = (SELECT StateId FROM `States` WHERE `Name` = 'Norte de Santander');
SET @cuc_city_id = (SELECT CityId FROM Cities WHERE `Name` = 'Cúcuta');


INSERT INTO `fesc_hotelero`.`Companies` (`Name`, `Address`, `CityId`, `StateId`, `CountryId`, `Phone`, `Email`, `CreatedAt`, `UpdatedAt`, `CreatedByUserId`, `UpdatedByUserId`, `StatusId`, `HotelId`)
VALUES
('Empresa A', 'Dirección Empresa A', @cuc_city_id, @nds_state_id, @col_country_id, '123456789', 'empresaA@example.com', NOW(), NOW(), 1, 1, 1, 1),
('Empresa B', 'Dirección Empresa B', @cuc_city_id, @nds_state_id, @col_country_id, '987654321', 'empresaB@example.com', NOW(), NOW(), 1, 1, 1, 1),
('Empresa C', 'Dirección Empresa C', @cuc_city_id, @nds_state_id, @col_country_id, '111222333', 'empresaC@example.com', NOW(), NOW(), 1, 1, 1, 1),
('Empresa D', 'Dirección Empresa D', @cuc_city_id, @nds_state_id, @col_country_id, '444555666', 'empresaD@example.com', NOW(), NOW(), 1, 1, 1, 1),
('Empresa E', 'Dirección Empresa E', @cuc_city_id, @nds_state_id, @col_country_id, '777888999', 'empresaE@example.com', NOW(), NOW(), 1, 1, 1, 1);


