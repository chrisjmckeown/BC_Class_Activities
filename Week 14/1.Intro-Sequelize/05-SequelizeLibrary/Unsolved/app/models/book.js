// Sequelize (capital) references the standard library
const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

const Book = sequelize.define("book", {
    title: Sequelize.STRING,
    author: Sequelize.STRING,
    genre: Sequelize.STRING,
    pages: Sequelize.INTEGER
}, {
    freezeTableName: true
});

// Syncs with DB
Book.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Book;
