const mongoose = require('mongoose');

const Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

const newTodo = new Todo({
    text: 'Edit the video      '
})

// newTodo.save().then((docs) => {
//     console.log(`Save todo, ${docs}`)
// }, (err) => {
//     console.log('Unable to save todo', err)
// })

// const Todo = mongoose.model('Todo', {
//     text: {
//         type: String,
//         require
//     },
//     completed: {
//         type: Boolean,
//     },
//     completedAt: {
//         type: Number
//     }
// })

// const otherTodo = new Todo({
//     text: 'Clean Room',
//     completed: false,
//     completedAt: 123
// })
// otherTodo.save().then((result) => {
//     console.log(`Save todo, ${result}`)
// }, (err) => {
//     console.log(err)
// })

module.exports = {Todo}