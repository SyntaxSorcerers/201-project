'use strict';
 let state {
    question: [],
    hints: [],
    score:,git 
}
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

