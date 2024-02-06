const handleMethodNotAllowed = (req, res) => {
    // Removing specific headers
    res.removeHeader('X-Powered-By');
    res.removeHeader('Connection');
    res.removeHeader('Keep-Alive');
    
    //Setting specific headers
    res.set('Pragma', 'no-cache');
    res.set('X-Content-Type-Options', 'nosniff');
    return res.status(405).set('Cache-Control', 'no-cache, no-store, must-revalidate;').send();
}

module.exports = handleMethodNotAllowed;