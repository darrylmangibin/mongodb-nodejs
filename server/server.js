const express = require('express');
const bodyParser = require('body-parser')

const {mongoose} = require('./db/mongoose')
const {Todo} = require('./models/Todo')
const {User} = require('./models/User')

const app = express();

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
    const todo = new Todo({
        text: req.body.text
    })
    todo.save().then((docs) => {
        res.send(docs)
    }, (e) => {
        res.status(400).send(e)
    })
})

app.listen(3000, () => {
    console.log(`Started on port 3000`)
})