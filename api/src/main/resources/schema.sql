DROP DATABASE IF EXISTS reason;

CREATE DATABASE reason;

USE reason;

CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  -->`school_id` bigint DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `school_year` varchar(255) DEFAULT NULL,
  `date_registered` date DEFAULT NULL,
  PRIMARY KEY (`id`)
  -->FOREIGN KEY (`school_id`) REFERENCES `school` (`id`),
);

CREATE TABLE `question` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `difficulty_rating` varchar(255) NOT NULL,
  `question_url` varchar(255) DEFAULT NULL,
  `answer_url` varchar(255) DEFAULT NULL,
  `answer`varchar(255) DEFAULT NULL,
  `additional_instructions` varchar(255) DEFAULT NULL,
  `explanation`varchar(255) DEFAULT NULL,
  `date_added` date DEFAULT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `school`(
   `id` bigint NOT NULL AUTO_INCREMENT,
   `name` bigint DEFAULT NULL,
   `county` varchar(255) DEFAULT NULL,
   `type` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
)

CREATE TABLE `attemptedQuestions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `is_correct` BOOLEAN DEFAULT FALSE,
  `date_completed` date DEFAULT NULL,
  `greeting` varchar(255) DEFAULT NULL,
  `nationality` varchar(255) DEFAULT NULL,
  `question_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  FOREIGN KEY (`question_id`) REFERENCES `question` (`id`)
);