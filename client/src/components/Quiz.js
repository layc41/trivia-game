import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Container, Col, Card, CardGroup, Row, Button } from "react-bootstrap";
import { generateQuiz } from "../utils/API";

function Quiz() {
    const [quizData, setQuizData] = useState([]);
    const [answersArray, setAnswersArray] = useState([]);
    const [score, setScore] = useState(0);

    const handleFormSubmit = async (event) => {

        event.preventDefault();
        try {
            
            await generateQuiz()
            .then((response) => response.json())
            .then((data) => setQuizData(JSON.parse(JSON.stringify(data.results).replace(/&quot;/g, "''").replace(/&#039;/g, "'"))));
            
        } catch (error) {

            console.error(error);

        }
    }

    const handleClickAnswer = (event, bool) => {
        
        let id = event.target.id;
        let answer = id.split('-')[1];
        let questionIndex = id.split('-')[0];
        var myArray = answersArray;
        
        myArray[questionIndex] = (answer === 'true');
        setAnswersArray(myArray);

    }

    const handleSubmitQuiz = (event) => {
        
        let correctAnswerArr = []
        
    }

    return (
      <Container>
        <div className="ml-auto my-2 my-lg-0">
          <button onClick={handleFormSubmit} className="btn btn-dark rounded-pill">Create Quiz</button>
        </div>
        
        {quizData.map((quiz,index) => {
          return (
            <CardGroup key={index}>
              <Row>
                <Col>
                  <Card border="dark" id={index+"QuestionCard"}>
                    <Card.Body>
                      <Card.Title className="text-center card-title">
                        {quiz.question}
                      </Card.Title>

                      <Card.Text>
                        <button className="btn btn-primary" id={index+"-true"} onClick={(e)=>handleClickAnswer(e,true)}>True</button>
                        <button className="btn btn-primary" id={index+"-false"} onClick={(e)=>handleClickAnswer(e,false)}>False</button>
                        {/* <Button className="btn btn-primary">True</Button> */}
                        {/* <Button className="btn btn-primary">False</Button> */}
                        {/* {quiz.correct_answer} */}
                        {/* {quiz.incorrect_answers[0]} */}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </CardGroup>
          );
        })}
        <div className="ml-auto my-2 my-lg-0">
            <a className="btn btn-dark rounded-pill" href="/score">Submit Quiz!</a>
        </div>
      </Container>
  );
}

export default Quiz;
// export score;
