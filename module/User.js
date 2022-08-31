const mongoose = require('mongoose');
const { Schema } = require( "mongoose" );

// NOTE: Ver si al momento de hacer un update el createDate y el uuid se cambian
const userSchema = new Schema({
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
  lastName: {
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
  username: {
    type: String,
    required: true,
    min: 5,
    max: 255
  },
  password: {
    type: String,
    required: true,
    min: 5,
    max: 255
  },
  country: {
    type: String,
    required: true,
    min: 2,
    max: 255
  },
  city: {
    type: String,
    required: true,
    min: 2,
    max: 255
  },
  language: {
    type: String,
    min: 2,
    max: 2,
    default: 'en'
  },
  companyId: {
    type: String,
    // required: true,
    min: 5,
    max: 255
  },
  isCompanyOwner: {
    type: Boolean,
    required: true,
  },
  twitter: {
    type: String,
    required: true,
    min: 2,
    max: 255
  },
  facebook: {
    email: {
      type: String,
      required: false,
      min: 2,
      max: 255
    }
  },
  google: {
    email: {
      type: String,
      required: false,
      min: 2,
      max: 255
    }
  },
  birthday: {
    type: Date,
    default: Date.now,
  },
  lastUpdate: {
    type: Date,
    default: Date.now,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('User', userSchema);
