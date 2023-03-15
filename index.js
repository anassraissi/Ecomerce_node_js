const express = require('express')
require('./views/utils/db.config.js')
const bodyParser = require('body-parser')

const authRoute = require('./routes/AuthRoute')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engin', 'ejs')

app.use('/', authRoute)

app.get('/', function (req, res) {
  return res.render('index.ejs')
})

app.listen(3000, function () {
  console.log('Server running at port 3000')
})
module.exports = app
