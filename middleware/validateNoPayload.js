const validateNoPayload = (req, res, next) => {
    // console.log("2. validateNoPayload", req.body)
    if(req.headers['content-type'] || Object.keys(req.body).length > 0) {

        // Removing specific headers
        res.removeHeader('X-Powered-By');
        res.removeHeader('Connection');
        res.removeHeader('Keep-Alive');
        
        //Setting specific headers
        res.set('Pragma', 'no-cache');
        res.set('X-Content-Type-Options', 'nosniff');
        return res.status(400).set('Cache-Control', 'no-cache, no-store, must-revalidate;').send()
    }
    next();
}

module.exports = validateNoPayload;