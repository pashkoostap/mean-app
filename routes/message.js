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
      return res.json({
        title: 'An error ocured',
        error,
        status: 500
      });
    }

    res.json({
      message: 'Message saved',
      result,
      status: 200
    });
  });
});

module.exports = router;
