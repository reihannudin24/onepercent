const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');
const Finances = require('../models/FinancesModel');
const Budgets = require('../models/BudgetsModel');
require('dotenv').config();

router.post('/budgets/create/:token', async (req, res) => {
    try {
        const { token } = req.params;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.userId);
        if (!user) return res.status(400).send('User not found');
        if (token === user.token_remember) {
            const dataFinances = Finances.findById(req.body.id)
            Budgets.create(req.body, dataFinances);
            res.status(200).json(req.body);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post('/budgets/remove/:token', async (req, res) => {
    try {
        const { token } = req.params;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.userId);
        if (!user) return res.status(400).send('User not found');

        if (token === user.token_remember) {
            Budgets.remove(req.body)
            res.status(200).json(req.body);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post('/budgets/update/:token', async (req, res) => {
    try {
        const { token } = req.params;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.userId);
        if (!user) return res.status(400).send('User not found');

        if (token === user.token_remember) {
            const dataFinances = Finances.findById(req.body.id)
            Budgets.update(req.body, dataFinances)
            res.status(200).json(req.body);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = router;