const { ObjectID } = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/Todo');
const {User} = require('./../server/models/User');


// remove all
// Todo.remove({}).then((result) => {
//     console.log(result)
// })


// Todo.findByIdAndRemove('5c5189585f6a91d0aa0ec4dc').then((todo) => {
//     console.log(todo)
// });

Todo.findOneAndRemove({
    _id: '5c5189585f6a91d0aa0ec4dc'
}).then((todo) => {
    console.log(todo)
})