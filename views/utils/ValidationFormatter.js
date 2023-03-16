const joiErrorFormatter = (rawError) => {
  const err = {}
  const details = rawError.details
  details.map(d => {
    err[d.path] = [d.message]
  })
  return err
}
// jbad ghi les object li fihom error btari9a joi
const MonggoseErrorFormatter = (rawError) => {
  const MongoErr = {}
  const details = rawError.details
  for (const key in details) {
    MongoErr[details[key].context.key] = [details[key].message]
  }

  return MongoErr
}
// jbad ghi les object li fihom error btari9a mongoose
module.exports = { joiErrorFormatter, MonggoseErrorFormatter }
