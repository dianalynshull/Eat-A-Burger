const express = require('express');
const burger = require('../models/burger');
const router = express.Router();

router.get('/', (req, res) => {
    burger.all(data => {
        const hbsObject = {
            burgers: data
        };
        res.render('index', hbsObject);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.insert(
        ['burger_name'],
        [req.body.burger_name],
        () => {
            res.status(200).end();
        }
    )
});

router.put('/api/burgers/:id', (req, res) => {
    const id = 'id=' + req.params.id;
    burger.update(id, () => {
        res.status(200).end();
    })
});

module.exports = router;