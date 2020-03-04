'use strict';

const express = require('express')
const app = express()
const fs = require("fs");
const port = 3000;

app.use(express.json());

// CREATE
app.post('/blogs', (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  fs.writeFileSync(title, content);
  res.end('OK')
})

// UPDATE
app.put('/blogs', (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  if (fs.existsSync(title)) {
    fs.writeFileSync(title, content);
    res.end('it is updated')
  }
  else {
    res.end('post does not exist');
  }
})

// DELETE
app.delete('/blogs/:title', (req, res) => {
  const title = req.params.title;
  fs.unlinkSync(title);
  res.end('it is deleted');
})

// READ
app.get('/blogs/:title', (req, res) => {
  const title = req.params.title;
  res.sendFile(title, {
    root: __dirname,
    headers: {
      'Content-Type': 'text/plain'
    }
  });
})

app.listen(port, () => console.log(`Connect OK ${port}`));