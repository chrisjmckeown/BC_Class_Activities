// * In a file called `index.html`, create a div that contains two buttons: `previous` and `next`. The carousel should support the following features: 

//   1. When the `next` button is clicked, the image should change to the next image in the array. If the image has reached the end of the array, the image should start over at the start of the array.

//   2. When the `previous` button is clicked, the image should change to the previous image in the array. If the image has reached the start of the array, the image should start over at the end of the array.

//   3. When the user clicks on an image, they will be navigated to the url that hosts that image.

var carouselbox = document.querySelector(".carouselbox");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");

var imageList = ["001-20141201-002.JPG","002-20141201-004.JPG","003-20141201-006.JPG"];
var currentIndex = 0;

function prev_clk(event) {
    event.stopPropagation();
    alert("previous clicked");
    carouselbox.style.backgroundImage = "url('001-20141201-002.JPG')";//;//imageList[currentIndex];
}

function next_clk(event) {
    event.stopPropagation();
    //alert("next clicked");
}

function carouselbox_div(event) {
    // event.stopPropagation();
    //alert("carouselbox click");
}

carouselbox.addEventListener("click", carouselbox_div);

prev.addEventListener("click", prev_clk);
next.addEventListener("click", next_clk);