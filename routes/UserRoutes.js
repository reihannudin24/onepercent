const express = require('express');
const router = express.Router();
const User = require('../models/UserModel')
const jwt = require('jsonwebtoken');
const Function = require('../models/function');
require('dotenv').config();

// Register a new user

// Register Email and password
router.post('/register', async (req, res) => {
    try {
        // Get body request from user/input
        const { email } = req.body;

        // Check if email already exists
        let checkEmail = await User.findByEmail({ email });
        if (checkEmail) {
            return res.status(400).json({
                data: [],
                message: 'Registration failed',
                code : 0,
                error: { email: 'Email telah terdaftar' }
            });
        }

        // Generate a token
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1m' });

        // Create new user
        const result = await User.register({ email, token });

        res.status(201).json({
            data: result, // Use the result of the registration
            message: 'Registration successful',
            code : 1,
            error: {},
        });
    } catch (error) {
        console.error('Error during registration:', error); // Log the error

        // Return a simplified error response
        res.status(400).json({
            data: [],
            message: 'Registration failed',
            code : 0,
            error: { message: error.message || 'An unknown error occurred' }
        });
    }
});

// Add Password : Password, confirmPassword
router.post('/add/password', async (req, res) =>{
    try{
        // Get body request from user/input
        const {token, password, confirmPassword} =  req.body;

        if (!token){
            return res.status(400).send('Token is required');
        }

        if (password.length < 8){
            return res.status(401).json({
                data: [],
                message: 'Add Password failed',
                code : 0,
                error: { password: 'Password minimal harus memiliki 8 huruf' }
            });
        }else if(confirmPassword.length < 8){
            return res.status(401).json({
                data: [],
                message: 'Add Password failed',
                code : 0,
                error: { confirm_password: 'Konfirmasi password minimal harus memiliki 8 huruf' }
            });
        }

        // Ensure password match
        if (password !== confirmPassword){
            return res.status(401).json({
                data: [],
                message: 'Add Password failed',
                code : 0,
                error: { confirm_password: 'Password tidak sama' }
            });
        }

        const result = await User.addPassword({token, password , confirmPassword})
        res.status(201).json({
            data: result, // Use the result of the registration
            message: 'Add password successfully',
            code : 1,
            error: {},
        });

    }catch (error){

        res.status(400).json({
            data: [],
            message: 'Add Password failed',
            code : 0,
            error: { message: error.message || 'An unknown error occurred' }
        });
    }
})


// Add information : Username, Firstname, Lastname, Contact
router.post('/add/information', async (req, res) => {
    try{

        const {token, username, firstname, lastname, contact} = req.body

        if (!token){
            return res.status(400).send('Token is required');
        }

        if (username.length < 3){
            return res.status(400).send('Username minimal harus memiliki 3 huruf')
        }else if (contact.length < 7){
            return res.status(400).send('Nomor telepon minimal harus memiliki 7 huruf')
        }

        await User.addInformation(token, username, firstname, lastname, contact)

    }catch (error){
        res.status(400).send(error.message)
    }
})

// Add information : Birthday, Location
router.post('/add/optional/information', async (req , res) =>{
    try{

        const {token, birthday, location} = req.body;

        if (!token){
            return res.status(400).send('Token is required');
        }

        await User.addInformationOptional(token,birthday ,location)
        res.status(200).send('Addtional updated successfully')

    }catch (error){
        res.status(400).send(error.message);
    }
})




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