const mongoose = require('mongoose');
const Schema = mongoose.Schema;

blogSchema = new Schema({
    title: String, 
    description: String,
    photo: String,
    user: String
})

module.exports = mongoose.model('Blog', blogSchema);