# Simple Blog Platform

This is a simple blog platform built with Node.js, Express.js, and MongoDB. It allows users to create, view, update, and delete blog posts.

## Features

- Create new blog posts
- View all blog posts
- Edit existing blog posts
- Delete blog posts
- Posts are ordered from newest to oldest

## Dependencies

- Node.js
- Express.js
- MongoDB
- EJS (Embedded JavaScript templates)
- CSS for styling

## Creating a New Post

- Navigate to the homepage.
- Click on the "Create a New Post" button.
- Fill in the title, content, and author fields.
- Submit the form to create a new post.

## Editing a Post

- On the homepage, click the "Update" button next to the post you want to edit.
- Modify the post fields as needed.
- Submit the form to update the post.

## Deleting a Post

- On the homepage, click the "Delete" button next to the post you want to delete.
- The post will be permanently removed from the database.

## File Structure

- blog-platform/
- │
- ├── app.js                 # Main application file
- ├── config/
- │   └── db.js              # MongoDB connection setup
- ├── models/
- │   └── Post.js            # Post model
- ├── routes/
- │   └── posts.js           # Routes for handling post-related requests
- ├── views/
- │   ├── index.ejs          # Template for viewing all posts
- │   ├── new.ejs            # Template for creating a new post
- │   └── edit.ejs           # Template for editing a post
- ├── public/
- │   └── css/
- │       └── styles.css     # Stylesheet for the project
- └── package.json           # Project metadata and dependencies

![Alt text](/Users/yagmuraydemir/Desktop/blog-platform/photos/blog.png)
