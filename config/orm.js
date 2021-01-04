const connection = require('./connection');

const orm = {
    selectAll: (table, cb) => {
        const query = 'SELECT * FROM  ' + table + ';';
        connection.query(query, (err, res) => {
            if (err) throw err;
            cb(res);
        })
    },
    insertOne: (table, col, val, cb) => {
        const query = 'INSERT INTO ' + table + ' ('+col+', devoured) VALUES (' + val + ', 0';
        console.log(query);
        connection.query(query, (err, res) => {
            if (err) throw err;
            cb(res);
        })
    },
    updateOne: (table, id, cb) {
        const query = 'UPDATE ' + table + ' SET devoured = 1 WHERE ' + id;
        connection.query(query, (err, res) => {
            if (err) throw err;
            cb(res);
        })
    }
};

module.exports = orm;