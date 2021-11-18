-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 29, 2021 at 11:33 AM
-- Server version: 5.5.8
-- PHP Version: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `node_mysql_crud_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE IF NOT EXISTS `employees` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `organization` varchar(255) NOT NULL,
  `designation` varchar(100) NOT NULL,
  `salary` decimal(11,2) unsigned DEFAULT '0.00',
  `status` tinyint(3) unsigned DEFAULT '0',
  `is_deleted` tinyint(3) unsigned DEFAULT '0',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `first_name`, `last_name`, `email`, `phone`, `organization`, `designation`, `salary`, `status`, `is_deleted`, `created_at`, `updated_at`) VALUES
(1, 'John', 'Doe', 'johndoe@gmail.com', '1234567890', 'BR Softech Pvt Ltd', 'Full Stack Developer', '500.00', 1, 0, '2019-11-19 03:30:30', '0000-00-00 00:00:00'),
(2, 'Jane', 'Doe', 'janedoe@gmail.com', '9876543210', 'RG Infotech Jaipur', 'PHP Developer', '450.00', 1, 0, '2019-11-19 03:35:30', '0000-00-00 00:00:00'),
(3, 'ramu', 'ram', 'ramu@gmail.com', '99457512457', 'lcc', 'dev', '500.00', 1, 0, '2021-10-29 10:21:08', '2021-10-29 10:21:08'),
(4, 'Manu', 'raj', 'manuraj@gmail.com', '99475457', 'Lcc', 'staff', '200.00', 1, 0, '2021-10-29 12:04:03', '2021-10-29 12:04:03'),
(5, 'shiva', 'ram', 'shiva@gmail.com', '94457125457', 'LCC', 'staff', '50000.00', 1, 0, '2021-10-29 16:36:07', '2021-10-29 16:36:07'),
(6, 'sam', 'manu', 'sam@gmail.com', '99745547', 'lcc', 'hard', '4000.00', 1, 0, '2021-10-29 16:40:31', '2021-10-29 16:40:31');
