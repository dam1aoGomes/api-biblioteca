const express = require('express');
const router = express.Router();

const authorController = require('../controllers/authorController');
const auth = require('../middlewares/authMiddleware')
const isAdmin = require('../middlewares/isAdmin')

// Rotas para autores
router.get('/', authorController.getAllAuthors);
router.get('/:id', authorController.getAuthorById);

router.post('/',auth,isAdmin, authorController.createAuthor);
router.put('/:id',auth,isAdmin, authorController.updateAuthor);
router.delete('/:id',auth,isAdmin, authorController.deleteAuthor);

module.exports = router;