-- MySQL dump 10.13  Distrib 8.0.35, for Linux (x86_64)
--
-- Host: localhost    Database: caremind
-- ------------------------------------------------------
-- Server version	8.0.35-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `education_institute`
--

DROP TABLE IF EXISTS `education_institute`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `education_institute` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `name` varchar(100) NOT NULL DEFAULT '',
  `logo` varchar(2000) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `education_institute`
--

LOCK TABLES `education_institute` WRITE;
/*!40000 ALTER TABLE `education_institute` DISABLE KEYS */;
INSERT INTO `education_institute` VALUES (1,'2023-11-07 07:14:20.314748','2023-11-07 07:14:20.314748','대전_명석고등학교','https://cdn.dtnews24.com/news/photo/201705/102022_422465.jpg'),(2,'2023-11-07 07:14:20.323947','2023-11-10 01:42:59.480319','서울_SJ대학교','https://mblogthumb-phinf.pstatic.net/MjAxODA4MzBfMjEw/MDAxNTM1NjIyNjA5NDYx.V_Zb2yW-y7KyAfZ19IStAfAXew3jjEvuQb7DkyNaIrsg.st7sAayHzkCyi44FGTdcAEUcPiF-42pGE6zJ7oK58OMg.PNG.math-min/%EC%A4%91%EB%A6%AC%EC%A4%91_%EB%A1%9C%EA%B3%A02.png?type=w800'),(3,'2023-11-10 01:43:16.496259','2023-11-13 08:18:13.109688','서울_SS대학교','https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20131018_239%2Fg_nesa_1382065079477HSPYI_JPEG%2F%25BC%25FE%25BD%25C7%25B4%25EB%25C7%25D0%25B1%25B3%25282%2529.jpg&type=sc960_832'),(4,'2023-11-10 01:43:16.503537','2023-11-13 08:17:31.758264','대전_중리중학교','https://cdn.dtnews24.com/news/photo/201705/102022_422465.jpg'),(5,'2023-11-10 01:46:07.055410','2023-11-13 08:17:31.761390','대전_성룡초교','https://cdn.dtnews24.com/news/photo/201705/102022_422465.jpg'),(6,'2023-11-15 05:51:37.926436','2023-11-15 05:51:37.926436','성룡초','https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(7,'2023-11-16 01:35:50.325341','2023-11-16 01:35:50.325341','중리중','https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(8,'2023-11-16 02:25:56.177499','2023-11-16 02:25:56.177499','명석고고','https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(9,'2023-11-16 02:41:02.852876','2023-11-16 02:41:02.852876','명석고','https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(10,'2023-11-17 01:45:28.688514','2023-11-17 01:45:28.688514','성룡초','https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(11,'2023-11-17 01:46:23.663857','2023-11-17 01:46:23.663857','성룡초','https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(12,'2023-11-17 03:08:51.062089','2023-11-17 03:08:51.062089','성룡초','https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(13,'2023-11-17 04:47:18.793184','2023-11-17 04:47:18.793184','성룡초','https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(14,'2023-11-17 04:48:49.874463','2023-11-17 04:48:49.874463','성룡초','https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(15,'2023-11-17 04:58:25.780083','2023-11-17 04:58:25.780083','대전 성룡초','https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(16,'2023-11-17 05:24:51.140838','2023-11-17 05:24:51.140838','성룡초','https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(17,'2023-11-17 05:33:30.984715','2023-11-17 05:33:30.984715','성룡초','https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(18,'2023-11-17 05:38:55.110441','2023-11-17 06:55:48.000000','대전 성룡초등학교','https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(19,'2023-11-17 09:00:30.681669','2023-11-17 09:00:30.681669','명석고','https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(20,'2023-11-17 09:46:01.204633','2023-11-17 09:48:05.000000','대전 성룡초등학교','https://images.unsplash.com/photo-1700087531475-a1cb6e8e68c1?q=80&w=2781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(21,'2023-11-18 08:50:30.262168','2023-11-18 08:50:30.262168','대전 중리중','https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(22,'2023-11-18 09:11:47.442788','2023-11-18 09:11:47.442788','대전 중리중','https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(23,'2023-11-18 10:30:38.760165','2023-11-18 10:30:38.760165','대전 중리중','https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
/*!40000 ALTER TABLE `education_institute` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `experience_company`
--

DROP TABLE IF EXISTS `experience_company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `experience_company` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `logo` varchar(2000) DEFAULT '',
  `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `location` varchar(100) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `experience_company`
--

LOCK TABLES `experience_company` WRITE;
/*!40000 ALTER TABLE `experience_company` DISABLE KEYS */;
INSERT INTO `experience_company` VALUES (1,'Care.M.','https://static.wixstatic.com/media/a6b261_a00b262777ab4929a0d9245c9888d055~mv2.png/v1/fill/w_294,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Caremind_logo_white.png','2023-11-07 06:53:10.193303','2023-11-07 06:53:10.193303','서울시 서초구'),(2,'Z.F.','https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-07 06:53:10.214323','2023-11-07 06:58:34.533233','서울시 관악구'),(3,'Ecre','https://images.unsplash.com/photo-1496200186974-4293800e2c20?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-07 06:53:10.223874','2023-11-07 06:58:34.551572','서울시 구로구'),(4,'W.Th.','https://images.unsplash.com/photo-1562705121-e624542c7b9b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-07 06:53:10.234672','2023-11-07 06:58:34.562290','경기도 파주시'),(5,'K.B.','https://static.wixstatic.com/media/a6b261_a00b262777ab4929a0d9245c9888d055~mv2.png/v1/fill/w_294,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Caremind_logo_white.png','2023-11-10 01:27:46.267623','2023-11-13 08:48:47.521654','서울시 종로구'),(6,'company_6','https://static.wixstatic.com/media/a6b261_a00b262777ab4929a0d9245c9888d055~mv2.png/v1/fill/w_294,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Caremind_logo_white.png','2023-11-10 01:27:46.284153','2023-11-13 08:48:47.537463','location_6'),(7,'company_7','https://static.wixstatic.com/media/a6b261_a00b262777ab4929a0d9245c9888d055~mv2.png/v1/fill/w_294,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Caremind_logo_white.png','2023-11-10 01:27:46.290937','2023-11-13 08:48:47.542425','location_7'),(8,'ecredible','https://images.unsplash.com/photo-1567848117389-76f5a6d955ae?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-14 15:03:19.800841','2023-11-14 15:03:19.800841','구로디지털단지'),(9,'ecredible','https://images.unsplash.com/photo-1567848117389-76f5a6d955ae?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-14 15:03:44.574011','2023-11-14 15:03:44.574011','구로디지털단지'),(10,'ecredible','https://images.unsplash.com/photo-1567848117389-76f5a6d955ae?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-14 15:06:29.329532','2023-11-14 15:06:29.329532','구로디지털단지'),(11,'Woongjin','https://images.unsplash.com/photo-1567848117389-76f5a6d955ae?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 01:32:49.399004','2023-11-16 01:32:49.399004','강서지국'),(12,'Woongjin','https://images.unsplash.com/photo-1567848117389-76f5a6d955ae?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 01:38:35.821013','2023-11-16 01:38:35.821013','강서지국'),(14,'Woongjin','https://images.unsplash.com/photo-1567848117389-76f5a6d955ae?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 02:25:07.513181','2023-11-16 02:25:07.513181','강서지국'),(15,'코오롱베니트','https://images.unsplash.com/photo-1567848117389-76f5a6d955ae?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 09:41:37.322541','2023-11-16 09:41:37.322541','DDP'),(16,'Kolon Benit','https://images.unsplash.com/photo-1567848117389-76f5a6d955ae?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 09:42:02.738891','2023-11-17 06:01:31.000000','동대문역사문화공원역'),(17,'Woongjin','https://images.unsplash.com/photo-1567848117389-76f5a6d955ae?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-17 08:59:19.442242','2023-11-17 08:59:19.442242','강서지국'),(18,'Kolon Benit','https://images.unsplash.com/photo-1699694927230-bea08b4dbd45?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-17 09:41:53.518122','2023-11-17 09:44:25.000000','동대문역사문화공원역'),(19,'Woongjin','https://images.unsplash.com/photo-1567848117389-76f5a6d955ae?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-18 10:23:15.955316','2023-11-18 10:23:15.955316','강서지국'),(20,'Woongjin','https://images.unsplash.com/photo-1567848117389-76f5a6d955ae?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-18 10:23:27.942008','2023-11-18 10:23:27.942008','강서지국'),(21,'Woongjin','https://images.unsplash.com/photo-1567848117389-76f5a6d955ae?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-18 10:30:14.697157','2023-11-18 10:30:14.697157','강서지국');
/*!40000 ALTER TABLE `experience_company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feed`
--

DROP TABLE IF EXISTS `feed`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feed` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(1000) NOT NULL DEFAULT '',
  `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `authorId` int DEFAULT NULL,
  `videoId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `REL_40e2ff758ced4c712d987a7afe` (`videoId`),
  KEY `FK_9eb4e581d64256aa91023a7cc7f` (`authorId`),
  CONSTRAINT `FK_40e2ff758ced4c712d987a7afe2` FOREIGN KEY (`videoId`) REFERENCES `feed_video` (`id`),
  CONSTRAINT `FK_9eb4e581d64256aa91023a7cc7f` FOREIGN KEY (`authorId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feed`
--

LOCK TABLES `feed` WRITE;
/*!40000 ALTER TABLE `feed` DISABLE KEYS */;
/*!40000 ALTER TABLE `feed` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feed_comment`
--

DROP TABLE IF EXISTS `feed_comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feed_comment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(200) NOT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `commentedFeedId` int DEFAULT NULL,
  `commenterId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_b1f335e78e2cd6d224d4e6e76be` (`commenterId`),
  KEY `FK_15ec1fb449aead0b4e7e23166ea` (`commentedFeedId`),
  CONSTRAINT `FK_15ec1fb449aead0b4e7e23166ea` FOREIGN KEY (`commentedFeedId`) REFERENCES `feed` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_b1f335e78e2cd6d224d4e6e76be` FOREIGN KEY (`commenterId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feed_comment`
--

LOCK TABLES `feed_comment` WRITE;
/*!40000 ALTER TABLE `feed_comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `feed_comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feed_image`
--

DROP TABLE IF EXISTS `feed_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feed_image` (
  `id` int NOT NULL AUTO_INCREMENT,
  `imageUrl` varchar(2000) NOT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `feedId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_bd29472b40d1077abdb6fa14207` (`feedId`),
  CONSTRAINT `FK_bd29472b40d1077abdb6fa14207` FOREIGN KEY (`feedId`) REFERENCES `feed` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feed_image`
--

LOCK TABLES `feed_image` WRITE;
/*!40000 ALTER TABLE `feed_image` DISABLE KEYS */;
/*!40000 ALTER TABLE `feed_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feed_like`
--

DROP TABLE IF EXISTS `feed_like`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feed_like` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `likedFeedId` int DEFAULT NULL,
  `likerId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_b9f9d122deb2cb19003289f95e` (`likedFeedId`,`likerId`),
  KEY `FK_96d5de188d3ed915febe039e266` (`likerId`),
  CONSTRAINT `FK_96d5de188d3ed915febe039e266` FOREIGN KEY (`likerId`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_ed4081111f28ba1a35cddd20bb7` FOREIGN KEY (`likedFeedId`) REFERENCES `feed` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feed_like`
--

LOCK TABLES `feed_like` WRITE;
/*!40000 ALTER TABLE `feed_like` DISABLE KEYS */;
/*!40000 ALTER TABLE `feed_like` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feed_tag`
--

DROP TABLE IF EXISTS `feed_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feed_tag` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `feedId` int DEFAULT NULL,
  `tagId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_e875186f4a0f01b72cc3e79eaee` (`feedId`),
  KEY `FK_19f62557b1b3c23dcecc6e78a1e` (`tagId`),
  CONSTRAINT `FK_19f62557b1b3c23dcecc6e78a1e` FOREIGN KEY (`tagId`) REFERENCES `tag` (`id`),
  CONSTRAINT `FK_e875186f4a0f01b72cc3e79eaee` FOREIGN KEY (`feedId`) REFERENCES `feed` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feed_tag`
--

LOCK TABLES `feed_tag` WRITE;
/*!40000 ALTER TABLE `feed_tag` DISABLE KEYS */;
/*!40000 ALTER TABLE `feed_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feed_video`
--

DROP TABLE IF EXISTS `feed_video`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feed_video` (
  `id` int NOT NULL AUTO_INCREMENT,
  `videoUrl` varchar(2000) NOT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feed_video`
--

LOCK TABLES `feed_video` WRITE;
/*!40000 ALTER TABLE `feed_video` DISABLE KEYS */;
/*!40000 ALTER TABLE `feed_video` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profile`
--

DROP TABLE IF EXISTS `profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profile` (
  `id` int NOT NULL AUTO_INCREMENT,
  `about` varchar(500) DEFAULT '',
  `location` varchar(100) DEFAULT '',
  `address` varchar(200) DEFAULT '',
  `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `jobDescription` varchar(500) DEFAULT '',
  `userId` int DEFAULT NULL,
  `profileBackImage` varchar(2000) DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `REL_a24972ebd73b106250713dcddd` (`userId`),
  CONSTRAINT `FK_a24972ebd73b106250713dcddd9` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profile`
--

LOCK TABLES `profile` WRITE;
/*!40000 ALTER TABLE `profile` DISABLE KEYS */;
INSERT INTO `profile` VALUES (1,'about_test','location_test','address_test','2023-11-03 04:30:43.223550','2023-11-13 08:24:34.985845','job_test',8,'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(2,'test_2','test_22','test_222','2023-11-03 04:35:37.596495','2023-11-13 08:24:35.001418','test_2222',9,'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(3,'aboutTest_3','locationTest_33','addressTest_333','2023-11-07 02:08:49.612300','2023-11-13 08:24:35.008578','jobDescriptionTest_3333',11,'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(4,'test_about','test_location','test_address','2023-11-13 06:31:02.683632','2023-11-13 08:43:25.236684','test_jobDescription',19,'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(5,'test_about','test_location','test_address','2023-11-13 06:33:40.995228','2023-11-13 08:43:25.254500','test_jobDescription',21,'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(6,'test_about','test_location','test_address','2023-11-13 06:44:32.122455','2023-11-13 08:43:25.260650','test_jobDescription',22,'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(7,'test_about_1','test_location_1','test_address_1','2023-11-13 06:50:35.323166','2023-11-13 08:43:48.440681','test_jobDescription_1',15,'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(8,'test_about_new','test_location_new','test_address_new','2023-11-13 06:54:05.083006','2023-11-13 08:24:35.038852','test_jobDescription_new',86,'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(11,'','test_location_new','test_address_new','2023-11-13 07:13:55.279352','2023-11-13 08:24:35.049475','',12,'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(13,'','','','2023-11-14 01:54:59.156312','2023-11-14 01:54:59.156312','test_jobDescription_new',13,''),(16,'newtest2\'s about','newtest2\'s location','newtest2\'s address','2023-11-14 14:56:40.882304','2023-11-14 14:56:40.882304','newtest2\'s jobDescription',91,''),(17,'newtest2\'s updated_2 about','newtest2\'s location','newtest2\'s updated_2 address','2023-11-16 01:29:01.354586','2023-11-16 05:56:50.000000','newtest2\'s updated_2 jobDescription',92,''),(20,'create_22\'s updated about','create_22\'s updated location','create_22\'s updated address','2023-11-17 09:29:49.938147','2023-11-21 02:21:04.000000','create_22\'s updated jobDescription',93,'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(21,'혼저옵서예','제주도','서귀포시','2023-11-20 12:44:35.920219','2023-11-21 06:35:38.000000','개발자11',94,'https://images.unsplash.com/photo-1534531173927-aeb928d54385?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
/*!40000 ALTER TABLE `profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profile_education`
--

DROP TABLE IF EXISTS `profile_education`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profile_education` (
  `id` int NOT NULL AUTO_INCREMENT,
  `profileId` int DEFAULT NULL,
  `course` varchar(200) NOT NULL DEFAULT '',
  `description` varchar(1000) DEFAULT '',
  `startDate` date NOT NULL,
  `endDate` date DEFAULT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `educationInstituteId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_41e3a1bdeebb900e507fef40ab2` (`profileId`),
  KEY `FK_b25f0f7ab1bd76342d24505001c` (`educationInstituteId`),
  CONSTRAINT `FK_41e3a1bdeebb900e507fef40ab2` FOREIGN KEY (`profileId`) REFERENCES `profile` (`id`),
  CONSTRAINT `FK_b25f0f7ab1bd76342d24505001c` FOREIGN KEY (`educationInstituteId`) REFERENCES `education_institute` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profile_education`
--

LOCK TABLES `profile_education` WRITE;
/*!40000 ALTER TABLE `profile_education` DISABLE KEYS */;
INSERT INTO `profile_education` VALUES (1,1,'2학년 이과, 3학년 문과','에서 공대 진학','2003-03-01','2006-02-28','2023-11-06 09:55:00.662845','2023-11-07 07:11:29.761757',1),(2,1,'건축공학과','휴학 한 번 없이 졸업','2006-03-01','2012-02-28','2023-11-06 09:55:00.677587','2023-11-07 07:11:29.770700',2),(3,2,'중등교육과정','1학년~3학년까지 모두 3반','2000-03-01','2003-02-28','2023-11-10 01:42:37.633196','2023-11-10 01:44:12.624880',4),(4,2,'화학과','석사과정 포함','2006-03-01','2014-02-28','2023-11-10 01:42:37.652013','2023-11-10 01:44:12.647965',3),(5,3,'경영학과','함덕이','2016-03-01','2022-03-01','2023-11-10 01:42:37.661221','2023-11-10 01:44:12.655971',3),(7,1,'1-1, 2-6, 3-7, 4-7, 5-8, 6-8','성룡 따거','1994-03-01','2000-02-01','2023-11-10 01:45:46.520233','2023-11-13 08:52:33.158530',5),(8,NULL,'body.course!','body.description','2004-03-01','2010-02-28','2023-11-15 05:38:28.408446','2023-11-15 05:38:28.408446',NULL),(9,16,'body.course!','body.description','2004-03-01','2010-02-28','2023-11-15 05:41:45.080627','2023-11-15 05:41:45.080627',NULL),(10,16,'body.course!','body.description','2004-03-01','2010-02-28','2023-11-15 05:48:43.255299','2023-11-15 05:48:43.255299',NULL),(11,16,'body.course!','body.description','2004-03-01','2010-02-28','2023-11-15 05:51:37.932714','2023-11-15 05:51:37.932714',6),(12,17,'create_1\'s co','create_1\'s de','2023-11-15','2023-11-16','2023-11-16 01:35:50.328991','2023-11-16 01:35:50.328991',7),(13,17,'create_1\'s co_업뎃_22','create_1\'s de_업뎃_22','1994-03-01','2000-02-28','2023-11-16 02:25:56.180151','2023-11-17 09:03:10.000000',18),(14,17,'create_1\'s co_2_2','create_1\'s de_2_2','2023-11-15','2023-11-16','2023-11-16 02:41:02.857192','2023-11-16 02:41:02.857192',9),(15,17,'create_1\'s co_2_2','create_1\'s de_2_2','2023-11-15','2023-11-16','2023-11-17 09:00:30.692853','2023-11-17 09:00:30.692853',19),(16,20,'create_22\'s co_업뎃_22','create_22\'s de_업뎃_22','1994-03-01','2000-02-28','2023-11-17 09:46:01.207612','2023-11-17 09:48:05.000000',20),(19,20,'create_22\'s cou','create_22\'s des','2000-03-01','2003-02-28','2023-11-18 10:30:38.763638','2023-11-18 10:30:38.763638',23);
/*!40000 ALTER TABLE `profile_education` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profile_experience`
--

DROP TABLE IF EXISTS `profile_experience`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profile_experience` (
  `id` int NOT NULL AUTO_INCREMENT,
  `profileId` int DEFAULT NULL,
  `position` varchar(100) NOT NULL DEFAULT '',
  `description` varchar(1000) NOT NULL DEFAULT '',
  `startDate` date NOT NULL,
  `endDate` date DEFAULT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `experienceCompanyId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_b0ac239466601b221e54bd3b0d1` (`profileId`),
  KEY `FK_837d6f55f87b1ac4b0cb6be319d` (`experienceCompanyId`),
  CONSTRAINT `FK_837d6f55f87b1ac4b0cb6be319d` FOREIGN KEY (`experienceCompanyId`) REFERENCES `experience_company` (`id`),
  CONSTRAINT `FK_b0ac239466601b221e54bd3b0d1` FOREIGN KEY (`profileId`) REFERENCES `profile` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profile_experience`
--

LOCK TABLES `profile_experience` WRITE;
/*!40000 ALTER TABLE `profile_experience` DISABLE KEYS */;
INSERT INTO `profile_experience` VALUES (1,1,'경영지원팀장','DB구축팀 - 기획팀 - 경영지원팀','2021-04-12','2023-03-31','2023-11-06 09:00:43.991241','2023-11-07 07:09:56.435226',2),(2,1,'서비스지원팀원','서비스지원팀: e건설실적','2016-02-01','2020-01-31','2023-11-06 09:02:51.393619','2023-11-07 07:09:56.454734',3),(4,2,'position_test','description_test','2020-06-24','2021-01-06','2023-11-06 09:03:57.724013','2023-11-10 01:25:09.153444',4),(5,2,'position_test_2_5','description_test_2_5','2018-08-01','2019-08-31','2023-11-10 01:25:09.171940','2023-11-10 01:28:18.983325',7),(6,3,'position_test_3_6','description_test_3_6','2023-08-25',NULL,'2023-11-10 01:25:09.178986','2023-11-10 01:28:18.990369',1),(7,3,'position_test_3_7','description_test_3_7','2006-03-01','2012-02-28','2023-11-10 01:25:09.183560','2023-11-10 01:28:18.998049',5),(8,3,'position_test_3_8','description_test_3_8','2003-03-01','2006-02-28','2023-11-10 01:25:09.189111','2023-11-10 01:28:19.003965',6),(9,13,'','body_user_imagetest_2','2023-11-13','2023-11-14','2023-11-14 04:59:30.690909','2023-11-14 04:59:30.690909',NULL),(10,13,'position_test_13','description_test_13','2023-11-13','2023-11-14','2023-11-14 07:39:54.406125','2023-11-14 07:39:54.406125',NULL),(11,13,'position_test_13','description_test_13','2023-11-13','2023-11-14','2023-11-14 08:08:38.605950','2023-11-14 08:08:38.605950',NULL),(12,13,'position_test_13','description_test_13','2023-11-13','2023-11-14','2023-11-14 08:11:19.339363','2023-11-14 08:11:19.339363',NULL),(13,13,'position_test_13','description_test_13','2023-11-13','2023-11-14','2023-11-14 08:19:34.698743','2023-11-14 08:19:34.698743',NULL),(14,13,'position_test_company','description_test_company','1994-03-01','2000-02-28','2023-11-14 08:48:39.241784','2023-11-14 08:48:39.000000',NULL),(15,13,'position_test_company','description_test_company','1994-03-01','2000-02-28','2023-11-14 08:50:56.996211','2023-11-14 08:50:57.000000',NULL),(16,13,'position_test_company','description_test_company','1994-03-01','2000-02-28','2023-11-14 09:48:53.599721','2023-11-14 09:48:53.599721',NULL),(17,13,'position_test_company','description_test_company','1994-03-01','2000-02-28','2023-11-14 14:35:22.066251','2023-11-14 14:35:22.000000',NULL),(18,13,'position_test_company','description_test_company','1994-03-01','2000-02-28','2023-11-14 14:45:07.160725','2023-11-14 14:45:07.000000',NULL),(19,13,'newtest2\'s position_16','newtest2\'s description_16','2000-03-01','2003-02-28','2023-11-14 15:03:19.806350','2023-11-14 15:03:19.806350',8),(20,16,'newtest2\'s position_16','newtest2\'s description_16','2000-03-01','2003-02-28','2023-11-14 15:03:44.578718','2023-11-14 15:03:44.578718',9),(21,16,'newtest2\'s position_16','newtest2\'s description_16','2000-03-01','2003-02-28','2023-11-14 15:06:29.336444','2023-11-14 15:06:29.336444',10),(22,17,'create_1\'s po','create_1\'s de','2023-11-15','2003-11-16','2023-11-16 01:32:49.401952','2023-11-16 01:32:49.401952',11),(23,17,'create_1\'s po_업뎃_2','create_1\'s de_업뎃_22','2012-08-01','2012-12-31','2023-11-16 01:38:35.822954','2023-11-17 09:00:01.000000',16),(24,17,'create_1\'s po','create_1\'s de','2023-11-15','2003-11-16','2023-11-16 02:25:07.516781','2023-11-16 02:25:07.516781',14),(25,17,'create_1\'s po','create_1\'s de','2023-11-15','2003-11-16','2023-11-17 08:59:19.447025','2023-11-17 08:59:19.447025',17),(26,20,'create_22\'s po_업뎃','create_22\'s de_업뎃','2012-08-01','2012-12-31','2023-11-17 09:41:53.522057','2023-11-17 09:44:25.000000',18),(28,20,'create_22\'s po','create_22\'s de','2014-08-01','2015-08-31','2023-11-18 10:23:27.944349','2023-11-18 10:23:27.944349',20),(29,20,'create_22\'s po','create_22\'s de','2014-08-01','2015-08-31','2023-11-18 10:30:14.700894','2023-11-18 10:30:14.700894',21);
/*!40000 ALTER TABLE `profile_experience` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profile_project`
--

DROP TABLE IF EXISTS `profile_project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profile_project` (
  `id` int NOT NULL AUTO_INCREMENT,
  `profileId` int DEFAULT NULL,
  `title` varchar(100) NOT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `projectCategoryId` int DEFAULT NULL,
  `description` varchar(1000) DEFAULT '',
  `startDate` date NOT NULL,
  `endDate` date DEFAULT NULL,
  `coverImage` json DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_c2a094cc100eab1d5fcc053f1c6` (`projectCategoryId`),
  KEY `FK_c420cd7a317c2b10fa97aace731` (`profileId`),
  CONSTRAINT `FK_c2a094cc100eab1d5fcc053f1c6` FOREIGN KEY (`projectCategoryId`) REFERENCES `project_category` (`id`),
  CONSTRAINT `FK_c420cd7a317c2b10fa97aace731` FOREIGN KEY (`profileId`) REFERENCES `profile` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profile_project`
--

LOCK TABLES `profile_project` WRITE;
/*!40000 ALTER TABLE `profile_project` DISABLE KEYS */;
INSERT INTO `profile_project` VALUES (1,1,'Project_1_1','2023-11-06 01:55:46.920103','2023-11-10 06:01:40.228306',1,'project_test_1_1','2023-11-06',NULL,NULL),(2,1,'Project_1_2','2023-11-05 15:00:00.000000','2023-11-10 06:01:40.246257',2,'project_test_1_2','2023-10-30',NULL,NULL),(3,2,'Project_2_1','2023-11-05 15:00:00.000000','2023-11-10 06:01:40.252609',2,'project_test_2_1','2023-10-01','2023-10-02',NULL),(4,2,'Project_2_2','2023-11-10 01:00:25.989098','2023-11-10 06:01:40.259439',4,'project_test_2_2','2023-08-31',NULL,NULL),(5,2,'Project_2_3','2023-11-10 01:00:25.996403','2023-11-10 06:01:40.267035',7,'project_test_2_3','2022-01-23','2023-03-02',NULL),(6,3,'Project_3_1','2023-11-10 01:00:26.005531','2023-11-10 06:01:40.272291',6,'project_test_3_1','2020-05-09','2021-05-08',NULL),(7,NULL,'body.title','2023-11-13 11:51:45.649793','2023-11-13 11:51:45.649793',NULL,'body.description','2021-02-03','2021-02-04',NULL),(8,NULL,'create_1\'s ti_update_2','2023-11-13 11:52:28.054316','2023-11-16 08:20:49.000000',33,'create_1\'s de_update_2','2023-11-15','2023-11-16',NULL),(9,NULL,'body.title','2023-11-13 11:54:28.279385','2023-11-13 11:54:28.279385',NULL,'body.description','2021-02-03','2021-02-04',NULL),(10,NULL,'body.title','2023-11-13 12:17:36.568470','2023-11-13 12:17:36.568470',NULL,'body.description','2021-02-03','2021-02-04',NULL),(11,NULL,'body.title','2023-11-13 12:18:15.534029','2023-11-13 12:18:15.534029',NULL,'body.description','2021-02-03','2021-02-04',NULL),(12,NULL,'body.title_2','2023-11-13 12:18:40.610644','2023-11-13 12:18:40.610644',NULL,'body.description','2021-02-03','2021-02-04',NULL),(13,NULL,'body.title_2','2023-11-13 12:23:13.918635','2023-11-13 12:23:13.918635',NULL,'body.description','2021-02-03','2021-02-04',NULL),(14,NULL,'body.title_2','2023-11-13 12:25:08.162872','2023-11-13 12:25:08.162872',NULL,'body.description','2021-02-03','2021-02-04',NULL),(15,NULL,'body.title_2','2023-11-13 12:25:25.595859','2023-11-13 12:25:25.595859',NULL,'body.description','2021-02-03','2021-02-04',NULL),(16,NULL,'body.title_2','2023-11-13 12:25:43.904674','2023-11-13 12:25:43.904674',NULL,'body.description','2021-02-03','2021-02-04',NULL),(17,NULL,'body.title_2','2023-11-13 12:27:06.914106','2023-11-13 12:27:06.914106',NULL,'body.description','2021-02-03','2021-02-04',NULL),(18,NULL,'body.title_2','2023-11-13 12:27:57.525732','2023-11-13 12:27:57.525732',NULL,'body.description','2021-02-03','2021-02-04',NULL),(19,NULL,'body.title_2','2023-11-13 12:30:45.793617','2023-11-13 12:30:45.793617',NULL,'body.description','2021-02-03','2021-02-04',NULL),(20,NULL,'body.title_2','2023-11-13 12:31:11.826617','2023-11-13 12:31:11.826617',NULL,'body.description','2021-02-03','2021-02-04',NULL),(21,NULL,'body.title_2','2023-11-13 12:37:09.337176','2023-11-13 12:37:09.337176',NULL,'body.description','2021-02-03','2021-02-04',NULL),(22,NULL,'body.title_2','2023-11-13 12:37:21.023233','2023-11-13 12:37:21.023233',NULL,'body.description','2021-02-03','2021-02-04',NULL),(23,NULL,'body.title_2','2023-11-13 12:38:03.484474','2023-11-13 12:38:03.484474',NULL,'body.description','2021-02-03','2021-02-04',NULL),(24,NULL,'body.title_2','2023-11-13 12:39:37.518479','2023-11-13 12:39:37.518479',NULL,'body.description','2021-02-03','2021-02-04',NULL),(25,NULL,'body.title_2','2023-11-13 12:39:54.841764','2023-11-13 12:39:54.841764',NULL,'body.description','2021-02-03','2021-02-04',NULL),(26,NULL,'body.title_2','2023-11-13 12:40:23.833238','2023-11-13 12:40:23.833238',NULL,'body.description','2021-02-03','2021-02-04',NULL),(27,NULL,'body.title_2','2023-11-13 12:40:39.451427','2023-11-13 12:40:39.451427',NULL,'body.description','2021-02-03','2021-02-04',NULL),(28,NULL,'body.title_2','2023-11-13 12:43:58.549622','2023-11-13 12:43:58.549622',NULL,'body.description','2021-02-03','2021-02-04',NULL),(29,NULL,'body.title_2','2023-11-13 12:44:44.251328','2023-11-13 12:44:44.251328',NULL,'body.description','2021-02-03','2021-02-04',NULL),(30,NULL,'create_1\'s ti_update_2','2023-11-13 12:46:24.239594','2023-11-16 08:03:06.000000',26,'create_1\'s de_update_2','2023-11-15','2023-11-16',NULL),(31,NULL,'body.title_2','2023-11-13 12:46:56.666335','2023-11-13 12:46:56.666335',NULL,'body.description','2021-02-03','2021-02-04',NULL),(32,NULL,'body.title_2','2023-11-13 12:47:33.217740','2023-11-13 12:47:33.217740',NULL,'body.description','2021-02-03','2021-02-04',NULL),(33,11,'body.title_2','2023-11-13 12:53:08.061804','2023-11-13 12:53:08.061804',NULL,'body.description','2021-02-03','2021-02-04',NULL),(34,11,'','2023-11-13 12:53:59.591562','2023-11-13 12:53:59.591562',NULL,'body.description','2021-02-03','2021-02-04',NULL),(35,11,'body.title_2','2023-11-13 13:04:08.668650','2023-11-13 13:04:08.668650',NULL,'body.description','2021-02-03','2021-02-04',NULL),(36,11,'body.title_2','2023-11-13 13:06:13.346288','2023-11-13 13:06:13.346288',NULL,'body.description','2021-02-03','2021-02-04',NULL),(37,11,'','2023-11-13 13:06:49.048306','2023-11-13 13:06:49.048306',NULL,'body.description_new','2021-02-03','2021-02-04',NULL),(38,11,'body.title_new','2023-11-13 13:07:54.433587','2023-11-13 13:07:54.433587',NULL,'body.description_new','2021-02-03','2021-02-04',NULL),(39,11,'body.title_new2','2023-11-13 13:08:18.823446','2023-11-13 13:08:18.823446',NULL,'','2021-02-03','2021-02-04',NULL),(40,11,'body.title_new2','2023-11-13 13:13:38.758570','2023-11-13 13:13:38.758570',NULL,'','2021-02-03','2021-02-04',NULL),(41,11,'body.title_new2','2023-11-13 13:14:36.958799','2023-11-13 13:14:36.958799',NULL,'','2021-02-03','2021-02-04',NULL),(42,11,'body.title_new2','2023-11-13 13:15:53.833124','2023-11-13 13:15:53.833124',NULL,'','2021-02-03','2021-02-04',NULL),(43,3,'title_user_11','2023-11-13 13:42:08.261370','2023-11-13 13:42:08.261370',NULL,'body_user_11','2020-01-02','2022-04-05',NULL),(44,3,'title_user_11','2023-11-13 14:03:21.904632','2023-11-13 14:03:21.904632',NULL,'body_user_11','2020-01-02','2022-04-05',NULL),(45,3,'title_user_3','2023-11-13 14:39:57.708854','2023-11-13 14:39:57.708854',NULL,'body_user_3','2016-02-01','2020-01-31',NULL),(46,3,'title_user_3','2023-11-13 14:42:24.829011','2023-11-13 14:42:24.829011',NULL,'body_user_3','2016-02-01','2020-01-31',NULL),(47,3,'title_user_3','2023-11-14 01:20:13.538842','2023-11-14 01:20:13.538842',NULL,'body_user_3','2016-02-01','2020-01-31',NULL),(48,3,'title_user_3','2023-11-14 01:24:42.654721','2023-11-14 01:24:42.654721',NULL,'body_user_3','2016-02-01','2020-01-31',NULL),(49,3,'title_user_imagetest','2023-11-14 01:31:06.911101','2023-11-14 01:31:06.911101',NULL,'body_user_imagetest','2016-02-01','2020-01-31',NULL),(50,3,'title_user_imagetest','2023-11-14 01:49:43.739411','2023-11-14 01:49:43.739411',NULL,'body_user_imagetest','2016-02-01','2020-01-31',NULL),(51,3,'title_user_imagetest_2','2023-11-14 01:52:54.764677','2023-11-14 01:52:54.764677',NULL,'body_user_imagetest_2','2023-11-13','2023-11-14',NULL),(52,13,'title_profile_13','2023-11-14 01:57:53.842924','2023-11-14 01:57:53.842924',NULL,'body_profile_13','2021-01-01','2023-03-03',NULL),(53,13,'title_profile_13','2023-11-14 02:54:29.223968','2023-11-14 02:54:29.223968',NULL,'body_profile_13','2021-01-01','2023-03-03',NULL),(54,13,'title_profile_13','2023-11-14 02:55:42.567052','2023-11-14 02:55:42.567052',10,'body_profile_13','2021-01-01','2023-03-03',NULL),(55,13,'title_profile_13','2023-11-14 02:56:20.556460','2023-11-14 02:56:20.556460',11,'body_profile_13','2021-01-01','2023-03-03',NULL),(56,16,'newtest2\'s title_16','2023-11-14 14:59:03.562570','2023-11-14 14:59:03.562570',12,'newtest2\'s description_16','2018-01-18','2022-03-31',NULL),(57,17,'create_1\'s ti_update_2','2023-11-16 01:30:59.299676','2023-11-16 09:09:06.000000',39,'create_1\'s de_update_2','2023-11-15','2023-11-16',NULL),(58,17,'create_1\'s ti_update_3','2023-11-16 02:24:03.872047','2023-11-17 08:58:50.000000',41,'create_1\'s de_update_33','2020-02-02','2021-12-12',NULL),(60,20,'방석','2023-11-18 10:32:57.437384','2023-11-20 11:42:28.000000',43,'create_22\'s de_1','2023-11-15','2023-11-17',NULL),(62,20,'create_22\'s ti_22','2023-11-21 03:10:27.830361','2023-11-21 03:10:27.830361',45,'create_22\'s de_22','2023-11-17','2023-11-19',NULL);
/*!40000 ALTER TABLE `profile_project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profile_website`
--

DROP TABLE IF EXISTS `profile_website`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profile_website` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(100) NOT NULL DEFAULT '',
  `url` varchar(1000) NOT NULL DEFAULT '',
  `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `profileId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_1236e937a11cc1185796c2304ab` (`profileId`),
  CONSTRAINT `FK_1236e937a11cc1185796c2304ab` FOREIGN KEY (`profileId`) REFERENCES `profile` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profile_website`
--

LOCK TABLES `profile_website` WRITE;
/*!40000 ALTER TABLE `profile_website` DISABLE KEYS */;
INSERT INTO `profile_website` VALUES (1,'블로그','https://rudwos6.tistory.com/','2023-11-08 03:07:35.931517','2023-11-08 03:13:20.931104',1),(2,'개인','개인 url','2023-11-08 03:10:36.284318','2023-11-08 03:13:20.944914',1),(3,'회사','https://www.icaremind.com/','2023-11-08 03:10:36.287248','2023-11-08 03:13:20.948136',1),(4,'RSS 피드','RSS 피드 url','2023-11-08 03:10:36.289011','2023-11-08 03:13:20.951247',2),(5,'포트폴리오','port url','2023-11-08 03:10:36.290783','2023-11-10 04:44:12.837045',3),(6,'기타','기타 url','2023-11-08 03:10:36.292426','2023-11-08 03:13:20.955216',3),(7,'블로그','https://rudwos6.tistory.com/','2023-11-15 02:25:26.815040','2023-11-21 01:18:35.683221',4),(8,'블로그','https://rudwos6.tistory.com/','2023-11-15 02:26:16.053543','2023-11-21 01:18:35.689370',4),(9,'블로그','https://rudwos6.tistory.com/','2023-11-15 02:26:37.826432','2023-11-21 01:18:35.691742',4),(10,'블로그','https://rudwos6.tistory.com/','2023-11-15 02:30:23.332963','2023-11-15 02:30:23.332963',16),(11,'블로그_profileIdByUserId_test','https://rudwos6.tistory.com/','2023-11-15 02:33:07.343112','2023-11-15 02:33:07.343112',16),(12,'블로그_profileIdByUserId_test22222','https://rudwos6.tistory.com/','2023-11-15 02:33:57.415146','2023-11-15 02:33:57.415146',16),(13,'블로그_profileIdByUserId_test22222','https://rudwos6.tistory.com/','2023-11-15 08:10:46.827931','2023-11-15 08:10:46.827931',16),(14,'블로그_create_1','https://rudwos6.tistory.com/','2023-11-16 01:33:59.000659','2023-11-16 01:33:59.000659',17),(15,'기타_update_2222','https://rudwos6.tistory.com/16','2023-11-16 01:34:43.309448','2023-11-17 06:02:35.000000',17),(16,'sns_create_1_2','https://rudwos6.tistory.com/','2023-11-16 02:26:31.446543','2023-11-16 02:26:31.446543',17),(17,'sns_create_1_2_update_1','https://rudwos6.tistory.com/20','2023-11-16 02:41:33.846736','2023-11-17 02:45:59.000000',17),(18,'sns_create_1_2_2','https://rudwos6.tistory.com/','2023-11-17 09:03:37.152282','2023-11-17 09:03:37.152282',17),(20,'sns_create_22','https://rudwos6.tistory.com/','2023-11-18 05:45:40.837899','2023-11-18 05:45:40.837899',20),(22,'blog_create_22','https://rudwos6.tistory.com/16','2023-11-19 02:18:34.061983','2023-11-19 02:18:34.061983',20);
/*!40000 ALTER TABLE `profile_website` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_category`
--

DROP TABLE IF EXISTS `project_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_category`
--

LOCK TABLES `project_category` WRITE;
/*!40000 ALTER TABLE `project_category` DISABLE KEYS */;
INSERT INTO `project_category` VALUES (1,'개발','2023-11-07 04:59:32.260291','2023-11-07 05:00:13.373560'),(2,'사무','2023-11-07 05:00:13.391508','2023-11-07 05:00:13.391508'),(3,'화학','2023-11-07 05:00:13.400495','2023-11-07 05:00:13.400495'),(4,'마케팅','2023-11-10 00:58:03.693904','2023-11-10 00:58:03.693904'),(5,'컨설팅','2023-11-10 00:58:15.317107','2023-11-10 00:58:15.317107'),(6,'회계','2023-11-10 00:58:24.530839','2023-11-10 00:58:24.530839'),(7,'인사','2023-11-10 00:58:30.076338','2023-11-10 00:58:30.076338'),(8,'변리','2023-11-10 00:58:35.827220','2023-11-10 00:58:35.827220'),(9,'감정평가','2023-11-10 00:58:45.709643','2023-11-10 00:58:45.709643'),(10,'카테고리_1','2023-11-14 02:55:42.564890','2023-11-14 02:55:42.564890'),(11,'감정평가','2023-11-14 02:56:20.554672','2023-11-14 02:56:20.554672'),(12,'변리','2023-11-14 14:59:03.553438','2023-11-14 14:59:03.553438'),(13,'건축','2023-11-16 01:30:59.296060','2023-11-16 01:30:59.296060'),(16,'사무','2023-11-16 02:24:03.867313','2023-11-16 02:24:03.867313'),(17,'건축_update','2023-11-16 07:29:32.910458','2023-11-16 07:29:32.910458'),(18,'건축_update','2023-11-16 07:32:46.741126','2023-11-16 07:32:46.741126'),(19,'건축_update_2','2023-11-16 07:33:21.280304','2023-11-16 07:33:21.280304'),(20,'건축_update_2','2023-11-16 07:38:17.139996','2023-11-16 07:38:17.139996'),(21,'건축_update_2','2023-11-16 07:42:12.061101','2023-11-16 07:42:12.061101'),(22,'건축_update_2','2023-11-16 07:46:30.510211','2023-11-16 07:46:30.510211'),(23,'건축_update_2','2023-11-16 07:46:45.958886','2023-11-16 07:46:45.958886'),(24,'건축_update_2','2023-11-16 08:02:17.441639','2023-11-16 08:02:17.441639'),(25,'건축_update_2','2023-11-16 08:02:40.461245','2023-11-16 08:02:40.461245'),(26,'건축_update_2','2023-11-16 08:03:06.157483','2023-11-16 08:03:06.157483'),(27,'건축_update_2','2023-11-16 08:03:08.581746','2023-11-16 08:03:08.581746'),(28,'건축_update_2','2023-11-16 08:03:11.882399','2023-11-16 08:03:11.882399'),(29,'건축_update_2','2023-11-16 08:15:53.849279','2023-11-16 08:15:53.849279'),(30,'건축_update_2','2023-11-16 08:20:35.441078','2023-11-16 08:20:35.441078'),(31,'건축_update_2','2023-11-16 08:20:37.735680','2023-11-16 08:20:37.735680'),(32,'건축_update_2','2023-11-16 08:20:43.854004','2023-11-16 08:20:43.854004'),(33,'건축_update_2','2023-11-16 08:20:49.778411','2023-11-16 08:20:49.778411'),(34,'건축_update_2','2023-11-16 08:20:51.792898','2023-11-16 08:20:51.792898'),(35,'건축_update_2','2023-11-16 08:36:19.390247','2023-11-16 08:36:19.390247'),(36,'건축_update_2','2023-11-16 08:37:47.649657','2023-11-16 08:37:47.649657'),(37,'건축_update_2','2023-11-16 08:37:55.795279','2023-11-16 08:37:55.795279'),(38,'건축_update_2','2023-11-16 09:08:52.068165','2023-11-16 09:08:52.068165'),(39,'건축_update_2','2023-11-16 09:09:06.469679','2023-11-16 09:09:06.469679'),(40,'건축_update_2','2023-11-17 01:04:46.684182','2023-11-17 01:04:46.684182'),(41,'건축_newupdate_333','2023-11-17 01:05:43.088417','2023-11-17 05:57:26.000000'),(42,'건축_update','2023-11-17 09:35:52.526689','2023-11-17 09:37:51.000000'),(43,'경영지원원','2023-11-18 10:32:57.434340','2023-11-18 10:32:57.434340'),(44,'사업계획_update','2023-11-18 13:00:32.311056','2023-11-18 13:10:09.000000'),(45,'사업계획','2023-11-21 03:10:27.821762','2023-11-21 03:10:27.821762');
/*!40000 ALTER TABLE `project_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_image`
--

DROP TABLE IF EXISTS `project_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_image` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(2000) NOT NULL DEFAULT '',
  `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `projectId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_7b27cbd4456cc6313d8a476b32d` (`projectId`),
  CONSTRAINT `FK_7b27cbd4456cc6313d8a476b32d` FOREIGN KEY (`projectId`) REFERENCES `profile_project` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=126 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_image`
--

LOCK TABLES `project_image` WRITE;
/*!40000 ALTER TABLE `project_image` DISABLE KEYS */;
INSERT INTO `project_image` VALUES (1,'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2839&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-07 06:28:31.667532','2023-11-10 06:44:19.048065',1),(2,'https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-07 06:28:31.691433','2023-11-07 06:31:31.298120',1),(3,'https://images.unsplash.com/photo-1608303588026-884930af2559?q=80&w=2803&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-07 06:28:31.703365','2023-11-10 06:39:45.055050',1),(4,'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-07 06:28:31.717269','2023-11-10 06:39:45.068317',2),(5,'https://images.unsplash.com/photo-1614947746254-4fd8c6cb1a7f?q=80&w=2867&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-07 06:28:31.728212','2023-11-10 06:44:19.052713',3),(6,'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-07 06:28:31.738889','2023-11-07 06:31:31.332915',3),(7,'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-07 06:28:31.747761','2023-11-10 06:44:19.055700',4),(8,'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-07 06:28:31.756316','2023-11-10 06:39:45.075309',4),(9,'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-10 06:39:45.077171','2023-11-10 06:44:19.059255',5),(10,'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-10 06:39:45.079334','2023-11-10 06:45:02.404532',5),(11,'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-10 06:39:45.081948','2023-11-10 06:39:45.081948',6),(24,'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-10 06:44:19.063890','2023-11-10 06:44:23.328817',6),(25,'https://images.unsplash.com/photo-1598368195835-91e67f80c9d7?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-10 06:44:19.065755','2023-11-10 06:45:02.409414',6),(26,'https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-10 06:44:19.067531','2023-11-10 06:45:02.412126',6),(27,'https://images.unsplash.com/photo-1571666521805-f5e8423aba9d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-14 01:49:43.743451','2023-11-14 01:49:43.743451',50),(28,'https://images.unsplash.com/photo-1571666521805-f5e8423aba9d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-14 01:52:54.766758','2023-11-14 01:52:54.766758',51),(29,'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-14 01:52:54.768730','2023-11-14 01:52:54.768730',51),(30,'https://images.unsplash.com/photo-1571666521805-f5e8423aba9d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-14 01:57:53.845221','2023-11-14 01:57:53.845221',52),(31,'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-14 01:57:53.846749','2023-11-14 01:57:53.846749',52),(32,'https://images.unsplash.com/photo-1571666521805-f5e8423aba9d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-14 02:54:29.229830','2023-11-14 02:54:29.229830',53),(33,'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-14 02:54:29.232479','2023-11-14 02:54:29.232479',53),(34,'https://images.unsplash.com/photo-1571666521805-f5e8423aba9d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-14 02:55:42.568414','2023-11-14 02:55:42.568414',54),(35,'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-14 02:55:42.569614','2023-11-14 02:55:42.569614',54),(36,'https://images.unsplash.com/photo-1571666521805-f5e8423aba9d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-14 02:56:20.558444','2023-11-14 02:56:20.558444',55),(37,'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-14 02:56:20.560087','2023-11-14 02:56:20.560087',55),(38,'https://images.unsplash.com/photo-1566438480900-0609be27a4be?q=80&w=2794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-14 14:59:03.569163','2023-11-14 14:59:03.569163',56),(39,'https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-14 14:59:03.573281','2023-11-14 14:59:03.573281',56),(40,'https://plus.unsplash.com/premium_photo-1680553492268-516537c44d91?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-14 14:59:03.578479','2023-11-14 14:59:03.578479',56),(41,'https://images.unsplash.com/photo-1566438480900-0609be27a4be?q=80&w=2794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 01:30:59.301969','2023-11-16 09:09:06.000000',NULL),(42,'https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 01:30:59.303934','2023-11-16 09:09:06.000000',NULL),(43,'https://plus.unsplash.com/premium_photo-1680553492268-516537c44d91?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 01:30:59.305252','2023-11-16 09:09:06.000000',NULL),(44,'https://images.unsplash.com/photo-1566438480900-0609be27a4be?q=80&w=2794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 02:24:03.874308','2023-11-16 07:29:32.000000',NULL),(45,'https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 02:24:03.877852','2023-11-16 07:29:32.000000',NULL),(46,'https://plus.unsplash.com/premium_photo-1680553492268-516537c44d91?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 02:24:03.880725','2023-11-16 07:29:32.000000',NULL),(47,'https://images.unsplash.com/photo-1566438480900-0609be27a4be?q=80&w=2794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 07:29:32.901532','2023-11-16 07:32:46.000000',NULL),(48,'https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 07:29:32.906637','2023-11-16 07:32:46.000000',NULL),(49,'https://plus.unsplash.com/premium_photo-1680553492268-516537c44d91?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 07:29:32.908872','2023-11-16 07:32:46.000000',NULL),(50,'https://images.unsplash.com/photo-1620843002805-05a08cb72f57?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 07:32:46.735839','2023-11-16 07:33:21.000000',NULL),(51,'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 07:32:46.739046','2023-11-16 07:33:21.000000',NULL),(52,'https://images.unsplash.com/photo-1620843002805-05a08cb72f57?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 07:33:21.276648','2023-11-16 07:38:17.000000',NULL),(53,'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 07:33:21.278581','2023-11-16 07:38:17.000000',NULL),(54,'https://images.unsplash.com/photo-1620843002805-05a08cb72f57?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 07:38:17.130723','2023-11-16 07:42:12.000000',NULL),(55,'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 07:38:17.136291','2023-11-16 07:42:12.000000',NULL),(56,'https://images.unsplash.com/photo-1620843002805-05a08cb72f57?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 07:42:12.056544','2023-11-16 07:46:30.000000',NULL),(57,'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 07:42:12.059565','2023-11-16 07:46:30.000000',NULL),(58,'https://images.unsplash.com/photo-1620843002805-05a08cb72f57?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 07:46:30.505583','2023-11-16 07:46:45.000000',NULL),(59,'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 07:46:30.508564','2023-11-16 07:46:45.000000',NULL),(60,'https://images.unsplash.com/photo-1620843002805-05a08cb72f57?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 07:46:45.953951','2023-11-16 08:02:17.000000',NULL),(61,'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 07:46:45.956645','2023-11-16 08:02:17.000000',NULL),(62,'https://images.unsplash.com/photo-1620843002805-05a08cb72f57?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 08:02:17.437435','2023-11-16 08:02:40.000000',NULL),(63,'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 08:02:17.440193','2023-11-16 08:02:40.000000',NULL),(64,'https://images.unsplash.com/photo-1620843002805-05a08cb72f57?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 08:02:40.454597','2023-11-16 08:03:11.000000',NULL),(65,'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 08:02:40.459196','2023-11-16 08:03:11.000000',NULL),(66,'https://images.unsplash.com/photo-1620843002805-05a08cb72f57?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 08:03:06.151376','2023-11-16 08:03:06.151376',30),(67,'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 08:03:06.155258','2023-11-16 08:03:06.155258',30),(68,'https://images.unsplash.com/photo-1620843002805-05a08cb72f57?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 08:03:08.578839','2023-11-16 08:20:37.000000',NULL),(69,'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 08:03:08.580493','2023-11-16 08:20:37.000000',NULL),(70,'https://images.unsplash.com/photo-1620843002805-05a08cb72f57?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 08:03:11.879364','2023-11-16 08:15:53.000000',NULL),(71,'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 08:03:11.881405','2023-11-16 08:15:53.000000',NULL),(72,'https://images.unsplash.com/photo-1620843002805-05a08cb72f57?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 08:15:53.844315','2023-11-16 08:20:35.000000',NULL),(73,'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 08:15:53.847493','2023-11-16 08:20:35.000000',NULL),(74,'https://images.unsplash.com/photo-1620843002805-05a08cb72f57?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 08:20:35.437116','2023-11-16 08:20:43.000000',NULL),(75,'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 08:20:35.439745','2023-11-16 08:20:43.000000',NULL),(76,'https://images.unsplash.com/photo-1620843002805-05a08cb72f57?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 08:20:37.733150','2023-11-16 08:20:49.000000',NULL),(77,'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 08:20:37.734521','2023-11-16 08:20:49.000000',NULL),(78,'https://images.unsplash.com/photo-1620843002805-05a08cb72f57?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 08:20:43.850114','2023-11-16 08:20:51.000000',NULL),(79,'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 08:20:43.851984','2023-11-16 08:20:51.000000',NULL),(80,'https://images.unsplash.com/photo-1620843002805-05a08cb72f57?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 08:20:49.774259','2023-11-16 08:20:49.774259',8),(81,'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 08:20:49.776533','2023-11-16 08:20:49.776533',8),(82,'https://images.unsplash.com/photo-1620843002805-05a08cb72f57?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 08:20:51.789657','2023-11-16 08:36:19.000000',NULL),(83,'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 08:20:51.791466','2023-11-16 08:36:19.000000',NULL),(84,'https://images.unsplash.com/photo-1620843002805-05a08cb72f57?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 08:36:19.380871','2023-11-16 08:37:47.000000',NULL),(85,'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 08:36:19.387016','2023-11-16 08:37:47.000000',NULL),(86,'https://images.unsplash.com/photo-1620843002805-05a08cb72f57?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 08:37:47.638011','2023-11-16 08:37:55.000000',NULL),(87,'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 08:37:47.642750','2023-11-16 08:37:55.000000',NULL),(88,'https://images.unsplash.com/photo-1620843002805-05a08cb72f57?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 08:37:55.789780','2023-11-16 09:08:52.000000',NULL),(89,'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 08:37:55.792780','2023-11-16 09:08:52.000000',NULL),(90,'https://images.unsplash.com/photo-1620843002805-05a08cb72f57?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 09:08:52.064032','2023-11-17 01:04:46.000000',NULL),(91,'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 09:08:52.066789','2023-11-17 01:04:46.000000',NULL),(92,'https://images.unsplash.com/photo-1620843002805-05a08cb72f57?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 09:09:06.466989','2023-11-16 09:09:06.466989',57),(93,'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-16 09:09:06.468398','2023-11-16 09:09:06.468398',57),(94,'https://images.unsplash.com/photo-1620843002805-05a08cb72f57?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-17 01:04:46.680229','2023-11-17 01:05:43.000000',NULL),(95,'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-17 01:04:46.682706','2023-11-17 01:05:43.000000',NULL),(96,'https://images.unsplash.com/photo-1620843002805-05a08cb72f57?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-17 01:05:43.086096','2023-11-17 05:56:43.000000',NULL),(97,'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-17 01:05:43.087331','2023-11-17 05:56:43.000000',NULL),(98,'https://images.unsplash.com/photo-1620843002805-05a08cb72f57?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-17 05:56:43.312759','2023-11-17 05:57:26.000000',NULL),(99,'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-17 05:56:43.323067','2023-11-17 05:57:26.000000',NULL),(100,'https://images.unsplash.com/photo-1620843002805-05a08cb72f57?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-17 05:57:26.415871','2023-11-17 08:53:59.000000',NULL),(101,'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-17 05:57:26.417836','2023-11-17 08:53:59.000000',NULL),(102,'https://images.unsplash.com/photo-1620843002805-05a08cb72f57?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-17 08:53:59.063105','2023-11-17 08:56:36.000000',NULL),(103,'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-17 08:53:59.074897','2023-11-17 08:56:36.000000',NULL),(104,'https://images.unsplash.com/photo-1620843002805-05a08cb72f57?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-17 08:56:36.491619','2023-11-17 08:58:50.000000',NULL),(105,'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-17 08:56:36.495542','2023-11-17 08:58:50.000000',NULL),(106,'https://images.unsplash.com/photo-1620843002805-05a08cb72f57?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-17 08:58:50.556958','2023-11-17 08:58:50.556958',58),(107,'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-17 08:58:50.559107','2023-11-17 08:58:50.559107',58),(108,'https://images.unsplash.com/photo-1566438480900-0609be27a4be?q=80&w=2794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-17 09:35:52.542263','2023-11-17 09:37:51.000000',NULL),(109,'https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-17 09:35:52.546069','2023-11-17 09:37:51.000000',NULL),(110,'https://plus.unsplash.com/premium_photo-1680553492268-516537c44d91?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-17 09:35:52.548615','2023-11-17 09:37:51.000000',NULL),(113,'https://images.unsplash.com/photo-1566438480900-0609be27a4be?q=80&w=2794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-18 10:32:57.439888','2023-11-18 10:32:57.439888',60),(114,'https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-18 10:32:57.441946','2023-11-18 10:32:57.441946',60),(115,'https://plus.unsplash.com/premium_photo-1680553492268-516537c44d91?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-18 10:32:57.443461','2023-11-18 10:32:57.443461',60),(116,'https://images.unsplash.com/photo-1566438480900-0609be27a4be?q=80&w=2794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-18 13:00:32.318405','2023-11-18 13:10:09.000000',NULL),(117,'https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-18 13:00:32.322383','2023-11-18 13:10:09.000000',NULL),(118,'https://plus.unsplash.com/premium_photo-1680553492268-516537c44d91?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-18 13:00:32.324338','2023-11-18 13:10:09.000000',NULL),(119,'https://images.unsplash.com/photo-1620843002805-05a08cb72f57?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-18 13:10:09.253404','2023-11-18 13:11:28.000000',NULL),(120,'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-18 13:10:09.258387','2023-11-18 13:11:28.000000',NULL),(123,'https://images.unsplash.com/photo-1566438480900-0609be27a4be?q=80&w=2794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-21 03:10:27.836160','2023-11-21 03:10:27.836160',62),(124,'https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-21 03:10:27.842354','2023-11-21 03:10:27.842354',62),(125,'https://plus.unsplash.com/premium_photo-1680553492268-516537c44d91?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','2023-11-21 03:10:27.849373','2023-11-21 03:10:27.849373',62);
/*!40000 ALTER TABLE `project_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tag` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tag` varchar(255) NOT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_9dbf61b2d00d2c77d3b5ced37c` (`tag`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL DEFAULT 'User',
  `password` varchar(200) NOT NULL,
  `phoneNumber` varchar(20) NOT NULL DEFAULT '',
  `email` varchar(100) NOT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `profileImage` varchar(2000) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=95 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (8,'User','$2b$10$UHGe2jgnAuyQMLl1IxAERuSwEU9MfkW0iBROdmG164XBLb5gchspW','','test6@test.co.kr','2023-11-01 04:48:17.339326','2023-11-08 06:05:27.906952','https://images.unsplash.com/photo-1474552226712-ac0f0961a954?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(9,'test7','$2b$10$rSWkk3iSxkLkFepcqVjYF.ZeopZUHExXXaEo7Y2sOIR4yVq.IrY9O','','test7@test.co.kr','2023-11-01 04:48:17.339326','2023-11-08 06:05:27.909079','https://images.unsplash.com/photo-1474447976065-67d23accb1e3?q=80&w=2785&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(11,'User','$2b$10$Ipg4jbXrjy0WAFwCApY/mONHUfkwNZYhcexrHlEHRhqg7b/BpNo0a','','test8@test.co.kr','2023-11-01 04:59:37.080508','2023-11-08 06:05:27.911723','https://images.unsplash.com/photo-1579783483458-83d02161294e?q=80&w=2897&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(12,'User','$2b$10$U8yqMlwJ.Yc1TUDeKTXApOWMclt16jBvWwKhY7b/gjVai.Mez2CKq','','test9@test.co.kr','2023-11-01 05:02:06.970612','2023-11-08 06:05:27.914213','https://images.unsplash.com/photo-1526800544336-d04f0cbfd700?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(13,'User','$2b$10$PkN416bcIhd152tigwJb/./ygQRO4wlcI2Osq4myKEAlom/2AlZDW','','test10@test.co.kr','2023-11-01 05:12:36.164065','2023-11-08 06:05:27.916938','https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(14,'User','$2b$10$XmZwdFF/xPfC9a.fNI4HD.zJlF8ilFDkH8AOuYxSJcXMXE16qsBLa','','test11@test.co.kr','2023-11-01 05:42:05.400956','2023-11-01 05:42:05.400956',''),(15,'User','$2b$10$wxs29gsd2XwIChUUJjQExe9/LCRRoXyIQIlp5B/McPuZ8aPKKoVhK','','pkook7@gmail.com','2023-11-01 05:49:07.134434','2023-11-13 07:11:28.844382','https://images.unsplash.com/photo-1474552226712-ac0f0961a954?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(17,'User','$2b$10$hSYS3GUa9BWhJ8YcGQayRubrRDDSFjrVpcIZbA0JCHe2K1Enf6acC','','pkook777@gmail.com','2023-11-01 05:50:30.766689','2023-11-13 07:11:28.858710','https://images.unsplash.com/photo-1474447976065-67d23accb1e3?q=80&w=2785&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(18,'User','$2b$10$Evc8mP2fnrBK3ZSLnJ0T7ees61cVZK1OKfpIdMOjDn/aUMEvx8ZO.','','mouse@mouse.com','2023-11-01 05:54:20.061557','2023-11-13 07:11:28.861622','https://images.unsplash.com/photo-1579783483458-83d02161294e?q=80&w=2897&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(19,'User','$2b$10$5NM7XALuxD/Kw6BrUtV31OsaOoZ3ManOMjEE/6Ap6IIOtGsMIWwdG','','test13@test.co.kr','2023-11-01 06:14:26.507232','2023-11-13 07:11:28.864912','https://images.unsplash.com/photo-1526800544336-d04f0cbfd700?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(21,'User','$2b$10$VNdSh4DAjNwajjWVHYSBS.dGoAOlNMopzKOIqa3UzV2Q0jfC2oOTi','','test14@test.co.kr','2023-11-01 06:16:53.588751','2023-11-13 07:11:28.867120','https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(22,'User','$2b$10$fr3yXLuFDwB/D80rCP5eKOqwzxodz.m.RQ.8ooO8pB77YxrnS29S.','','amazing@naver.com','2023-11-01 06:24:10.043743','2023-11-01 06:24:10.043743',''),(23,'User','$2b$10$i4IkLJcDleky7Fd5dUZK9eDRl90vpwe.TC4.1ACO9QQPPMNSmYpN.','','notebook@naver.com','2023-11-01 06:26:43.680763','2023-11-01 06:26:43.680763',''),(24,'User','$2b$10$XVETUZ50vujLZllfiiYBDuBQi4JR0dcu0nSbt/CyURbU3SND4CQuC','','myholiday@naver.com','2023-11-01 07:07:03.465356','2023-11-01 07:07:03.465356',''),(27,'User','$2b$10$O/PAYoyYscC0tW/Z/URxOO/iaKDcbsnpwaud2uHFEDXZG1UlpGite','','myholiday1@naver.com','2023-11-01 07:09:30.220767','2023-11-01 07:09:30.220767',''),(28,'User','$2b$10$h6KkSQrvis/ObC7sevF0CeJVF8vknZ0Z4EiNFWuT50JI9qdoTmNMy','','myholiday2@naver.com','2023-11-01 07:10:08.368456','2023-11-01 07:10:08.368456',''),(29,'User','$2b$10$b0405OeeryXFhguk7UKWMeRWHY2QygglL6ag32rMC/g3DCRJLclB.','','test15@test.co.kr','2023-11-01 07:37:27.640105','2023-11-01 07:37:27.640105',''),(30,'User','$2b$10$.HGKjXrAGlXqF2ggJnVSAuoYBz09nz75Xc7nX/3lBu761vpF8M8Gq','','pkook123@naver.com','2023-11-01 07:49:35.996112','2023-11-01 07:49:35.996112',''),(31,'User','$2b$10$8SP/eTCH7nNQvYUmgrMlJuaVSEXV3TQFcSqZUOTOsKP0yro/pL.Jm','','ssss@naver.com','2023-11-01 08:03:49.092141','2023-11-01 08:03:49.092141',''),(32,'User','$2b$10$DEa4iroMS3zRT7Jl8RCRz.FbfK8Jfds5hnIyHUFTEU8l3HOhLOr3q','','test20@test.co.kr','2023-11-01 08:10:12.076768','2023-11-01 08:10:12.076768',''),(33,'User','$2b$10$5YeVMrsraNDdGHDJ0b1Ci.Cg/xQeHQBYiHf9RpRVaYwUUvW9XQ9y6','','test21@test.co.kr','2023-11-01 08:17:01.853421','2023-11-01 08:17:01.853421',''),(35,'User','$2b$10$2t2NxLsxYIv3xAnO3e6DMeOlP7oOvRtm.LfyU/NoP5qJ3r9LH19lK','','pkook321@naver.com','2023-11-01 09:46:36.086867','2023-11-01 09:46:36.086867',''),(37,'User','$2b$10$TlGkdPdXktpZJPZmKrb2NO4oPKCi91oBXOHpXTZ.OIHNsEqnmzIOa','','pkook3211@naver.com','2023-11-01 09:47:15.067185','2023-11-01 09:47:15.067185',''),(39,'User','$2b$10$HMcHyNUyittulr.Jq5y8z..Bv5gvoyUqsbFs5Y14yL6HJk8y7dSny','','pkook3123123211@naver.com','2023-11-01 09:47:21.425584','2023-11-01 09:47:21.425584',''),(40,'User','$2b$10$bMsUQdJz.x1IsmhmqoBTq.DaDRGX1dQFZvcKWXZrxZgWOrXEKx1qu','','paintkick@naver.com','2023-11-01 09:47:43.867232','2023-11-01 09:47:43.867232',''),(42,'User','$2b$10$PL8KSqtwd5ybSOH5hZYFveBdLN04i3cSh8w.CJ5gHcysByDM1GCam','','myback@naver.com','2023-11-01 09:48:07.794229','2023-11-01 09:48:07.794229',''),(43,'User','$2b$10$wXj/Zz5ee/g.otHTxUK/YO1RfTmWq0myx810suL3qeZSccgpvU.3G','','save@naver.com','2023-11-01 09:48:38.544809','2023-11-01 09:48:38.544809',''),(44,'User','$2b$10$KUgy5ZZKITTPTOBC2Qp1P.WX.NrOpTzMOGNaqZYj6jxjC/kZfVIPy','','pkook7@naver.com','2023-11-01 09:49:05.145298','2023-11-01 09:49:05.145298',''),(51,'User','$2b$10$2/c7OCz5qHYbnwfwZdBf/eeG2M7OK5NSsTrZ2XjRT6lisbQnm.MeK','','pkook7222@naver.com','2023-11-01 10:02:59.186432','2023-11-01 10:02:59.186432',''),(52,'User','$2b$10$j.yLbyrhHJQscZATSLqmfOMpdVCce4XmsjrKqI85zss9cu1DH15Ta','','test22@test.co.kr','2023-11-02 01:31:27.755399','2023-11-02 01:31:27.755399',''),(53,'User','$2b$10$021SL3fx0exlxZkKo3JGyuBb8WfrtZrk2VawQsSoIv5bxB2/l8iG.','','test23@test.co.kr','2023-11-02 03:06:21.025155','2023-11-02 03:06:21.025155',''),(55,'User','$2b$10$ZgbwgPkE.Kem1dgKDbKOZO2wh9Y2eYykvU5HIrLdJkIz8SCwXMxIS','','test24@test.co.kr','2023-11-02 04:42:11.513400','2023-11-02 04:42:11.513400',''),(57,'User','$2b$10$h1Kcpw42c9JBpNKoQ2MCseOe681RjVO2d4.Qize2gBaZ0OcSMgBeq','','test25@test.co.kr','2023-11-08 05:07:04.615292','2023-11-08 05:07:04.615292',''),(58,'User','$2b$10$LvlKobyyakrO2KfvFgdJeOi3QQEXVAcBkGdmjkC2D/ob0XmtV70Lm','','xxx@xxx.com','2023-11-08 08:18:45.568037','2023-11-08 08:18:45.568037',''),(59,'User','$2b$10$a5bNZL6bJw1ThC57rH2PuuzcfaCm6fTAmgLxUNdPMvRaC.teXNYsC','','xxx1@xxx.com','2023-11-08 08:20:09.883098','2023-11-08 08:20:09.883098',''),(69,'User','$2b$10$/Ga7vOr8iBOuAf9bdEoTJuIIlHjn3XFoMCI94aNQ7hZEyhUS6r31.','','mymy@mymy.com','2023-11-08 08:25:53.978097','2023-11-08 08:25:53.978097',''),(71,'User','$2b$10$a2V/ycenOeqqIYYSgqCsROp8/Q.EgRM61tmsRn66xfp/39n32hcsS','','mymouse@naver.com','2023-11-08 08:27:32.030095','2023-11-08 08:27:32.030095',''),(72,'User','$2b$10$qVfz7T4Dtf..4nNM0QZw7euij06OfbFUFJ3NnSOORgrlutC0kYti6','','number1@naver.com','2023-11-08 08:29:00.854973','2023-11-08 08:29:00.854973',''),(77,'User','$2b$10$RXe.HA.f/oe4z1oS7CpCWeGkvRM0MdvgtYuBKXRcUW4CKvV4.rsP.','','number2@naver.com','2023-11-08 08:50:05.409545','2023-11-08 08:50:05.409545',''),(78,'User','$2b$10$CPHnIr8zvYM7kIGqAsJpROOKWzYTJ9kWydJ.Q9mMHv17JbQblwktK','','number3@naver.com','2023-11-08 08:58:53.367012','2023-11-08 08:58:53.367012',''),(79,'User','$2b$10$mbUbTGhkb6vvk1HdJ1EI3.STnz45acAORZTx3gYkGH.6md4FPn1VS','','number4@naver.com','2023-11-08 09:08:52.108809','2023-11-08 09:08:52.108809',''),(80,'User','$2b$10$z2NoDBmCvTDVHUQL9WhT.Oyv0LUzDoKHnd3DWp5GwjLdHI2us9c3m','','number5@naver.com','2023-11-08 09:59:42.699905','2023-11-08 09:59:42.699905',''),(81,'User','$2b$10$FkUpvsJuEx7O9ZDzgLljfuSHUBCadFSvwPWGAXrfVCQ606fQYBwYW','','number7@naver.com','2023-11-08 10:07:44.079812','2023-11-08 10:07:44.079812',''),(83,'User','$2b$10$BOAuXuKBXin4gJ0Ofn8fJeRDFUXp4kuYgNSbpHmon7xK4uHharRvO','','number8@naver.com','2023-11-09 03:08:34.811718','2023-11-09 03:08:34.811718',''),(86,'User','$2b$10$WRg8WSwjxIa494yIpWGy3OJXgKWUUhrV97PgyIsDymGb9P4faJiMC','','newtest1@test.co.kr','2023-11-13 02:18:41.131462','2023-11-13 02:18:41.131462',''),(89,'User','$2b$10$FWT.zEZmYULRuAWKvCgCWeVHVr2r.e2h7h75Ho5vyImV3GJt6VbnW','','number10@naver.com','2023-11-13 07:49:06.338912','2023-11-13 07:49:06.338912',''),(90,'User','$2b$10$zRBuSJoHd1FzeicNpDtox.pwFicvEAG1GMINjrgK7.67k1dySUVT6','','number11@naver.com','2023-11-13 07:54:26.869235','2023-11-13 07:55:03.086405',''),(91,'newtest2','$2b$10$3xWvpqGd/PzYecH1ta7e9OnA0C7VAVsz21tteemgZcPLOVeeWzFI.','newTest2!','newtest2@test.co.kr','2023-11-14 14:54:57.069133','2023-11-16 01:28:06.273674',''),(92,'create_1','$2b$10$RZQtpJiFnCZWqsqK.WCDKeBamvDheBqtu7veTBpdroffVi.YPXni.','Create_1!','create_1@test.co.kr','2023-11-16 01:26:10.665544','2023-11-16 01:28:06.280732',''),(93,'create_22','$2b$10$0i.7GlzI1fwgzOMMQ66BrOuWgzXFEJCCpXjdFWcbr9WO9tz1BLhum','','create_22@test.co.kr','2023-11-17 09:25:39.677260','2023-11-21 02:20:44.007143','https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),(94,'박경영','$2b$10$I512Y9PL7wv22mNlo9j29.9PuBBKo5MG3s2efQavSQfGnmtwWnMNy','','happy@happy.com','2023-11-20 12:09:07.750147','2023-11-21 02:09:16.639857','https://images.unsplash.com/photo-1474447976065-67d23accb1e3?q=80&w=2785&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_connection`
--

DROP TABLE IF EXISTS `user_connection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_connection` (
  `id` int NOT NULL AUTO_INCREMENT,
  `isAccepted` tinyint NOT NULL DEFAULT '0',
  `message` varchar(200) DEFAULT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `userId` int DEFAULT NULL,
  `connectedUserId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_17b3942746df1e26963abbdf70` (`userId`,`connectedUserId`),
  KEY `FK_67c7feb15b06b0ae3f12b2c110b` (`connectedUserId`),
  CONSTRAINT `FK_67c7feb15b06b0ae3f12b2c110b` FOREIGN KEY (`connectedUserId`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_99f5ae20767dc93814a8e141f8b` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_connection`
--

LOCK TABLES `user_connection` WRITE;
/*!40000 ALTER TABLE `user_connection` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_connection` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-21 15:43:23
