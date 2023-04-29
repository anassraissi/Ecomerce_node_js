const express = require('express')
const router = express.Router()
const { addUser } = require('../modules/users/service/UserService')
const { joiErrorFormatter, MonggoseErrorFormatter } = require('../views/utils/ValidationFormatter')
const passport = require('passport')
const guestMiddleware = require('../Middelwares/guestMiddleware')
const authMiddleware = require('../Middelwares/authMiddleware')
const flashDataMiddel = require('../Middelwares/FlashDataMiddelware')
/**
 * RegisterSchema to check register valdation
 */
const { RegisterSchema } = require('../modules/users/Validation/AuthValidation')
/*
    show page for user registration
*/
router.get('/register', guestMiddleware, flashDataMiddel, function (req, res) {
  return res.render('register.ejs')
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
      req.session.flashData = {
        message: {
          type: 'error',
          body: 'Validation errors'
        },
        errors: MonggoseErrorFormatter(ValidationResult.error),
        FormData: req.body
      }
      console.log(req.session.flashData[0])
      return res.redirect('/register')
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
router.get('/login', guestMiddleware, flashDataMiddel, function (req, res) {
  return res.render('login.ejs')
})

router.post('/login', guestMiddleware, (req, res, next) => {
  passport.authenticate('local', (err, user, info, pass) => { // err => null ,user =>
    console.log('err', err)
    console.log('user', user)
    console.log('err', info)
    // return res.redirect('/login')
    // if (err === 'undefined') {
    //   req.session.flashData = {
    //     message: {
    //       type: 'error',
    //       body: 'Login Faileddd'
    //     }
    //   }
    //   return res.redirect('/login')
    // }
    if (!user) {
      req.session.flashData = {
        message: {
          type: 'error',
          body: 'user incorrect'
        }
      }
      return res.redirect('/login')
    } if (pass === 'false') {
      req.session.flashData = {
        message: {
          type: 'error',
          body: 'password incorrect'
        }
      }
      return res.redirect('/login')
    }
    req.logIn(user, (err) => {
      if (err) {
        req.session.flashData = {
          message: {
            type: 'error',
            body: 'Login failed'
          }
        }
      }
      return res.redirect('/homepage')
    })
  })(req, res, next)
})

router.get('/logout', authMiddleware, function (req, res, next) {
  req.logout(function (err) {
    if (err) { return next(err) }
    res.redirect('/')
  })
})
module.exports = router
