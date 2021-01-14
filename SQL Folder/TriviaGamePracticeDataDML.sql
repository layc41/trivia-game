Use TriviaGameDDL;

-- DESC Username;

-- INSERT INTO Username (username)
-- 	VALUES("Sandy1"),
--     ("Claudia1"),
--     ("Tyler1"),
--     ("Daniel1"),
--     ("Shantoria1");
    
DESC Quiz;

INSERT INTO Quiz (QuizId, NumberCorrect, TotalQuestions)
VALUES (1, 5, 10),
(2, 6, 10),
(3, 7, 10),
(4, 8, 10),
(5, 9, 10),
(6, 10, 10),
(7, 1, 10),
(8, 2, 10),
(9, 3, 10),
(10, 4, 10),
(11, 5, 10); 

SELECT * FROM QUIZ
