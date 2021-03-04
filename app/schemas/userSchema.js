const Joi = require('joi');

const userSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
    passwordConfirm: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    pseudo: Joi.string().required(), 
    img: Joi.string(),
    date: Joi.date()
  
});

module.exports = userSchema;