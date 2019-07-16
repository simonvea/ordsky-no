const router = require('express').Router()

const clouds = []

const generateId = () => Math.round(Math.random()*1000)

router.post('/', (req, res, next) => {
  const words = req.body.words;
  const type = req.body.type;
  const id = generateId()
  const hey = {
    words,
    type,
    id
  }
  clouds.push(hey)

  res.send(hey)
})

router.get('/:id', (req, res, next) => {
  const id = Number(req.params.id)

  const cloud = clouds.find(cloud => cloud.id === id)
  const {words} = cloud
  console.log(cloud)
  res.render('hello', {words})
})

router.get('/', (req, res) => {
  res.render('hello', {words: "hei hei"})
})


module.exports = router
