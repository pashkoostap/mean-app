const express = require('express');
const bcrypt = require('bcryptjs');
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

module.exports = router;
