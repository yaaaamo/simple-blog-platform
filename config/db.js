// config/db.js

const { MongoClient } = require('mongodb');

const mongodbURL = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(mongodbURL);

async function connect() {
    try {
        const conn = await client.connect();
        const db = await conn.db('blog-app');
        const coll = await db.collection('posts'); // Use 'posts' instead of 'tasks' for blogging platform
        return coll;
    } catch (err) {
        console.log(err);
    }
}

module.exports = connect;
