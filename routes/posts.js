// routes/posts.js
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const connect = require('../config/db');



// Serve the form for creating a new post
router.get('/', (req, res) => {
    res.render('new');  // Render the 'new.ejs' template
});

// Handle form submission to create a new post
router.post('/posts/new', async (req, res) => {
    const { title, content, author } = req.body;
    const newPost = new Post(title, content, author);
    const coll = await connect();
    await coll.insertOne(newPost);
    res.redirect('/posts');
});

// View all posts
router.get('/posts', async (req, res) => {
    const coll = await connect();
    const posts = await coll.find().toArray();
    res.render('index', { posts });
});

module.exports = router;
