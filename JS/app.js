
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





console.log(state);
submitButton.addEventListener('submit', handleSubmit);
hintButton.addEventListener('submit', handleHintSubmit);


const myQuestion6 = new Question(
  1,
  "A Boy's Life was the original working title for what 1983 movie?",
  new Hints("Highest grossing movie of the decade", "Intergalactic", "Elliot")
);

const myQuestion7 = new Question(
  2,
  "What town did Ren move from in Footloose?",
  new Hints("New York", "Detroit", "Chicago")
);

const myQuestion8 = new Question(
  3,
  "What did Samantha give to The Geek so that he could win a bet in Sixteen Candles?",
  new Hints("a kiss", "her underwear", "$100 bill")
);

const myQuestion9 = new Question(
  4,
  "After and unfortunate incident the family from A Christmas Story ate their Christmas dinner at what kind of restaurant?",
  new Hints("Chinese", "Italian", "Mexican")
);

const myQuestion10 = new Question(
  5,
  "In The Karate Kid what sport did Danny Larusso play in high school?",
  new Hints("basketball", "football", "soccer")
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


