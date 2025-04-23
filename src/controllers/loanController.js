const Loan = require('../models/Loan');
const Book = require('../models/Book');
const { Op } = require('sequelize');

// Admin: ver todos os empréstimos
exports.getAllLoans = async (req, res) => {
  try {
    const loans = await Loan.findAll({ include: Book });
    res.json(loans);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar empréstimos' });
  }
};

// Usuário comum: ver apenas seus empréstimos
exports.getMyLoans = async (req, res) => {
  try {
    const loans = await Loan.findAll({
      where: { user_id: req.user.id },
      include: Book
    });
    res.json(loans);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar seus empréstimos' });
  }
};

// Criar novo empréstimo
exports.createLoan = async (req, res) => {
  try {
    const { book_id } = req.body;

    const book = await Book.findByPk(book_id);
    if (!book) return res.status(404).json({ error: 'Livro não encontrado' });
    if (!book.available) return res.status(400).json({ error: 'Livro indisponível para empréstimo' });

    const loan = await Loan.create({
      user_id: req.user.id,
      book_id,
    });

    book.available = false;
    await book.save();

    res.status(201).json(loan);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar empréstimo' });
  }
};

// Devolver livro (atualiza o status do empréstimo)
exports.returnBook = async (req, res) => {
  try {
    const loan = await Loan.findByPk(req.params.id);
    if (!loan) return res.status(404).json({ error: 'Empréstimo não encontrado' });

    // Usuário só pode devolver seus próprios empréstimos, admin pode tudo
    if (req.user.role !== 'admin' && loan.user_id !== req.user.id) {
      return res.status(403).json({ error: 'Acesso negado' });
    }

    loan.returned = true;
    loan.return_date = new Date();
    await loan.save();

    const book = await Book.findByPk(loan.book_id);
    book.available = true;
    await book.save();

    res.json({ message: 'Livro devolvido com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao devolver livro' });
  }
};
