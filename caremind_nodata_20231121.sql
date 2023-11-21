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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-21 15:46:28
