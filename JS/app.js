
'use strict';
//helper array and var to hold questions used.
let pocketArray = [];
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
function createQuestions() {
  const myQuestion11 = new Question(
    'What year was Forest Gump released?',
    '1994',
    new Hints('1990', '1992', '1994')
  );

  const myQuestion12 = new Question(
    'Which 90\'s movie featured Looney Tunes on it\'s soundtrack?',
    'Space Jam',
    new Hints('Also featured Michael Jordan', 'best NBA movie of all time', 'animated aliens')
  );

  const myQuestion13 = new Question(
    'Johnny Depp cuts the hedges in this 1990 Tim Burton film',
    'Edward Scissor hands',
    new Hints('Mad scientist creation with scissors for hands', 'fantasy romance film', 'co-stars young Winona Ryder')
  );

  const questionElement14 = new Question(
    'Brendan Fraiser plays caveman turned cool guy in what 1992 film?',
    'Encino Man',
    new Hints('co-stars Pauly Shore', 'Sean Austin\'s first movie since The Goonies', 'Weezin\' on the juice')
  );
  
const myQuestionOne = new Question(
  "Who is the high school wise guy?",
  "Ferris Bueller's",
  new Hints("Day Off", "Matthew Broderick", "John Hughes Film")
);

const myQuestionTwo = new Question(
  "What year did Ferris Bueller's Day off came out?",
  "1986",
  new Hints("1984", "1986", "1985")
);

const myQuestionThree = new Question(
  "Ferris' sister's name was Jeanie, but according to her, her friends called her what?",
  "Shaunna",
  new Hints("Sandy", "Sarah", "Shaunna")
);

const myQuestionFour = new Question(
  "Where did Ferris, Cameron, and Sloane take the day off to?",
  "Chicago",
  new Hints("Seattle", "Chicago", "New York City")
);

const myQuestionFive = new Question(
  "What kind of car do the boys take out for the day?",
  "Ferrari",
  new Hints("Mustang", "Camaro", "Ferrari")
);
}


//Renders question and pushes the currentQuestion into a pocketArray
//then it will remove the question from the state.questions so it will not
//render again.
function renderQuestion() {
  let currentQuestion = getRandomQuestion();
  score.textContent = state.score;
  question.innerText = state.questions[currentQuestion].question;
  pocketArray.push(state.questions[currentQuestion]);
  state.questions.splice(currentQuestion, 1);
}

function handleSubmit(event) {
  event.preventDefault();
  let currentQuestionInParr = pocketArray[pocketArray.length - 1];
  let userInput = event.target.form.userInput.value.toLowerCase();
  console.log(userInput);
  if (currentQuestionInParr.attempts > 0) {
    if (userInput !== currentQuestionInParr.answer.toLowerCase()) {
      currentQuestionInParr.attempts--;
      console.log(currentQuestionInParr.attempts, 'this is the wrong answer');
      userInputEvent.reset();
    } else {
      state.score += 100;
      console.log(pocketArray, 'you got it right');
      renderQuestion();
      userInputEvent.reset();
    }
  } else {
    alert('out of attempts');
    renderQuestion();
    userInputEvent.reset();
  }
}
function handleHints() {
  console.log('proof of life');
  const ulElem = document.createElement('ul');
  hintButton.appendChild(ulElem);
  let currentQuestionInParr = pocketArray[pocketArray.length - 1];
  console.log(currentQuestionInParr);
  if (currentQuestionInParr.attempts === 2) {
    let liElem = document.createElement('li');
    liElem.textContent = currentQuestionInParr.hint.hints[0];
    console.log(currentQuestionInParr.hint[0]);
    ulElem.appendChild(liElem);
  }
  else if (currentQuestionInParr.attempts === 1) {
    let liElem2 = document.createElement('li');
    liElem2.innerText = currentQuestionInParr.hint.hints[1];
    console.log(currentQuestionInParr.hint[1]);
    ulElem.appendChild(liElem2);
  }
  else if (currentQuestionInParr.attempts === 0) {
    let liElem3 = document.createElement('li');
    liElem3.innerText = currentQuestionInParr.hint.hints[2];
    console.log(currentQuestionInParr.hint[2]);
    ulElem.appendChild(liElem3);
  }
}
console.log(state);
createQuestions();
renderQuestion();
submitButton.addEventListener('click', handleSubmit);
hintButton.addEventListener('click', handleHints);
