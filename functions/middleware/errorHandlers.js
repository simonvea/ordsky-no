
function errorHandler(err, req, res, next) {
  if(err === 'NO TEXT') {
    return res.status(400).send({err: 'missing text'})
  }

  return next(err)
}

module.exports = errorHandler