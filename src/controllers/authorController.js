const Author = require('../models/Author');

// Listar todos os autores
exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll();
    res.json(authors);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar autores' });
  }
};

// Obter um autor por ID
exports.getAuthorById = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id);
    if (!author) return res.status(404).json({ error: 'Autor não encontrado' });
    res.json(author);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar autor' });
  }
};

// Criar um novo autor
exports.createAuthor = async (req, res) => {
  try {
    const { name, bio } = req.body;
    const author = await Author.create({ name, bio });
    res.status(201).json(author);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar autor' });
  }
};

// Atualizar um autor
exports.updateAuthor = async (req, res) => {
  try {
    const { name, bio } = req.body;
    const author = await Author.findByPk(req.params.id);
    if (!author) return res.status(404).json({ error: 'Autor não encontrado' });

    author.name = name || author.name;
    author.bio = bio || author.bio;
    await author.save();

    res.json(author);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar autor' });
  }
};

// Deletar um autor
exports.deleteAuthor = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id);
    if (!author) return res.status(404).json({ error: 'Autor não encontrado' });

    await author.destroy();
    res.json({ message: 'Autor deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar autor' });
  }
};