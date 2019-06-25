
module.exports = (req, res, next) => {
    if(req.body.words) {
        next()
    } else {
        res.status(400).send('Bad Request.')
    }
}
