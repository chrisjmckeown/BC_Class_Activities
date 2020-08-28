var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");

var totalSeconds = 0;
var secondsElapsed = 0;
var interval;
var log = console.log;
var dir = console.dir;

initTimer();

function calculateMinutesSeconds() {
  var minutes = Math.floor(secondsElapsed / 60);
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  minutesDisplay.textContent = minutes;
  var seconds = secondsElapsed - minutes * 60;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  secondsDisplay.textContent = seconds;
}

function initTimer() {

  var workSeconds = localStorage.getItem("workSeconds");
  var restSeconds = localStorage.getItem("restSeconds");
  workMinutesInput.value = workSeconds / 60;
  restMinutesInput.value = restSeconds / 60;
  if (statusToggle.checked) {
    totalSeconds = workSeconds;
    secondsElapsed = workSeconds;
    calculateMinutesSeconds();
  }
  else {
    totalSeconds = restSeconds;
    secondsElapsed = restSeconds;
    calculateMinutesSeconds();
  }
};

function saveTime() {
  var workSeconds = parseInt(workMinutesInput.value) * 60;
  var restSeconds = parseInt(restMinutesInput.value) * 60;
  localStorage.setItem("workSeconds", workSeconds);
  localStorage.setItem("restSeconds", restSeconds);
  initTimer();
};

function statusToggler() {
  if (statusToggle.checked) {
    statusSpan.textContent = "Working";
  }
  else {
    statusSpan.textContent = "Resting";
  }
  initTimer();
};

function startTimer() {
  // Write code to start the timer here
  secondsElapsed = totalSeconds;
  interval = setInterval(function () {

    if (secondsElapsed < 1) {
      clearInterval(interval);
      initTimer();
    }
    else {
      secondsElapsed--;
      calculateMinutesSeconds();
    }
  }, 60);
}

function stopTime() {
  clearInterval(interval);
  initTimer();
};

function pauseTimer() {
  clearInterval(interval);
};

workMinutesInput.addEventListener("click", saveTime);
restMinutesInput.addEventListener("click", saveTime);
workMinutesInput.addEventListener("keyup", saveTime);
restMinutesInput.addEventListener("keyup", saveTime);

statusToggle.addEventListener("click", statusToggler);

playButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
stopButton.addEventListener("click", stopTime);



// * **Part One** Create functions in `script.js` to add support for the following features:

//   1. Create a function that initializes the timer by taking the minutes input from the user and setting the `tototalSeconds` variable. Since we'll be using this function to reset as well, clear any existing intervals.

//   2. When the timer starts, update the DOM every second to reflect the time left. It is recommended that you create separate functions to properly format the minutes and seconds.

//   3. When the timer is finished, alert the user that it is time to take a break.

// * **Part Two**: Add functionality to the pause and stop buttons.

//   1. The pause button should temporarily stop the timer. This means that if play is pressed again, the timer will continue where it left off.

//   2. The stop button should reset the timer. If play is pressed again, the timer should start over.

// * **Part Three**: Add the ability to switch back and forth between working time and resting time.

//   1. Set up a variable to keep track of which mode the timer is in.

//   2. If the timer is in working mode, then it should alert the user "Time for a break!" upon completion.

//   3. If the timer is in resting mode, it should alert the user "Time to get back to work!" upon completion.

//   4. Whenever the switch is clicked, the DOM should update with the current status, and the timer should reset.

//   5. Make sure that the timer is using minutes of work in work mode and minutes of rest, respectively. 

// * **Part Four**: Add localStorage to the application

//   1. Every time the user starts a timer, the minutes of work and minutes of rest should be saved to localStorage.

//   2. Upon page load, the minutes of work and minutes of rest input fields should be initialized to their previously stored values.

// ## Bonus

// Prevent the timer from running when the user enters invalid input. (numbers <= 0)
