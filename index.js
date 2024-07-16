
const express = require('express')
const mongoose = require('./config/db');
const routerUser = require('./routes/User');

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb://localhost:27017/onepercent', {
            useNewUrlParser : true,
            useUnifiedTopology : true,
            useCreateIndex : true,
            useFindAndModify : true,
        });
        console.log("Connected to MongoDB");
    }catch (error){
        console.error("Error connection to MongoDB" , error);
        process.exit(1);
    }
}

const app = express();

// middleware to parse json
app.use(express.json());

// connect to database
connectDB()

const PORT = process.env.PORT || 3000;

app.use('/api/v1/users/', routerUser);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})