const mongoose = require('mongoose')
const schema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [2, 'Name can\'t br smaller than 2 characters'],
    maxlength: [64, 'Name can\'t br greeter than 64 characters']
  },
  email: {
    type: 'String',
    required: true,
    maxlength: [128, 'Email can\'t br greeter than 128 characters'],
    index: true
  },
  password: {
    type: 'String',
    required: true
  },
  is_active: {
    type: Boolean,
    default: true
  },
  is_deleted: {
    type: Boolean,
    default: true
  }

})
const User = mongoose.model('user', schema)
module.exports = User
