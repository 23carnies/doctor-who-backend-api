const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler, notFound } = require('./middleware/errorHandler');
const logger = require('morgan');
const cors = require('cors');

const app = express();

require('./config/database');
app.use(cors());
app.use(logger('dev'));

const episodeRouter = require('./routes/episodes');
const characterRouter = require('./routes/characters');

app.use(express.json());

app.use('/api/episodes',episodeRouter);
app.use('/api/characters',characterRouter);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 4001;

app.listen(port, () => {
    console.log(`Express is listening on port ${port}`);
});