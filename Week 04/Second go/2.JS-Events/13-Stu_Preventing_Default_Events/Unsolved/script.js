// ## Instructions

// * In a file called `index.html`, create a form with the following elements:

// 1. An input for the total price of the meal

// 2. An input for the tip percentage

// 3. A button to calculate the tip

// * In a file called `script.js`, create an event listener that utilizes the values from the input fields to calculate the reccommended tip and the new total of the bill with tip included.

// * Once these values are calculated, display them on the page.

// ## Bonus 

// * Add a feature that gives users the option to evenly split the total between any number of people. Make sure to add code to ensure that the split total will be rounded to two decimal places. 

// ## Hint

// * In JavaScript, we have a function that rounds a number to a given point called `toFixed()`. For more information, visit the docs at [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)
var log = console.log;
var totalEl = document.querySelector("#total");
var tipEl = document.querySelector("#tip");
var submitBtnEl = document.querySelector("#submit");
var tipAmountEl = document.querySelector("#tip-amount");
var newTotalEl = document.querySelector("#new-total");


var splitWaysEl = document.querySelector("#splitWays");
var splitTotalEl = document.querySelector("#split-total");
var splitBtnEl = document.querySelector("#submitSplit");

submitBtnEl.addEventListener("click", function (event) {
    event.preventDefault();
    var total = parseFloat(totalEl.value);
    var tip = parseFloat(tipEl.value);
    if (isNaN(total)) { return; }
    if (isNaN(tip)) { return; }

    var tipAmount = parseFloat((total * tip/100).toFixed(2));
    var newTotal = total + tipAmount;
    tipAmountEl.textContent = tipAmount;
    newTotalEl.textContent = newTotal;
});

splitBtnEl.addEventListener("click", function (event) {
    event.preventDefault(); 
    var splitWays = parseInt(splitWaysEl.value);
    if (isNaN(splitWays)) { return; }
    
    var splitTotal = (parseFloat(newTotalEl.textContent)/splitWays).toFixed(2);
    splitTotalEl.textContent = splitTotal;
});
// var submitEl = document.querySelector("#submit");
// var nameInput = document.querySelector("#name");
// var emailInput = document.querySelector("#email");
// var submissionResponseEl = document.querySelector("#response");

// submitEl.addEventListener("click", function(event) {
//   event.preventDefault();

//   console.log(event);

//   var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
//   submissionResponseEl.textContent = response;
// });