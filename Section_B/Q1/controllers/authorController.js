const Author = require('../models/author');

exports.getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.json(authors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getAuthorById = async (req, res) => {
    try {
        const author = await Author.findById(req.params.id);
        if (author == null) {
            return res.status(404).json({ message: 'Author not found' });
        }
        res.json(author);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createAuthor = async (req, res) => {
    const author = new Author({
        name: req.body.name,
        bio: req.body.bio,
        dateOfBirth: req.body.dateOfBirth,
        dateOfDeath: req.body.dateOfDeath
    });

    try {
        const newAuthor = await author.save();
        res.status(201).json(newAuthor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateAuthor = async (req, res) => {
    try {
        const author = await Author.findById(req.params.id);
        if (author == null) {
            return res.status(404).json({ message: 'Author not found' });
        }

        if (req.body.name != null) {
            author.name = req.body.name;
        }
        if (req.body.bio != null) {
            author.bio = req.body.bio;
        }
        if (req.body.dateOfBirth != null) {
            author.dateOfBirth = req.body.dateOfBirth;
        }
        if (req.body.dateOfDeath != null) {
            author.dateOfDeath = req.body.dateOfDeath;
        }

        const updatedAuthor = await author.save();
        res.json(updatedAuthor);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteAuthor = async (req, res) => {
    try {
        const author = await Author.findById(req.params.id);
        if (author == null) {
            return res.status(404).json({ message: 'Author not found' });
        }

        await author.remove();
        res.json({ message: 'Author deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
