-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 22, 2021 at 04:32 PM
-- Server version: 8.0.21
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `asimov`
--
CREATE DATABASE IF NOT EXISTS `asimov` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `asimov`;

-- --------------------------------------------------------

--
-- Table structure for table `assignationteacher_discipline`
--

DROP TABLE IF EXISTS `assignationteacher_discipline`;
CREATE TABLE IF NOT EXISTS `assignationteacher_discipline` (
  `Assign_T_Id` int NOT NULL,
  `Assign_Dis_Id` int NOT NULL,
  PRIMARY KEY (`Assign_T_Id`,`Assign_Dis_Id`),
  KEY `assign_ibfk_4` (`Assign_Dis_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `assignationteacher_promo`
--

DROP TABLE IF EXISTS `assignationteacher_promo`;
CREATE TABLE IF NOT EXISTS `assignationteacher_promo` (
  `Assign_T_Id` int NOT NULL,
  `Assign_Promo_Id` int NOT NULL,
  PRIMARY KEY (`Assign_T_Id`,`Assign_Promo_Id`),
  KEY `assign_ibfk_2` (`Assign_Promo_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `class`
--

DROP TABLE IF EXISTS `class`;
CREATE TABLE IF NOT EXISTS `class` (
  `Class_Id` int NOT NULL AUTO_INCREMENT,
  `Class_Name` varchar(20) NOT NULL,
  PRIMARY KEY (`Class_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `discipline`
--

DROP TABLE IF EXISTS `discipline`;
CREATE TABLE IF NOT EXISTS `discipline` (
  `Dis_Id` int NOT NULL AUTO_INCREMENT,
  `Dis_Name` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`Dis_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `lesson`
--

DROP TABLE IF EXISTS `lesson`;
CREATE TABLE IF NOT EXISTS `lesson` (
  `L_Id` int NOT NULL AUTO_INCREMENT,
  `L_HeureDebut` time NOT NULL,
  `L_HeureFin` time NOT NULL,
  `L_Id_Discipline` int NOT NULL,
  `L_Id_Promotion` int NOT NULL,
  `L_Id_Teacher` int NOT NULL,
  PRIMARY KEY (`L_Id`),
  KEY `L_Id_Discipline` (`L_Id_Discipline`),
  KEY `L_Id_Promotion` (`L_Id_Promotion`),
  KEY `L_Id_Teacher` (`L_Id_Teacher`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `mark`
--

DROP TABLE IF EXISTS `mark`;
CREATE TABLE IF NOT EXISTS `mark` (
  `Mark_Id` int NOT NULL AUTO_INCREMENT,
  `Mark_Value` double NOT NULL,
  `Mark_Id_Discipline` int NOT NULL,
  `Mark_Id_Student` int NOT NULL,
  `Mark_Id_Promotion` int NOT NULL,
  PRIMARY KEY (`Mark_Id`),
  KEY `Mark_Id_Discipline` (`Mark_Id_Discipline`),
  KEY `Mark_Id_Student` (`Mark_Id_Student`),
  KEY `Mark_Id_Promotion` (`Mark_Id_Promotion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `promotion`
--

DROP TABLE IF EXISTS `promotion`;
CREATE TABLE IF NOT EXISTS `promotion` (
  `Promo_Id` int NOT NULL AUTO_INCREMENT,
  `Promo_libelle` varchar(30) NOT NULL,
  `Promo_Year` varchar(70) NOT NULL,
  `Promo_Id_Class` int NOT NULL,
  PRIMARY KEY (`Promo_Id`),
  KEY `promotion_ibfk_2` (`Promo_Id_Class`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `Role_Id` int NOT NULL AUTO_INCREMENT,
  `Role_Name` varchar(40) NOT NULL,
  PRIMARY KEY (`Role_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
CREATE TABLE IF NOT EXISTS `student` (
  `Stu_Id` int NOT NULL AUTO_INCREMENT,
  `Stu_Firstname` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Stu_Lastname` varchar(70) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Stu_Username` varchar(70) NOT NULL,
  `Stu_Password` varchar(70) NOT NULL,
  `Stu_Id_Promotion` int NOT NULL,
  PRIMARY KEY (`Stu_Id`),
  KEY `Stu_Id_Promotion` (`Stu_Id_Promotion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

DROP TABLE IF EXISTS `teacher`;
CREATE TABLE IF NOT EXISTS `teacher` (
  `T_Id` int NOT NULL AUTO_INCREMENT,
  `T_Firstname` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `T_Lastname` varchar(70) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `T_Username` varchar(70) NOT NULL,
  `T_Password` varchar(70) NOT NULL,
  `T_Id_Role` int NOT NULL,
  PRIMARY KEY (`T_Id`),
  KEY `T_Id_Role` (`T_Id_Role`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `assignationteacher_discipline`
--
ALTER TABLE `assignationteacher_discipline`
  ADD CONSTRAINT `assign_ibfk_3` FOREIGN KEY (`Assign_T_Id`) REFERENCES `teacher` (`T_Id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `assign_ibfk_4` FOREIGN KEY (`Assign_Dis_Id`) REFERENCES `discipline` (`Dis_Id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `assignationteacher_promo`
--
ALTER TABLE `assignationteacher_promo`
  ADD CONSTRAINT `assign_ibfk_1` FOREIGN KEY (`Assign_T_Id`) REFERENCES `teacher` (`T_Id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `assign_ibfk_2` FOREIGN KEY (`Assign_Promo_Id`) REFERENCES `promotion` (`Promo_Id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `lesson`
--
ALTER TABLE `lesson`
  ADD CONSTRAINT `lesson_ibfk_1` FOREIGN KEY (`L_Id_Promotion`) REFERENCES `promotion` (`Promo_Id`),
  ADD CONSTRAINT `lesson_ibfk_2` FOREIGN KEY (`L_Id_Discipline`) REFERENCES `discipline` (`Dis_Id`);

--
-- Constraints for table `mark`
--
ALTER TABLE `mark`
  ADD CONSTRAINT `mark_ibfk_1` FOREIGN KEY (`Mark_Id_Discipline`) REFERENCES `discipline` (`Dis_Id`),
  ADD CONSTRAINT `mark_ibfk_2` FOREIGN KEY (`Mark_Id_Student`) REFERENCES `student` (`Stu_Id`),
  ADD CONSTRAINT `mark_ibfk_3` FOREIGN KEY (`Mark_Id_Promotion`) REFERENCES `promotion` (`Promo_Id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `promotion`
--
ALTER TABLE `promotion`
  ADD CONSTRAINT `promotion_ibfk_2` FOREIGN KEY (`Promo_Id_Class`) REFERENCES `class` (`Class_Id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_ibfk_2` FOREIGN KEY (`Stu_Id_Promotion`) REFERENCES `promotion` (`Promo_Id`);

--
-- Constraints for table `teacher`
--
ALTER TABLE `teacher`
  ADD CONSTRAINT `teacher_ibfk_1` FOREIGN KEY (`T_Id_Role`) REFERENCES `roles` (`Role_Id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
