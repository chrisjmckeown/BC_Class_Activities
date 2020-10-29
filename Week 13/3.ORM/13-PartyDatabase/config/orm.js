const connection = require("./connection.js");

const orm = {
    selectAll: function (whatToSelect, tableInput) {
        var queryString = "SELECT ?? FROM ??;"
        connection.query(queryString, [whatToSelect, tableInput], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    selectPartiesByType: function (table, colToSearch, valOfCol) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        console.log(queryString);
        connection.query(queryString, [table, colToSearch, valOfCol], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    selectClientParties: function (whatToSelect, tableOne, tableTwo, tableTwoForeignKey) {
        var queryString =
            "SELECT ?? FROM ?? LEFT JOIN ?? ON ??.??= ??.id";

        connection.query(
            queryString,
            [whatToSelect, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne],
            function (err, result) {
                if (err) throw err;
                console.log(result);
            }
        );
    }
};

module.exports = orm;
