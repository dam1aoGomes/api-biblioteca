const PORT = process.env.PORT || 3000;
const app = require('./src/app')
const sequelize = require('./src/config/db');
require('dotenv').config();

const Author = require('./src/models/Author');
const Book = require('./src/models/Book');
const Loan = require('./src/models/Loan');

Author.hasMany(Book, { foreignKey: 'author_id' });
Book.belongsTo(Author, { foreignKey: 'author_id' });

Book.hasMany(Loan, { foreignKey: 'book_id' });
Loan.belongsTo(Book, { foreignKey: 'book_id' });

// Como o user_id é simulado, não precisa associar com User por enquanto.

sequelize.authenticate()
.then(() => {
    console.log('✅ Conectado ao banco!');
    return sequelize.sync({ alter: true });
})
.then(() => {
    console.log('📦 Tabelas sincronizadas!');
    app.listen(process.env.PORT || 3000, () => {
        console.log(`🚀 Servidor rodando na porta ${process.env.PORT}`);
    });
})
.catch((err) => {
    console.error('❌ Erro ao conectar ou sincronizar o banco:', err);
});