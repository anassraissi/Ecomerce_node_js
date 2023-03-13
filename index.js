const express = require('express')
require('./views/utils/db.config.js')
const User = require('./models/User')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engin', 'ejs')
app.get('/', function (req, res) {
  return res.render('index.ejs')
})
app.get('/register', function (req, res) {
  return res.render('register.ejs', { message: '' })
})
app.post('/register', async (req, res) => {
  const user = new User(req.body)
  await user.save()
  res.render('register.ejs', { message: 'Registration successful' })
})

app.listen(3000, function () {
  console.log('Server running at port 3000')
})
module.exports = app
