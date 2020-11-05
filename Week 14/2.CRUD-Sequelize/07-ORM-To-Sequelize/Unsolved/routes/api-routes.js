// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// grab the orm from the config
// (remember: connection.js -> orm.js -> route file)
// var orm = require("../config/orm.js");

// Routes
// =============================================================

const { Todo } = require("../models/index.js");

module.exports = function (app) {

  // GET route for getting all of the todos
  app.get("/api/todos", (req, res) => {
    Todo.findAll({}).then((results) => {
      res.json(results);
    });
  });

  // POST route for saving a new todo. We can create a todo using the data on req.body
  app.post("/api/todos", (req, res) => {
    const todo = req.body;
    Todo.create({
      text: todo.text,
      complete: todo.complete
    });

    res.status(204).end();
  });

  // DELETE route for deleting todos. We can access the ID of the todo to delete in
  // req.params.id
  app.delete("/api/todos/:id", (req, res) => {
    Todo.destroy({
      where: {
        id: req.params.id
      }
    }).then(() => {
      res.end();
    });
  });

  // PUT route for updating todos. We can access the updated todo in req.body
  app.put("/api/todos", (req, res) => {
    const todo = req.body;
    Todo.update({ text: todo.text }, {
      where: {
        id: todo.id
      }
    }).then(() => {
      res.end();
    });
  });
};