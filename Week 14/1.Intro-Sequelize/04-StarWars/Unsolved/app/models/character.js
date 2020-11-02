const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
const Character = sequelize.define("character", {
    routeName: Sequelize.STRING,
    name: Sequelize.STRING,
    role: Sequelize.STRING,
    age: Sequelize.INTEGER,
    forcePoints: Sequelize.INTEGER,
}, {
    freezeTableName: true
  });

// Syncs with DB
Character.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Character;
