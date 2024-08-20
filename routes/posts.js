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

//delete a post
router.post('/delete/:id', async (req, res) => {
    const postId = req.params.id;
    const coll = await connect();
    await coll.deleteOne({ postId: postId }); // Use postId to find the post
    res.redirect('/posts'); // Redirect back to the posts listing page after deletion
});




// View all posts
router.get('/posts', async (req, res) => {
    const coll = await connect();
    const posts = await coll.find().sort({ createdAt: -1 }).toArray(); // Sort by createdAt (newest to oldest)
    res.render('index', { posts });
});

module.exports = router;
