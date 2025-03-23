require("./models/User");
require("./models/ToDo");
require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const todoRoutes = require("./routes/todoRoutes");
const requireAuth = require("./middlewares/requireAuth");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(authRoutes);
app.use(todoRoutes);

const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  throw new Error(
    `MongoURI was not supplied. Make sure you have set up the MONGODB_URI environment variable!`
  );
}

// Set strictQuery to false to prepare for Mongoose 7
mongoose.set('strictQuery', false);

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});
mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mongo", err);
});

app.get("/", requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});