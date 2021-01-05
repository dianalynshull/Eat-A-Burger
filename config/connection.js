const mysql = require('mysql');

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
    return;
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'password',
        database: 'burgers_db'
    })  
}

connection.connect(function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Successfully connected to database');
});

module.exports = connection;