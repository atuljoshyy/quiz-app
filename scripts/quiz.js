// ========SELECTORS==========
const countdown = document.getElementById('countdown'); 
const questionEl = document.querySelector('#questionEl');
const optionEl1 = document.querySelector('#optionEl1');
const optionEl2 = document.querySelector('#optionEl2');
const optionEl3 = document.querySelector('#optionEl3');
const optionEl4 = document.querySelector('#optionEl4');
const responseEl = document.querySelector('#responseEl');
const nextBtn = document.querySelector('#nextBtn');
const choices = Array.from( document.getElementsByClassName('choice-text'));
// ========EVENT LISTENERS==========
// nextBtn.addEventListener('click', nextQuestion )

let  currentQuestion ={};
let acceptingAnswers = true;
let time = 50;
let questionCounter = 0;
let availableQuestions = [];






// ========COUNTDOWN TIMER==========
document.addEventListener('DOMContentLoaded', startQuiz)
function startQuiz(){
    countdownTimer();

}
function countdownTimer(){
  setInterval(updateTimer, 1000)
}
function updateTimer(){
  let seconds = time % 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  countdown.innerHTML = `${seconds} seconds left`
  time--;
  if(time < 0){
    clearInterval(updateTimer)
    countdown.innerHTML = '0'+'seconds left'
  }
}


// ========QUESTIONS==========
const questions = [
    {
      questionText: "Commonly used data types DO NOT include:",
      choice1: "strings",
      choice2: "booleans",
      choice3: "alerts",
      choice4: "numbers",
      answer: 3
    },
    {
      questionText: "Arrays in JavaScript can be used to store ______.",
      choice1: "numbers and strings",
      choice2: "other arrays",
      choice3: "booleans",
      choice4: "all of the above",
      answer: 4
    },
    {
      questionText:"String values must be enclosed within _____ when being assigned to variables.",
      choice1: "commas",
      choice2: "curly brackets",
      choice3: "quotes",
      choice4: "parentheses",
      answer: 3
    },
    {
      questionText:"A very useful tool used during development and debugging for printing content to the debugger is:",
      choice1: "JavaScript",
      choice2: "terminal/bash",
      choice3: "for loops",
      choice4: "console.log",
      answer: 4
    },
    {
      questionText:"Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
      choice1: "break",
      choice2: "continue",
      choice3: "return",
      choice4: "exit",
      answer: 1
    },
  ];

  const maxQuestions = 3;
  questionNbr = 0;

  startGame = () =>{
    questionCounter = 0;
    time = 50;
    availableQuestions = [...questions];
    getNewQuestion();
  }

  getNewQuestion = () =>{
    questionCounter++;
    const questionIndex =  Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    questionEl.innerText = currentQuestion.questionText;
    choices.forEach(choice => {
      const number = choice.dataset['number'];
      choice.innerText = currentQuestion['choice' + number];
    })
    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
  }

  choices.forEach(choice=>{
    choice.addEventListener('click', e =>{
      if(!acceptingAnswers) return;
      acceptingAnswers = false

      const selectedChoice = e.target;
      const selectedAnswer = selectedChoice.dataset['number'];
      getNewQuestion();
    })
  })
  startGame();

