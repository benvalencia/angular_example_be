const router = require('express').Router();
const Worker = require('../../module/User');
const authToken = require('../../utils/authToken');
const { WorkerGetListSchema } = require( "../../schemas/workerSchema" );
const { v4: uuid } = require('uuid');

// [GET] GET LIST OF WORKERS
router.get('/list', authToken, async (req, res) => {

  const { error } = WorkerGetListSchema(req.user.user);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const contacts = await Worker.find();
    res.send({contacts: contacts})
  } catch ( e ) {
    res.send({error: 'not found'})
  }
});

module.exports = router;
