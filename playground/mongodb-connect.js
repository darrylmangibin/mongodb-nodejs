// const MongoClient = require('mongodb').MongoClient;

const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connect to mongoDB server');
    const db = client.db()

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, results) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err)
    //     }
    //     console.log(JSON.stringify(results.ops, undefined, 2))
    // })

    // db.collection('Users').insertOne({
    //     name: 'Darryl',
    //     age: 22,
    //     location: 'Baguio'
    // }, (err, results) => {
    //     if(err) {
    //         return console.log('Unable to insert User', err)
    //     }
    //     console.log(JSON.stringify(results.ops, undefined, 2))
    // })

    client.close();
});