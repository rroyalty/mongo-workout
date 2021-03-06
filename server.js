const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const routes = require('./routes')
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(routes)

mongoose.connect(process.env.MONGODB_URI, {   
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
