var site1 = document.querySelector(".site1");
var site2 = document.querySelector(".site2");
var site3 = document.querySelector(".site3");

site1.children[0].textContent = "H4 Site 1";
site1.children[1].children[0].setAttribute("src", "images/image_1.jpg");
site1.children[1].children[0].setAttribute("alt", "image_1");
site1.children[1].setAttribute("href", "google.com");
site1.children[1].children[0].setAttribute("style", "padding:100px;");
site1.children[1].children[0].setAttribute("style", "margin:10px;");
site1.children[1].children[0].setAttribute("style", "border-style: dotted;");
site1.children[0].setAttribute("style", "background-color: lightblue;");

site2.children[0].textContent = "H4 Site 1";
site2.children[1].children[0].setAttribute("src", "images/image_2.jpg");
site2.children[1].children[0].setAttribute("alt", "image_2");
site2.children[1].setAttribute("href", "google.com");
site2.children[1].children[0].setAttribute("style", "padding:10px;");
site2.children[1].children[0].setAttribute("style", "margin:10px;");
site2.children[1].children[0].setAttribute("style", "border-style: dotted;");

site3.children[0].textContent = "H4 Site 3";
site3.children[1].children[0].setAttribute("src", "images/image_3.jpg");
site3.children[1].children[0].setAttribute("alt", "image_3");
site3.children[1].setAttribute("href", "google.com");
site3.children[1].children[0].setAttribute("style", "padding: 50px;");
site3.children[1].children[0].setAttribute("style", "margin: 50px;");
site3.children[1].children[0].setAttribute("style", "border-style: dotted;");


var siteTitles = document.querySelectorAll("h4");
for (var i = 0; i < siteTitles.length; i++) {
    siteTitles[i].setAttribute("style", "color: red;");
}

var sites = ["https://news.ycombinator.com/", "https://twitter.com", "https://instagram.com", "https://google.com", "https://reddit.com/r/webdev"];
for (var i = 0; i < sites.length; i++) {
    site1.children[1].setAttribute("href", sites[Math.floor(Math.random() * sites.length)]);
}