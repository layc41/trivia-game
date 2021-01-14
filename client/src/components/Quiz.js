import React, { useState, useEffect } from "react";
import { Container, Col, Card, CardGroup, Row } from "react-bootstrap";
import { generateQuiz } from "../utils/API";

function Quiz() {
  let white = "#ffffff";
  let red = "#ff6b6b";
  const [quizData, setQuizData] = useState([]);
  const [answersArray, setAnswersArray] = useState([]);
  const [score, setScore] = useState(0);
  const [toggleCreateBtn, setToggleCreateBtn] = useState(true);
  const [selectedTrueColor, setSelectedTrueColor] = useState(white);//({'color': null});
  const [selectedFalseColor, setSelectedFalseColor] = useState(white);//({'color': null});
  const [submitBtn, setSubmitBtn] = useState(false);

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
          setSubmitBtn(!submitBtn);
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
    } catch (error) {
      console.error(error);
    }
  };


  const handleClickAnswer = (event, bool) => {

    let id = event.target.id;
    let answer = id.split("-")[1];
    let questionIndex = id.split("-")[0];
    var myArray = answersArray;

    myArray[questionIndex] = answer === "true";
    setAnswersArray(myArray);
    console.log(myArray);
  };

  const changeTrueColor = (event) => {
    let id = event.target.id;
    let divToColor = document.getElementById(id); // .style
    // <div className={`box ${isBoxVisible ? "" : "hidden"}`}>

    selectedTrueColor === red ? setSelectedTrueColor(white) : setSelectedTrueColor(red);
  }

  const changeFalseColor = (event) => {
    let id = event.target.id;
    selectedFalseColor === red ? setSelectedFalseColor(white) : setSelectedFalseColor(red);
  }
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
    <Container >

      {quizData.map((quiz, index) => {
        console.log('HEEYYYY');
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
                      {/* <div className={`box ${isBoxVisible ? "" : "hidden"}`}> */}
                      <button
                        className={`btn ${selectedTrueColor} ? "" : ${selectedTrueColor}`}
                        id={index + "-true"}
                        // style={{background: selectedTrueColor}}
                        onClick={(e) => {
                          handleClickAnswer(e, true);
                          changeTrueColor(e);
                        }}
                      >
                        True
                      </button>
                      <button
                        className="btn"
                        id={index + "-false"}
                        style={{background: selectedFalseColor}}
                        onClick={(e) => {
                          handleClickAnswer(e, false);
                          changeFalseColor(e);
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
      {/* <div className='empty'>{() => decodeEntities()}</div> */}
    </Container>
  );
}

export default Quiz;
