const User = require('../models/User')
// const userIn = { name: '12', email: 'anass.raissi.ar@gmail.com', password: '111', repeat_password: '111' }
const addUser = async (userInput) => {
  const user = new User(userInput)
  await user.save()
  return user
}
module.exports = { addUser }
