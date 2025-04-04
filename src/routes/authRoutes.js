const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');

const router = express.Router();

router.post('/signup', async (req, res) => {
  console.log('Signup request received:', req.body);
  const { username, email, password } = req.body;

  try {
    const user = new User({ username, email, password });
    console.log('Attempting to save user:', { username, email });
    await user.save();
    console.log('User saved successfully');

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.send({ token });
  } catch (err) {
    console.error('Signup error:', err);
    return res.status(422).send(err.message);
  }
});

router.post('/signin', async (req, res) => {
  const { usernameOrEmail, password } = req.body;

  if (!usernameOrEmail || !password) {
    return res.status(422).send({ error: 'Must provide username or email and password' });
  }

  const user = await User.findOne({ 
    $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }] 
  });
  
  if (!user) {
    return res.status(422).send({ error: 'Invalid username or email' });
  }

  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: 'Invalid password' });
  }
});

module.exports = router;