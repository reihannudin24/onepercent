const expres = require('express');
const router = express.Router();
const User = require('../models/UserModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


// Register a new user
router.post('/register', async (req, res) => {
    try {
        const { username, firstname, lastname, email, contact, age, birthday, location, password } = req.body;
        const user = await User.create({ username, firstname, lastname, email, contact, age, birthday, location, password });
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

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// User Logout
router.post('/logout', (req, res) => {
    res.status(200).send('Logout successful');
});

// Verify Email
router.post('/verify-email', async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findByEmail(email);
        if (!user) return res.status(400).send('User not found');

        const resetToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        const resetLink = `http://localhost:${process.env.PORT}/api/reset-password/${resetToken}`;

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: 'Password Reset',
            html: `<a href="${resetLink}">Reset your password</a>`,
        });

        res.status(200).send('Password reset email sent');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Reset Password
router.post('/reset-password/:token', async (req, res) => {
    try {
        const { token } = req.params;
        const { newPassword } = req.body;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id);
        if (!user) return res.status(400).send('User not found');

        await User.updatePassword(user.id, newPassword);
        res.status(200).send('Password reset successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;