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
  constructor(question, answer, hint) {
    this.question = question;
    this.answer = answer;
    this.hint = hint;
    this.attempt = 3;
  }
}

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

let arr = [
  myQuestionOne,
  myQuestionTwo,
  myQuestionThree,
  myQuestionFour,
  myQuestionFive,
];

const questionElement = document.getElementById("question");
questionElement.textContent = myQuestionOne.question;

let hintBtn = document.querySelector("#hint");

let submitBtn = document.querySelector("#submit");

// let button = document.querySelector("button[type='submit']");

function hint(e) {
  e.preventDefault();
  console.log("clicked hint");
  let currentQuestionIndex = arr.findIndex(function (question) {
    return question.question === questionElement.textContent;
  });

  let currentQuestion = arr[currentQuestionIndex];

  let hintElement = document.getElementById("hint");

  hintElement.textContent =
    "Hint: " +
    currentQuestion.hint.hint1 +
    ", " +
    currentQuestion.hint.hint2 +
    ", " +
    currentQuestion.hint.hint3;
}

function submit(e) {
  e.preventDefault();
  console.log("clicked submit");

  let currentQuestionIndex = arr.findIndex(function (question) {
    return question.question === questionElement.textContent;
  });

  let nextQuestionIndex = currentQuestionIndex + 1;

  if (nextQuestionIndex < arr.length) {
    let nextQuestion = arr[nextQuestionIndex];
    questionElement.textContent = nextQuestion.question;
  } else {
    alert("Your done with the quiz!");
  }
}

hintBtn.addEventListener("click", hint);
submitBtn.addEventListener("click", submit);
