import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// Initialize the Express application
const app = express();

// Limit the requests using bodyparser
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

// Using CORS
app.use(cors());

// MongoDB setup
const CONNECTION_URL = 'mongodb+srv://bantu1410:141089@wanderlust.dglyl.mongodb.net/?retryWrites=true&w=majority'

// PORT Details
const PORT = process.env.PORT || 5000;

// Using mongoose to connect to the Database
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch(() => console.log(error.message));

// mongoose.set('useFindAndModify', false);