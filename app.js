const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const router = require('./routes/todos');

const app = express();
app.use(express.json());
app.use('/todos', router);

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {});
        console.log(`Connected to MongoDB`);
        app.listen(process.env.PORT, () => console.log(`Server on port ${process.env.PORT}`))
    } catch (error) {
        console.error('Error: ', error.message);
    }
}

if (required.main === module) {
    start();
}

module.exports = app;