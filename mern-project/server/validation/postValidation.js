const Joi = require('joi');

exports.validatePost = (data) => {
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    content: Joi.string().required(),
    category: Joi.string().required(),
    author: Joi.string().required()
  });

  return schema.validate(data);
};
