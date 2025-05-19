// 1 Завдання "Таймер інтервалу": Створіть програму, яка виводить повідомлення кожну секунду за допомогою setInterval. Після 5 повідомлень зупиніть виконання інтервалу за допомогою clearInterval.
const getSec = document.querySelector(".sec");
const getBtn = document.querySelector(".again");
let seconds = 0;
let timer;

function startTimer() {
     clearInterval(timer)
    seconds = 0;
    timer = setInterval(() => {
    seconds += 1

    getSec.innerHTML = `пройшло секунд: ${seconds}`;

    if(seconds >= 5) {
        clearInterval(timer)
    }
}, 1000);
}


getBtn.addEventListener("click", () => {
   startTimer();
  
})

// 2 
const getTitle2 = document.querySelector(".title2");
let isVisible = true;

setInterval(() => {
  if (isVisible === true) {
   getTitle2.style.opacity = "0";
    isVisible = false;
  } else {
    getTitle2.style.opacity = "1";
    isVisible = true;
  }
}, 1000);

// круг вліво та вправо
const getCircle = document.querySelector(".circle");
let moved = false;

setInterval(() => {
  moved = !moved;
  getCircle.style.left = moved ? "1760px" : "0px";
}, 1000);

// 3
const getStartBtn = document.querySelector(".start-btn");
const getShowSec = document.querySelector(".show-sec");
const getTimeOver = document.querySelector(".time-over");
const getClickBtn = document.querySelector(".click-btn");
const getScore = document.querySelector(".score");

let sec = 0;
let score = 0;
let timer2;
let isGameActive = false;

function startGame() {
 clearInterval(timer2);
 sec = 30
 score = 0
 isGameActive = true

 getShowSec.textContent = sec;
 getScore.textContent = score;
 getTimeOver.textContent = "";

  timer2 = setInterval(() => {
    sec -= 1
    getShowSec.textContent = sec;
     
     if(sec <= 0) {
        clearInterval(timer2)
        getTimeOver.innerHTML = "Час закінчився"
        isGameActive = false;  
    }
  }, 1000)
}

function gameClick() {
  if (isGameActive) {
    score += 1;
    getScore.textContent = score;
  }
}

getStartBtn.addEventListener("click", startGame);
getClickBtn.addEventListener("click", gameClick);

// 4
const getBtnStart = document.querySelector(".time-start-btn");
const getInput = document.querySelector(".time-input");
const getMessage = document.querySelector(".message4");

function startTime() {
  const secondsInput = Number(getInput.value);
  getMessage.textContent = "Очікуємо.."

  setTimeout(() => {
    getMessage.textContent = `Пройшло ${secondsInput} секунд`;
    
  }, secondsInput * 1000)
}

getBtnStart.addEventListener("click", startTime)