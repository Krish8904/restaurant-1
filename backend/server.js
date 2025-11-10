const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: __dirname + '/.env' });

const app = express();
const connectDB = require('./config/db');

const port = process.env.PORT || 5000;

// Connect to database
connectDB();

app.use(cors());
app.use(express.json());

// Define Routes
app.use('/api/bookings', require('./routes/bookings'));
app.use('/api/users', require('./routes/users'));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
