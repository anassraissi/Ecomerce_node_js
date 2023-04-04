const express = require('express')
const session = require('express-session')
require('./views/utils/db.config.js')
const bodyParser = require('body-parser')

const authRoute = require('./routes/AuthRoute')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engin', 'ejs')
app.use(session({
  secret: '3bed90ba1cbbb66edc1e4528b681e7fa20fab4be',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use('/', authRoute)

app.get('/', function (req, res) {
  console.log(req.session)
  // n3arfo user mnin ydkhal server

  // !req.session.name ? req.session.name = 'Anass Raissi' : console.log(req.session.name)

  // n3arfo chhal mn mra tvisita site dyalna

  req.session.views = (req.session.views || 0) + 1

  // mra lawla khayakhad req.session.views ghaykon indefinded wbitali ghayakhed 1

  console.log(` you have visited ${req.session.views}`)

  return res.render('index.ejs')
})

app.listen(3000, function () {
  console.log('Server running at port 3000')
})
module.exports = app
