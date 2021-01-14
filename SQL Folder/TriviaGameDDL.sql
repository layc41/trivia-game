
DROP SCHEMA IF EXISTS TriviaGameDDL;


CREATE SCHEMA IF NOT EXISTS TriviaGameDDL;
USE TriviaGameDDL;

CREATE TABLE IF NOT EXISTS Username (
  username VARCHAR(45),
  PRIMARY KEY (username),
  UNIQUE INDEX username_UNIQUE (username ASC) VISIBLE)
;


CREATE TABLE IF NOT EXISTS Quiz (
  QuizId INT NOT NULL,
  NumberCorrect INT NOT NULL,
  TotalQuestions INT NOT NULL,
  Score DOUBLE AS (NumberCorrect / TotalQuestions * 100),
  Username_username VARCHAR(45),
    FOREIGN KEY (Username_username)
    REFERENCES TriviaGameDDL.Username (username)
   )
;

