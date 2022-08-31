const router = require('express').Router();
const User = require('../module/User');
const authToken = require('../utils/authToken');
const jwt = require('jsonwebtoken');
const { UserUpdateSchema, UserGetByIdSchema, UserGetByTokenSchema,
        UserActivateSchema, UserDeactivateSchema, UserSoftDeleteSchema,
        UserDeleteSchema} = require( "../schemas/userSchema" );

// [GET] GET USER BY ID
router.get('/id/:id', authToken, async (req, res) => {

  const { error } = UserGetByIdSchema(req.body.data);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const user = await User.findOne({uuid: req.params.id});
    res.send({user: user.toJSON()});
  } catch ( err ) {
    res.send({error: err})
  }
});

// [GET] GET USER BY TOKEN
router.get('/token', authToken, async (req, res) => {

  const { error } = UserGetByTokenSchema(req.body.data);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const userId = jwt.decode(req.header('auth-token')).user;
    const user = await User.findOne({uuid: userId });
    res.send({user: user.toJSON()})
  } catch ( err ) {
    res.send({error: err})
  }
});

// [PATCH] UPDATE USER
router.patch('/update', authToken, async (req, res) => {


  const { error } = UserUpdateSchema(req.body.data);
  if (error) return res.status(400).send(error.details[0].message);
  req.body.data.lastUpdate = new Date();

  const filter = { uuid: req.body.id }
  const query = req.body.data
  await User.updateOne(filter, query);

  const returnUser = await User.findOne(filter)
  res.send({user: returnUser.toJSON()})
});
// [PATCH] ACTIVATE USER
router.patch('/activate/:id', authToken, async (req, res) => {

  const { error } = UserActivateSchema(req.body.data);
  if (error) return res.status(400).send(error.details[0].message);

  const filter = { uuid: req.params.id }
  const query = { state: 0 }  // ACTIVATE = 0
  await User.updateOne(filter, query);
  const user = await User.findOne(filter);
  res.send({user: user.toJSON()})
});
// [PATCH] DEACTIVATE USER
router.patch('/deactivate/:id', authToken, async (req, res) => {

  const { error } = UserDeactivateSchema(req.body.data);
  if (error) return res.status(400).send(error.details[0].message);

  const filter = { uuid: req.params.id }
  const query = { state: 1 }  // DEACTIVATE = 2
  await User.updateOne(filter, query);
  const user = await User.findOne(filter);
  res.send({user: user.toJSON()})
});
// [PATCH] SOFT DELETE USER
router.patch('/soft-delete/:id', authToken, async (req, res) => {

  const { error } = UserSoftDeleteSchema(req.body.data);
  if (error) return res.status(400).send(error.details[0].message);

  const filter = { uuid: req.params.id }
  const query = { state: 2 }  // SOFT-DELETE = 2
  await User.updateOne(filter, query);
  const user = await User.findOne(filter);
  res.send({user: user.toJSON()})
});

// [PATCH] DELETE USER
router.patch('/delete/:id', authToken, async (req, res) => {

  const { error } = UserDeleteSchema(req.body.data);
  if (error) return res.status(400).send(error.details[0].message);

  const filter = { uuid: req.params.id }
  const query = { state: 3 }  // DELETE = 2
  await User.updateOne(filter, query);
  const user = await User.findOne(filter);
  res.send({user: user.toJSON()})
});

module.exports = router;
