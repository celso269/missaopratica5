const express = require('express');
const cors = require('cors');
const livroRouter = require('./routes/livros');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/livros', livroRouter);

module.exports = app;