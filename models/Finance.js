
const mongoose = require('mongoose');

const financeSchema  = new mongoose.Schema({
    balance : {
        type : Number
    }
})