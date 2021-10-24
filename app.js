const express = require('express');
const morgan = require('morgan');
const userRouter = require('./routes/user');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use('/api/user', userRouter);

app.listen(PORT);

module.exports = app;
