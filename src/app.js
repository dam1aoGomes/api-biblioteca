const express = require('express');
const app = express();

const bookRoutes = require('./routes/bookRoutes');
const authRoutes = require('./routes/authRoutes');
const authorRoutes = require('./routes/authorRoutes');

app.use(express.json())

//prefixo para todas as rotas de livros
app.use('/api/books',bookRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/author',authorRoutes)

module.exports = app;