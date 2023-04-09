const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
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
schema.pre('save', async function (next) {
  if (!this.isModified('password')) next()
  this.password = await bcrypt.hash(this.password, 10)
  next()
})
schema.methods.checkpassword = async function (password) {
  const result = await bcrypt.compare(password, this.password)
  return result
}
const User = mongoose.model('user', schema)
module.exports = User
