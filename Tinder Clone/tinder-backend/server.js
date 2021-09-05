const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const Cards = require("./dbcards.js");
// App Config
const app = express();
const port = process.env.PORT || 5000;
const connection_url = process.env.DB_CONNECTION;
//Middleware
app.use(cors());
app.use(express.json());

// MongoDB Config

mongoose
  .connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

// API Endpoints

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.post("/tinder/card", (req, res) => {
  const dbCards = req.body;
  Cards.create(dbCards, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
app.get("/tinder/card", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
//Listener
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
