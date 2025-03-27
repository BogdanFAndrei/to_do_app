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

// Configure CORS to accept requests from your mobile app
app.use(cors({
  origin: '*', // In production, replace with your app's domain
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

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

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0'; // Listen on all interfaces

app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
  console.log('Make sure your mobile device is on the same network and using the correct IP address');
});