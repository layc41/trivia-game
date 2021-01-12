DROP SCHEMA IF EXISTS TriviaGame ;

CREATE SCHEMA IF NOT EXISTS TriviaGame;
USE TriviaGame ;

CREATE TABLE IF NOT EXISTS `User` (
  UserId INT NOT NULL,
  `Password` VARCHAR(45) NULL,
  Email VARCHAR(45) NOT NULL,
  Username VARCHAR(45) NOT NULL,
  PRIMARY KEY (`UserId`),
  UNIQUE INDEX `Email_UNIQUE` (`Email` ASC) VISIBLE,
  UNIQUE INDEX `Username_UNIQUE` (`Username` ASC) VISIBLE);


CREATE TABLE IF NOT EXISTS Quiz (
  QuizId INT NOT NULL,
  NumberCorrect INT NULL,
  TotalQuestions INT NULL,
  Score INT NULL,
  User_UserId INT NOT NULL,
  PRIMARY KEY (`QuizId`, `User_UserId`),
    FOREIGN KEY (`User_UserId`)
    REFERENCES `TriviaGame`.`User` (`UserId`));
