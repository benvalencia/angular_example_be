const Joi = require('@hapi/joi');

// Authentication
const SignUpSchema = (data) => {
  const schema = Joi.object({
    uuid: Joi.string().min(2).max(255),
    name: Joi.string().required().min(2).max(255),
    lastName: Joi.string().required().min(2).max(255),
    email: Joi.string().required().min(5).max(255).email(),
    username: Joi.string().required().min(5).max(255),
    password: Joi.string().required().min(5).max(255),
    language: Joi.string().min(2).max(2),
    companyId: Joi.string().min(5).max(255),
  });
  return  schema.validate(data);
}
const SignInSchema = (data) => {
  const schema = Joi.object({
    // email: Joi.string().required().min(5).max(255).email(),
    username: Joi.string().required().min(5).max(255),
    password: Joi.string().required().min(5).max(255)
  });
  return  schema.validate(data);
}

// Authentication
module.exports.SignUpSchema = SignUpSchema;
module.exports.SignInSchema = SignInSchema;
