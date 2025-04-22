const app = require('./src/app')
const PORT = process.env.PORT || 3000;
const sequelize = require('./src/config/db');
require('dotenv').config();

const Author = require('./src/models/Author');
const Book = require('./src/models/Book');

// Relacionamentos
Author.hasMany(Book, { foreignKey: 'author_id' });
Book.belongsTo(Author, { foreignKey: 'author_id' });

sequelize.authenticate()
    .then(() => {
        console.log('✅ Conectado ao banco!');
        return sequelize.sync({ alter: true }); // ou { force: true } pra recriar tudo
    })
    .then(() => {
        console.log('📦 Tabelas sincronizadas!');
        app.listen(process.env.PORT || 3000, () => {
            console.log(`🚀 Servidor rodando na porta ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.error('Erro ao conectar ou sincronizar o banco:', err);
    });