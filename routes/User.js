
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET || 'your_jwt_secret';
const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret';


// Register a new user
router.post('/register', async (req, res) => {
    try{
        const { username , firstname, lastname, email, contract, age, birthday, location, password} = req.body;
        const user = new User({username , firstname, lastname, email, contract, age, birthday, location, password});
        await user.save();

        res.status(201).send('User registered successfully');
    }catch (error){
        res.status(400).send(error.message);
    }
})



router.post('/login', async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email})
        if (!user) return res.status(400).send("User not found");

        const isMatch = await user.comparePassword(password);
        if (!isMatch) return res.status(400).send("Password is not same");

        const token = jwt.sign({ userId : user._id }, secretKey, {expiresIn: '1d'});
        res.status(200).json({token})
    }catch (error){
        res.status(400).send(error.message);
    }
})

router.post('/logout', async (req, res) => {
    // To logout, client should just delete the token on the client side.
    res.status(200).send('Logout successful');
})

router.post('/verify-email', async (req, res) => {
    try{
        const { email } = req.body;
        const user = await User.findById(decoded.id);
        if (!user) return res.status(400).send('User not found');

        let resetToken = jwt.sign({id : user._id}, jwtSecret, {expiressIn :'1h'});
        let resetLink = '/reset-password'

        await transporter.sendMail({
            from : 'my@gmail.com',
            to : user.email,
            subject : 'Password' ,
            html: `<a href="${resetLink}">Reset your password</a>`
        })

        res.status(200).send('Password reset email sent')
    }catch (error){
        res.status(400).send(error.message);
    }
})

router.post('/reset-password', async (req, res) => {
    try{
        const jwtSecret = localStorage.getItem('jwttoksec')
        const {token, newPassword } = req.body;
        const decoded = jwt.verify(token, jwtSecret);

        const user = await User.findById(decoded.id);
        if (!user) return res.status(400).send('User not found');

        user.password = newPassword;
        await user.save();

        res.status(200).send('Password reset successfully')
    }catch (error){
        res.status(500).send(error.message);
    }
})


