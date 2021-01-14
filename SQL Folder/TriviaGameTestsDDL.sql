
DROP SCHEMA IF EXISTS TriviaGameTestsDDL;


CREATE SCHEMA IF NOT EXISTS TriviaGameTestsDDL;
USE TriviaGameTestsDDL;

CREATE TABLE IF NOT EXISTS Username (
  username VARCHAR(45),
  PRIMARY KEY (username),
  UNIQUE INDEX username_UNIQUE (username ASC) VISIBLE)
;


CREATE TABLE IF NOT EXISTS Quiz (
  QuizId INT NOT NULL,
  NumberCorrect VARCHAR(45) NOT NULL,
  TotalQuestions VARCHAR(45) NOT NULL,
  Score DOUBLE AS (NumberCorrect / TotalQuestions * 100),
  Username_username VARCHAR(45),
    FOREIGN KEY (Username_username)
    REFERENCES TriviaGameTestsDDL.Username (username)
   )
;

