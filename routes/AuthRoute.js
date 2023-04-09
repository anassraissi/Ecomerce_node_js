const express = require('express')
const router = express.Router()
const { addUser } = require('../modules/users/service/UserService')
const { joiErrorFormatter, MonggoseErrorFormatter } = require('../views/utils/ValidationFormatter')
const passport = require('passport')
const guestMiddleware = require('../Middelwares/guestMiddleware')
/**
 * RegisterSchema to check register valdation
 */
const { RegisterSchema } = require('../modules/users/Validation/AuthValidation')
/*
    show page for user registration
*/
router.get('/register', guestMiddleware, function (req, res) {
  return res.render('register.ejs', { message: '', errors: '', FormData: '' })
})
/**
    handle user registration
 */
router.post('/register', guestMiddleware, async (req, res) => {
  try {
    /**
       * check validation
       */
    const ValidationResult = RegisterSchema.validate(req.body, {
      abortEarly: false
    })
    if (ValidationResult.error) {
      return res.render('register.ejs', {
        message: {
          type: 'error',
          body: 'Validation errors'
        },
        errors: MonggoseErrorFormatter(ValidationResult.error),
        FormData: req.body
      })
    }
    // res.send(MonggoseErrorFormatter(ValidationResult.error))
    // res.send(joiErrorFormatter(ValidationResult.error))  mongoose
    const user = await addUser(req.body)
    return res.render('register.ejs', {
      message: {
        type: 'success',
        body: 'Registration done'
      },
      errors: '',
      FormData: ''
    })
  } catch (e) {
    return res.status(400).render('register.ejs',
      {
        message: {
          type: 'error',
          body: 'Validation errors'
        },
        errors: MonggoseErrorFormatter(e),
        FormData: req.body
      }

    )
  }
})
// routes for login

// exemple of middleware in login post

// const meddleware1 = (req, res, next) => {
//   req.user = 'Anass'
//   next()
// }
// const meddleware2 = (req, res, next) => {
//   console.log(req.url)
//   next()
// }
router.get('/login', guestMiddleware, function (req, res) {
  return res.render('login.ejs', { message: '', errors: '', FormData: '' })
})
router.post('/login', passport.authenticate('local', // Local meaning  get as HTML form
  {
    successRedirect: '/',
    failureRedirect: '/login'
  }
),
(req, res) => {
  console.log(req.user)

  return res.render('login.ejs',
    {
      message: { type: 'success', body: 'Login done' },
      errors: '',
      FormData: ''
    })
})
module.exports = router
