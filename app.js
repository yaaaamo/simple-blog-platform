// app.js
const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Import routes
const postRoutes = require('./routes/posts');

// Use routes
app.use(postRoutes);


const port = 9000;
const host = 'http://127.0.0.1:' + port;

app.listen(port, () => console.log(host));
