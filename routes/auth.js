const router = require('express').Router();
const User = require('../module/User');
const { SignUpSchema, SignInSchema } = require('../schemas/authSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { v4: uuid } = require('uuid');
const passport = require('passport');

router.post('/signup', async (req, res) => {
  //Validate Schema
  const { error } = SignUpSchema(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  //Check User is not taken
  const userExists = await User.findOne({username: req.body.username});
  if (userExists) return res.status(400).send('Username is taken');
  //Check Email is not taken
  const emailExists = await User.findOne({email: req.body.email});
  if (emailExists) return res.status(400).send('Email is taken');
  //Hash Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    uuid: uuid(),
    name: req.body.name,
    lastName: req.body.lastName,
    email: req.body.email,
    username: req.body.username,
    password: hashedPassword
  });
  try {
    const saveUser = await user.save();
    res.send({username: user.uuid});
  } catch (error) {
    res.status(400).send(error)
  }
});

router.post('/signin', async (req, res) => {
  //Validate Schema
  const { error } = SignInSchema(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  //Check User is valid
  const user = await User.findOne({username: req.body.username});
  console.log(user);
  if (!user) return res.status(400).send('User is invalid');
  //Check Password is valid
  const validPassword = await bcrypt.compare(req.body.password, user.password )
  if (!validPassword) return res.status(400).send('Password is invalid');

  const token = jwt.sign({user: user.uuid}, process.env.TOKEN_SECRET)
  res.header('auth-token', token).send({token: token})
});

router.post('/google', async (req, res) => {
  const user = await User.findOne({'google.email': req.body.google});
  if (!user) return res.status(400).send('There is not any user linked with this google account');

  const token = jwt.sign({user: user.uuid}, process.env.TOKEN_SECRET)
  res.header('auth-token', token).send({token: token})
});

router.post('/facebook', async (req, res) => {
  const user = await User.findOne({'facebook.email': req.body.facebook});
  if (!user) return res.status(400).send('There is not any user linked with this facebook account');

  const token = jwt.sign({user: user.uuid}, process.env.TOKEN_SECRET)
  res.header('auth-token', token).send({token: token})
});


module.exports = router;
