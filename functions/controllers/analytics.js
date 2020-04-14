const wordsCollection = require('../models/words');

module.exports = (req, res, next) => {
  const { data, type } = req.body.data;

  if (!data) return next('NO DATA');
  if (!type) return next('NO TYPE');

  const doc = {
    data,
    type,
    time: new Date(),
  };

  wordsCollection.add(doc);

  return res.json(doc);
};
