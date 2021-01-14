Use TriviaGameDDL;

DESC Username;

INSERT INTO Username (username)
	VALUES("Sandy1"),
    ("Claudia1"),
    ("Tyler1"),
    ("Daniel1"),
    ("Shantoria1");
    
DESC Quiz;

INSERT INTO Quiz (QuizId, NumberCorrect, TotalQuestions, Score, Username_username)
VALUES (1, 5, 10, 50, "Sandy1"),
(2, 6, 10, 50, "Claudia1"),
(3, 7, 10, 70, "Tyler1"),
(4, 8, 10, 80, "Daniel1"),
(5, 9, 10, 90, "Shantoria1"),
(6, 10, 10, 100, "Sandy1"),
(7, 1, 10, 10, "Claudia1"),
(8, 2, 10, 20, "Tyler1"),
(9, 3, 10, 30, "Daniel1"),
(10, 4, 10, 40, "Shantoria1"),
(11, 5, 10, 50, "Sandy1"); 
