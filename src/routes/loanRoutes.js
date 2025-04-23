const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');
const auth = require('../middlewares/authMiddleware');
const isAdmin = require('../middlewares/isAdmin');

// Admin: ver todos os empréstimos
router.get('/', auth, isAdmin, loanController.getAllLoans);

// Usuário: ver seus próprios empréstimos
router.get('/me', auth, loanController.getMyLoans);

// Criar empréstimo
router.post('/', auth, loanController.createLoan);

// Devolver livro
router.put('/:id/return', auth, loanController.returnBook);

module.exports = router;