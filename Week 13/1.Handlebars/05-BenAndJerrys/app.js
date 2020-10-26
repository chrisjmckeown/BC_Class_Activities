const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var icecreams = [
    { name: 'vanilla', price: 10, awesomeness: 3 },
    { name: 'chocolate', price: 4, awesomeness: 8 },
    { name: 'banana', price: 1, awesomeness: 1 },
    { name: 'greentea', price: 5, awesomeness: 7 },
    { name: 'jawbreakers', price: 6, awesomeness: 2 },
    { name: "pistachio", price: 11, awesomeness: 15 }
];

// Routes
app.get("/icecream/:name",  (req, res) =>{
    const name = req.params.name;
    const icecream = icecreams.filter(icecream => icecream.name === name);
    if (icecream.length > 0) {
        res.render("index", icecream[0]);
    } else {
        res.render("index", { name: `Could not find ${name}`,price: 0, awesomeness: 0 });
    }
});

app.get("*",  (req, res) =>{
    res.render("all-icecreams", {
        icecreams: icecreams
    });
});

app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
});