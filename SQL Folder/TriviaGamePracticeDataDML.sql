Use TriviaGameDDL;

DESC Username;

INSERT INTO Username (username)
	VALUES("Sandy1"),
    ("Claudia1"),
    ("Tyler1"),
    ("Daniel1"),
    ("Shantoria1");
    
DESC Quiz;

INSERT INTO Quiz (QuizId, NumberCorrect, TotalQuestions, Username_username)
VALUES (1, 5, 10, "Sandy1"),
(2, 6, 10, "Claudia1"),
(3, 7, 10, "Tyler1"),
(4, 8, 10, "Daniel1"),
(5, 9, 10, "Shantoria1"),
(6, 10, 10, "Sandy1"),
(7, 1, 10, "Claudia1"),
(8, 2, 10, "Tyler1"),
(9, 3, 10, "Daniel1"),
(10, 4, 10, "Shantoria1"),
(11, 5, 10, "Sandy1"); 

SELECT * FROM QUIZ