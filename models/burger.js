const orm = require('../config/orm');

const burger = {
    all: (cb) => {
        orm.selectAll('burgers', res => {
            cb(res);
        })
    }
}