var eventType = document.querySelector("#event-type");
var mouseEventsEl = document.querySelector("#click-events");
var keyEventsEl = document.querySelector("#key-events");

function toggleDisplay(event) {
  var value = event.target.value;
  if (value === "keydown") {
    mouseEventsEl.classList.add("hide");
    keyEventsEl.classList.remove("hide");
  }
  else {
    mouseEventsEl.classList.remove("hide");
    keyEventsEl.classList.add("hide");
  }
}

//eventType.addEventListener("change", toggleDisplay); //cleaner way to handle this
eventType.addEventListener("change", function (event) {
  toggleDisplay(event);
});

document.addEventListener("keyup", keypress); // events at a document level
document.addEventListener("keydown", keydown);

var keyEl = document.querySelector("#key");
var codeEl = document.querySelector("#code");
var statusEl = document.querySelector("#status");

function keypress(event) {
  var key = event.key;
  keyEl.textContent = key;
  codeEl.textContent = event.code;
  statusEl.textContent = event.type;
};
function keydown(event) {
  var key = event.key;
  keyEl.textContent = key;
  codeEl.textContent = event.code;
  statusEl.textContent = event.type;
};

var targetEl = document.querySelector("#target");
var xEl = document.querySelector("#x");
var yEl = document.querySelector("#y");

//document.addEventListener("click", function (event) { // could do this to get clicks in the document...
document.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(event.x);
  console.log(event.y);
  console.log(event.clientX);
  console.log(event.clientY);
  targetEl.textContent = event.srcElement.textContent;
  xEl.textContent = event.x;
  yEl.textContent = event.y;
});

// * In this activity, we are going to create a webpage that will allow us to view some meta data about different kinds of events.

// * Open the `index.html` file in your browser and take a moment to study the application.

// * Take a moment to study the code in `index.html` then add the following functionality to the application:

//   1. The select element should trigger the `toggleDisplay` function in `script.js`.

//   2. If `key` is selected, the event's code, key, and status (keydown or keyup) should be displayed in the `#key-events` div when the user presses a key anywhere on the document.

//   3. If `click` is selected, the text content of the event's target, and the cursor's x and y coordinates should be displayed in the `#click-events` div when the user clicks the anywhere on document.