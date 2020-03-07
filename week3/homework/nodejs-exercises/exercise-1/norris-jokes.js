'use strict';

const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;
const apiUrl = 'http://api.icndb.com/jokes/random';

app.get('/', (req, res) => {
  fetch(apiUrl)
    .then(res => res.json())
    .then(repo => {
      const joke = repo.value.joke
      console.log(joke)
      res.end(`For new joke press f5 : ${joke}`);
    })
    .catch(err => {
      console.log(err);
    })
})
app.listen(port, () => { console.log(`Exercise 1  >> Connect OK ${port}`) }) 