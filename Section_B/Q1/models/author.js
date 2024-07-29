const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    dateOfBirth: {
        type: Date,
        default: ''
    },
    dateOfDeath: {
        type: Date,
        default: ''
    }
});

module.exports = mongoose.model('Author', AuthorSchema);
