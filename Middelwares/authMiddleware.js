const authMiddleware = (req, res, next) => {
  // console.log('login status : ', req.isAuthenticated())
  if (req.isAuthenticated()) { return next() }
  res.redirect('/login')

  // ila kan 3ando session bach ydkhal ykamal route il kan 3aks ydih login

  /**   else another write
   *
   *
   *  if (req.isAuthenticated()) {
    // req.isAuthenticated() will return true if user is logged in
    next()
  } else {
    res.redirect('/login')
  }
   *
   *
   */
}
module.exports = authMiddleware
