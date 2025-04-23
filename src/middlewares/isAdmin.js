module.exports = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
      return next(); // ok, pode continuar
    }
    
    return res.status(403).json({ error: 'Acesso restrito a administradores.' });
  };
  