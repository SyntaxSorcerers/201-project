
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

=======
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

