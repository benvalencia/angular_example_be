const mongoose = require('mongoose');

// NOTE: Ver si al momento de hacer un update el createDate y el uuid se cambian
const contactSchema = new mongoose.Schema({
  uuid: {
    type: String,
    min: 2,
    max: 255,
    required: true,
  },
  name: {
    type: String,
    required: true,
    min: 2,
    max: 255
  },
  lastname: {
    type: String,
    required: true,
    min: 2,
    max: 255
  },
  email: {
    type: String,
    required: true,
    min: 5 ,
    max: 255
  },
  telefono: {
    type: String,
    required: true,
    min: 5 ,
    max: 255
  },
  movil: {
    type: String,
    required: true,
    min: 5 ,
    max: 255
  },
  type: {
    type: String,
    required: true,
    min: 5 ,
    max: 255
  },
  createdBy: {
    type: String,
    min: 2,
    max: 255,
    required: true,
  },
  createdDate: {
    type: String,
    min: 2,
    max: 255,
    required: true,
  },
})

module.exports = mongoose.model('Contact', contactSchema);
