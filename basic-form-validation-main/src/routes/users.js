const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.get('/', async (req, res) => {
    const users = await User.find({});
    console.log(users)
    res.json(users);
    
});

router.post('/', async (req, res) => {
  // //new user()
  // console.log(req.body);
  // res.json()

  const user = new User(req.body);
  await user.save();
  res.json({
    status: 'User saved'
  });
});

module.exports = router;