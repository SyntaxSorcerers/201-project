// "use strict";
function startUp() {
  console.log("Firing... test");
}

startUp();

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

button.addEventListener("submit", Submit);
