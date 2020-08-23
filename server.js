const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

mongoose.connection.once('open', () => {
    console.log('Connection Established with MongoDB Cluster');
});

const colors = require('./routers/colors.router');
const links = require('./routers/links.router');
const topics = require('./routers/topics.router');
const appinfo = require('./routers/appinfo.router');

app.use('/colors', colors);
app.use('/links', links);
app.use('/topics', topics);
app.use('/appinfo', appinfo);

app.listen(port, () => {
    console.log(`Server running (Port: ${port})`);
});