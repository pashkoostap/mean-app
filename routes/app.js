const express = require('express');
const User = require('../assets/models/user');
const router = express.Router();

router.get('/', function(req, res, next) {
  User.find({}, (err, doc) => {
    if (err) {
      return res.send(err);
    }
    res.render('node', { email: doc });
  });
});

router.post('/', function(req, res, next) {
  const { email } = req.body;
  const user = new User({
    firstName: 'firstName',
    lastName: 'lastName',
    password: 'password',
    email
  });

  user.save();

  res.redirect('/');
});

module.exports = router;
