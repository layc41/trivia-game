import React, { useState, useEffect } from "react";
import { Container, Col, Card, CardGroup, Row } from "react-bootstrap";
import { generateQuiz } from "../utils/API";

function Quiz() {
  let black = "#292f36";
  let red = "#ff6b6b";
  const [quizData, setQuizData] = useState([]);
  const [answersArray, setAnswersArray] = useState([]);
  const [score, setScore] = useState(0);
  const [toggleCreateBtn, setToggleCreateBtn] = useState(true);
  const [toggleAnswer, setToggleAnswer] = useState(false);
  const [submitBtn, setSubmitBtn] = useState(false);

  const addOne = () => setScore(score + 1);

  var ToggleQuizButton = () => (
    <div className="text-center">
      <button
        onClick={handleCreateQuizBtn}
        className="btn btn-dark rounded-pill"
      >
        Create Quiz
      </button>
    </div>
  );

  var ToggleSubmitButton = () => (
    <div className="text-center">
      <a
        className="btn btn-dark rounded-pill"
        href="/score"
        onClick={(e) => {
          // setScore(score + 1)
          setSubmitBtn(!submitBtn);
          // handleSubmitQuiz();
        }}
      >
        Submit Quiz!
      </a>
    </div>
  );

  const handleCreateQuizBtn = async (event) => {
    event.preventDefault();

    try {
      await generateQuiz()
        .then((response) => response.json())
        .then((data) =>
          setQuizData(
            JSON.parse(
              JSON.stringify(data.results)
                .replace(/&quot;/g, "''")
                .replace(/&#039;/g, "'")
            )
          )
        )
        .then(setToggleCreateBtn(!toggleCreateBtn));
    } catch (error) {
      console.error(error);
    }
  };

  // const selectedAnswer = () => toggleAnswer ?  : 'black'

  const handleClickAnswer = (event, bool) => {
    setToggleAnswer(!toggleAnswer); // may delete later

    let id = event.target.id;
    let answer = id.split("-")[1];
    let questionIndex = id.split("-")[0];
    var myArray = answersArray;

    myArray[questionIndex] = answer === "true";
    setAnswersArray(myArray);
    console.log(myArray);
  };


  // return a (score) to back end
  // get quiz stats from back end

  // GET "/getQuizStats(int score)"
//   {
//     "number right": 1,
//   "total questions": 10,
//   'calculated score': 1/10 = 10%
// }
  

  useEffect(() => {
    let correctAnswerArr = quizData.map((quiz) => quiz.correct_answer);
    let checkAnswersArray = [];
    let numberCorrect = 0;
    for (let i = 0; i < correctAnswerArr.length; i++) {
      if (correctAnswerArr[i] === "True" && answersArray[i] === true) {
        checkAnswersArray[i] = "Correct";
        numberCorrect = numberCorrect + 1;
      } else checkAnswersArray[i] = "Wrong";
    }

    setScore(numberCorrect);
  }, [submitBtn]);

  return (
    <Container>
      {quizData.map((quiz, index) => {
        return (
          <CardGroup key={index}>
            <Row>
              <Col>
                <Card
                  border="dark"
                  style={{ width: "58rem" }}
                  id={index + "QuestionCard"}
                >
                  <Card.Body>
                    <Card.Title className="text-center card-title">
                      {quiz.question}
                    </Card.Title>
                    <Card.Text className="text-center">
                      <button
                        className="btn btn-primary myDiv"
                        id={index + "-true"}
                        onClick={(e) => {
                          handleClickAnswer(e, true);
                        }}
                      >
                        True
                      </button>
                      <button
                        className="btn btn-primary myDiv"
                        id={index + "-false"}
                        onClick={(e) => {
                          handleClickAnswer(e, false);
                        }}
                      >
                        False
                      </button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </CardGroup>
        );
      })}
      <div className="text-center">
        {toggleCreateBtn ? <ToggleQuizButton /> : <ToggleSubmitButton />}
      </div>
    </Container>
  );
}

export default Quiz;
