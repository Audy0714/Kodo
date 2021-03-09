const Joi = require('joi');

const userSchema = Joi.object({
    email: Joi.string().regex(/^[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-][a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)$/).required(),
    password: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    pseudo: Joi.string().required(), 
    img: Joi.string(),
    date: Joi.date()
  
});

module.exports = userSchema;