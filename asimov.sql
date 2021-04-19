-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 17, 2021 at 09:01 AM
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
-- Table structure for table `class`
--

DROP TABLE IF EXISTS `class`;
CREATE TABLE IF NOT EXISTS `class` (
  `Class_Id` int NOT NULL AUTO_INCREMENT,
  `Class_Name` varchar(20) NOT NULL,
  `Class_Id_Discipline` int NOT NULL,
  `Class_Id_User` int NOT NULL,
  PRIMARY KEY (`Class_Id`),
  KEY `Class_Id_Discipline` (`Class_Id_Discipline`),
  KEY `Class_Id_User` (`Class_Id_User`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `discipline`
--

DROP TABLE IF EXISTS `discipline`;
CREATE TABLE IF NOT EXISTS `discipline` (
  `Dis_Id` int NOT NULL AUTO_INCREMENT,
  `Dis_Name` varchar(30) DEFAULT NULL,
  `Dis_Id_Mark` int NOT NULL,
  PRIMARY KEY (`Dis_Id`),
  KEY `Dis_Id_Mark` (`Dis_Id_Mark`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `mark`
--

DROP TABLE IF EXISTS `mark`;
CREATE TABLE IF NOT EXISTS `mark` (
  `Mark_Id` int NOT NULL AUTO_INCREMENT,
  `Mark_Value` double NOT NULL,
  `Mark_Id_Discipline` int NOT NULL,
  PRIMARY KEY (`Mark_Id`),
  KEY `Mark_Id_Discipline` (`Mark_Id_Discipline`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `Role_No` int NOT NULL AUTO_INCREMENT,
  `Role_Name` varchar(40) NOT NULL,
  `Role_Id_User` int NOT NULL,
  PRIMARY KEY (`Role_No`),
  KEY `Role_Id_User` (`Role_Id_User`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

DROP TABLE IF EXISTS `schedule`;
CREATE TABLE IF NOT EXISTS `schedule` (
  `Sched_Id_Discipline` int NOT NULL,
  `Sched_Id_Class` int NOT NULL,
  `Sched_Value` time NOT NULL,
  PRIMARY KEY (`Sched_Id_Class`,`Sched_Value`),
  KEY `Sched_Id_Discipline` (`Sched_Id_Discipline`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `U_Id` int NOT NULL AUTO_INCREMENT,
  `U_FirstName` varchar(30) NOT NULL,
  `U_LastName` varchar(70) NOT NULL,
  `U_Username` varchar(70) NOT NULL,
  `U_Password` varchar(70) NOT NULL,
  `U_Id_Role` int NOT NULL,
  PRIMARY KEY (`U_Id`),
  KEY `U_Id_Role` (`U_Id_Role`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `class`
--
ALTER TABLE `class`
  ADD CONSTRAINT `class_ibfk_1` FOREIGN KEY (`Class_Id_Discipline`) REFERENCES `discipline` (`Dis_Id`),
  ADD CONSTRAINT `class_ibfk_2` FOREIGN KEY (`Class_Id_User`) REFERENCES `user` (`U_Id`);

--
-- Constraints for table `discipline`
--
ALTER TABLE `discipline`
  ADD CONSTRAINT `discipline_ibfk_1` FOREIGN KEY (`Dis_Id_Mark`) REFERENCES `mark` (`Mark_Id`);

--
-- Constraints for table `mark`
--
ALTER TABLE `mark`
  ADD CONSTRAINT `mark_ibfk_1` FOREIGN KEY (`Mark_Id_Discipline`) REFERENCES `discipline` (`Dis_Id`);

--
-- Constraints for table `roles`
--
ALTER TABLE `roles`
  ADD CONSTRAINT `roles_ibfk_1` FOREIGN KEY (`Role_Id_User`) REFERENCES `user` (`U_Id`);

--
-- Constraints for table `schedule`
--
ALTER TABLE `schedule`
  ADD CONSTRAINT `schedule_ibfk_1` FOREIGN KEY (`Sched_Id_Class`) REFERENCES `class` (`Class_Id`),
  ADD CONSTRAINT `schedule_ibfk_2` FOREIGN KEY (`Sched_Id_Discipline`) REFERENCES `discipline` (`Dis_Id`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`U_Id_Role`) REFERENCES `roles` (`Role_No`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
