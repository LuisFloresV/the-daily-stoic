const express = require('express');
const path = require('path');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();

const apiRouter = require('./routes/index');

const limiter = rateLimit({
  max: 1000,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again later',
});

app.use('*', limiter);
app.use(helmet());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(apiRouter);

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', '404.html'));
});

module.exports = app;
