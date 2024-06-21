-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql.ingsoftwarefesc.com
-- Generation Time: Jun 21, 2024 at 09:18 AM
-- Server version: 8.4.0
-- PHP Version: 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `feschotelero`
--

-- --------------------------------------------------------

--
-- Table structure for table `Agencies`
--

CREATE TABLE `Agencies` (
  `AgencyId` int NOT NULL,
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
  `HotelId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Agencies`
--

INSERT INTO `Agencies` (`AgencyId`, `Name`, `Description`, `Email`, `Phone`, `Address`, `CountryId`, `CityId`, `ZIP`, `CreatedAt`, `UpdatedAt`, `CreatedByUserId`, `UpdatedByUserId`, `StatusId`, `HotelId`) VALUES
(1, 'Agencia 1', 'string', 'agencia1@gmail.com', '+573118916293', 'av 5 cll 7 centro', 1, 1, 'xddd', '2024-05-05 10:14:13', '2024-05-05 10:14:13', 0, 0, 0, 0),
(2, 'Agencia 2', NULL, NULL, '+573118916293', NULL, 1, 1, NULL, '2024-05-05 10:32:36', '2024-05-05 10:32:36', 0, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `Airlines`
--

CREATE TABLE `Airlines` (
  `AirlineId` int NOT NULL,
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
  `HotelId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Airlines`
--

INSERT INTO `Airlines` (`AirlineId`, `Name`, `Description`, `Email`, `Phone`, `Address`, `CountryId`, `CityId`, `ZIP`, `CreatedAt`, `UpdatedAt`, `CreatedByUserId`, `UpdatedByUserId`, `StatusId`, `HotelId`) VALUES
(1, 'Avianca', 'Colombian airline', 'info@avianca.com', '123-456-7890', 'Street 123, Bogota', 1, 1, '00000', '2024-06-11 09:26:56', '2024-06-11 09:26:56', 1, 1, 1, 1),
(2, 'LATAM', 'South American airline', 'info@latam.com', '098-765-4321', 'Avenue 456, Santiago', 2, 2, '11111', '2024-06-11 09:26:56', '2024-06-11 09:26:56', 1, 1, 1, 1),
(3, 'American Airlines', 'Major American airline', 'info@aa.com', '222-333-4444', 'Boulevard 789, Dallas', 3, 3, '22222', '2024-06-11 09:26:56', '2024-06-11 09:26:56', 1, 1, 1, 1),
(4, 'Delta Air Lines', 'Major American airline', 'info@delta.com', '555-666-7777', 'Parkway 101, Atlanta', 3, 4, '33333', '2024-06-11 09:26:56', '2024-06-11 09:26:56', 1, 1, 1, 1),
(5, 'United Airlines', 'Major American airline', 'info@united.com', '888-999-0000', 'Road 202, Chicago', 3, 5, '44444', '2024-06-11 09:26:56', '2024-06-11 09:26:56', 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `BookingGroups`
--

CREATE TABLE `BookingGroups` (
  `bookingId` int NOT NULL,
  `hotelPlanId` int NOT NULL,
  `hotelPlanName` varchar(250) NOT NULL,
  `companyId` int NOT NULL,
  `companyName` varchar(250) NOT NULL,
  `companyAddress` varchar(250) NOT NULL,
  `companyPhone` varchar(15) NOT NULL,
  `companyEmail` varchar(250) NOT NULL,
  `contactName` varchar(250) NOT NULL,
  `contactWorkPosition` varchar(250) NOT NULL,
  `contactMethodId` int NOT NULL,
  `contactMethodName` varchar(100) NOT NULL,
  `segment01` varchar(250) NOT NULL,
  `segment02` varchar(250) NOT NULL,
  `segment03` varchar(250) NOT NULL,
  `transport` varchar(250) NOT NULL,
  `airlineId` int NOT NULL,
  `airlineName` varchar(250) NOT NULL,
  `flight` varchar(250) NOT NULL,
  `countryId` int NOT NULL,
  `countryName` varchar(250) NOT NULL,
  `stateId` int NOT NULL,
  `stateName` varchar(250) NOT NULL,
  `cityId` int NOT NULL,
  `cityName` varchar(250) NOT NULL,
  `allot` tinyint(1) NOT NULL,
  `grp` tinyint(1) NOT NULL,
  `quotationDate` datetime NOT NULL,
  `arrivalDate` datetime NOT NULL,
  `departureDate` datetime NOT NULL,
  `numberOfNights` int NOT NULL,
  `guaranteeDate` date NOT NULL,
  `guaranteeId` int NOT NULL,
  `guaranteeName` varchar(150) NOT NULL,
  `depositId` int NOT NULL,
  `depositName` varchar(100) NOT NULL,
  `travelPurposeId` int NOT NULL,
  `travelPurposeName` varchar(100) NOT NULL,
  `agencyId` int NOT NULL,
  `agencyName` varchar(250) NOT NULL,
  `commissionable` tinyint(1) NOT NULL,
  `rateId` int NOT NULL,
  `rateName` varchar(250) NOT NULL,
  `currencyId` int NOT NULL,
  `currencyName` varchar(250) NOT NULL,
  `reservationStatusId` int NOT NULL,
  `reservationStatusName` varchar(100) NOT NULL,
  `masterFolio` int NOT NULL,
  `hideRate` tinyint(1) NOT NULL,
  `discount` tinyint(1) NOT NULL,
  `rateToCharge` decimal(10,2) NOT NULL,
  `packageDiscount` decimal(10,2) NOT NULL,
  `accountingAccountId` int NOT NULL,
  `accountingAccountName` varchar(250) NOT NULL,
  `complex` varchar(250) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `createdByUserId` int NOT NULL,
  `updatedByUserId` int NOT NULL,
  `statusId` int NOT NULL,
  `hotelId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Bookings`
--

CREATE TABLE `Bookings` (
  `bookingId` int NOT NULL,
  `bookingType` enum('individual','group') NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `createdByUserId` int NOT NULL,
  `updatedByUserId` int NOT NULL,
  `statusId` int NOT NULL,
  `hotelId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `CancellationReasons`
--

CREATE TABLE `CancellationReasons` (
  `CancellationId` int NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Description` text,
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `CreatedByUserId` int NOT NULL,
  `UpdatedByUserId` int NOT NULL,
  `StatusId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Cities`
--

CREATE TABLE `Cities` (
  `CityId` int NOT NULL,
  `Name` varchar(100) NOT NULL,
  `CountryId` int NOT NULL,
  `StateId` int NOT NULL,
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `CreatedByUserId` int NOT NULL,
  `UpdatedByUserId` int NOT NULL,
  `StatusId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Cities`
--

INSERT INTO `Cities` (`CityId`, `Name`, `CountryId`, `StateId`, `CreatedAt`, `UpdatedAt`, `CreatedByUserId`, `UpdatedByUserId`, `StatusId`) VALUES
(1, 'Cúcuta', 42, 71, '2024-05-31 07:23:33', '2024-05-31 07:23:33', 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `Companies`
--

CREATE TABLE `Companies` (
  `CompanyId` int NOT NULL,
  `Name` varchar(250) NOT NULL,
  `Address` varchar(250) NOT NULL,
  `CityId` int NOT NULL,
  `StateId` int NOT NULL,
  `CountryId` int NOT NULL,
  `Phone` varchar(20) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `CreatedByUserId` int NOT NULL,
  `UpdatedByUserId` int NOT NULL,
  `StatusId` int NOT NULL,
  `HotelId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Companies`
--

INSERT INTO `Companies` (`CompanyId`, `Name`, `Address`, `CityId`, `StateId`, `CountryId`, `Phone`, `Email`, `CreatedAt`, `UpdatedAt`, `CreatedByUserId`, `UpdatedByUserId`, `StatusId`, `HotelId`) VALUES
(1, 'Empresa A', 'Dirección Empresa A', 1, 71, 42, '123456789', 'empresaA@example.com', '2024-05-31 08:52:21', '2024-05-31 08:52:21', 1, 1, 1, 1),
(2, 'Empresa B', 'Dirección Empresa B', 1, 71, 42, '987654321', 'empresaB@example.com', '2024-05-31 08:52:21', '2024-05-31 08:52:21', 1, 1, 1, 1),
(3, 'Empresa C', 'Dirección Empresa C', 1, 71, 42, '111222333', 'empresaC@example.com', '2024-05-31 08:52:21', '2024-05-31 08:52:21', 1, 1, 1, 1),
(4, 'Empresa D', 'Dirección Empresa D', 1, 71, 42, '444555666', 'empresaD@example.com', '2024-05-31 08:52:21', '2024-05-31 08:52:21', 1, 1, 1, 1),
(5, 'Empresa E', 'Dirección Empresa E', 1, 71, 42, '777888999', 'empresaE@example.com', '2024-05-31 08:52:21', '2024-05-31 08:52:21', 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `Countries`
--

CREATE TABLE `Countries` (
  `CountryId` int NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Code` char(3) NOT NULL,
  `PriorityOrder` int DEFAULT '0',
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `CreatedByUserId` int NOT NULL,
  `UpdatedByUserId` int NOT NULL,
  `StatusId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Countries`
--

INSERT INTO `Countries` (`CountryId`, `Name`, `Code`, `PriorityOrder`, `CreatedAt`, `UpdatedAt`, `CreatedByUserId`, `UpdatedByUserId`, `StatusId`) VALUES
(1, 'Afganistán', 'AFG', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(2, 'Albania', 'ALB', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(3, 'Alemania', 'DEU', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(4, 'Andorra', 'AND', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(5, 'Angola', 'AGO', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(6, 'Antigua y Barbuda', 'ATG', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(7, 'Arabia Saudita', 'SAU', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(8, 'Argelia', 'DZA', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(9, 'Argentina', 'ARG', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(10, 'Armenia', 'ARM', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(11, 'Australia', 'AUS', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(12, 'Austria', 'AUT', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(13, 'Azerbaiyán', 'AZE', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(14, 'Bahamas', 'BHS', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(15, 'Bangladés', 'BGD', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(16, 'Barbados', 'BRB', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(17, 'Baréin', 'BHR', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(18, 'Bélgica', 'BEL', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(19, 'Belice', 'BLZ', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(20, 'Benín', 'BEN', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(21, 'Bielorrusia', 'BLR', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(22, 'Birmania', 'MMR', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(23, 'Bolivia', 'BOL', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(24, 'Bosnia y Herzegovina', 'BIH', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(25, 'Botsuana', 'BWA', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(26, 'Brasil', 'BRA', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(27, 'Brunéi', 'BRN', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(28, 'Bulgaria', 'BGR', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(29, 'Burkina Faso', 'BFA', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(30, 'Burundi', 'BDI', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(31, 'Bután', 'BTN', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(32, 'Cabo Verde', 'CPV', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(33, 'Camboya', 'KHM', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(34, 'Camerún', 'CMR', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(35, 'Canadá', 'CAN', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(36, 'Catar', 'QAT', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(37, 'Chad', 'TCD', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(38, 'Chile', 'CHL', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(39, 'China', 'CHN', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(40, 'Chipre', 'CYP', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(41, 'Ciudad del Vaticano', 'VAT', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(42, 'Colombia', 'COL', 1, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(43, 'Comoras', 'COM', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(44, 'Corea del Norte', 'PRK', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(45, 'Corea del Sur', 'KOR', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(46, 'Costa de Marfil', 'CIV', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(47, 'Costa Rica', 'CRI', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(48, 'Croacia', 'HRV', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(49, 'Cuba', 'CUB', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(50, 'Dinamarca', 'DNK', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(51, 'Djibouti', 'DJI', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(52, 'Dominica', 'DMA', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(53, 'Dominicana, República', 'DOM', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(54, 'Ecuador', 'ECU', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(55, 'Egipto', 'EGY', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(56, 'El Salvador', 'SLV', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(57, 'Emiratos Árabes Unidos', 'ARE', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(58, 'Eritrea', 'ERI', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(59, 'Eslovaquia', 'SVK', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(60, 'Eslovenia', 'SVN', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(61, 'España', 'ESP', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(62, 'Estados Unidos de América', 'USA', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(63, 'Estonia', 'EST', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(64, 'Eswatini', 'SWZ', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(65, 'Etiopía', 'ETH', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(66, 'Filipinas', 'PHL', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(67, 'Finlandia', 'FIN', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(68, 'Fiyi', 'FJI', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(69, 'Francia', 'FRA', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(70, 'Gabón', 'GAB', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(71, 'Gambia', 'GMB', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(72, 'Georgia', 'GEO', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(73, 'Ghana', 'GHA', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(74, 'Granada', 'GRD', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(75, 'Grecia', 'GRC', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(76, 'Guatemala', 'GTM', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(77, 'Guinea', 'GIN', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(78, 'Guinea Ecuatorial', 'GNQ', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(79, 'Guinea-Bisáu', 'GNB', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(80, 'Guyana', 'GUY', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(81, 'Haití', 'HTI', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(82, 'Honduras', 'HND', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(83, 'Hungría', 'HUN', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(84, 'India', 'IND', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(85, 'Indonesia', 'IDN', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(86, 'Irak', 'IRQ', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(87, 'Irán', 'IRN', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(88, 'Irlanda', 'IRL', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(89, 'Islandia', 'ISL', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(90, 'Islas Marshall', 'MHL', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(91, 'Islas Salomón', 'SLB', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(92, 'Israel', 'ISR', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(93, 'Italia', 'ITA', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(94, 'Jamaica', 'JAM', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(95, 'Japón', 'JPN', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(96, 'Jordania', 'JOR', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(97, 'Kazajistán', 'KAZ', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(98, 'Kenia', 'KEN', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(99, 'Kirguistán', 'KGZ', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(100, 'Kiribati', 'KIR', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(101, 'Kuwait', 'KWT', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(102, 'Laos', 'LAO', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(103, 'Lesoto', 'LSO', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(104, 'Letonia', 'LVA', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(105, 'Líbano', 'LBN', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(106, 'Liberia', 'LBR', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(107, 'Libia', 'LBY', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(108, 'Liechtenstein', 'LIE', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(109, 'Lituania', 'LTU', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(110, 'Luxemburgo', 'LUX', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(111, 'Madagascar', 'MDG', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(112, 'Malasia', 'MYS', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(113, 'Malaui', 'MWI', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(114, 'Maldivas', 'MDV', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(115, 'Malí', 'MLI', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(116, 'Malta', 'MLT', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(117, 'Marruecos', 'MAR', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(118, 'Mauricio', 'MUS', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(119, 'Mauritania', 'MRT', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(120, 'México', 'MEX', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(121, 'Micronesia', 'FSM', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(122, 'Moldavia', 'MDA', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(123, 'Mónaco', 'MCO', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(124, 'Mongolia', 'MNG', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(125, 'Montenegro', 'MNE', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(126, 'Mozambique', 'MOZ', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(127, 'Namibia', 'NAM', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(128, 'Nauru', 'NRU', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(129, 'Nepal', 'NPL', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(130, 'Nicaragua', 'NIC', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(131, 'Níger', 'NER', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(132, 'Nigeria', 'NGA', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(133, 'Noruega', 'NOR', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(134, 'Nueva Zelanda', 'NZL', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(135, 'Omán', 'OMN', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(136, 'Pakistán', 'PAK', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(137, 'Palaos', 'PLW', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(138, 'Panamá', 'PAN', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(139, 'Papúa Nueva Guinea', 'PNG', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(140, 'Paraguay', 'PRY', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(141, 'Perú', 'PER', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(142, 'Polonia', 'POL', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(143, 'Portugal', 'PRT', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(144, 'Qatar', 'QAT', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(145, 'Reino Unido', 'GBR', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(146, 'República Centroafricana', 'CAF', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(147, 'República Checa', 'CZE', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(148, 'República de Macedonia del Norte', 'MKD', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(149, 'República del Congo', 'COG', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(150, 'República Democrática del Congo', 'COD', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(151, 'República Dominicana', 'DOM', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(152, 'Ruanda', 'RWA', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(153, 'Rumania', 'ROU', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(154, 'Rusia', 'RUS', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(155, 'Samoa', 'WSM', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(156, 'San Cristóbal y Nieves', 'KNA', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(157, 'San Marino', 'SMR', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(158, 'San Vicente y las Granadinas', 'VCT', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(159, 'Santa Lucía', 'LCA', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(160, 'Santo Tomé y Príncipe', 'STP', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(161, 'Senegal', 'SEN', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(162, 'Serbia', 'SRB', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(163, 'Seychelles', 'SYC', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(164, 'Sierra Leona', 'SLE', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(165, 'Singapur', 'SGP', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(166, 'Siria', 'SYR', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(167, 'Somalia', 'SOM', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(168, 'Sri Lanka', 'LKA', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(169, 'Suazilandia', 'SWZ', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(170, 'Sudáfrica', 'ZAF', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(171, 'Sudán', 'SDN', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(172, 'Sudán del Sur', 'SSD', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(173, 'Suecia', 'SWE', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(174, 'Suiza', 'CHE', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(175, 'Surinam', 'SUR', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(176, 'Tailandia', 'THA', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(177, 'Tanzania', 'TZA', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(178, 'Tayikistán', 'TJK', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(179, 'Timor Oriental', 'TLS', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(180, 'Togo', 'TGO', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(181, 'Tonga', 'TON', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(182, 'Trinidad y Tobago', 'TTO', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(183, 'Túnez', 'TUN', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(184, 'Turkmenistán', 'TKM', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(185, 'Turquía', 'TUR', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(186, 'Tuvalu', 'TUV', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(187, 'Ucrania', 'UKR', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(188, 'Uganda', 'UGA', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(189, 'Uruguay', 'URY', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(190, 'Uzbekistán', 'UZB', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(191, 'Vanuatu', 'VUT', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(192, 'Vaticano', 'VAT', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(193, 'Venezuela', 'VEN', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(194, 'Vietnam', 'VNM', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(195, 'Yemen', 'YEM', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(196, 'Yibuti', 'DJI', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1),
(197, 'Zambia', 'ZMB', 0, '2024-05-31 06:43:55', '2024-05-31 06:43:55', 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `Guests`
--

CREATE TABLE `Guests` (
  `GuestId` int NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Lastname` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Phone` varchar(20) DEFAULT NULL,
  `Address` varchar(200) DEFAULT NULL,
  `CityId` int DEFAULT NULL,
  `CountryId` int DEFAULT NULL,
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `CreatedByUserId` int NOT NULL,
  `UpdatedByUserId` int NOT NULL,
  `StatusId` int NOT NULL,
  `HotelId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `HotelEvents`
--

CREATE TABLE `HotelEvents` (
  `HotelEventId` int NOT NULL,
  `Name` varchar(150) NOT NULL,
  `Description` text,
  `StartDate` date NOT NULL,
  `EndDate` date NOT NULL,
  `StartTime` time DEFAULT NULL,
  `EndTime` time DEFAULT NULL,
  `Location` varchar(100) DEFAULT NULL,
  `Capacity` int DEFAULT NULL,
  `Price` decimal(10,2) DEFAULT NULL,
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `CreatedByUserId` int NOT NULL,
  `UpdatedByUserId` int NOT NULL,
  `StatusId` int NOT NULL,
  `HotelId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `HotelPlans`
--

CREATE TABLE `HotelPlans` (
  `HotelPlanId` int NOT NULL,
  `Name` varchar(250) NOT NULL,
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `CreatedByUserId` int NOT NULL,
  `UpdatedByUserId` int NOT NULL,
  `StatusId` int NOT NULL,
  `HotelId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `HotelPlans`
--

INSERT INTO `HotelPlans` (`HotelPlanId`, `Name`, `CreatedAt`, `UpdatedAt`, `CreatedByUserId`, `UpdatedByUserId`, `StatusId`, `HotelId`) VALUES
(1, 'Plan europeo', '2024-05-31 09:43:28', '2024-05-31 09:43:28', 1, 1, 1, 1),
(2, 'Continental', '2024-05-31 09:43:28', '2024-05-31 09:43:28', 1, 1, 1, 1),
(3, 'Americano modificado', '2024-05-31 09:43:28', '2024-05-31 09:43:28', 1, 1, 1, 1),
(4, 'Americano', '2024-05-31 09:43:28', '2024-05-31 09:43:28', 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `HotelPlanServices`
--

CREATE TABLE `HotelPlanServices` (
  `HotelPlanServiceId` int NOT NULL,
  `HotelPlanId` int NOT NULL,
  `HotelServiceId` int NOT NULL,
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `CreatedByUserId` int NOT NULL,
  `UpdatedByUserId` int NOT NULL,
  `StatusId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `HotelPlanServices`
--

INSERT INTO `HotelPlanServices` (`HotelPlanServiceId`, `HotelPlanId`, `HotelServiceId`, `CreatedAt`, `UpdatedAt`, `CreatedByUserId`, `UpdatedByUserId`, `StatusId`) VALUES
(1, 1, 1, '2024-05-31 10:01:55', '2024-05-31 10:01:55', 1, 1, 1),
(2, 2, 1, '2024-05-31 10:01:55', '2024-05-31 10:01:55', 1, 1, 1),
(3, 2, 2, '2024-05-31 10:01:55', '2024-05-31 10:01:55', 1, 1, 1),
(4, 3, 1, '2024-05-31 10:01:55', '2024-05-31 10:01:55', 1, 1, 1),
(5, 3, 2, '2024-05-31 10:01:55', '2024-05-31 10:01:55', 1, 1, 1),
(6, 3, 3, '2024-05-31 10:01:55', '2024-05-31 10:01:55', 1, 1, 1),
(7, 4, 1, '2024-05-31 10:01:55', '2024-05-31 10:01:55', 1, 1, 1),
(8, 4, 2, '2024-05-31 10:01:55', '2024-05-31 10:01:55', 1, 1, 1),
(9, 4, 3, '2024-05-31 10:01:55', '2024-05-31 10:01:55', 1, 1, 1),
(10, 4, 4, '2024-05-31 10:01:55', '2024-05-31 10:01:55', 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `Hotels`
--

CREATE TABLE `Hotels` (
  `HotelId` int NOT NULL,
  `Name` varchar(250) NOT NULL,
  `Address` varchar(250) NOT NULL,
  `CityId` int NOT NULL,
  `CountryId` int NOT NULL,
  `Phone` varchar(20) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `CreatedByUserId` int NOT NULL,
  `UpdatedByUserId` int NOT NULL,
  `StatusId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `HotelServices`
--

CREATE TABLE `HotelServices` (
  `HotelServiceId` int NOT NULL,
  `Name` varchar(250) NOT NULL,
  `Value` decimal(10,2) NOT NULL,
  `ApplyAdditionalNight` tinyint(1) NOT NULL,
  `Periodicity` int NOT NULL,
  `FromNightNumber` int NOT NULL,
  `FromAdditionalNightNumber` int NOT NULL,
  `MandatoryPerPerson` tinyint(1) NOT NULL,
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `CreatedByUserId` int NOT NULL,
  `UpdatedByUserId` int NOT NULL,
  `StatusId` int NOT NULL,
  `HotelId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `HotelServices`
--

INSERT INTO `HotelServices` (`HotelServiceId`, `Name`, `Value`, `ApplyAdditionalNight`, `Periodicity`, `FromNightNumber`, `FromAdditionalNightNumber`, `MandatoryPerPerson`, `CreatedAt`, `UpdatedAt`, `CreatedByUserId`, `UpdatedByUserId`, `StatusId`, `HotelId`) VALUES
(1, 'Alojamiento', 0.00, 1, 999, 0, 1, 0, '2024-05-31 09:32:39', '2024-05-31 09:32:39', 1, 1, 1, 1),
(2, 'Desayuno', 10000.00, 1, 999, 1, 1, 1, '2024-05-31 09:32:39', '2024-05-31 09:32:39', 1, 1, 1, 1),
(3, 'Almuerzo', 100000.00, 0, 999, 0, 0, 1, '2024-05-31 09:32:39', '2024-05-31 09:32:39', 1, 1, 1, 1),
(4, 'Cena', 120000.00, 0, 999, 0, 0, 1, '2024-05-31 09:32:39', '2024-05-31 09:32:39', 1, 1, 1, 1),
(5, 'Room Service', 17000.00, 0, 999, 0, 0, 1, '2024-05-31 09:32:39', '2024-05-31 09:32:39', 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `States`
--

CREATE TABLE `States` (
  `StateId` int NOT NULL,
  `Name` varchar(100) NOT NULL,
  `CountryId` int NOT NULL,
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `CreatedByUserId` int NOT NULL,
  `UpdatedByUserId` int NOT NULL,
  `StatusId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `States`
--

INSERT INTO `States` (`StateId`, `Name`, `CountryId`, `CreatedAt`, `UpdatedAt`, `CreatedByUserId`, `UpdatedByUserId`, `StatusId`) VALUES
(1, 'Alabama', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(2, 'Alaska', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(3, 'Arizona', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(4, 'Arkansas', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(5, 'California', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(6, 'Colorado', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(7, 'Connecticut', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(8, 'Delaware', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(9, 'Florida', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(10, 'Georgia', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(11, 'Hawái', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(12, 'Idaho', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(13, 'Illinois', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(14, 'Indiana', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(15, 'Iowa', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(16, 'Kansas', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(17, 'Kentucky', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(18, 'Luisiana', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(19, 'Maine', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(20, 'Maryland', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(21, 'Massachusetts', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(22, 'Míchigan', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(23, 'Minnesota', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(24, 'Misisipi', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(25, 'Misuri', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(26, 'Montana', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(27, 'Nebraska', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(28, 'Nevada', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(29, 'Nueva Hampshire', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(30, 'Nueva Jersey', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(31, 'Nueva York', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(32, 'Nuevo México', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(33, 'Carolina del Norte', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(34, 'Dakota del Norte', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(35, 'Ohio', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(36, 'Oklahoma', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(37, 'Oregón', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(38, 'Pensilvania', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(39, 'Rhode Island', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(40, 'Carolina del Sur', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(41, 'Dakota del Sur', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(42, 'Texas', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(43, 'Utah', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(44, 'Vermont', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(45, 'Virginia', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(46, 'Washington', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(47, 'Virginia Occidental', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(48, 'Wisconsin', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(49, 'Wyoming', 62, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(50, 'Amazonas', 42, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(51, 'Antioquia', 42, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(52, 'Arauca', 42, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(53, 'Atlántico', 42, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(54, 'Bolívar', 42, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(55, 'Boyacá', 42, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(56, 'Caldas', 42, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(57, 'Caquetá', 42, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(58, 'Casanare', 42, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(59, 'Cauca', 42, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(60, 'Cesar', 42, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(61, 'Chocó', 42, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(62, 'Córdoba', 42, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(63, 'Cundinamarca', 42, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(64, 'Guainía', 42, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(65, 'Guaviare', 42, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(66, 'Huila', 42, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(67, 'La Guajira', 42, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(68, 'Magdalena', 42, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(69, 'Meta', 42, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(70, 'Nariño', 42, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(71, 'Norte de Santander', 42, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(72, 'Putumayo', 42, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(73, 'Quindío', 42, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(74, 'Risaralda', 42, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(75, 'San Andrés y Providencia', 42, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(76, 'Santander', 42, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(77, 'Sucre', 42, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(78, 'Tolima', 42, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(79, 'Valle del Cauca', 42, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1),
(80, 'Vaupés', 42, '2024-05-31 07:10:21', '2024-05-31 07:10:21', 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `UserId` int NOT NULL,
  `Email` varchar(150) NOT NULL,
  `Password` text NOT NULL,
  `FullName` varchar(200) NOT NULL,
  `RoleId` int DEFAULT '0',
  `DepartmentId` int DEFAULT '0',
  `Phone` varchar(20) NOT NULL,
  `CreatedAt` datetime NOT NULL,
  `UpdatedAt` datetime NOT NULL,
  `CreatedByUserId` int NOT NULL,
  `UpdatedByUserId` int NOT NULL,
  `StatusId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`UserId`, `Email`, `Password`, `FullName`, `RoleId`, `DepartmentId`, `Phone`, `CreatedAt`, `UpdatedAt`, `CreatedByUserId`, `UpdatedByUserId`, `StatusId`) VALUES
(1, 'doc_js_galindo@fesc.edu.co', 'abcd1234', 'Juan Sebastian Galindo', 0, 0, '+573118916293', '2024-04-06 21:29:48', '2024-04-06 21:29:48', 0, 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Agencies`
--
ALTER TABLE `Agencies`
  ADD PRIMARY KEY (`AgencyId`);

--
-- Indexes for table `Airlines`
--
ALTER TABLE `Airlines`
  ADD PRIMARY KEY (`AirlineId`);

--
-- Indexes for table `BookingGroups`
--
ALTER TABLE `BookingGroups`
  ADD PRIMARY KEY (`bookingId`);

--
-- Indexes for table `Bookings`
--
ALTER TABLE `Bookings`
  ADD PRIMARY KEY (`bookingId`);

--
-- Indexes for table `CancellationReasons`
--
ALTER TABLE `CancellationReasons`
  ADD PRIMARY KEY (`CancellationId`);

--
-- Indexes for table `Cities`
--
ALTER TABLE `Cities`
  ADD PRIMARY KEY (`CityId`);

--
-- Indexes for table `Companies`
--
ALTER TABLE `Companies`
  ADD PRIMARY KEY (`CompanyId`);

--
-- Indexes for table `Countries`
--
ALTER TABLE `Countries`
  ADD PRIMARY KEY (`CountryId`);

--
-- Indexes for table `Guests`
--
ALTER TABLE `Guests`
  ADD PRIMARY KEY (`GuestId`),
  ADD UNIQUE KEY `Email_UNIQUE` (`Email`);

--
-- Indexes for table `HotelEvents`
--
ALTER TABLE `HotelEvents`
  ADD PRIMARY KEY (`HotelEventId`);

--
-- Indexes for table `HotelPlans`
--
ALTER TABLE `HotelPlans`
  ADD PRIMARY KEY (`HotelPlanId`);

--
-- Indexes for table `HotelPlanServices`
--
ALTER TABLE `HotelPlanServices`
  ADD PRIMARY KEY (`HotelPlanServiceId`),
  ADD KEY `HotelPlanId` (`HotelPlanId`),
  ADD KEY `HotelServiceId` (`HotelServiceId`);

--
-- Indexes for table `Hotels`
--
ALTER TABLE `Hotels`
  ADD PRIMARY KEY (`HotelId`);

--
-- Indexes for table `HotelServices`
--
ALTER TABLE `HotelServices`
  ADD PRIMARY KEY (`HotelServiceId`);

--
-- Indexes for table `States`
--
ALTER TABLE `States`
  ADD PRIMARY KEY (`StateId`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`UserId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Agencies`
--
ALTER TABLE `Agencies`
  MODIFY `AgencyId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `Airlines`
--
ALTER TABLE `Airlines`
  MODIFY `AirlineId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `Bookings`
--
ALTER TABLE `Bookings`
  MODIFY `bookingId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `CancellationReasons`
--
ALTER TABLE `CancellationReasons`
  MODIFY `CancellationId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Cities`
--
ALTER TABLE `Cities`
  MODIFY `CityId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Companies`
--
ALTER TABLE `Companies`
  MODIFY `CompanyId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `Countries`
--
ALTER TABLE `Countries`
  MODIFY `CountryId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=199;

--
-- AUTO_INCREMENT for table `Guests`
--
ALTER TABLE `Guests`
  MODIFY `GuestId` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `HotelEvents`
--
ALTER TABLE `HotelEvents`
  MODIFY `HotelEventId` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `HotelPlans`
--
ALTER TABLE `HotelPlans`
  MODIFY `HotelPlanId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `HotelPlanServices`
--
ALTER TABLE `HotelPlanServices`
  MODIFY `HotelPlanServiceId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `Hotels`
--
ALTER TABLE `Hotels`
  MODIFY `HotelId` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `HotelServices`
--
ALTER TABLE `HotelServices`
  MODIFY `HotelServiceId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `States`
--
ALTER TABLE `States`
  MODIFY `StateId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `UserId` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `HotelPlanServices`
--
ALTER TABLE `HotelPlanServices`
  ADD CONSTRAINT `HotelPlanServices_ibfk_1` FOREIGN KEY (`HotelPlanId`) REFERENCES `HotelPlans` (`HotelPlanId`) ON DELETE CASCADE,
  ADD CONSTRAINT `HotelPlanServices_ibfk_2` FOREIGN KEY (`HotelServiceId`) REFERENCES `HotelServices` (`HotelServiceId`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
