const express = require('express');
const knex = require('knex');

const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

const router = express.Router();

router.post('/', (req, res) => {
    const project = req.body
    db
    .insert(project)
    .into('projects')
    .then(project => {
        res.status(201).json(project)
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    db.select()
    .from('actions')
    .where({'project_id': id})
    .then(project => {
        res.status(201).json(project)
    })
})

module.exports = router;