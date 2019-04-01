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

app.get('/cipher', (req, res) => {
  const query = req.query;

  const text = query.text;
  const shift = Number(query.shift);

  let encrypted = '';

  for(let i = 0; i < text.length; i++) {
    const letter = text[i].toUpperCase().charCodeAt(0);
    if(letter < 65 || letter > 90) {
      encrypted += String.fromCharCode(letter)
    } else {
      encrypted += String.fromCharCode(((letter + shift - 65) % 26) + 65);
    }
  }

  res.send(encrypted);
});

app.listen(8000, () => {
  console.log('listening on 8000');
});