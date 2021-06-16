const express = require('express');
const bcrypt = require('bcrypt');

const User = require('../models/user');

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { email } = req.body;

        if (await User.findOne({ email }))
            return res.status(400).send({ error: 'Usuário ja existe' });

        const user = await User.create(req.body);

        user.password = undefined;

        return res.send({ user });
    } catch (err) {
        return res.status(400).send({ error: 'Registro falhou' });
    }
});

router.post('/authenticate', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if (!user)
        return res.status(400).send({ error: 'Usuario nao encontrado' });

    if (!await bcrypt.compare(password, user.password))
        return res.status(400).send({ error: 'Senha invalida' });

    user.password = undefined;

    res.send({ user });
});

module.exports = app => app.use('/auth', router);