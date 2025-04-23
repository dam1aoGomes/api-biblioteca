const express = require('express');
const app = express();

const bookRoutes = require('./routes/bookRoutes');
const authRoutes = require('./routes/authRoutes');
const authorRoutes = require('./routes/authorRoutes');
const loanRoutes = require('./routes/loanRoutes');

app.use(express.json())

//prefixo para todas as rotas de livros
app.use('/api/books',bookRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/authors',authorRoutes)
app.use('/api/loans',loanRoutes)

module.exports = app;