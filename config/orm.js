const connection = require('./connection');

const orm = {
    selectAll: (table, cb) => {
        const query = 'SELECT * FROM  ' + table + ';';
        connection.query(query, (err, res) => {
            if (err) throw err;
            cb(res);
        })
    }
}