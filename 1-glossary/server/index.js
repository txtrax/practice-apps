require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require("./db.js");

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

//CRUD
app.post('/words', (req, res) => {
  console.log('made it in post', req.body)

  // this does not complete?
  db.create(req.body)
    .then(results => {
      console.log('success in server post')
      res.end();
    })
    .catch(err => {
      console.log('error in server post');
      res.end();
    })
})

app.get('/words', (req, res) => {
  //this works
  db.read()
    .then(results => {
      console.log('line 24', results);
      res.end();
    })
    .catch(err => {
      console.log('error retrieving from db')
      res.send(500);
    });
})

app.put('/words', (req, res) => {

  res.end();
})

app.delete('/words', (req, res) => {

  res.end();
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
