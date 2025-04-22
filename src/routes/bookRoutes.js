const express = require('express');
const router = express.Router();

const bookController = require('../controllers/bookController');
const auth = require('../middlewares/authMiddleware');

// 📖 Rotas públicas
router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);

// 🔐 Rotas protegidas (usuário autenticado)
router.post('/', auth, bookController.createBook);
router.put('/:id', auth, bookController.updateBook);
router.delete('/:id', auth, bookController.deleteBook);

module.exports = router;