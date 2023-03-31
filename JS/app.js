
'use strict';
const state = {
  questions: [],
  hints: [],
  score: 0,
};
const question = document.getElementById('question');
const submitButton = document.getElementById('submit');
const hintButton = document.getElementById('hint');
const userInput = document.getElementById('user');
const score = document.getElementById('scores');
// help
function getRandomQuestion() {
  return Math.floor(Math.random() * state.questions.length);
}

state.prototype.renderQuestion = function () {
  let pocketArray = [];
  while (state.question.length){
    let currentQuestion = getRandomQuestion();
    question.textContent = state.questions[currentQuestion].question;
    pocketArray.push(state.questions[currentQuestion]);

    hintButton.onmouseover = function(){
      while(state.questions[currentQuestion].attempts)
      const ulelem = document.createElement('ul')
        if(state.questions[currentQuestion].attempts === 3)
          hintButton.textContent = state.questions[currentQuestion].hint[0];
    } ifelse(state.questions[currentQuestion].attempts === 2){

    }
  }
};



class Hints {
  constructor(hint1, hint2, hint3) {
    this.hint1 = hint1;
    this.hint2 = hint2;
    this.hint3 = hint3;
    state.hints.push(this);
  }
}



class Question {
  constructor (question, answer, hint) {
    this.question = question;
    this.answer = answer;
    this.hint = hint;
    this.attempts = 3;
    state.questions.push(this);
  }

 function handleSubmit(event){

}


console.log(state);
submitButton.addEventListener('submit', handleSubmit);


// const myQuestion = new Question(
//   1,
//   "What is the original working title for E.T.?",
//   "A Boy's Life",
//   new Hints("Pellentesque habitant", "ultricies in", "adipiscing elit")
// );

// const questionElement = document.getElementById("questionOne");
// questionElement.textContent = myQuestion.question;

// // let button = document.querySelector("button");

// let button = document.querySelector("button[type='submit']");

// function Submit(e) {
//   e.preventDefault();
//   console.log("clicked");
// }

// button.addEventListener("click", Submit);



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

// const myQuestion11 = new Question(
//   'What year was Forest Gump released?',
//   '1994',
//   new Hints('The Lion King was released in the same year')
// );
// const questionElement11 = document.getElementById('questionEleven');
// questionElement11.textContent = myQuestion11.question;
// console.log(myQuestion11);

// const myQuestion12 = new Question(
//   'Which 90\'s movie featured Looney Tunes on it\'s soundtrack?',
//   'Space Jam',
//   new Hints('This movie also featured Michael Jordan')
// );
// const questionElement12 = document.getElementById('questionTwelve');
// questionElement12.textContent = myQuestion12.question;
// console.log(myQuestion12);

// const myQuestion13 = new Question(
//   'What movie is the quote "I see dead people" from?',
//   'The Sixth Sense',
//   new Hints('')
// )


