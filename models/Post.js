// models/Post.js

class Post {
    constructor(title, content, author, postId = `${Date.now()}-${Math.floor(Math.random() * 10000)}`){
        this.title = title;
        this.content = content;
        this.author = author;
        this.createdAt = new Date();
        this.postId = postId;
    }
}

module.exports = Post;
