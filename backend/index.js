const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const ArrayData = require('./models/arraydata.js');
require('dotenv').config();

const app = express();
const port = 8080;

app.use(cors({
    origin: '*',
}));
app.use(bodyParser.json());

const URI = process.env.MONGO_URI

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))