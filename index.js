const express = require('express')
require('./views/utils/db.config.js')
const app = express()
app.set('view engin', 'ejs')
app.get('/', function (req, res) {
  return res.render('index.ejs')
})

app.listen(3000, function () {
  console.log('Server running at port 3000')
})

module.exports = app
