const express = require('express')
const router = express.Router()
const { addUser } = require('../modules/users/service/UserService')
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
    const user = await addUser(req.body)
    res.render('register.ejs', { message: 'Registration successful' })
  } catch (e) {
    return res.status(400).render('register.ejs', { message: 'something went wrong' })
  }
})
module.exports = router
