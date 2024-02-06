const validateNoQueryParams = (req, res, next) => {
    if(Object.keys(req.query).length > 0 || req.url.includes('?')){
        return res.status(400).send()
    }
    next();
}

module.exports = validateNoQueryParams;