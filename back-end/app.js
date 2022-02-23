// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const sneakerController = require("./controllers/sneakerController.js");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

require("dotenv").config();

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the SWISHY SWOOSH APP");
});

/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////
// const db = require("./db/dbConfig.js");


app.use("/sneakers", sneakerController);

/////////////////////////////////////
// REMOVE AFTER SUCCESSFUL DEPLOYMENT
/////////////////////////////////////



app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
