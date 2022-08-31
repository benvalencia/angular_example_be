const Joi = require('@hapi/joi');

// [GET] Get Worker
const WorkerGetListSchema = (data) => {
  const schema = Joi.object({
    id: Joi.string().min(2).max(255),
  });
  return  schema.validate(data);
}

// WORKER
module.exports.WorkerGetListSchema = WorkerGetListSchema;


