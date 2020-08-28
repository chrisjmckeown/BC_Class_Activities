// Create your HTML Page via DOM Methods here!

var div = "div";
var h1tag = "h1";
var h2tag = "h2";
var imgtag = "img";
var ptag = "p";
var ultag = "ul";
var litag = "li";

var div1El = document.createElement(div);
var h1tagEl = document.createElement(h1tag);
var h2tagEl = document.createElement(h2tag);
var imgtagEl = document.createElement(imgtag);
var ptagEl = document.createElement(ptag);
var div2El = document.createElement(div);
var ultagEl = document.createElement(ultag);
var litagEl1 = document.createElement(litag);
var litagEl2 = document.createElement(litag);
var litagEl3 = document.createElement(litag);
var litagEl4 = document.createElement(litag);

document.body.appendChild(div1El);
div1El.appendChild(h1tagEl);
div1El.appendChild(h2tagEl);
div1El.appendChild(imgtagEl);
div1El.appendChild(ptagEl);
document.body.appendChild(div2El);
div2El.appendChild(ultagEl);
ultagEl.appendChild(litagEl1);
ultagEl.appendChild(litagEl2);
ultagEl.appendChild(litagEl3);
ultagEl.appendChild(litagEl4);

div1El.setAttribute("style", "text-align:center");
h1tagEl.textContent = "This was made via prompts. It's a " + h1tag;
h2tagEl.textContent = "This was made via prompts. It's a " + h2tag;
div1El.children[2].setAttribute("src", "../images/image_1.jpg");
div1El.children[2].setAttribute("alt", "Man at computer");
ptagEl.textContent = "Man at computer";
litagEl1.textContent = "Burger";
litagEl2.textContent = "Chocolate";
litagEl3.textContent = "Coke";
litagEl4.textContent = "Pizza";

ultagEl.children[0].setAttribute("style", " color:red; background: #666666; padding: 10px; margin-left: 35px;");
ultagEl.children[1].setAttribute("style", " color:red; background: #777777; padding: 15px; margin-left: 35px;");
ultagEl.children[2].setAttribute("style", " color:red; background: #888888; padding: 20px; margin-left: 35px;");
ultagEl.children[3].setAttribute("style", " color:red; background: #999999; padding: 25px; margin-left: 35px;");