// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
const { Todo } = require("../models/index.js");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the todos
  app.get("/api/todos", function (req, res) {
    // findAll returns all entries for a table when used with no options
    Todo.findAll({}).then(function (dbTodo) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbTodo);
    });
  });

  // POST route for saving a new todo
  app.post("/api/todos", function (req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    Todo.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function (dbTodo) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbTodo);
    });
  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/todos/:id", function (req, res) {
    // Use the sequelize destroy method to delete a record from our table with the
    // id in req.params.id. res.json the result back to the user
    Todo.destroy({
      where: {
        id: req.params.id
      }
    }).then((result) => {
      res.json(result);
    });
  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/todos", function (req, res) {
    // Use the sequelize update method to update a todo to be equal to the value of req.body
    // req.body will contain the id of the todo we need to update
    const { body: { id, text, complete } } = req;
    Todo.update({
      text: text,
      complete: complete
    }, {
      where: {
        id: id
      }
    }).then((result) => {
      res.json(result);
    })
  });
};
