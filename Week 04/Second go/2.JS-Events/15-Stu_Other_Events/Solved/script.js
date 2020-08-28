var eventType = document.querySelector("#event-type"); 
var mouseEventsEl = document.querySelector("#click-events");
var keyEventsEl = document.querySelector("#key-events");

eventType.addEventListener("change", toggleDisplay);
function toggleDisplay(event) {
  var value = event.target.value;
  if(value === "keydown") {
    mouseEventsEl.classList.add("hide");
    keyEventsEl.classList.remove("hide");
  }
  else {
    mouseEventsEl.classList.remove("hide");
    keyEventsEl.classList.add("hide");
  }
}

document.addEventListener("keydown", keydown);
function keydown(event) {
  var keyPress = event.key;
  var keyCode = event.code;
  document.querySelector("#key").textContent = keyPress;
  document.querySelector("#code").textContent = keyCode;
  document.querySelector("#status").textContent = "KEYDOWN Event";
}

document.addEventListener("keyup", keyup);
function keyup() {
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("click", click);
function click(event) {
  var target = event.target.textContent;
  var x = event.clientX;
  var y = event.clientY;
  document.querySelector("#target").textContent = target;
  document.querySelector("#x").textContent = x;
  document.querySelector("#y").textContent = y;
}
