
DROP SCHEMA IF EXISTS TriviaGameDDL;


CREATE SCHEMA IF NOT EXISTS TriviaGameDDL;
USE TriviaGameDDL;

CREATE TABLE IF NOT EXISTS Username (
  username VARCHAR(45) NOT NULL,
  PRIMARY KEY (username),
  UNIQUE INDEX username_UNIQUE (username ASC) VISIBLE)
;


CREATE TABLE IF NOT EXISTS Quiz (
  QuizId INT NOT NULL,
  NumberCorrect VARCHAR(45) NOT NULL,
  TotalQuestions VARCHAR(45) NOT NULL,
  Score VARCHAR(45) NOT NULL,
  Username_username VARCHAR(45) NOT NULL,
  PRIMARY KEY (QuizId, Username_username),
    FOREIGN KEY (Username_username)
    REFERENCES TriviaGameDDL.Username (username)
   )
;

