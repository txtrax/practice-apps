require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require("./db.js");

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.use(express.json()); //needs headers

//CRUD
app.post('/words', (req, res) => {
  // this does not complete? why...
  db.create(req.body)
    .then(() => {
      res.send(201).end()
    })
    .catch(err => {
      res.send(500).end()
    })

})

app.get('/words', (req, res) => {
  //this works
  console.log('made it to server get')
  db.read()
    .then(results => {
      console.log('line 24', results);
      res.status(200).send(results);
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
