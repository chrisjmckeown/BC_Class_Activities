// * In a file called `index.html`, create a button containing the string "Increment".

// * In a file called `script.js`, create an event listener with a callback that increments the counter and displays the updated count on the webpage.

// * Add a button that decrements the counter when clicked.

// ## Bonus

// * Add some code to ensure that the count never gets below 0.
var log = console.log;
var decrementEl = document.querySelector("#decrement");
var incrementEl = document.querySelector("#increment");
var countEl = document.querySelector("#count");

var counter = parseInt(countEl.textContent);

decrementEl.addEventListener("click", function (event) {
    //log(event, countEl, counter);
    if(counter !== 0){
        countEl.textContent = --counter;
    }
    else{
        countEl.textContent = counter += 10;
    }
});

incrementEl.addEventListener("click", function (event) {
    //log(event, countEl, counter);
    countEl.textContent = ++counter;
});