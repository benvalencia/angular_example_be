const Joi = require('@hapi/joi');

// [POST] Creat Company
const CompanyCreateSchema = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(255),
    company_owner: Joi.string().min(2).max(255),
    company_creator: Joi.string().min(2).max(255),
  });
  return  schema.validate(data);
}
// Company
module.exports.CompanyCreateSchema = CompanyCreateSchema;
