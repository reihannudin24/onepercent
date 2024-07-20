const express = require('express');
const router = express.Router();
const User = require('../models/UserModel')
const jwt = require('jsonwebtoken');
const Function = require('../models/function');
require('dotenv').config();

// Register a new user
router.post('/register', async (req, res) => {
    try {
        const { username, firstname, lastname, email, contact, age, birthday, location, password } = req.body;
        await User.create({ username, firstname, lastname, email, contact, age, birthday, location, password });
        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// User Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findByEmail(email);
        if (!user) return res.status(400).send("User not found");

        const isMatch = await User.comparePassword(password, user.password);
        if (!isMatch) return res.status(400).send("Password is not the same");

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1m' });
        User.updateRememberToken(user.id, token)

        res.status(200).json({ token });
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// User Logout
router.post('/logout/:token', async (req, res) => {
    try {
        const { token } = req.params;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.userId);
        if (!user) return res.status(400).send('User not found');
        User.updateRememberToken(user.id, null)
        res.status(200).send('Logout successful');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Verify Email
router.post('/verify-email', async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findByEmail(email);
        if (!user) return res.status(400).send('User not found');
        const randomCode = Function.randomCode(6)
        const htmlText = `<b>Hi ${user.username}!</b>
        <p>You are Change Password. Your verification code is: ${randomCode}.</p>
        <p>Please complete the account verification process in 30 minutes.</p>
        <b>One Percent</b>`

        Function.sendEmail(email, `${randomCode} is your One Percent verification code`, "", htmlText)

        res.status(200).send('Password reset email sent');
    } catch (error) {
        res.status(400).send(error);
    }
});

// Reset Password
router.post('/reset-password/:token', async (req, res) => {
    try {
        const { token } = req.params;
        const { newPassword, password } = req.body;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.userId);
        if (!user) return res.status(400).send('User not found');

        const isMatch = await User.comparePassword(password, user.password);
        if (!isMatch) return res.status(400).send("Password is not the same");

        await User.updatePassword(user.id, newPassword);
        res.status(200).send('Password reset successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;