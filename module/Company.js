const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  uuid: {
       type: String,
       required: true,
       min: 2,
       max: 255
  },
  name: {
    type: String,
    required: true,
    min: 2,
    max: 255
  },
  owner: {
      type: String,
      min: 2,
      max: 255
  },
  createdBy: {
      type: String,
      required: true,
      min: 2,
      max: 255
  },
 createdDate: {
     type: String,
     required: true,
     min: 2,
     max: 255
   },
})

module.exports = mongoose.model('Company', companySchema);
