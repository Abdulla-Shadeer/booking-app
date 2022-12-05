-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 05, 2022 at 03:55 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookingapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `hotels`
--

CREATE TABLE `hotels` (
  `id` int(10) NOT NULL,
  `name` varchar(250) NOT NULL,
  `location` varchar(250) NOT NULL,
  `rating` int(5) NOT NULL,
  `image` varchar(250) NOT NULL,
  `features` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`features`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hotels`
--

INSERT INTO `hotels` (`id`, `name`, `location`, `rating`, `image`, `features`) VALUES
(1, 'hotel marriott', 'colombo', 4, 'hotel1.webp', '{\"features\":[\"free wifi\",\"meals included\",\"parking\"]}'),
(2, 'hotel jane', 'kandy', 5, 'hotel2.webp', '{\"features\":[\"free wifi\",\"free cancellation\",\"parking\"]}'),
(3, 'lucky hotels and resorts', 'kandy', 4, 'hotel3.webp', '{\"features\":[\"meals included\",\"parking\"]}'),
(4, 'hotel ceylone', 'galle', 5, 'hotel4.webp', '{\"features\":[\"parking\"]}'),
(5, 'aman resorts', 'kandy', 5, 'hotel5.webp', '{\"features\":[\"free wifi\",\"parking\"]}');

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `room_id` int(10) NOT NULL,
  `type` varchar(250) NOT NULL,
  `available` tinyint(1) NOT NULL,
  `hotel_id` int(10) NOT NULL,
  `price` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`room_id`, `type`, `available`, `hotel_id`, `price`) VALUES
(1, 'family', 1, 1, '8000'),
(2, 'family', 1, 1, '12000'),
(3, 'single', 1, 2, '5600'),
(4, 'family', 1, 2, '13000'),
(5, 'single', 1, 3, '7000'),
(6, 'family', 1, 4, '16000'),
(7, 'family', 1, 5, '8000'),
(8, 'single', 1, 1, '12000'),
(9, 'single', 1, 5, '5000'),
(10, 'family', 1, 2, '16000'),
(11, 'family', 1, 3, '21000'),
(12, 'family', 1, 4, '9000'),
(13, 'single', 1, 4, '7000'),
(14, 'family', 1, 2, '6000'),
(15, 'single', 1, 1, '6000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hotels`
--
ALTER TABLE `hotels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`room_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hotels`
--
ALTER TABLE `hotels`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `room_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
