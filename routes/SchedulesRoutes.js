const express = require('express');
const router = express.Router();
const Schedules = require('../models/SchedulesModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');
require('dotenv').config();

router.post('/schedule/create/:token', async (req, res) => {
    try {
        const { token } = req.params;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.userId);
        if (!user) return res.status(400).send('User not found');
        if (token === user.token_remember) {
            Schedules.create(req.body);
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
            Schedules.remove(req.body)
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
        console.log(user)

        if (token === user.token_remember) {
            Schedules.update(req.body)
            res.status(200).json(req.body);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
})


router.post('/schedule-options/create/:token', async (req, res) => {
    try {
        const { token } = req.params;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.userId);
        if (!user) return res.status(400).send('User not found');
        if (token === user.token_remember) {
            Schedules.createOption(req.body);
            res.status(200).json(req.body);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
})

router.post('/schedule-options/remove/:token', async (req, res) => {
    try {
        const { token } = req.params;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.userId);
        if (!user) return res.status(400).send('User not found');

        if (token === user.token_remember) {
            Schedules.removeOption(req.body)
            res.status(200).json(req.body);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = router;