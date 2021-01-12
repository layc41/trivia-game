Use TriviaGame;

DESC `user`;

INSERT INTO `user`(userId, `password`, email, username)
	VALUES(1, "root", "sandy@gmail.com", "Sandy1"),
    (2, "root2", "claudia@gmial.com", "Claudia1"),
    (3, "root3", "tyler@gmail.com", "Tyler1"),
    (4, "root4", "daniel@gmail.com", "Daniel1"),
    (5, "root5", "shantoria@gmail.com", "Shantoria1");
    
DESC `quiz`;

INSERT INTO `quiz`(QuizId, NumberCorrect, TotalQuestions, Score, User_UserId)
VALUES (1, 5, 10, 50, 1),
(2, 6, 10, 50, 2),
(3, 7, 10, 70, 3),
(4, 8, 10, 80, 4),
(5, 9, 10, 90, 5),
(6, 10, 10, 100, 1),
(7, 1, 10, 10, 2),
(8, 2, 10, 20, 3),
(9, 3, 10, 30, 4),
(10, 4, 10, 40, 5),
(11, 5, 10, 50, 1); 
