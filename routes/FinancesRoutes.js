const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');
const Finances = require('../models/FinancesModel');
require('dotenv').config();

router.post('/schedule/create/:token', async (req, res) => {
    try {
        const { token } = req.params;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.userId);
        if (!user) return res.status(400).send('User not found');
        if (token === user.token_remember) {
            Finances.create(req.body);
            res.status(200).json(req.body);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post('/schedule/remove/:token', async (req, res) => {
    try {
        const { token } = req.params;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.userId);
        if (!user) return res.status(400).send('User not found');

        if (token === user.token_remember) {
            Finances.remove(req.body)
            res.status(200).json(req.body);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post('/schedule/update/:token', async (req, res) => {
    try {
        const { token } = req.params;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.userId);
        if (!user) return res.status(400).send('User not found');

        if (token === user.token_remember) {
            Finances.update(req.body)
            res.status(200).json(req.body);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = router;