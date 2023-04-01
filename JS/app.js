
'use strict';
//helper array and var to hold questions used.
let pocketArray = [];
let currentQuestionInParr = pocketArray[pocketArray.length - 1];
// state
const state = {
  questions: [],
  score: 0,
};
//DOM ref
let question = document.getElementById('question');
let submitButton = document.getElementById('submit');
let hintButton = document.getElementById('hint');
let userInputEvent = document.getElementById('current-question');
let score = document.getElementById('scores');

// helper function for generating a random question from the state index.
function getRandomQuestion() {
  return Math.floor(Math.random() * state.questions.length);
}


//Hint helper constructor for question
class Hints {
  constructor(hint1, hint2, hint3) {
    this.hints = [hint1, hint2, hint3,];
  }
}


// question constructor function
class Question {
  constructor(question, answer, hint) {
    this.question = question;
    this.answer = answer;
    this.hint = hint;
    this.attempts = 2;
    state.questions.push(this);
  }
}

const myQuestion11 = new Question(
  'What year was Forest Gump released?',
  '1994',
  new Hints('The Lion King was released in the same year', 'year', 'date')
);

const myQuestion12 = new Question(
  'Which 90\'s movie featured Looney Tunes on it\'s soundtrack?',
  'Space Jam',
  new Hints('This movie also featured Michael Jordan', 'bugs bunny', 'stuff')
);

const myQuestion = new Question(
  'What is the original working title for E.T.?',
  `A Boy's Life`,
  new Hints('Pellentesque habitant', 'ultricies in', 'adipiscing elit')
);
//Renders question and pushes the currentQuestion into a pocketArray
//then it will remove the question from the state.questions so it will not
//render again.
function renderQuestion() {
  let currentQuestion = getRandomQuestion();
  question.innerText = state.questions[currentQuestion].question;
  pocketArray.push(state.questions[currentQuestion]);
  state.questions.splice(currentQuestion, 1);
}

function handleSubmit(event) {
  event.preventDefault();
  let userInput = event.target.form.userInput.value;
  console.log(userInput);
  if (currentQuestionInParr.attempts > 0) {
    if (userInput !== currentQuestionInParr.answer) {
      currentQuestionInParr.attempts--;
      console.log(currentQuestionInParr.attempts);
      userInputEvent.reset();
    } else {
      state.score += 100;
      score.textContent = state.score;
      console.log(pocketArray);
      renderQuestion();
      userInputEvent.reset();
    }
  } else{
    alert('out of attempts');
    renderQuestion();
    userInputEvent.reset();
  }
}
function handleHints(event) {

  const ulElem = document.createElement('ul');
  hintButton.appendChild(ulElem);

  if (state.questions[currentQuestion].attempts === 2){
    let liElem = document.createElement('li');
    liElem.textContent = state.questions[currentQuestion].hint[0];
    ulElem.appendChild(liElem);
  }
  else if (state.questions[currentQuestion].attempts === 1) {
    let liElem2 = document.createElement('li');
    liElem2.textContent = state.questions[currentQuestion].hint[1];
    ulElem.appendChild(liElem2);
  }
  else if (state.question[currentQuestion].attempts === 0) {
    let liElem3 = document.createElement('li');
    liElem3.textContent = state.questions[currentQuestion].hint[2];
    ulElem.appendChild(liElem3);
  }
}
console.log(state);
renderQuestion();
submitButton.addEventListener('click', handleSubmit);
hintButton.addEventListener('click', handleHints);

// hintButton.onmouseenter();
// let currentQuestion = getRandomQuestion();
// console.log(state.questions[currentQuestion].attempts);
// console.log(currentQuestion);
// console.log(state.questions.length);
// console.log(state);
// renderQuestion();
// const questionElement = document.getElementById("questionOne");
// questionElement.textContent = myQuestion.question;

// // let button = document.querySelector("button");

// let button = document.querySelector("button[type='submit']");

// function Submit(e) {
  //   e.preventDefault();
//   console.log("clicked");
// }

// button.addEventListener("click", Submit);



