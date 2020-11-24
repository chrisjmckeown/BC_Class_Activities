// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
const { Post } = require("../models/index");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the posts
  app.get("/api/posts", function (req, res) {
    // Add sequelize code to find all posts, and return them to the user with res.json
    Post.findAll({}).then((result) => {
      res.json(result);
    });
  });

  // Get route for returning posts of a specific category
  app.get("/api/posts/category/:category", function (req, res) {
    // Add sequelize code to find all posts where the category is equal to req.params.category,
    // return the result to the user with res.json
    Post.findOne({
      where: {
        category: req.params.category
      }
    }, (result) => {
      res.json(result);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function (req, res) {
    // Add sequelize code to find a single post where the id is equal to req.params.id,
    // return the result to the user with res.json
    Post.findOne({
      where: {
        id: req.params.id
      }
    }, (result) => {
      res.json(result);
    });
  });

  // POST route for saving a new post
  app.post("/api/posts", function (req, res) {
    // Add sequelize code for creating a post using req.body,
    // then return the result using res.json
    const { title, body, category } = req.body;
    Post.create({
      title, body, category
    }).then(function (result) {
      res.json(result);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function (req, res) {
    // Add sequelize code to delete a post where the id is equal to req.params.id, 
    // then return the result to the user using res.json
    Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (result) {
      res.json(result);
    });
  });

  // PUT route for updating posts
  app.put("/api/posts", function (req, res) {
    // Add code here to update a post using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json
    const { title, body, category } = req.body;
    Post.update({
      title, body, category
    }, {
      where: {
        id: req.body.id
      }
    }).then(function (result) {
      res.json(result);
    });
  });
};
