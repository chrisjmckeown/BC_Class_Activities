const connection = require("../config/connection.js");

const orm = {
  selectWhere: (tableInput, colToSearch, valOfCol) => {
    return new Promise((resolve, reject) => {
      const queryString = "SELECT * FROM ?? WHERE ?? = ?";

      connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
        if (err) return reject(err);
        return resolve(result);
      });
    })
  }
};

module.exports = orm;