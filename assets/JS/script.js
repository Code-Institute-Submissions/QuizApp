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
    submitButton.addEventListener('click', function () {
        getUserResponse()
    })

}

function getUserResponse() {
    let userResponse
    response.forEach(function (choices) {
        //console.log(choices);
        if (choices.checked === true) {
            userResponse = choices.id

        }

    })
    console.log(userResponse);
}

// Calling Function
displayQuestionChoices()
submitResponse()