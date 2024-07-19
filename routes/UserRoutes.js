const express = require('express');
const router = express.Router();
const User = require('../models/UserModel')
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");
require('dotenv').config();

// NODE MAILER
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
        user: process.env.EMAIL_NODEMAILER,
        pass: process.env.PASSWORD_NODEMAILER,
    },
});


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

        const resetToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1m' });
        const resetLink = `http://localhost:${process.env.PORT}/api/reset-password/${resetToken}`;
        console.log("tes")
        const info = await transporter.sendMail({
            from: `"TEST" <${process.env.EMAIL_NODEMAILER}>`, 
            to: "andrianpratama843@gmail.com", 
            subject: "Hello ✔",
            text: "Hello world?", 
            html: "<b>Hello world?</b>", 
        });
        console.log(info)

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