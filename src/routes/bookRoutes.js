const express = require('express')
const router  = express.Router();
const bookControler = require('../controllers/bookController')

router.get('/',bookControler.getAllBooks)

module.exports = router;