const express = require('express')
const app = express()

const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Create a new MongoClient


module.exports = async function()
{
    app.get('/test', (req, res) => {
        res.send('hello');
    })

    app.get('/', async (req, res) => {
        const client = new MongoClient(url);
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('documents');
        // Find some documents
        const cursor = collection.find({});
        const docs = await cursor.toArray();
        //await cursor.close();

        client.close();

      //  res.send(docs);
      res.send('hello');
    } );


    return app;
}

