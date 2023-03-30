"use strict";
let state = {
  question: [],
  hints: [],
  score: 0,
};
class Hints {
  constructor(hint1, hint2, hint3) {
    this.hint1 = hint1;
    this.hint2 = hint2;
    this.hint3 = hint3;
  }
}

class Question {
  constructor(number, question, answer, hint) {
    this.number = number;
    this.question = question;
    this.answer = answer;
    this.hint = hint;
    this.attempt = 3;
  }
}

// function triviaQuestions(question, rightAnswer, wrongAnswer, tryAgain) {
//   let answer = prompt(
//     question +
//       " Option 1: Project No Name " +
//       " Option 2: A Boy's Life " +
//       " Option 3: Unknown Home"
//   );

//   if (answer === "A Boy's Life" || answer === "a boy's life") {
//     alert(rightAnswer);
//   } else if (answer === "False" || answer === "false") {
//     alert(wrongAnswer);
//   } else {
//     alert(tryAgain);
//   }
// }

// triviaQuestions(
//   "What is the original working title for E.T.?",
//   "You are correct!",
//   "Wrong, Please Try Again!",
//   "Try Again"
// );

let button = document.querySelector("button");

function Submit(e) {
  e.preventDefault();
  console.log("clicked");
}

button.addEventListener("click", Submit);
