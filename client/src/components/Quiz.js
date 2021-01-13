import React, { useState } from "react";
import { Container, Col, Card, CardGroup, Row} from "react-bootstrap";
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
        
        let correctAnswerArr = quizData.map((quiz) => ({ correct: quiz.correct_answer}))
        console.log('correct', correctAnswerArr)
        
    }

    return (
      <Container>
        <div className="text-center">
          <button onClick={handleFormSubmit} className="btn btn-dark rounded-pill">Create Quiz</button>
        </div>
        
        {quizData.map((quiz, index) => {
          return (
            <CardGroup key={index}>
              <Row>
                <Col>
                  <Card border="dark" style={{width: '58rem'}} id={index+"QuestionCard"}>
                    <Card.Body>
                      <Card.Title className="text-center card-title">
                        {quiz.question}
                      </Card.Title>
                      <Card.Text className='text-center'>
                        <button className="btn btn-primary" id={index+"-true"} onClick={(e)=>handleClickAnswer(e,true)}>True</button>
                        <button className="btn btn-primary" id={index+"-false"} onClick={(e)=>handleClickAnswer(e,false)}>False</button>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </CardGroup>
          );
        })}

        <div className="text-center">
            <a className="btn btn-dark rounded-pill" href="/score" onClick={(e)=>handleSubmitQuiz()}>Submit Quiz!</a>
        </div>
      </Container>
  );
}

export default Quiz;
