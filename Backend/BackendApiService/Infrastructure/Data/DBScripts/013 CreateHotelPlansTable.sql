CREATE TABLE `HotelPlans` (
  `HotelPlanId` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(250) NOT NULL,
  `CreatedAt` DATETIME NOT NULL,
  `UpdatedAt` DATETIME NOT NULL,
  `CreatedByUserId` INT NOT NULL,
  `UpdatedByUserId` INT NOT NULL,
  `StatusId` INT NOT NULL,
  `HotelId` INT NOT NULL,
  PRIMARY KEY (`HotelPlanId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `HotelPlanServices` (
  `HotelPlanServiceId` INT NOT NULL AUTO_INCREMENT,
  `HotelPlanId` INT NOT NULL,
  `HotelServiceId` INT NOT NULL,
  `CreatedAt` DATETIME NOT NULL,
  `UpdatedAt` DATETIME NOT NULL,
  `CreatedByUserId` INT NOT NULL,
  `UpdatedByUserId` INT NOT NULL,
  `StatusId` INT NOT NULL,
  PRIMARY KEY (`HotelPlanServiceId`),
  FOREIGN KEY (`HotelPlanId`) REFERENCES `HotelPlans`(`HotelPlanId`) ON DELETE CASCADE,
  FOREIGN KEY (`HotelServiceId`) REFERENCES `HotelServices`(`HotelServiceId`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `HotelPlans` (`Name`, `CreatedAt`, `UpdatedAt`, `CreatedByUserId`, `UpdatedByUserId`, `StatusId`, `HotelId`)
VALUES 
('Plan europeo', NOW(), NOW(), 1, 1, 1, 1),
('Continental', NOW(), NOW(), 1, 1, 1, 1),
('Americano modificado', NOW(), NOW(), 1, 1, 1, 1),
('Americano', NOW(), NOW(), 1, 1, 1, 1);



SET @alojamiento_id = (SELECT HotelServiceId FROM HotelServices WHERE `Name` = 'Alojamiento' AND `HotelId` = 1);
SET @desayuno_id = (SELECT HotelServiceId FROM HotelServices WHERE `Name` = 'Desayuno' AND `HotelId` = 1);
SET @almuerzo_id = (SELECT HotelServiceId FROM HotelServices WHERE `Name` = 'Almuerzo' AND `HotelId` = 1);
SET @cena_id = (SELECT HotelServiceId FROM HotelServices WHERE `Name` = 'Cena' AND `HotelId` = 1);
SET @roomservice_id = (SELECT HotelServiceId FROM HotelServices WHERE `Name` = 'Room Service' AND `HotelId` = 1);

SET @europeo_id = (SELECT HotelPlanId FROM HotelPlans WHERE `Name` = 'Plan europeo' AND `HotelId` = 1);
SET @continental_id = (SELECT HotelPlanId FROM HotelPlans WHERE `Name` = 'Continental' AND `HotelId` = 1);
SET @americanomod_id = (SELECT HotelPlanId FROM HotelPlans WHERE `Name` = 'Americano modificado' AND `HotelId` = 1);
SET @americano_id = (SELECT HotelPlanId FROM HotelPlans WHERE `Name` = 'Americano' AND `HotelId` = 1);


INSERT INTO `HotelPlanServices` (`HotelPlanId`, `HotelServiceId`, `CreatedAt`, `UpdatedAt`, `CreatedByUserId`, `UpdatedByUserId`, `StatusId`)
VALUES 
(@europeo_id, @alojamiento_id, NOW(), NOW(), 1, 1, 1),
(@continental_id, @alojamiento_id, NOW(), NOW(), 1, 1, 1), 
(@continental_id, @desayuno_id, NOW(), NOW(), 1, 1, 1),
(@americanomod_id, @alojamiento_id, NOW(), NOW(), 1, 1, 1), 
(@americanomod_id, @desayuno_id, NOW(), NOW(), 1, 1, 1),
(@americanomod_id, @almuerzo_id, NOW(), NOW(), 1, 1, 1),
(@americano_id, @alojamiento_id, NOW(), NOW(), 1, 1, 1), 
(@americano_id, @desayuno_id, NOW(), NOW(), 1, 1, 1),
(@americano_id, @almuerzo_id, NOW(), NOW(), 1, 1, 1),
(@americano_id, @cena_id, NOW(), NOW(), 1, 1, 1); 