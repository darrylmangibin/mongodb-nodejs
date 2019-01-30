const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log(err)
    }
    console.log('Connected to MongoDB server')

    const db = client.db();

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c5151385f6a91d0aa0e89c4')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal:false
    // }).then((result) => {
    //     console.log(result)
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c514ca25f6a91d0aa0e87fb'),
    }, {
        $set: {
            name: 'Tonton'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    })

})