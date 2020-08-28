var totalEl = document.querySelector("#total");
var tipEl = document.querySelector("#tip");
var submitEl = document.querySelector("#submit");

var tipAmountEl = document.querySelector("#tip-amount");
var newTotalEl = document.querySelector("#new-total");

submitEl.addEventListener("click", function(event) {
    event.preventDefault();

    var newtotal = (parseFloat(totalEl.value)+ parseFloat(totalEl.value) * (tipEl.value/100)).toFixed(2);
    console.log(newtotal);

    tipAmountEl.textContent = tipEl.value;
    newTotalEl.textContent = newtotal;

  });

  function financial(x) {
    return Number.parseFloat(x).toFixed(2);
  }

var splitNumberEl = document.querySelector("#splitNumber");
var splitTotalEl = document.querySelector("#splitTotal");
var submitsplittotalEl = document.querySelector("#submitsplittotal");

submitsplittotalEl.addEventListener("click", function(event) {
    event.preventDefault();
  
    console.log(event);

    console.log(newTotalEl.value);
    console.log(splitNumberEl.value);
    var splitTotal = (parseFloat(newTotalEl.textContent) / parseFloat(splitNumberEl.value)).toFixed(2);

    console.log(splitTotal);
    splitTotalEl.textContent = splitTotal;
  });