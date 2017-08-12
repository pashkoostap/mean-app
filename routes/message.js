const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const Message = require('../assets/models/message');
const User = require('../assets/models/user');

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

router.use('/', (req, res, next) => {
  const { token } = req.query;

  jwt.verify(token, 'secret', (error, decoded) => {
    if (error) {
      return res.json({
        title: 'Token is not valid',
        status: 401,
        error,
        result: ''
      });
    }

    next();
  });
});

router.post('/', (req, res, next) => {
  const { body: { content }, query: { token } } = req;
  const decoded = jwt.decode(token);

  User.findById(decoded.user._id, (error, user) => {
    if (error) {
      return res.json({
        title: 'An error ocured',
        error,
        status: 500
      });
    }

    const message = new Message({
      content,
      user
    });

    message.save((error, result) => {
      if (error) {
        return res.json({
          title: 'An error ocured',
          error,
          status: 500
        });
      }

      user.messages.push(result);
      user.save();

      res.json({
        message: 'Message saved',
        result,
        status: 200
      });
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

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;

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

    message.remove((error, result) => {
      if (error) {
        return res.json({
          title: 'An error ocured',
          error,
          status: 500
        });
      }

      res.json({
        title: 'Message deleted',
        result,
        status: 200
      });
    });
  });
});

module.exports = router;
