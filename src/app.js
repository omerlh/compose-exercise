const express = require('express')
const app = express()

const MongoClient = require('mongodb').MongoClient;

// Connection URL - NEVER DO IT IN PRODUCTION: use configuration files for sensitive configuration
const url = process.env.CONNECTION_STRING ? process.env.CONNECTION_STRING : 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';


// Create a new MongoClient


module.exports = async function()
{
    app.get('/test', (req, res) => {
        res.send('hello');
    })

    app.get('/', async (req, res) => {
        try {
            const client = new MongoClient(url);
            //const client = new MongoClient(url);
            await client.connect();
            const db = client.db(dbName);
            const collection = db.collection('documents');
            // Find some documents
            const rows = await collection.find({}).toArray();

           //   
            //await cursor.close();

            client.close();
            res.json({docs: rows});
        } catch(ex) {
            console.log(ex)
            res.send(ex, 500);
        }
      //  res.send(docs);

    } );



    return app;
}

