CREATE TABLE `Airlines` (
  `AirlineId` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(250) NOT NULL,
  `Description` text,
  `Email` varchar(100) DEFAULT NULL,
  `Phone` varchar(20) DEFAULT NULL,
  `Address` varchar(250) DEFAULT NULL,
  `CountryId` int NOT NULL,
  `CityId` int NOT NULL,
  `ZIP` varchar(20) DEFAULT NULL,
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `CreatedByUserId` int NOT NULL,
  `UpdatedByUserId` int NOT NULL,
  `StatusId` int NOT NULL,
  `HotelId` int NOT NULL,
  PRIMARY KEY (`AirlineId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `Airlines` (`Name`, `Description`, `Email`, `Phone`, `Address`, `CountryId`, `CityId`, `ZIP`, `CreatedAt`, `UpdatedAt`, `CreatedByUserId`, `UpdatedByUserId`, `StatusId`, `HotelId`)
VALUES
('Avianca', 'Colombian airline', 'info@avianca.com', '123-456-7890', 'Street 123, Bogota', 1, 1, '00000', NOW(), NOW(), 1, 1, 1, 1),
('LATAM', 'South American airline', 'info@latam.com', '098-765-4321', 'Avenue 456, Santiago', 2, 2, '11111', NOW(), NOW(), 1, 1, 1, 1),
('American Airlines', 'Major American airline', 'info@aa.com', '222-333-4444', 'Boulevard 789, Dallas', 3, 3, '22222', NOW(), NOW(), 1, 1, 1, 1),
('Delta Air Lines', 'Major American airline', 'info@delta.com', '555-666-7777', 'Parkway 101, Atlanta', 3, 4, '33333', NOW(), NOW(), 1, 1, 1, 1),
('United Airlines', 'Major American airline', 'info@united.com', '888-999-0000', 'Road 202, Chicago', 3, 5, '44444', NOW(), NOW(), 1, 1, 1, 1);