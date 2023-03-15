const User = require('../models/User')

const addUser = async (userInput) => {
  const user = new User(userInput)
  await user.save()
  return user
}
module.exports = { addUser }
