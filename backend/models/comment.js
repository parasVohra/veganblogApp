const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CommentSchema = new Schema({
    name: String,
    timeStamp: String,
    type: String,
    typeID: Number,
    content: String,
    likes: Number,
    replies: [
        {
            name: String,
            timeStamp: Date,
            content: String,
            likes: Number,
        }
    ]
});

const Comment = mongoose.model('comment', CommentSchema)

module.exports = Comment;