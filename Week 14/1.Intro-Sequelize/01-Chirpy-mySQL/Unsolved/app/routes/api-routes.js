// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const con = require("../config/connection.js");
// Routes
// =============================================================
module.exports = (app) => {

  // Get all chirps
  app.get("/api/all", (req, res) => {
    const dbQuery = "SELECT * FROM chirps";
    con.query(dbQuery, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });
  // Add a chirp
  app.post("/api/new", (req, res) => {
    console.log("Chirp Data:");
    console.log(req.body);
    const dbQuery = "INSERT INTO chirps (author, chirp, date_created) VALUES (?,?,?)";
    con.query(dbQuery, [req.body.author, req.body.chirp, req.body.date_created], (err, result) => {
      if (err) throw err;
      console.log("Chirp Successfully Saved!");
      res.end();
    });
  });
};
