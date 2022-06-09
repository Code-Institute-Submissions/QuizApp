

let quizObjects = [
    {
        question: "The most popular programming language?",
        first: "Ruby",
        second: "Python",
        third: "JavaScript",
        answer: "JavaScript"
    },
]

console.log(quizObjects[0].question);
// Pull elements from DOM

let mainHead = document.querySelector('.main-head');

/**
 * First task
 * Display user interface
 */
function displayQuestionChoices() {
    mainHead.innerHTML = quizObjects[0].question;
    //alert("Page testing");
}


// Calling Function
displayQuestionChoices()