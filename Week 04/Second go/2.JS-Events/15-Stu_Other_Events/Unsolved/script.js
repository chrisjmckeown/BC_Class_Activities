var eventType = document.querySelector("#event-type");
var mouseEventsEl = document.querySelector("#click-events");
var keyEventsEl = document.querySelector("#key-events");

function toggleDisplay(event) {
  var value = event.target.value;
  if (value === "keydown") {
    mouseEventsEl.classList.add("hide");//allows you to target specific class names
    keyEventsEl.classList.remove("hide");
  }
  else {
    mouseEventsEl.classList.remove("hide");
    keyEventsEl.classList.add("hide");
  }
}

var log = console.log;

document.addEventListener("keydown", function (event) {
  //alert("keydown");
  //log(event);
  document.querySelector("#key").textContent = event.key;
  document.querySelector("#code").textContent = event.code;
  document.querySelector("#status").textContent = event.type;
});
document.addEventListener("keyup", function (event) {
  //alert("keyup");
  document.querySelector("#status").textContent = event.type;
});
document.addEventListener("click", function (event) {
  log(event);
  document.querySelector("#target").textContent = event.target.outerText;
  document.querySelector("#x").textContent = event.clientX;
  document.querySelector("#y").textContent = event.clientY;
});
eventType.addEventListener("change", function (event) {
  //alert("changed");
  event.preventDefault();
  toggleDisplay(event);
});


// * Take a moment to study the code in `index.html` then add the following functionality to the application:

//   1. The select element should trigger the `toggleDisplay` function in `script.js`.

//   2. If `key` is selected, the event's code, key, and status (keydown or keyup) should be displayed in the `#key-events` div when the user presses a key anywhere on the document.

//   3. If `click` is selected, the text content of the event's target, and the cursor's x and y coordinates should be displayed in the `#click-events` div when the user clicks the anywhere on document.

// ## Bonus

// * If time permits, take a moment to research some other JavaScript events.
