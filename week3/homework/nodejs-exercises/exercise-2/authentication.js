'use strict';

const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;
const apiUrl = 'https://restapiabasicauthe-sandbox.mxapps.io/api/books';

// Encode to Base64 format >> admin:hvgX8KlVEa == YWRtaW46aHZnWDhLbFZFYQ==
// const base64Code = 'YWRtaW46aHZnWDhLbFZFYQ=='

// using javascript code
const authentication = 'admin:hvgX8KlVEa';
const base64Code = Buffer.from(authentication).toString('base64');

app.get('/', (req, res) => {
  fetch(apiUrl, {
    headers: {
      'Authorization': `Basic ${base64Code}`

    }
  })
    .then(res => res.json())
    .then(repo => {
      console.log(repo)
      res.send('(✓) Please check the console!');
    })
    .catch(err => {
      console.log(err);
      res.send('(✖) Something is wrong please check your code (✖)');
    })
})
app.listen(port, () => { console.log(`Exercise 2  >> Connect OK ${port}`) }) 