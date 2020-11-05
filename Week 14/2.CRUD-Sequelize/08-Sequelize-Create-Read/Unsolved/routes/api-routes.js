// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
const { Todo } = require("../models/index.js");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the todos
  app.get("/api/todos", (req, res) => {
    // Write code here to retrieve all of the todos from the database and res.json them
    // back to the user
    Todo.findAll({}).then((results) => {
      res.json(results);
    });
  });

  async function create(todo) {
    const { body: { text, complete } } = req;
    const result = await Todo.create({
      text: text,
      complete: complete
    });
    console.log(result instanceof Todo);
    console.log(result.text);
    res.status(204).end();
  }

  // POST route for saving a new todo. We can create todo with the data in req.body
  app.post("/api/todos", (req, res) => {
    // Write code here to create a new todo and save it to the database
    // and then res.json back the new todo to the user

    create(req);
    
    // const todo = req.body;
    // Todo.create({
    //   text: todo.text,
    //   complete: todo.complete
    // });
    // res.status(204).end();
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
