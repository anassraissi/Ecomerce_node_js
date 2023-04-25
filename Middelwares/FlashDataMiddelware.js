const flashDataMiddel = (req, res, next) => {
  if (req.session.flashData) {
    for (const key in req.session.flashData) {
      res.locals[key] = req.session.flashData[key]
    }
    req.session.flashData = null // khwiha mnin matpostach lform register
  }
  next()
}
module.exports = flashDataMiddel
