require('dotenv').config()
const express = require('express')
const session = require('express-session')
require('./views/utils/db.config.js')
const bodyParser = require('body-parser')
const MongoStore = require('connect-mongo')(session)
const mongoDbConnection = require('./views/utils/db.config.js')
const passport = require('passport')
require('./views/utils/AuthStrategy/LocalStrategy')
const authMiddleware = require('./Middelwares/authMiddleware.js')
const logger = require('morgan')
const config = require('./views/utils/config.js')

const authRoute = require('./routes/AuthRoute')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs')

// bach y339al serveur 3la session ghandakhloha flabse de donnee.

app.use(session({
  secret: '3bed90ba1cbbb66edc1e4528b681e7fa20fab4be',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
  store: new MongoStore({ mongooseConnection: mongoDbConnection })
}))
app.use(express.static('public'))

app.use(logger('dev'))
app.use(passport.initialize())
app.use(passport.session())

app.locals.message = {}
app.locals.errors = {}
app.locals.FormData = {}

app.use('/', authRoute)

app.get('/', authMiddleware, function (req, res) {
  // ytisti ila kan 3ando session ydkhal nichan home page li hia index.ejs ila makan ydoz bhad route l login
  console.log(req.session)

  // n3arfo user mnin ydkhal server

  // !req.session.name ? req.session.name = 'Anass Raissi' : console.log(req.session.name)

  // n3arfo chhal mn mra tvisita site dyalna

  // req.session.views = (req.session.views || 0) + 1

  // mra lawla khayakhad req.session.views ghaykon indefinded wbitali ghayakhed 1

  // console.log(` you have visited ${req.session.views}`)

  console.log('user :', req.user)

  return res.render('index.ejs')
})
app.get('/homepage', authMiddleware, (req, res) => {
  res.send(`wellcome ${req.user.name}`)
})
app.use((req, res, next) => {
  res.status(404).render('404')
  // for show this file must be in the view folder not in a folder inside view
})
// config.port =3000 li jaya mn config
app.listen(config.port, function () {
  console.log(`Server running at port ${config.port}`)
})
module.exports = app
