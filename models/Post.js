// models/Post.js

class Post {
    constructor(title, content, author) {
        this.title = title;
        this.content = content;
        this.author = author;
        this.createdAt = new Date();
    }
}

module.exports = Post;
