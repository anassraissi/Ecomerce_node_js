const config = require('./config')
const mongoose = require('mongoose')
// config.mongoUrl= mongodb://localhost:27017 li jaya mn config
mongoose.connect(config.mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
mongoose.connection.once('open', () => {
  console.log('Connected to mongodb')
})
module.exports = mongoose.connection
