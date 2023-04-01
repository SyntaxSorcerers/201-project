
'use strict';
//helper array and var to hold questions used.
let pocketArray = [];

// state
const state = {
  questions: [],
  score: 0,
};

//DOM ref.
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


//Hint helper constructor for question.
class Hints {
  constructor(hint1, hint2, hint3) {
    this.hints = [hint1, hint2, hint3,];
  }
}


// question constructor function.
class Question {
  constructor(question, answer, hint) {
    this.question = question;
    this.answer = answer;
    this.hint = hint;
    this.attempts = 3;
    state.questions.push(this);
  }
}

// creates the questions using the constructors.
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
    'Who is the high school wise guy?',
    'Ferris Bueller\'s',
    new Hints('Day Off', 'Matthew Broderick', 'John Hughes Film')
  );

  const myQuestionTwo = new Question(
    'What year did Ferris Bueller\'s Day off came out?',
    '1986',
    new Hints('1984', '1986', '1985')
  );

  const myQuestionThree = new Question(
    'Ferris sister\'s name was Jeanie, but according to her, her friends called her what?',
    "Shaunna",
    new Hints('Sandy', 'Sarah', 'Shaunna')
  );

  const myQuestionFour = new Question(
    'Where did Ferris, Cameron, and Sloane take the day off to?',
    'Chicago',
    new Hints('Seattle', 'Chicago', 'New York City')
  );

  const myQuestionFive = new Question(
    'What kind of car do the boys take out for the day?',
    'Ferrari',
    new Hints('Mustang', 'Camaro', 'Ferrari')
  );
}


const questionElement15 = new Question(
  'What 1991 film stars Patrick Swayze as a bank robbing surfer?',
  'Point Break',
  new Hints('Co-stars Keanu Reeves', 'The film was originally titled "Johnny Utah"', 'A remake of the film was released in 2015')
  );  

  const myQuestion6 = new Question(
    "A Boy's Life was the original working title for what 1983 movie?",
    "E.T.",
    new Hints("Highest grossing movie of the decade", "Intergalactic", "Elliot")
  );
  
  const myQuestion7 = new Question(
    "What town did Ren move from in Footloose?",
    "Chicago",
    new Hints("New York", "Detroit", "Chicago")
  );
  
  const myQuestion8 = new Question(
    "What did Samantha give to The Geek so that he could win a bet in Sixteen Candles?",
    "her underwear",
    new Hints("a kiss", "her underwear", "$100 bill")
  );
  
  const myQuestion9 = new Question(
    "After and unfortunate incident the family from A Christmas Story ate their Christmas dinner at what kind of restaurant?",
    "Chinese",
    new Hints("Chinese", "Italian", "Mexican")
  );
  
  const myQuestion10 = new Question(
    "In The Karate Kid what sport did Danny Larusso play in high school?",
    "soccer",
    new Hints("basketball", "football", "soccer")
  );


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
// handles and compares Answers to question object from pocket arr and decrements attempts.
function handleSubmit(event) {
  event.preventDefault();
  let currentQuestionInParr = pocketArray[pocketArray.length - 1];
  let userInput = event.target.form.userInput.value.toLowerCase();

  function removeLi(unorderedList) {
    while (unorderedList.firstChild) {
      unorderedList.removeChild(unorderedList.firstChild);
      removeLi();
    }  
  }  
  
  if (currentQuestionInParr.attempts >= 2) {
    if (userInput !== currentQuestionInParr.answer) {
    console.log('you got it wrong');  
      currentQuestionInParr.attempts--;
      answerResults.textContent = `Bummer you got it wrong. you still have ${currentQuestionInParr.attempts} attempt(s) left`;
      userInputEvent.reset();
      console.log(currentQuestionInParr.attempts);
    } else {
      console.log('you got it right');
      if (userInput === currentQuestionInParr.answer.toLowerCase()) {
        congratsAlert.textContent = 'Radical you got the last question right';
      }  
      state.score += 100;
      renderQuestion();
      userInputEvent.reset();
    }  
  } else {
    alert('out of attempts');
    const oldlist = document.querySelectorAll('ul');
    oldlist[0].remove();
    oldlist[1].remove();
    oldlist[2].remove();
    console.log(oldlist);
    renderQuestion();
    userInputEvent.reset();
  }  
}  

// creates hints and displays them when 'I need a hint' button is clicked.
function handleHints() {
  console.log('proof of life');
  const ulElem = document.createElement('ul');
  hintButton.appendChild(ulElem);

  if (state.questions[currentQuestion].attempts === 2) {

  let currentQuestionInParr = pocketArray[pocketArray.length - 1];  
  console.log(currentQuestionInParr.attempts, '***');
 if (currentQuestionInParr.attempts === 3) {

    let liElem = document.createElement('li');
    liElem.textContent = currentQuestionInParr.hint.hints[0];
    // console.log();
    ulElem.appendChild(liElem);
  }  
  else if (currentQuestionInParr.attempts === 2) {
    let liElem2 = document.createElement('li');
    liElem2.textContent = currentQuestionInParr.hint.hints[1];
    ulElem.appendChild(liElem2);
  }  
  else if (currentQuestionInParr.attempts === 1) {
    let liElem3 = document.createElement('li');
    liElem3.textContent = currentQuestionInParr.hint.hints[2];
    console.log('inside0tries');
    ulElem.appendChild(liElem3);

  }  
  else if (currentQuestionInParr.attempts === -1) {
    console.log('inside-1tries');
    hintButton.removeEventListener('click', handleHints);
    // removeLi(oldlist);
    // resetHints();
    // ulElem.textContent = ' ';
    // console.log(oldList);
  }  
}  

console.log(state);

// call functions.
createQuestions();
renderQuestion();

// Listeners.
submitButton.addEventListener('click', handleSubmit);
hintButton.addEventListener('click', handleHints);
}
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


