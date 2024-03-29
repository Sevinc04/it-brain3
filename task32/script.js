let timer;
let minutes = 0;
let seconds = 0;
let isTimerRunning = false;

const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');

function startTimer() {
  if (!isTimerRunning) {
    timer = setInterval(updateTimer, 1000);
    isTimerRunning = true;
    startStopButton.textContent = 'Stop';
  } else {
    clearInterval(timer);
    isTimerRunning = false;
    startStopButton.textContent = 'Start';
  }
}

function resetTimer() {
  clearInterval(timer);
  minutes = 0;
  seconds = 0;
  isTimerRunning = false;
  minutesDisplay.textContent = '00';
  secondsDisplay.textContent = '00';
  startStopButton.textContent = 'Start';
}

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  minutesDisplay.textContent = padTime(minutes);
  secondsDisplay.textContent = padTime(seconds);
}

function padTime(time) {
  return time < 10 ? '0' + time : time;
}

startStopButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);
