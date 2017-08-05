const express = require('express');
const router = express.Router();

const Message = require('../assets/models/message');

router.get('/', (req, res) => {
  Message.find().exec((err, messages) => {
    if (err) {
      return res.json({
        status: 500,
        error,
        title: 'An error occured'
      });
    }

    res.json({
      message: 'Messages found',
      status: 200,
      messages
    });
  });
});

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

router.patch('/:id', (req, res, next) => {
  const { id } = req.params;
  const { content } = req.body;

  Message.findById(id, (error, message) => {
    if (error) {
      return res.json({
        title: 'An error ocured',
        error,
        status: 500
      });
    }

    if (!message) {
      return res.json({
        title: 'No messages found',
        status: 500
      });
    }

    message.content = content;
    message.save((error, result) => {
      if (error) {
        return res.json({
          title: 'An error ocured',
          error,
          status: 500
        });
      }

      res.json({
        title: 'Message updated',
        result,
        status: 200
      });
    });
  });
});

module.exports = router;
