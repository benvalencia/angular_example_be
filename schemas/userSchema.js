const Joi = require('@hapi/joi');

// [GET] Get User By Id
const UserGetByIdSchema = (data) => {
  const schema = Joi.object({
    id: Joi.string().min(2).max(255),
  });
  return  schema.validate(data);
}
// [POST] Get User By Token
const UserGetByTokenSchema = (data) => {
  const schema = Joi.object({
    token: Joi.string().min(2).max(255),
  });
  return  schema.validate(data);
}
// [PATCH] Update User
const UserUpdateSchema = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(255),
    lastname: Joi.string().min(2).max(255),
    username: Joi.string().min(5).max(255),
    email: Joi.string().min(5).max(255).email(),
    language: Joi.string().min(2).max(2),
    address: Joi.object({
      country: Joi.string().min(2).max(255),
      city: Joi.string().min(2).max(255),
      direction: Joi.string().min(2).max(255),
      zipCode: Joi.string().min(2).max(255),
    }),

    twitter: Joi.string().min(2).max(255),
    facebook: Joi.object({
      email: Joi.string().min(2).max(255)
        }),
    google: Joi.object({
        email: Joi.string().min(2).max(255)
      }),
    telephone: Joi.object({
      extension: Joi.string().min(2).max(255),
      number: Joi.string().min(2).max(255),
    }),
    birthday: Joi.string().min(2).max(255),
  });
  return  schema.validate(data);
}
// [PATCH] Activate User
const UserActivateSchema = (data) => {
  const schema = Joi.object({
    state: Joi.number().min(1).max(1)
  });
  return  schema.validate(data);
}
// [PATCH] Deactivate User
const UserDeactivateSchema = (data) => {
  const schema = Joi.object({
    state: Joi.number().min(1).max(1)
  });
  return  schema.validate(data);
}
// [PATCH] Soft Delete User
const UserSoftDeleteSchema = (data) => {
  const schema = Joi.object({
    state: Joi.number().min(1).max(1)
  });
  return  schema.validate(data);
}
// [PATCH] Delete User
const UserDeleteSchema = (data) => {
  const schema = Joi.object({
    state: Joi.number().min(1).max(1)
  });
  return  schema.validate(data);
}

// User
module.exports.UserGetByIdSchema = UserGetByIdSchema;
module.exports.UserGetByTokenSchema = UserGetByTokenSchema;
module.exports.UserUpdateSchema = UserUpdateSchema;
module.exports.UserActivateSchema = UserActivateSchema;
module.exports.UserDeactivateSchema = UserDeactivateSchema;
module.exports.UserSoftDeleteSchema = UserSoftDeleteSchema;
module.exports.UserDeleteSchema = UserDeleteSchema;


