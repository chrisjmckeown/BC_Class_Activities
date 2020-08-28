// * In a file called `index.html`, create a div that contains two buttons: `previous` and `next`. The carousel should support the following features: 

//   1. When the `next` button is clicked, the image should change to the next image in the array. If the image has reached the end of the array, the image should start over at the start of the array.

//   2. When the `previous` button is clicked, the image should change to the previous image in the array. If the image has reached the start of the array, the image should start over at the end of the array.

//   3. When the user clicks on an image, they will be navigated to the url that hosts that image.
var log = console.log;
var carouselboxEL = document.querySelector(".carouselbox");
var prevEl = document.querySelector(".prev");
var nextEl = document.querySelector(".next");

var image1 = {
    imageName: "1.jpg",
    url: "https://www.google.com/",
};
var image2 = {
    imageName: "2.jpg",
    url: "https://www.google.com/" ,
};
var image3 = {
    imageName: "3.jpg",
    url: "https://www.google.com/" ,
};
var imagelist = [image1,image2,image3];
var index = 0;


nextEl.addEventListener("click", next);
prevEl.addEventListener("click", prev);
carouselboxEL.addEventListener("click", carouselbox);

function next(event) {
    event.stopPropagation();
    var urlString = 'url(' + imagelist[index].imageName + ')';
    carouselboxEL.style.backgroundImage =  urlString;
    index++;
    if(index === imagelist.length){
        index = 0;
    }
};
function prev(event) {
    event.stopPropagation();
    var urlString = 'url(' + imagelist[index].imageName + ')';
    carouselboxEL.style.backgroundImage =  urlString;
    index--;
    
    if(index === -1){
        index = imagelist.length-1;
    }
};
function carouselbox(event) {
    log(imagelist);
    //alert("carouselbox");
    
    var urlString = imagelist[index].url;
    log(urlString);
    window.open(urlString);
};