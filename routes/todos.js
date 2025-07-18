const express = require('express');
const router = express.Router();

const Todo = require('../models/Todo');

// Make a route
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).send({data: todos});
    } catch (error) {
        console.error(`Error in GET route: `, error.message);
        res.status(500).send({error: error.message});
    }
})

// Make a post route
router.post('/', async (req, res) => {
    try {
        const { text } = req.body;
        const newTodo = await Todo.create(text);
        res.status(200).send({message: `Todo '${text}' added.`});
    } catch (error) {
        console.error('Error in PORT route: ', error.message);
        res.status(500).send({error: error.message})
    }
})

module.exports = router;