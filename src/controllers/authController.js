const jwt = require('jsonwebtoken');

// Simulação de login com usuários fixos
exports.login = async (req, res) => {
  const { email, password } = req.body;

  // Lista de usuários fixos
  const users = [
    { id: 1, email: 'admin@admin.com', password: '123456', role: 'admin' },
    { id: 2, email: 'user@normal.com', password: '123456', role: 'user' }
  ];

  // Busca o usuário pelo email
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }

  // Cria token JWT com os dados do usuário
  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({ token });
};