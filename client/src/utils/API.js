// https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean 
// // link structure for API

// https://opentdb.com/api.php?amount=10&type=boolean 

var BASE_URL = `https://opentdb.com/api.php?amount=10&type=boolean`;
export const generateQuiz = () => {

    return fetch(`${BASE_URL}`);

};

export const getScore = () => {

}

export const getUser = () => {

}

export const getStats = () => {

}