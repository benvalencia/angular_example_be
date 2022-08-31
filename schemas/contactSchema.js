const Joi = require('@hapi/joi');

// [GET] Get List of Contacts
const ContactGetListSchema = (data) => {
  const schema = Joi.object({
    id: Joi.string().min(2).max(255),
  });
  return  schema.validate(data);
}
// [POST] Insert Client
const ContactInsertSchema = (data) => {
  const schema = Joi.object({
    uuid: Joi.string().min(2).max(255),
    name: Joi.string().min(2).max(255),
    lastname: Joi.string().min(2).max(255),
    email: Joi.string().min(2).max(255),
    telefono: Joi.string().min(2).max(255),
    movil: Joi.string().min(2).max(255),
    type: Joi.string().min(2).max(255),
    createdBy: Joi.string().min(2).max(255),

  });
  return  schema.validate(data);
}
// [PATCH] Update User
const ContactUpdateSchema = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(255),
    lastname: Joi.string().min(2).max(255),
    country: Joi.string().min(2).max(255),
    city: Joi.string().min(2).max(255),
    email: Joi.string().min(5).max(255).email(),
    username: Joi.string().min(5).max(255),
    password: Joi.string().min(5).max(255),
    language: Joi.string().min(2).max(2),
    twitter: Joi.string().min(2).max(255),
    facebook: Joi.string().min(2).max(255),
    googlePlus: Joi.string().min(2).max(255),
    linkedIn: Joi.string().min(2).max(255),
  });
  return  schema.validate(data);
}
// [PATCH] Soft Delete User
const ContactSoftDeleteSchema = (data) => {
  const schema = Joi.object({
    state: Joi.number().min(1).max(1)
  });
  return  schema.validate(data);
}
// [PATCH] Delete User
const ContactDeleteSchema = (data) => {
  const schema = Joi.object({
    state: Joi.number().min(1).max(1)
  });
  return  schema.validate(data);
}

// contact
module.exports.ContactGetListSchema = ContactGetListSchema;
module.exports.ContactInsertSchema = ContactInsertSchema;
module.exports.ContactUpdateSchema = ContactUpdateSchema;
module.exports.ContactSoftDeleteSchema = ContactSoftDeleteSchema;
module.exports.ContactDeleteSchema = ContactDeleteSchema;



