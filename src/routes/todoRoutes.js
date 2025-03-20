const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const ToDo = mongoose.model('ToDo');

const router = express.Router();

router.use(requireAuth);

router.get('/todos', async (req, res) => {
  const todos = await ToDo.find({ userId: req.user._id });

  res.send(todos);
});

router.post('/todos', async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res
      .status(422)
      .send({ error: 'You must provide a title and description' });
  }

  try {
    const todo = new ToDo({ title, description, userId: req.user._id });
    await todo.save();
    res.send(todo);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

module.exports = router;