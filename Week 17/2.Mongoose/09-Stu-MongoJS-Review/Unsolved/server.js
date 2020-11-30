// Your assignment is to define the routes below. Good luck!

const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");

const databaseUrl = "warmup";
const collections = ["books"];
const db = mongojs(databaseUrl, collections);

const app = express();

const PORT = process.env.PORT || 8080;

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

db.on("error", (error) => {
  console.log("Database Error:", error);
});

// Routes
// ======

// TODO: Fill in each route so that the server performs
// the proper mongojs functions for the site to function
// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

// Post a book to the mongoose database
app.post("/submit", ({ body }, res) => {
  // Save the request body as an object called book
  const book = body;

  // If we want the object to have a boolean value of false,
  // we have to do it here, because the ajax post will convert it
  // to a string instead of a boolean
  book.read = false;
  db.books.insert(book, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

// Find all books marked as read
app.get("/read", (req, res) => {
  db.books.find({ read: true }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

// Find all books marked as unread
app.get("/unread", (req, res) => {
  db.books.find({ read: false }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

// Mark a book as having been read
app.put("/markread/:id", (req, res) => {
  // Remember: when searching by an id, the id needs to be passed in
  // as (mongojs.ObjectId(IdYouWantToFind))
  setBook(true, req.params.id, res);
});

// Mark a book as having been not read
app.put("/markunread/:id", (req, res) => {
  // Remember: when searching by an id, the id needs to be passed in
  // as (mongojs.ObjectId(IdYouWantToFind))
  setBook(false, req.params.id, res);
});

const setBook = (state, id, res) => {
  db.books.update(
    {
      _id: mongojs.ObjectId(id),
    },
    {
      $set: {
        read: state,
      },
    },
    (err, data) => {
      if (err) {
        console.log(err);
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
};
// Listen on port
app.listen(PORT, () => {
  console.log("App running on: http://localhost:" + PORT);
});
