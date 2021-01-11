import React, { useState } from "react";
import { Container, Col, Card, CardGroup, Row } from "react-bootstrap";
import { generateQuiz } from "../utils/API";

export default function Quiz() {
    const [quizData, setQuizData] = useState([]);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            // removed await
            await generateQuiz()
            .then((response) => response.json())
            // .then((data) => setQuizData(data.results));
            .then((data) => setQuizData(JSON.parse(JSON.stringify(data.results).replace(/&quot;/g, "''"))))
            // setQuizData(JSON.parse(quizData.replace(/&quot;/g,'"')));
            // var stringified = JSON.stringify(quizData);
            // console.log('stringified', stringified)
            // stringified = stringified.replace(/&quot;/g, '"');
            // quizData = JSON.parse(stringified);
            // setQuizData(JSON.parse(stringified));
            // var data = $('<div>').html('[{&quot;Id&quot;:1,&quot;Name&quot;:&quot;Name}]')[0].textContent;

            
            
            //   console.log('results', results)
            //   if (!response.ok) {
            //     throw new Error("something went wrong!");
            //   }

            // quizData.map(quiz) => ({
            //     question: quiz.question,
            //     right: quiz.correct,
            //     wrong: quiz.wrong
            // });
            
            //   setQuizData(
            //     resultData.map((quiz) => ({
            //       question: quiz.question,
            //       right: quiz.correct,
            //       wrong: quiz.wrong,
            //     }))
            //   );
        } catch (error) {
            console.error(error);
        }
    }

    return (
      <Container>
        <button onClick={handleFormSubmit}>Submit</button>
        {quizData.map((quiz) => {
          return (
            <CardGroup>
              <Row>
                <Col>
                  <Card border="dark">
                    <Card.Body>
                      <Card.Title className="text-center card-title">
                        {quiz.question}
                        {console.log("test")}
                      </Card.Title>

                      <Card.Text>
                        {quiz.correct_answer}
                        {quiz.incorrect_answers[0]}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </CardGroup>
          );
        })}
      </Container>
  );
}
