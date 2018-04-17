'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const { Beach, Lifeguard } = require('./models');

//bodyParser middleware for req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// lifeguard routes
app.get('/lifeguards', (req, res, next) => {
  Lifeguard.findAll()
  .then( lifeguards => {
    res.status(200).json(lifeguards);
  })
  .catch( err => { next(err) });
})

// beach routes
app.get('/beaches', (req, res, next) => {
  Beach.findAll()
  .then( beaches => {
    res.status(200).json(beaches);
  })
  .catch( err => { next(err) });
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});