
const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    publicationYear: Number,
    genre: String
});

module.exports = mongoose.model('Book', BookSchema);
