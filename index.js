'use strict';

const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.get('/sum', (req, res) => {
  const queryA = Number(req.query.a);
  const queryB = Number(req.query.b);
  const sum = queryA + queryB;
  res.send(`The sum of ${queryA} and ${queryB} is ${sum}`);
});

app.listen(8000, () => {
  console.log('listening on 8000');
});