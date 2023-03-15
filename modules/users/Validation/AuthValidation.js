const Joi = require('joi')

const RegisterSchema = Joi.object({
  name: Joi.string()
    .alphanum()
    .trim()
    .min(2)
    .max(64)
    .required(),
  email: Joi.string()
    .trim()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .lowercase(),

  password: Joi.string()
    .required()

})
module.exports = { RegisterSchema }
