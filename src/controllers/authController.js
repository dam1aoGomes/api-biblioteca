const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

// Simulação de login com usuario fixo
exports.login = async (req,res) => {
    const {email,password} = req.body;

    // Simulação: validação basica (substituir por banco depois)
    if(email !== 'admin@admin.com' || password !== '123456') {
        return res.status(401).json({ error: 'Credenciais inválidas' });
    }  

    const user = {id: 1, email, role:'admin'};

    const token = jwt.sign(user,process.env.JWT_SECRET,{expiresIn:'1h'})
    res.json({token});
}