const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

const User = require('../assets/models/user');

router.post('/', (req, res, next) => {
  const { firstName, lastName, password, email } = req.body;

  const user = new User({
    firstName,
    lastName,
    password: bcrypt.hashSync(password, 10),
    email
  });

  user.save((error, result) => {
    if (error) {
      return res.json({
        title: 'An error occurred',
        error
      });
    }

    res.json({
      message: 'User created',
      result,
      status: 200
    });
  });
});

router.post('/signin', (err, res, next) => {
  const { email, password } = req.body;
  const arePassEqual = bcrypt.compareSync(password, user.password);

  User.findOne({ email }, (error, user) => {
    if (error) {
      return res.json({
        title: 'An error occurred',
        error,
        status: 500
      });
    }

    if (!user || !arePassEqual) {
      return res.json({
        title: 'User not found',
        status: 501
      });
    }

    const token = jwt.sign({ user }, 'secret', { expiresIn: 7200 });

    res.json({
      status: 200,
      message: 'User logged in',
      userId: user._id,
      token
    });
  });
});

module.exports = router;
