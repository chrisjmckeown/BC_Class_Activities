var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "bootcamp",
    database: "mydb"
});

con.connect( (err)=> {
    if (err) throw err;
    con.query("SELECT * FROM customers",  (err, result, fields) =>{
        if (err) throw err;
        console.log(result);
    });
    con.end();
});