const express = require('express');
const router = express.Router();

const bookController = require('../controllers/bookController');
const auth = require('../middlewares/authMiddleware');
const isAdmin = require('../middlewares/isAdmin')

// 📖 Rotas públicas
router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);

// 🔐 Rotas protegidas (usuário autenticado)
router.post('/', auth, isAdmin, bookController.createBook);
router.put('/:id', auth, isAdmin, bookController.updateBook);
router.delete('/:id', auth, isAdmin, bookController.deleteBook);

// Rota para listar livros disponíveis
router.get('/available', bookController.getAvailableBooks);

module.exports = router;