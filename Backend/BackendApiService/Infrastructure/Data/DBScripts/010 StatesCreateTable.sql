CREATE TABLE `States` (
  `StateId` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) NOT NULL,
  `CountryId` int NOT NULL,
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `CreatedByUserId` int NOT NULL,
  `UpdatedByUserId` int NOT NULL,
  `StatusId` int NOT NULL,
  PRIMARY KEY (`StateId`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
