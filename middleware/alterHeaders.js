const alterHeaders = (req, res, next) => {
    // Removing specific headers
    res.removeHeader('X-Powered-By');
    res.removeHeader('Connection');
    res.removeHeader('Keep-Alive');
    
    //Setting specific headers
    res.set('Pragma', 'no-cache');
    res.set('X-Content-Type-Options', 'nosniff');
    res.set('Cache-Control', 'no-cache, no-store, must-revalidate;')

    next();
}

module.exports = alterHeaders;