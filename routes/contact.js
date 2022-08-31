const router = require('express').Router();
const Contact = require('../module/Contact');
const authToken = require('../utils/authToken');
const { ContactGetListSchema, ContactInsertSchema } = require( "../schemas/contactSchema" );
const { v4: uuid } = require('uuid');

// [GET] GET LIST OF CONTACTS
router.get('/list', authToken, async (req, res) => {

  const { error } = ContactGetListSchema(req.body.data);
  if (error) return res.status(400).send(error.details[0].message);

  const contacts = await Contact.find({createdBy: req.user.user});
  contacts
      ? res.send({contacts: contacts})
      : res.send({error: 'not found'})
});

// [POST] INSERT CONTACT
router.post('/create', authToken, async (req, res) => {

  const { error } = ContactInsertSchema(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const newContact = new Contact({
      uuid: uuid(),
      name: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email,
      telefono: req.body.telefono,
      movil: req.body.movil,
      type: req.body.type,
      createdBy: req.user.user,
      createdDate: new Date(),
  })

    try {
      const saveNewContact = await newContact.save();
      console.log(saveNewContact);
      res.send({contact: newContact});
    } catch (error) {
      res.status(400).send(error)
    }
});

module.exports = router;
