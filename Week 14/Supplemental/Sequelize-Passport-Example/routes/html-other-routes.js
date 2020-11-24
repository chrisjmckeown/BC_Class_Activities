// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/test", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/test.html"));
  });
};
