
'use strict';
//helper array and var to hold questions used.
let pocketArray = [];
// state
const state = {
  questions: [],
  score: 0,
};
//DOM ref
let answerResults = document.getElementById('resultsOfAnswer');
let question = document.getElementById('question');
let submitButton = document.getElementById('submit');
let hintButton = document.getElementById('hint');
let userInputEvent = document.getElementById('current-question');
let score = document.getElementById('scores');
let congratsAlert = document.getElementById('right');

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
    this.attempts = 3;
    state.questions.push(this);
  }
}

// const myQuestion6 = new Question(
//   1,
//   "A Boy's Life was the original working title for what 1983 movie?",
//   new Hints("Highest grossing movie of the decade", "Intergalactic", "Elliot")
// );

// const myQuestion7 = new Question(
//   2,
//   "What town did Ren move from in Footloose?",
//   new Hints("New York", "Detroit", "Chicago")
// );

// const myQuestion8 = new Question(
//   3,
//   "What did Samantha give to The Geek so that he could win a bet in Sixteen Candles?",
//   new Hints("a kiss", "her underwear", "$100 bill")
// );

// const myQuestion9 = new Question(
//   4,
//   "After and unfortunate incident the family from A Christmas Story ate their Christmas dinner at what kind of restaurant?",
//   new Hints("Chinese", "Italian", "Mexican")
// );

// const myQuestion10 = new Question(
//   5,
//   "In The Karate Kid what sport did Danny Larusso play in high school?",
//   new Hints("basketball", "football", "soccer")
// );
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
}


//Renders question and pushes the currentQuestion into a pocketArray
//then it will remove the question from the state.questions so it will not
//render again.
function renderQuestion() {
  let currentQuestion = getRandomQuestion();
  score.textContent = state.score;
  answerResults.textContent = `you have 3 attempt(s)`;
  question.innerText = state.questions[currentQuestion].question;
  pocketArray.push(state.questions[currentQuestion]);
  state.questions.splice(currentQuestion, 1);
}

function handleSubmit(event) {
  event.preventDefault();
  let currentQuestionInParr = pocketArray[pocketArray.length - 1];
  let userInput = event.target.form.userInput.value.toLowerCase();
  if (currentQuestionInParr.attempts >= 2) {
    if (userInput !== currentQuestionInParr.answer.toLowerCase()) {
      console.log('you got it wrong');
      currentQuestionInParr.attempts--;
      answerResults.textContent = `Bummer you got it wrong. you still have ${currentQuestionInParr.attempts} attempt(s) left`;
      userInputEvent.reset();
      console.log(currentQuestionInParr.attempts);
    } else {
      console.log('you got it right');
      if (userInput === currentQuestionInParr.answer.toLowerCase()){
        congratsAlert.textContent = 'Radical you got the last question right';
      }
      state.score += 100;
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
