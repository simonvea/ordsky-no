
function errorHandler(err, req, res, next) {
  if(err === 'NO TEXT') {
    return res.status(400).send({err: 'missing text'});
  }

  if(err === 'NO WORDS' || err.message === 'NO WORDS') {
    return res.status(400).send({ err: 'missing words' });
  }

  if(err === 'NO TYPE') {
    return res.status(400).send({ err: 'missing type' });
  }

  if(err === 'NO URLS') {
    return res.status(400).send({ err: 'missing urls' });
  }

  if (err.message === 'NO TEXT') {
    return res.status(204).end();
  }

  return next(err);
}

module.exports = errorHandler