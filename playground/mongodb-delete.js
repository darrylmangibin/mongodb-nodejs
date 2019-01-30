const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server', err)
    }
    console.log('Connected to MongoDB Server')

    const db = client.db();

    // deleteMany
    // db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((results) => {
    //     console.log(results)
    // })

    // deleteOne
    // db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
    //     console.log(result)
    // })

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result)
    // })

    // db.collection('Users').findOneAndDelete({
    //     _id: new ObjectID('5c514c725f6a91d0aa0e87e0')
    // }).then((result) => {
    //     console.log(result)
    // })

    db.collection('Users').deleteMany({name: 'Darryl'}).then((result) => {
        console.log(result)
    })
})