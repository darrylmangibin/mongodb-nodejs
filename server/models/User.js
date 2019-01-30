const mongoose = require('mongoose')

const User = mongoose.model('Users', {
    name: {
        required: true,
        trim: true,
        type: String,
        minlength: 1
    },
    email: {
        trim: true,
        type: String,
        minlength: 1,
        required: true
    }
})

const newUser = new User({
    name: 'Darryl',
    email: 'email@email.com'
})

// newUser.save().then((result) => {
//     console.log(result)
// }, (err) => {
//     console.log(err)
// })

module.exports = {
    User
}