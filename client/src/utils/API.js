// https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean 
// // link structure for API

// https://opentdb.com/api.php?amount=10&type=boolean 

var BASE_URL = `https://opentdb.com/api.php?amount=10&type=boolean`;
export const generateQuiz = () => {
    var myHeaders = new Headers();
    // // myHeaders.append('Content-Type', 'text/plain; charset=UTF-8');
    // myHeaders.append('Content-Type','text/plain; charset=ISO-8859-1');
    myHeaders.append('Content-Type','text/html; charset=UTF-8');

    // response.setContentType("text/html;charset=UTF-8");
    return fetch(`${BASE_URL}`, myHeaders);
    // , {
    //     headers: {
    //         'Content-Type': 'application/json; charset=UTF-8'
    //     },
    // }
    // );
};