const express = require('express')
const router = express.Router()
const { addUser } = require('../modules/users/service/UserService')
const { joiErrorFormatter, MonggoseErrorFormatter } = require('../views/utils/ValidationFormatter')
/**
 * RegisterSchema to check register valdation
 */
const { RegisterSchema } = require('../modules/users/Validation/AuthValidation')
/*
    show page for user registration
*/
router.get('/register', function (req, res) {
  return res.render('register.ejs', { message: '' })
})

/**
    handle user registration
 */
router.post('/register', async (req, res) => {
  try {
    /**
       * check validation
       */
    const ValidationResult = RegisterSchema.validate(req.body, {
      abortEarly: false
    })
    if (ValidationResult.error) {
      return res.render(ValidationResult.error)
    }
    // res.send(MonggoseErrorFormatter(ValidationResult.error)) joi
    // res.send(joiErrorFormatter(ValidationResult.error))  mongoose

    const user = await addUser(req.body)
    res.render('register.ejs', { message: 'Registration successful' })
  } catch (e) {
    return res.status(400).render('register.ejs', { message: 'something went wrong' })
  }
})
module.exports = router
