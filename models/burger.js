const orm = require('../config/orm');

const burger = {
    all: (cb) => {
        orm.selectAll('burgers', res => {
            cb(res);
        });
    },
    insert: (col, val, cb) => {
        orm.insertOne('burgers', col, val, res => {
            cb(res);
        });
    }
}