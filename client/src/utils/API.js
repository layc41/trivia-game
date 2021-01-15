// https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean 
// // link structure for API

// https://opentdb.com/api.php?amount=10&type=boolean 

var BASE_URL = `https://opentdb.com/api.php?amount=10&type=boolean`;
var BACKEND_URL = `http://localhost:8080`;

export const generateQuiz = () => {
    return fetch(`${BASE_URL}`);
};

// two endpoints
// addQuiz
// {id}

/* 
    hit the endpoint /addQuiz
    get back a Quiz object
    we want the quizId (called gameId)
*/
export const postAddQuiz = (quizObject) => {
    // console.log(fetch(`${BACKEND_URL}/addQuiz`, {
    //     method: 'POST', 
    //     headers: {
    //         'Content-Type' : 'application/json', 
    //     },
    //     body: JSON.stringify(quizObject)
    // }));

    return fetch(`${BACKEND_URL}/addQuiz`, {
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json', 
        },
        body: JSON.stringify(quizObject)
    });
}

/*
    call endpoint /addQuiz first
    then, take the gameId from there
    and feed it as param into here
    receive score back
*/
export const getQuizById = (id) => {
    // console.log(fetch((`${BACKEND_URL}/${id}`), {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    // }));
    return fetch((`${BACKEND_URL}/${id}`), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

// export const getStats = () => {

// }

export const saveMovie = (movieData, token) => {
    return fetch('/api/users', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(movieData),
    });
};