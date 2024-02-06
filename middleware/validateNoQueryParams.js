const validateNoQueryParams = (req, res, next) => {
    // console.log("3. validateNoQueryParams");
    if(Object.keys(req.query).length > 0 || req.url.includes('?')){
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

module.exports = validateNoQueryParams;