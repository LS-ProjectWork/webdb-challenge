const express = require('express');
const knex = require('knex');

const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

const router = express.Router();

router.post('/', (req, res) => {
    const action = req.body
    db
    .insert(action)
    .into('actions')
    .then(action => {
        res.status(201).json(action)
    });
})