// app.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const authorRoutes = require('./routes/authorRoutes');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
connectDB();
app.use(bodyParser.json());

app.use('/api/authors', authorRoutes);
app.use('/api/books', bookRoutes);

app.use('*', (req, res) => {
    res.status(400).json({
        message: "Invalid Request"
    })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));