// Create your HTML Page via DOM Methods here!

var div1 = "div";
var h1tag = "h1";
var h2tag = "h2";
var imgtag = "img";
var ptag = "p";
var div1El = document.createElement(div1);
document.body.appendChild(div1El);
div1El.setAttribute("style", "text-align:center");

var h1tagEl = document.createElement(h1tag);
h1tagEl.textContent = "This was made via prompts. It's a " + h1tag;
div1El.appendChild(h1tagEl);

var h2tagEl = document.createElement(h2tag);
h2tagEl.textContent = "This was made via prompts. It's a " + h2tag;
div1El.appendChild(h2tagEl);

var imgtagEl = document.createElement(imgtag);
div1El.appendChild(imgtagEl);

div1El.children[2].setAttribute("src", "../images/image_1.jpg");
div1El.children[2].setAttribute("alt", "Man at computer");

var ptagEl = document.createElement(ptag);
ptagEl.textContent = "Man at computer";
div1El.appendChild(ptagEl);

var div2 = "div";
var div2El = document.createElement(div2);
document.body.appendChild(div2El);

var ultag = "ul";
var ultagEl = document.createElement(ultag);
div2El.appendChild(ultagEl);
var litag1 = "li";
var litagEl1 = document.createElement(litag1);
litagEl1.textContent = "Burger";
ultagEl.appendChild(litagEl1);
var litagEl2 = document.createElement(litag1);
litagEl2.textContent = "Chocolate";
ultagEl.appendChild(litagEl2);
var litagEl3 = document.createElement(litag1);
litagEl3.textContent = "Coke";
ultagEl.appendChild(litagEl3);
var litagEl4 = document.createElement(litag1);
litagEl4.textContent = "Pizza";
ultagEl.appendChild(litagEl4);


ultagEl.children[0].setAttribute("style", " color:white; background: #666666; padding: 5px; margin-left: 35px;");
ultagEl.children[1].setAttribute("style", " color:white; background: #777777; padding: 5px; margin-left: 35px;");
ultagEl.children[2].setAttribute("style", " color:white; background: #888888; padding: 5px; margin-left: 35px;");
ultagEl.children[3].setAttribute("style", " color:white; background: #999999; padding: 5px; margin-left: 35px;");