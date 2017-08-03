const express = require('express');
const router = express.Router();

const Message = require('../assets/models/message');

router.post('/', (req, res, next) => {
  const { body: { content } } = req;
  const message = new Message({
    content
  });

  message.save((error, result) => {
    if (error) {
      return res.status(500).json({
        title: 'An error ocured',
        error
      });
    }

    res.send(201).json({ message: 'Message saved', result });
  });
});

module.exports = router;
