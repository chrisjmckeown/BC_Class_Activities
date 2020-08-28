console.log(document);

var articles = document.getElementById("articles");

console.log(articles);

articles.children[0].children[1].setAttribute("style", "font-size: 50px;")
//articles.children[0].style.fontSize = "50px"; // same as this