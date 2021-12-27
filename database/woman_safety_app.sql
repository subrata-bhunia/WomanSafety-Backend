-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 27, 2021 at 10:57 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `woman_safety_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `audio_record`
--

CREATE TABLE `audio_record` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `url` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `crime_record`
--

CREATE TABLE `crime_record` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `type` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `criminal_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `criminals`
--

CREATE TABLE `criminals` (
  `criminal_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `photo_upload`
--

CREATE TABLE `photo_upload` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `url` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sos_info`
--

CREATE TABLE `sos_info` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone1` bigint(12) NOT NULL,
  `phone2` bigint(12) DEFAULT NULL,
  `relation` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `unsecure_place`
--

CREATE TABLE `unsecure_place` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `latt` varchar(255) DEFAULT NULL,
  `lang` varchar(255) DEFAULT NULL,
  `images` varchar(255) DEFAULT NULL,
  `video` varchar(255) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` bigint(12) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `aadhar_card` bigint(12) NOT NULL,
  `auth_key` varchar(255) DEFAULT NULL,
  `last_location` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `full_name`, `email`, `phone`, `photo`, `password`, `aadhar_card`, `auth_key`, `last_location`, `created_at`) VALUES
(0, 'purbita', 'pur@gmail.com', 9903540650, NULL, 'purbita', 12343389, NULL, NULL, '2021-12-09 13:17:00'),
(1307766, 'subrata', 'subrata@gmail.com', 9903540670, NULL, '$2b$10$I3RJu7RJnqwi25SLXft9uOZ/MNsPnIHAq3DwdiuPyuPkXTqPP/Z5C', 12543389, NULL, NULL, '2021-12-27 20:53:52'),
(4378282, 'Subrata Bhunia', 'abc@ab.ac', 7318915280, NULL, '$2b$10$zVubYIB2dMHNdlJPzkb22e9QXCkKhkVXD880YU82V5GwVfOjPryDe', 123456789011, NULL, NULL, '2021-12-06 16:43:57'),
(4928402, 'mandira', 'mandiraroymukherjee@gmail.com', 7044513001, NULL, '$2b$10$3iFuvsXJsNW.UjOsKPTZT.gbH9gVJ1BZ5xbcPPlAA7jrB0EfRGOZC', 123456789, NULL, NULL, '2021-12-06 18:24:20');

-- --------------------------------------------------------

--
-- Table structure for table `video_record`
--

CREATE TABLE `video_record` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `url` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `audio_record`
--
ALTER TABLE `audio_record`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `crime_record`
--
ALTER TABLE `crime_record`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `crime_record_ibfk_2` (`criminal_id`);

--
-- Indexes for table `criminals`
--
ALTER TABLE `criminals`
  ADD PRIMARY KEY (`criminal_id`);

--
-- Indexes for table `photo_upload`
--
ALTER TABLE `photo_upload`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `sos_info`
--
ALTER TABLE `sos_info`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sos_info_fk_1` (`user_id`);

--
-- Indexes for table `unsecure_place`
--
ALTER TABLE `unsecure_place`
  ADD PRIMARY KEY (`id`),
  ADD KEY `created_by` (`created_by`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `phone` (`phone`),
  ADD UNIQUE KEY `aadhar_card` (`aadhar_card`);

--
-- Indexes for table `video_record`
--
ALTER TABLE `video_record`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `audio_record`
--
ALTER TABLE `audio_record`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `crime_record`
--
ALTER TABLE `crime_record`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `photo_upload`
--
ALTER TABLE `photo_upload`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sos_info`
--
ALTER TABLE `sos_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `unsecure_place`
--
ALTER TABLE `unsecure_place`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `video_record`
--
ALTER TABLE `video_record`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `audio_record`
--
ALTER TABLE `audio_record`
  ADD CONSTRAINT `audio_record_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `crime_record`
--
ALTER TABLE `crime_record`
  ADD CONSTRAINT `crime_record_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `crime_record_ibfk_2` FOREIGN KEY (`criminal_id`) REFERENCES `criminals` (`criminal_id`);

--
-- Constraints for table `photo_upload`
--
ALTER TABLE `photo_upload`
  ADD CONSTRAINT `photo_upload_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `sos_info`
--
ALTER TABLE `sos_info`
  ADD CONSTRAINT `sos_info_fk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `unsecure_place`
--
ALTER TABLE `unsecure_place`
  ADD CONSTRAINT `unsecure_place_ibfk_1` FOREIGN KEY (`created_by`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `video_record`
--
ALTER TABLE `video_record`
  ADD CONSTRAINT `video_record_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
