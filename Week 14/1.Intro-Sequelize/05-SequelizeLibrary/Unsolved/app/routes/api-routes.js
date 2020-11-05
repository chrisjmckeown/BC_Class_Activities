// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const Book = require("../models/book.js");


// Routes
// =============================================================
module.exports = (app) => {

  // Add sequelize code to get all books and return them as JSON
  app.get("/api/all", (req, res) => {
    Book.findAll({}).then((results) => {
      res.json(results);
    });
  });

  // Add sequelize code to get a specific book and return it as JSON
  app.get("/api/:book", (req, res) => {
    Book.findAll({
      where: {
        title: req.params.book
      }
    }).then((results) => {
      res.json(results);
    });
  });

  // Add sequelize code to get all books of a specific genre and return them as JSON
  app.get("/api/genre/:genre", (req, res) => {
    Book.findAll({
      where: {
        genre: req.params.genre
      }
    }).then((results) => {
      res.json(results);
    });
  });

  // Add sequelize code to get all books from a specific author and return them as JSON
  app.get("/api/author/:author", (req, res) => {
    Book.findAll({
      where: {
        author: req.params.author
      }
    }).then((results) => {
      res.json(results);
    });
  });

  // Add sequelize code to get all "long" books (more than 150 pages) and return them as JSON
  app.get("/api/books/long", (req, res) => {
    Book.findAll({
      where: {
        pages : {
          $gte: 150
        }
      }
    }).then((results) => {
      res.json(results);
    });
  });

  // Add sequelize code to get all "short" books (150 pages or less) and return them as JSON
  app.get("/api/books/short", (req, res) => {
    Book.findAll({
      where: {
        pages : {
          $lte: 150
        }
      }
    }).then((results) => {
      res.json(results);
    });
  });

  // Add sequelize code to create a book
  app.post("/api/new", (req, res) => {
    Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      pages: req.body.pages
    }).then((results) => {
      res.end();
    });
  });

  // Add sequelize code to delete a book
  app.delete("/api/book/:id", function (req, res) {
    console.log( req.params.id);
    Book.destroy({
      where: {
        id: req.params.id
      }
    }).then((results) => {
      res.end();
    });
  });
};
