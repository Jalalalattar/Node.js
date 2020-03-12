'use strict';

const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;
const apiUrl = 'https://reservation100-sandbox.mxapps.io/api/reservations';

const newReservation = {
  "name": "John Doe",
  "numberOfPeople": 3
}

app.get('/', (req, res) => {
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newReservation),
  })
    .then(res => {
      res.text()
    })
    .then(text => {
      res.send(text)
    })
    .catch(err => {
      res.send(err);
    })
});
app.listen(port, () => { console.log(`Exercise 3  >> Connect OK ${port}`) });