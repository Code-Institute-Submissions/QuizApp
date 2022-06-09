

let quizObjects = [
    {
        question: "The most popular programming language?",
        first: "Ruby",
        second: "Python",
        third: "JavaScript",
        answer: "JavaScript"
    },
]

console.log(quizObjects[0].first);
// Pull elements from DOM

let mainHead = document.querySelector('.main-head');
let firstLabel = document.querySelector('.firstLabel');
let secondLabel = document.querySelector('.secondLabel');
let thirdLabel = document.querySelector('.thirdLabel');
/**
 * First task
 * Display user interface
 */
function displayQuestionChoices() {
    mainHead.innerHTML = quizObjects[0].question;
    firstLabel.innerHTML = quizObjects[0].first;
    secondLabel.innerHTML = quizObjects[0].second;
    thirdLabel.innerHTML = quizObjects[0].third;
    //alert("Page testing");
}


// Calling Function
displayQuestionChoices()