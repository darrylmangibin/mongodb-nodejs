const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to Mongo server', err)
    }
    console.log('Connected to MongoDB server')

    const db = client.db();

    // db.collection('Todos').find().toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('Unable to fetch todos', err)
    // })

    // db.collection('Todos').find({
    //     _id: new ObjectID('5c51442214e1e62a14492cc4')
    // }).toArray().then((docs) => {
    //     console.log('Todos')
    //     console.log(docs)
    // }, (err) => {
    //     console.log('Unable to fetch todos', err)
    // })

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`)
    // }, (err) => {
    //     console.log(err)
    // })

    db.collection('Users').find({name: 'Darryl'}).toArray().then((docs) => {
        console.log(docs)
    }, (err) => {
        console.log(err)
    })


// client.close()
})