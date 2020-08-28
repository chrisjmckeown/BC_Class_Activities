
var decrement = document.querySelector("#decrement");
var increment = document.querySelector("#increment");
var count = document.querySelector("#count");

var counter = parseInt(count.textContent);

decrement.addEventListener("click", function () {
    // console.log(count.textContent);
    // let value = count.textContent;
    // console.log(value);
    // let count = parseint(value);
    // // //  console.log(count);

    //var counter = parseInt(count.textContent); this wont work in here????
    if(counter === 0)
    {
        return;
    }
    counter--;
    count.textContent = counter;
});

increment.addEventListener("click", function () {
    counter++;
    count.textContent = counter;
    
    //count.textContent ++;

    // var value = count.textContent;
    // value++;
    // count.textContent = value;

    // var value = 
    // var count = value++;
    // count.textContent = count;
});