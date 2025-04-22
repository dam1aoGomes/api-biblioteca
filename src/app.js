const express = require('express');
const app = express();
const bookRoutes = require('./routes/bookRoutes')

//prefixo para todas as rotas de livros
app.use('/api/books',bookRoutes)

module.exports = app;