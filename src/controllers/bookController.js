const Book = require('../models/Book');
const Author = require('../models/Author');

// Listar todos os livros com seus autores
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll({
      include: [{ model: Author, attributes: ['id', 'name'] }]
    });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar livros' });
  }
};

// Obter um livro por ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id, {
      include: [{ model: Author, attributes: ['id', 'name', 'bio'] }]
    });
    if (!book) return res.status(404).json({ error: 'Livro não encontrado' });
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar livro' });
  }
};

// Criar um novo livro
exports.createBook = async (req, res) => {
  try {
    const { title, description, cover_url, author_id } = req.body;
    const book = await Book.create({ title, description, cover_url, author_id });
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar livro' });
  }
};

// Atualizar um livro existente
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ error: 'Livro não encontrado' });

    const { title, description, cover_url, available, author_id } = req.body;
    book.title = title || book.title;
    book.description = description || book.description;
    book.cover_url = cover_url || book.cover_url;
    book.available = available !== undefined ? available : book.available;
    book.author_id = author_id || book.author_id;

    await book.save();
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar livro' });
  }
};

// Deletar um livro
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ error: 'Livro não encontrado' });

    await book.destroy();
    res.json({ message: 'Livro deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar livro' });
  }
};