var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";

var doc = document;

var div = "div";
var h1tag = "h1";

var div1El = doc.createElement(div);
var h1tagEl = doc.createElement(h1tag);

doc.body.appendChild(div1El);
div1El.appendChild(h1tagEl);

h1tagEl.textContent = "Ready to go!!!";

var interval = prompt("enter an interval in milliseconds", 1000);

var secondsLeft = 6;
function prepareRead() {
  // Create the countdown timer.
  var timerInterval = setInterval(function () {
    secondsLeft--;
    h1tagEl.textContent = secondsLeft + " seconds left.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      speedRead();
    }

  }, 1000);
}

function speedRead() {
  // Print words to the screen one at a time.tion abbreviate(string) {
  var words = poem.split(" ");
  var i = 0;
  var poemInterval = setInterval(function () {
    if (words[i] === undefined) {
      clearInterval(poemInterval);
      h1tagEl.textContent = "COMPLETE";
    }
    else{
      h1tagEl.textContent = words[i];
      i++;
    }
  }, interval);
}

prepareRead();500