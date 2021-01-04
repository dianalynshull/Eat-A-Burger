const express = require('express');
const burger = require('../models/burger');
const { Router } = express();

Router.get('/', (req, res) => {
    burger.all(data => {
        const hbsObject = {
            burgers: data
        };
        res.render('index', hbsObject);
    });
});

Router.post('/api.burgers', (req, res) => [
    burger.insert(
        ['burger_name'],
        [req.body.burger_name],
        (res) => {
            res.json();
        })
])