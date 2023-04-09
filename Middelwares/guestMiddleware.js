const guestMiddleware = (req, res, next) => {
  if (!req.isAuthenticated()) { return next() }
  // ila can  ma3andoch session bach ydkhal ykamal route ila kan l3aks dih home page
  res.redirect('/homepage')
}
module.exports = guestMiddleware
