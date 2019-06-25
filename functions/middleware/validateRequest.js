
module.exports = (req, res, next) => {
    if(!req.body.words) {
        throw new Error('Bad Request')
    } 
    next()
}
