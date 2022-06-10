let quizObjects = [{
    question: "The most popular programming language?",
    first: "Ruby",
    second: "Python",
    third: "JavaScript",
    answer: "third"
}, ]

//console.log(quizObjects[0].first);
// Pull elements from DOM

let mainHead = document.querySelector('.main-head');
let firstLabel = document.querySelector('.firstLabel');
let secondLabel = document.querySelector('.secondLabel');
let thirdLabel = document.querySelector('.thirdLabel');
let submitButton = document.getElementById('submit');
let response = document.querySelectorAll('.choices');

//console.log('responses are', response);
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

/**
 * Second task
 * to find out if the answer submitted is correct or not
 */
function submitResponse() {
    submitButton.addEventListener('click', function (event) {
        event.preventDefault();
        let userResponse = getUserResponse();
        console.log('user selected option', userResponse);
        if (userResponse === quizObjects[0].answer) {
            alert('You have chosen the right answer!');
            incrementScore();
        } else {
            alert('Please select another option');
            incrementWrongAnswer();
        }
    });

}

function getUserResponse() {
    let userResponse;
    response.forEach(function (choices) {
        //console.log(choices);
        if (choices.checked === true) {
            userResponse = choices.id;

        }

    });
    return userResponse;
    //console.log(userResponse);
}


function incrementScore() {

    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;


}
/**
 * Get the current tally of incorrect answers from the DOM and increment it by one
 */
function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;
}


// Calling Functions
displayQuestionChoices();
submitResponse();