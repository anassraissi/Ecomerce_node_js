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
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'fr'] } })
    .lowercase(),

  password: Joi.string()
    .required(),
  repeat_password: Joi.ref('password')

})
  .with('password', 'repeat_password')
module.exports = { RegisterSchema }
