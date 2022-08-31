const router = require('express').Router();
const Contact = require('../../module/Contact');
const authToken = require('../../utils/authToken');

// [GET] GET LIST OF CONTACTS
router.get('/counter', authToken, async (req, res) => {
  try {
    const contacts = await Contact.countDocuments({createdBy: req.user.user});
    res.send({contacts: contacts})
  } catch ( err ) {
    res.send({error: err})
  }
});

module.exports = router;
