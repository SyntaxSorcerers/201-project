
'use strict';
const question = document.getElementById('question');
const submitButton = document.getElementById('submit');
const hintButton = document.getElementById('hint');
const userInput = document.getElementById('user');
const score = document.getElementById('scores');

const state = {
  questions: [],
  hints: [],
  score: 0,
};

class Hints {
  constructor(hint1, hint2, hint3) {
    this.hint1 = hint1;
    this.hint2 = hint2;
    this.hint3 = hint3;
    state.hints.push(this);
  }
  handleHintSubmit(event){

  }
}

class Question {
  constructor(number, question, answer, hint) {
    this.number = number;
    this.question = question;
    this.answer = answer;
    this.hint = hint;
    this.attempt = 3;
    state.questions.push(this);
}
  }
  handleSubmit(event){

}
}




console.log(state);
submitButton.addEventListener('submit', handleSubmit);
hintButton.addEventListener('submit', handleHintSubmit);


const myQuestion = new Question(
  1,
  "What is the original working title for E.T.?",
  "A Boy's Life",
  new Hints("Pellentesque habitant", "ultricies in", "adipiscing elit")
);

const questionElement = document.getElementById("questionOne");
questionElement.textContent = myQuestion.question;

// let button = document.querySelector("button");

let button = document.querySelector("button[type='submit']");

function Submit(e) {
  e.preventDefault();
  console.log("clicked");
}

button.addEventListener("click", Submit);



// function question11() {
//   let userInput = prompt('What year was Forest Gump released?');
//   if (userInput === 1994){
//     alert('Booyah! You got it!');
//     console.log('Booyah! You got it!');
//   } else if (userInput !== '1994'){
//     alert('That answer was totally bogus, try again!');
//   }
// }
// question11();

const myQuestion11 = new Question(
  'What year was Forest Gump released?',
  '1994',
  new Hints('1990, 1992, 1994')
);

const myQuestion12 = new Question(
  'Which 90\'s movie featured Looney Tunes on it\'s soundtrack?',
  'Space Jam',
  new Hints('Also featured Michael Jordan, best NBA movie of all time, animated aliens')
);

const myQuestion13 = new Question(
  'Johnny Depp cuts the hedges in this 1990 Tim Burton film',
  'Edward Scissorhands',
  new Hints('Mad scientist creation with scissors for hands, fantasy romance film, co-stars young Winona Ryder')
);

const questionElement14 = new Question(
  'Brendan Fraiser plays caveman turned cool guy in what 1992 film?',
  'Encino Man',
  new Hints('co-stars Pauly Shore, Sean Astin\'s first movie since The Goonies, "Weezin\' on the juice"')
);

const questionElement15 = new Question(
  ''
)


