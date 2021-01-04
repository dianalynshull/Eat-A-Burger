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
    },
    update: (id, cb) => {
        orm.updateOne('burgers', id, res => {
            cb(res);
        });
    }
};

module.exports = burger;