const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../../../modules/users/models/User')

passport.use(new LocalStrategy({
  usernameField: 'email'
},

async (email, password, done) => {
  try {
    const user = await User.findOne({ email })
    if (!user) return done(null, false, { error: 'user not found' }, '')
    if (user) return done(null, user)
    const pass = await user.checkpassword(password)
    if (pass) return done(null, pass)
    // await katsana tatjib resultat 3ad takamal
    if (!pass) return done(null, false, { error: 'password incorrect' }, false) // null for error and false -> za3ma not defiend
  } catch (e) {
    done(e)
  }
}
))
// passport.serializeUser(function (user, done) {
//   done(null, user._id)
// })

// passport.deserializeUser(async (_id, done) => {
//   try {
//     const user = await User.findOne({ _id })
//   } catch (e) {
//     done(e)
//   }
// })

/**
 *
 *  Passport will maintain persistent login sessions.
 * In order for persistent sessions to work, the authenticated user must be serialized to the session,
 * and deserialized when subsequent requests are made.
 *  */

passport.serializeUser(function (user, done) {
  done(null, user) //
})

passport.deserializeUser(function (user, done) {
  done(null, user)
})
