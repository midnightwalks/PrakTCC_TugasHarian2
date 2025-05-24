-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 27, 2025 at 05:06 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `notes`
--

-- --------------------------------------------------------

--
-- Table structure for table `notesdata`
--

CREATE TABLE `notesdata` (
  `id` int(11) NOT NULL,
  `judul` varchar(80) DEFAULT NULL,
  `isi` text DEFAULT NULL,
  `Tanggal_dibuat` datetime NOT NULL,
  `Tanggal_diupdate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notesdata`
--

INSERT INTO `notesdata` (`id`, `judul`, `isi`, `Tanggal_dibuat`, `Tanggal_diupdate`) VALUES
(5, 'Implementasi IoT pada Vacuum Cleaner Berbasis ESP32 dengan Kontrol Jarak Jauh', 'Dalam era digital saat ini, penggunaan Internet of Things (IoT) semakin berkembang pesat dan diterapkan dalam berbagai aspek kehidupan, termasuk perangkat rumah tangga pintar seperti vacuum cleaner otomatis. Dengan teknologi IoT, vacuum cleaner dapat dikontrol dari jarak jauh melalui aplikasi atau jaringan internet, memberikan efisiensi dalam pembersihan rumah. Pada proyek ini, vacuum cleaner akan menggunakan ESP32 sebagai mikrokontroler utama yang memungkinkan koneksi ke internet melalui Wi-Fi serta komunikasi dengan berbagai sensor untuk navigasi dan kontrol.', '2025-02-27 15:40:41', '2025-02-27 15:42:05'),
(6, 'Cara Mengatur Waktu agar Lebih Produktif dalam Sehari', 'Sering kali kita merasa waktu dalam sehari terasa tidak cukup untuk menyelesaikan semua pekerjaan. Padahal, dengan manajemen waktu yang baik, kita bisa menjadi lebih produktif tanpa harus merasa kelelahan. Salah satu cara yang bisa dilakukan adalah dengan membuat daftar prioritas. Setiap pagi atau malam sebelumnya, tuliskan tugas-tugas yang harus dikerjakan, lalu urutkan berdasarkan tingkat kepentingan dan urgensi. ', '2025-02-27 15:42:59', '2025-02-27 15:42:59'),
(7, 'Kebiasaan Kecil yang Bisa Bikin Hari Lebih Positif', 'Sering kali, suasana hati kita sepanjang hari ditentukan oleh hal-hal kecil yang kita lakukan sejak pagi. Memulai hari dengan bangun tanpa menunda alarm, merapikan tempat tidur, dan minum segelas air putih bisa memberi energi positif sebelum memulai aktivitas. Menyempatkan diri untuk berjemur sebentar atau melakukan peregangan juga bisa membantu tubuh lebih segar dan siap menghadapi tugas-tugas hari ini. Selain itu, membiasakan diri untuk bersyukur, entah dengan menulis jurnal singkat atau sekadar mengingat hal-hal baik yang terjadi, bisa membuat pikiran lebih tenang dan optimis. Meskipun sederhana, kebiasaan kecil ini bisa berdampak besar pada suasana hati dan produktivitas sepanjang hari.', '2025-02-27 15:43:46', '2025-02-27 15:43:46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `notesdata`
--
ALTER TABLE `notesdata`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `notesdata`
--
ALTER TABLE `notesdata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
